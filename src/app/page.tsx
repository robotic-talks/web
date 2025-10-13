import Hero from "@/components/hero";
import Image from "next/image";

export default function Home() {
  return (
    <div className="w-screen min-h-screen">
      <Hero />
      <div className="py-12">Hi</div>
    </div>
  );
}
