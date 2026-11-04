"use client";
// Scene code for the hero globe (three + three-globe + react-three-fiber + drei + country GeoJSON).
// Only HeroGlobe loads this module, through next/dynamic, so none of it is in the initial bundle.
import { useEffect, useMemo, useRef } from "react";
import { Color, Vector3 } from "three";
import ThreeGlobe from "three-globe";
import { Canvas, extend, useThree, type Object3DNode } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import countries from "@/data/globe.json";

declare module "@react-three/fiber" {
  interface ThreeElements {
    threeGlobe: Object3DNode<ThreeGlobe, typeof ThreeGlobe>;
  }
}

extend({ ThreeGlobe });

const RING_PROPAGATION_SPEED = 3;
const CAMERA_Z = 300;

type Position = {
  order: number;
  startLat: number;
  startLng: number;
  endLat: number;
  endLng: number;
  arcAlt: number;
  color: string;
};

type GlobePoint = {
  size: number;
  order: number;
  color: (t: number) => string;
  lat: number;
  lng: number;
};

export type GlobeConfig = {
  pointSize: number;
  globeColor: string;
  showAtmosphere: boolean;
  atmosphereColor: string;
  atmosphereAltitude: number;
  emissive: string;
  emissiveIntensity: number;
  shininess: number;
  polygonColor: string;
  ambientLight: string;
  directionalLeftLight: string;
  directionalTopLight: string;
  pointLight: string;
  arcTime: number;
  arcLength: number;
  rings: number;
  maxRings: number;
  initialPosition: { lat: number; lng: number };
  autoRotate: boolean;
  autoRotateSpeed: number;
};

// Sober palette: dark surface, white countries, blue arcs and rings.
export const globeConfig: GlobeConfig = {
  pointSize: 4,
  globeColor: "#18181B",
  showAtmosphere: true,
  atmosphereColor: "#FFFFFF",
  atmosphereAltitude: 0.08,
  emissive: "#09090B",
  emissiveIntensity: 0.1,
  shininess: 0.9,
  polygonColor: "rgba(255,255,255,0.55)",
  ambientLight: "#FFFFFF",
  directionalLeftLight: "#FFFFFF",
  directionalTopLight: "#FFFFFF",
  pointLight: "#FFFFFF",
  arcTime: 1000,
  arcLength: 0.9,
  rings: 1,
  maxRings: 3,
  initialPosition: { lat: 6.2442, lng: -75.5812 }, // Medellin
  autoRotate: true,
  autoRotateSpeed: 0.5,
};

const ARC_COLORS = ["#60A5FA", "#93C5FD"];

// [order, startLat, startLng, endLat, endLng, arcAlt]
const ARC_ROWS: [number, number, number, number, number, number][] = [
  [1, -19.885592, -43.951191, -22.9068, -43.1729, 0.1],
  [1, 28.6139, 77.209, 3.139, 101.6869, 0.2],
  [1, -19.885592, -43.951191, -1.303396, 36.852443, 0.5],
  [2, 1.3521, 103.8198, 35.6762, 139.6503, 0.2],
  [2, 51.5072, -0.1276, 3.139, 101.6869, 0.3],
  [2, -15.785493, -47.909029, 36.162809, -115.119411, 0.3],
  [3, -33.8688, 151.2093, 22.3193, 114.1694, 0.3],
  [3, 21.3099, -157.8581, 40.7128, -74.006, 0.3],
  [3, -6.2088, 106.8456, 51.5072, -0.1276, 0.3],
  [4, 11.986597, 8.571831, -15.595412, -56.05918, 0.5],
  [4, -34.6037, -58.3816, 22.3193, 114.1694, 0.7],
  [4, 51.5072, -0.1276, 48.8566, -2.3522, 0.1],
  [5, 14.5995, 120.9842, 51.5072, -0.1276, 0.3],
  [5, 1.3521, 103.8198, -33.8688, 151.2093, 0.2],
  [5, 34.0522, -118.2437, 48.8566, -2.3522, 0.2],
  [6, -15.432563, 28.315853, 1.094136, -63.34546, 0.7],
  [6, 37.5665, 126.978, 35.6762, 139.6503, 0.1],
  [6, 22.3193, 114.1694, 51.5072, -0.1276, 0.3],
  [7, -19.885592, -43.951191, -15.595412, -56.05918, 0.1],
  [7, 48.8566, -2.3522, 52.52, 13.405, 0.1],
  [7, 52.52, 13.405, 34.0522, -118.2437, 0.2],
  [8, -8.833221, 13.264837, -33.936138, 18.436529, 0.2],
  [8, 49.2827, -123.1207, 52.3676, 4.9041, 0.2],
  [8, 1.3521, 103.8198, 40.7128, -74.006, 0.5],
  [9, 51.5072, -0.1276, 34.0522, -118.2437, 0.2],
  [9, 22.3193, 114.1694, -22.9068, -43.1729, 0.7],
  [9, 1.3521, 103.8198, -34.6037, -58.3816, 0.5],
  [10, -22.9068, -43.1729, 28.6139, 77.209, 0.7],
  [10, 34.0522, -118.2437, 31.2304, 121.4737, 0.3],
  [10, -6.2088, 106.8456, 52.3676, 4.9041, 0.3],
  [11, 41.9028, 12.4964, 34.0522, -118.2437, 0.2],
  [11, -6.2088, 106.8456, 31.2304, 121.4737, 0.2],
  [11, 22.3193, 114.1694, 1.3521, 103.8198, 0.2],
  [12, 34.0522, -118.2437, 37.7749, -122.4194, 0.1],
  [12, 35.6762, 139.6503, 22.3193, 114.1694, 0.2],
  [12, 22.3193, 114.1694, 34.0522, -118.2437, 0.3],
  [13, 52.52, 13.405, 22.3193, 114.1694, 0.3],
  [13, 11.986597, 8.571831, 35.6762, 139.6503, 0.3],
  [13, -22.9068, -43.1729, -34.6037, -58.3816, 0.1],
  [14, -33.936138, 18.436529, 21.395643, 39.883798, 0.3],
];

