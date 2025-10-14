"use client";

import * as React from "react";
import { auth } from "@/lib/firebase";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { FcGoogle } from "react-icons/fc";
import toast from "react-hot-toast";

const GoogleLoginButton = () => {
  const provider = new GoogleAuthProvider();

  return (
    <button
      className="btn rounded flex items-center gap-2"
      onClick={(e) => {
        e.preventDefault();
        toast.promise(signInWithPopup(auth, provider), {
          loading: "Logging in with Google...",
          success: (auth) => `Logged in as ${auth.user.displayName}`,
          error: "Error logging in.",
        });
      }}
    >
      <FcGoogle size={21} />
      Login with Google
    </button>
  );
};

export default GoogleLoginButton;
