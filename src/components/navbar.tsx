"use client";

import * as React from "react";
import ThemeController from "./themeController";
import { auth } from "@/lib/firebase";
import {
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
  User,
  onAuthStateChanged,
} from "firebase/auth";
import toast from "react-hot-toast";
import Link from "next/link";
import { isCurrentUserAdmin } from "@/lib/firebase/users";
import { BsCheck, BsPlus, BsX } from "react-icons/bs";
import NewTalkModal from "@/app/talks/newTalk";

export type NavbarProps = {
  title: string;
};

export default function Navbar({ title }: NavbarProps) {
  const [user, setUser] = React.useState<User | null>(null);
  const [isAdmin, setIsAdmin] = React.useState<boolean>(false);
  const provider = new GoogleAuthProvider();

  React.useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      setUser(user);
      if (user) {
        const adminStatus = await isCurrentUserAdmin();
        setIsAdmin(adminStatus);
        console.log("User is admin =", adminStatus);
      } else {
        setIsAdmin(false);
      }
    });

    return () => unsubscribe();
  }, []);

  const handleAuthClick = async (e: React.MouseEvent) => {
    e.preventDefault();
    if (auth.currentUser) {
      toast.promise(signOut(auth), {
        loading: "Logging out...",
        success: <b>Logged out!</b>,
        error: <b>Error logging out.</b>,
      });
    } else {
      toast.promise(signInWithPopup(auth, provider), {
        loading: "Logging in with Google...",
        success: (res) => <b>Welcome {res.user.displayName}!</b>,
        error: <b>Error logging in.</b>,
      });
    }
  };

  return (
    <div className="navbar shadow-none z-[999] top-0 fixed">
      <div className="px-3 py-2 rounded lg:rounded-lg shadow-sm w-full flex backdrop-blur-2xl bg-base-100/20">
        <div className="flex-1">
          <Link
            href={"/"}
            className="btn btn-ghost text-xl rounded hover:bg-base-100/10 border-none shadow-none"
          >
            {title}
          </Link>
        </div>

        <div className="flex gap-2 items-center">
          <ThemeController />

          <div className="dropdown dropdown-end">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle avatar"
            >
              <div className="avatar rounded-full border-2 border-base-300/30">
                <img
                  alt={user?.displayName || "Your profile"}
                  src={
                    user?.photoURL ||
                    "https://robohash.org/moonlab-iiserb.png?set=1"
                  }
                />
              </div>
            </div>
            <ul
              tabIndex={-1}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              {isAdmin && (
                <>
                  <button
                    className="btn btn-sm rounded btn-accent flex gap-1 items-center mb-2"
                    onClick={() => {
                      (
                        document.getElementById(
                          "new_talk_modal"
                        ) as HTMLDialogElement
                      )?.showModal();
                    }}
                  >
                    <BsPlus size={21} />
                    Add Talk
                  </button>
                  <NewTalkModal />
                </>
              )}
              <li>
                <a onClick={handleAuthClick}>
                  {auth.currentUser ? "Logout" : "Login"}
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