const sampleArcs: Position[] = ARC_ROWS.map(
  ([order, startLat, startLng, endLat, endLng, arcAlt], i) => ({
    order,
    startLat,
    startLng,
    endLat,
    endLng,
    arcAlt,
    color: ARC_COLORS[i % ARC_COLORS.length],
  })
);

export function hexToRgb(hex: string) {
  const shorthand = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
  const full = hex.replace(shorthand, (_m, r, g, b) => r + r + g + g + b + b);
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(full);
  return result
    ? {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16),
      }
    : null;
}

export function genRandomNumbers(min: number, max: number, count: number) {
  const arr: number[] = [];
  const target = Math.min(count, max - min);
  while (arr.length < target) {
    const r = Math.floor(Math.random() * (max - min)) + min;
    if (arr.indexOf(r) === -1) arr.push(r);
  }
  return arr;
}

// Same convention as three-globe's polar2Cartesian, so the camera starts facing lat/lng.
function cameraPositionFor(lat: number, lng: number, distance: number): [number, number, number] {
  const phi = ((90 - lat) * Math.PI) / 180;
  const theta = ((90 - lng) * Math.PI) / 180;
  return [
    distance * Math.sin(phi) * Math.cos(theta),
    distance * Math.cos(phi),
    distance * Math.sin(phi) * Math.sin(theta),
  ];
}

interface GlobeProps {
  globeConfig: GlobeConfig;
  data: Position[];
  animate: boolean;
  /** Ring pulses run only while animating and on screen. */
  pulse: boolean;
}

