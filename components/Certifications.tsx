'use client';

import Image from "next/image";
import { certifications } from "@/data";
import { SiNvidia, SiGooglecloud, SiAmazonaws, SiSnowflake, SiMicrosoftazure } from "react-icons/si";

const iconMap: Record<string, React.ReactNode> = {
  "NVIDIA Certified": <SiNvidia size={36} color="#76b900" />,
  "Google Cloud": <SiGooglecloud size={36} color="#4285F4" />,
  "AWS": <SiAmazonaws size={36} color="#FF9900" />,
  "Snowflake": <SiSnowflake size={36} color="#29B5E8" />,
  "Vertex AI": <Image src="/vertex-ai.svg" width={36} height={36} alt="Vertex AI" />,
  "Microsoft Azure": <SiMicrosoftazure size={36} color="#0078D4" />,
};

const Certifications = () => {
  return (
    <section className="py-20" id="certifications">
      <h1 className="heading">
        Certifications &amp;
        <span className="text-purple"> Technologies</span>
      </h1>
      <p className="text-center text-[#C1C2D3] mt-4 mb-10 text-sm md:text-base max-w-2xl mx-auto">
        Certified and experienced with leading cloud and AI platforms.
      </p>
      <div className="flex flex-wrap justify-center gap-6 mt-6">
        {certifications.map(({ id, name, description, color }) => (
          <div
            key={id}
            className="flex flex-col items-center gap-3 px-8 py-6 rounded-2xl border border-white/[0.1] bg-[#04071D] hover:border-purple transition duration-300 min-w-[140px]"
            style={{ boxShadow: `0 0 18px 0 ${color}22` }}
          >
            <div>{iconMap[name]}</div>
            <span className="text-white font-semibold text-sm text-center">{name}</span>
            <span className="text-[#C1C2D3] text-xs text-center">{description}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Certifications;
