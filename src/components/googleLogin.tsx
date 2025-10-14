"use client";

import * as React from "react";
import { auth } from "@/lib/firebaseConfig";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { FcGoogle } from "react-icons/fc";

const GoogleLoginButton = () => {
  const authProvider = new GoogleAuthProvider();

  return (
    <button
      className="btn rounded flex items-center justify-center gap-2"
      onClick={(e) => {
        e.preventDefault();
        signInWithPopup(auth, authProvider).then((result) => {
          console.log(`Signed in successfully! Email = ${result.user.email}`);
        });
      }}
    >
      <FcGoogle size={21} />
      Login with Google
    </button>
  );
};

export default GoogleLoginButton;