function Globe({ globeConfig: config, data, animate, pulse }: GlobeProps) {
  const globeRef = useRef<ThreeGlobe | null>(null);
  const invalidate = useThree((state) => state.invalidate);

  const points = useMemo<GlobePoint[]>(() => {
    const all: GlobePoint[] = [];
    for (const arc of data) {
      const rgb = hexToRgb(arc.color) ?? { r: 96, g: 165, b: 250 };
      const color = (t: number) => `rgba(${rgb.r}, ${rgb.g}, ${rgb.b}, ${1 - t})`;
      all.push({ size: config.pointSize, order: arc.order, color, lat: arc.startLat, lng: arc.startLng });
      all.push({ size: config.pointSize, order: arc.order, color, lat: arc.endLat, lng: arc.endLng });
    }
    // Drop duplicated coordinates.
    return all.filter(
      (p, i, a) => a.findIndex((q) => q.lat === p.lat && q.lng === p.lng) === i
    );
  }, [data, config.pointSize]);

  // Globe surface, countries, arcs and points.
  useEffect(() => {
    const globe = globeRef.current;
    if (!globe) return;

    const material = globe.globeMaterial() as unknown as {
      color: Color;
      emissive: Color;
      emissiveIntensity: number;
      shininess: number;
    };
    material.color = new Color(config.globeColor);
    material.emissive = new Color(config.emissive);
    material.emissiveIntensity = config.emissiveIntensity;
    material.shininess = config.shininess;

    globe
      .hexPolygonsData(countries.features)
      .hexPolygonResolution(3)
      .hexPolygonMargin(0.7)
      .showAtmosphere(config.showAtmosphere)
      .atmosphereColor(config.atmosphereColor)
      .atmosphereAltitude(config.atmosphereAltitude)
      .hexPolygonColor(() => config.polygonColor);

    globe
      .arcsData(data)
      .arcStartLat((d) => (d as Position).startLat)
      .arcStartLng((d) => (d as Position).startLng)
      .arcEndLat((d) => (d as Position).endLat)
      .arcEndLng((d) => (d as Position).endLng)
      .arcColor((d: object) => (d as Position).color)
      .arcAltitude((d) => (d as Position).arcAlt);

    if (animate) {
      // Dashes travel along fixed arcs.
      globe
        .arcStroke(() => [0.32, 0.28, 0.3][Math.round(Math.random() * 2)])
        .arcDashLength(config.arcLength)
        .arcDashInitialGap((d) => (d as Position).order)
        .arcDashGap(15)
        .arcDashAnimateTime(config.arcTime);
    } else {
      // Reduced motion: full, static arcs.
      globe
        .arcStroke(0.3)
        .arcDashLength(1)
        .arcDashInitialGap(0)
        .arcDashGap(0)
        .arcDashAnimateTime(0);
    }

    globe
      .pointsData(points)
      .pointColor((d) => (d as GlobePoint).color(0))
      .pointsMerge(true)
      .pointAltitude(0.0)
      .pointRadius(2);

    globe
      .ringsData([])
      .ringColor((d: object) => (t: number) => (d as GlobePoint).color(t))
      .ringMaxRadius(config.maxRings)
      .ringPropagationSpeed(RING_PROPAGATION_SPEED)
      .ringRepeatPeriod((config.arcTime * config.arcLength) / config.rings);

    invalidate();
  }, [config, data, points, animate, invalidate]);

  // Pulsing rings at random endpoints (skipped with reduced motion and while off screen).
  useEffect(() => {
    const globe = globeRef.current;
    if (!globe || !pulse) return;

    const interval = setInterval(() => {
      const picked = genRandomNumbers(0, points.length, Math.floor((points.length * 4) / 5));
      globe.ringsData(points.filter((_p, i) => picked.includes(i)));
    }, 2000);

    return () => clearInterval(interval);
  }, [points, pulse]);

  return <threeGlobe ref={globeRef} />;
}

export interface HeroGlobeSceneProps {
  /** Reduced motion: no auto-rotation, no arc animation, no rings. */
  reducedMotion?: boolean;
  /** Pause rendering while the globe is off screen. */
  active?: boolean;
  /** Allow dragging to rotate (disabled on touch so the page can scroll). */
  interactive?: boolean;
  onReady?: () => void;
}

export default function HeroGlobeScene({
  reducedMotion = false,
  active = true,
  interactive = true,
  onReady,
}: HeroGlobeSceneProps) {
  const { lat, lng } = globeConfig.initialPosition;
  const cameraPosition = useMemo(() => cameraPositionFor(lat, lng, CAMERA_Z), [lat, lng]);
  const animate = !reducedMotion;

  return (
    <Canvas
      frameloop={animate && active ? "always" : "demand"}
      dpr={[1, 2]}
      camera={{ fov: 50, near: 100, far: 1800, position: cameraPosition }}
      onCreated={() => onReady?.()}
    >
      <ambientLight color={globeConfig.ambientLight} intensity={0.6} />
      <directionalLight color={globeConfig.directionalLeftLight} position={new Vector3(-400, 100, 400)} />
      <directionalLight color={globeConfig.directionalTopLight} position={new Vector3(-200, 500, 200)} />
      <pointLight color={globeConfig.pointLight} position={new Vector3(-200, 500, 200)} intensity={0.8} />
      <Globe globeConfig={globeConfig} data={sampleArcs} animate={animate} pulse={animate && active} />
      <OrbitControls
        enablePan={false}
        enableZoom={false}
        enableRotate={interactive}
        minDistance={CAMERA_Z}
        maxDistance={CAMERA_Z}
        autoRotate={animate && active}
        autoRotateSpeed={globeConfig.autoRotateSpeed}
        minPolarAngle={Math.PI / 3.5}
        maxPolarAngle={Math.PI - Math.PI / 3}
      />
    </Canvas>
  );
}
