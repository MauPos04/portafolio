import Glance from "@/components/Glance";
import Hero from "@/components/Hero";
import { LegacyHashRedirect } from "@/components/LegacyHashRedirect";
import SelectedWork from "@/components/SelectedWork";

export default function Home() {
  return (
    <>
      <Hero />
      <Glance />
      <SelectedWork />
      <LegacyHashRedirect />
    </>
  );
}
