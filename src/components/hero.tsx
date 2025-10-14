"use client";

import { auth } from "@/lib/firebaseConfig";
import GoogleLoginButton from "./googleLogin";
import { useEffect, useState } from "react";
import { User } from "firebase/auth";

export default function Hero() {
  const [user, setUser] = useState<User | null>(null);
  useEffect(() => {
    auth.onAuthStateChanged((user) => setUser(user));
  }, []);

  return (
    <div
      className="hero min-h-screen"
      style={{
        backgroundImage: "url('/temp_boat.JPG')",
      }}
    >
      <div className="hero-overlay"></div>
      <div className="hero-content text-neutral-content text-center">
        <div className="max-w-md flex flex-col items-center">
          {user ? (
            <h1 className="mb-5 text-5xl font-bold">
              Hi, {user.displayName?.split(" ")[0]}!
            </h1>
          ) : (
            <>
              <h1 className="mb-5 text-5xl font-bold">Hello, World!</h1>
              <p className="mb-5">
                MOON Lab welcomes you to <b>Robotic Talks</b>. Ready to explore
                the fascinating world of robotics with our team?
              </p>
              <div className="flex-none">
                <GoogleLoginButton />
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
