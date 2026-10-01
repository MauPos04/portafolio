# Carga diferida del globo 3D

## Alcance aprobado

El usuario autorizó probar localmente la carga diferida después de revisar el diagnóstico de las pausas iniciales. No hacer commit ni push. Mantener el aspecto, las dimensiones, los datos y las animaciones existentes.

Actualización de autorización — 2026-10-01: el usuario autorizó commitear todos los cambios pendientes del portfolio en una rama aparte, integrar en `development` y luego en `main`, y pushear las ramas. Esta autorización reemplaza la restricción inicial de no publicar.

## Decisión y alternativas

- Elegido: observar el contenedor del globo y montar `World` cuando esté a 150 px del viewport. Evita inicializar WebGL desde una portada donde el globo todavía no es visible.
- Reducir detalle gráfico: podría reducir también el coste al desplazarse, pero cambia la representación. Fuera de este ensayo.
- Pausar el render fuera de pantalla: podría mejorar el consumo sostenido, pero no evita por sí solo la inicialización. Fuera de este ensayo.

## Implementación

1. En `GridGlobe.tsx`, conservar el contenedor con dimensiones existentes y el import dinámico de `World`.
2. Usar `IntersectionObserver` con margen vertical de 150 px y montar la escena una sola vez al aproximarse.
3. Desconectar el observer al activarse y al desmontar; cargar normalmente si el navegador no admite la API.
4. No desmontar al salir del viewport para evitar reconstrucciones al volver a bajar.

## Verificación

- Lint y comprobación de tipos.
- En viewport 1280 x 720: la escena y su chunk no se cargan al abrir la portada sin desplazamiento.
- Al bajar: aparece un único canvas, sin errores de consola ni cambios en los límites del contenedor.
- Al subir y bajar: se conserva el mismo canvas, sin reinicialización.
- Revisar también móvil y navegación directa a la sección.
- Comparar tareas largas con el diagnóstico anterior; distinguir mejora inicial de la pausa que aún podría producirse al crear la escena.

## Límite

Este cambio difiere el coste de inicialización, no lo elimina. Si el globo ya está cerca o dentro del viewport inicial, se cargará normalmente.

## Resultados locales

- Lint y TypeScript sin errores; permanecen advertencias preexistentes.
- En 1280 x 720, sin caché y sin desplazamiento: cero canvas, chunk de `Globe.tsx` no solicitado, tarea larga máxima de 106 ms en esta muestra de 10 segundos. En el diagnóstico anterior de desarrollo se midieron 1215 ms; no es una garantía para todos los dispositivos.
- Al bajar aparece un canvas; al subir y volver a bajar se conserva el mismo nodo.
- El contenedor conserva su ancho y alto tras montar la escena.
- En 375 x 812, no hay canvas al inicio y aparece al bajar, sin desbordamiento horizontal; también se verificó 812 x 375.
- La entrada directa por `#about` monta el globo correctamente. No se modificó el comportamiento existente de las animaciones bajo preferencias de movimiento reducido.
