import * as React from "react";
import TalkGrid from "./talkGrid";

const TalkHero = () => (
  <>
    <div
      className="hero min-h-[50vh] overflow-hidden shadow-sm"
      style={{
        backgroundImage: "url('/deepmind-bg-1.jpg')",
      }}
    >
      <div className="hidden lg:block w-full h-full border-t-8 border-t-accent/25 backdrop-blur-xl rotate-45"></div>
      <div className="hero-overlay"></div>
      <div className="hero-content text-neutral-content text-center backdrop-blur-md border-b-2 border-accent/50 lg:border-none lg:backdrop-blur-none">
        <div className="max-w-md">
          <h1 className="mb-5 text-5xl font-bold">Explore Talks</h1>
          <p className="mb-5">
            Excited for the next talk? Maybe missed the last one? We got you
            covered.
          </p>
        </div>
      </div>
    </div>
  </>
);

const Talks = () => {
  return (
    <div className="flex flex-col gap-3 items-center min-h-screen">
      <TalkHero />
      <div className="px-2 lg:px-16 w-full">
        <TalkGrid />
      </div>
    </div>
  );
};

export default Talks;
