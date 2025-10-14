"use client";

import * as React from "react";
import ThemeController from "./themeController";
import { auth } from "@/lib/firebaseConfig";
import { signOut, User } from "firebase/auth";

export type NavbarProps = {
  title: string;
};

export default function Navbar({ title }: NavbarProps) {
  const [user, setUser] = React.useState<User | null>(null);

  React.useEffect(() => {
    auth.onAuthStateChanged((user) => {
      console.log(user);
      setUser(user);
    });
  }, []);

  return (
    <div className="navbar shadow-none z-[999] top-0 fixed">
      <div className="px-3 py-2 rounded lg:rounded-lg shadow-sm w-full flex backdrop-blur-2xl bg-base-100/45">
        <div className="flex-1">
          <a className="btn btn-ghost text-xl rounded hover:bg-base-100/10 border-none shadow-none">
            {title}
          </a>
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
                  alt={
                    `Image of ${auth.currentUser?.displayName}` ||
                    "Your profile"
                  }
                  src={
                    user
                      ? user?.photoURL!
                      : "https://robohash.org/moonlab-iiserb.png?set=1"
                  }
                />
              </div>
            </div>
            <ul
              tabIndex={-1}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              <li>
                <a className="justify-between">
                  Profile
                  <span className="badge">New</span>
                </a>
              </li>
              <li>
                <a>Settings</a>
              </li>
              <li>
                <a
                  onClick={(e) => {
                    e.preventDefault();
                    if (auth.currentUser) {
                      signOut(auth).then(() => {
                        alert("Signed out user");
                      });
                    }
                  }}
                >
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
