"use client";

import { auth } from "@/lib/firebase";
import GoogleLoginButton from "./googleLogin";
import { useEffect, useState } from "react";
import { User } from "firebase/auth";
import { BsCalendarEvent, BsSearch } from "react-icons/bs";
import Link from "next/link";

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
        <div className="max-w-md flex flex-col items-center justify-center">
          {user ? (
            <div className="flex flex-col">
              <h1 className="mb-5 text-5xl font-bold">
                Hi, {user.displayName?.split(" ")[0]}!
              </h1>
              <p className="mb-5">Ready for more robotics?</p>
              <Link
                className="btn btn-outline backdrop-blur-2xl rounded lg:rounded-lg flex gap-3 items-center"
                href={"/talks"}
              >
                <BsCalendarEvent size={18} />
                <span>Go to Talks</span>
              </Link>
            </div>
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
