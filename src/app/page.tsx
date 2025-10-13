import Hero from "@/components/hero";
import Image from "next/image";
import React from "react";
import { auth } from "@/lib/firebaseConfig";

export default function Home() {
  return (
    <>
      <Hero />
    </>
  );
}
