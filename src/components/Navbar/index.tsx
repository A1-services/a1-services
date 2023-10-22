"use client";

import Link from "next/link";
import { ChangeEvent, useEffect, useState } from "react";
import Drawer from "react-modern-drawer";
import { HiMenu, HiX } from "react-icons/hi";

import 'react-modern-drawer/dist/index.css'

function NavBar() {
  // const [currentTheme, setTheme] = useState<"dark" | "light">("light");
  const [drawerOpen, setDrawer] = useState(false);

  // useEffect(() => {
  //   const documentClassList = document.documentElement.classList;
  //   const isDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  //   if (isDark) documentClassList.add("dark");
  //   else documentClassList.remove("dark");
  // }, []);

  // const handleThemeChange = () => {
  //   const documentClassList = document.documentElement.classList;
  //   setTheme((prev) => (prev === "dark" ? "light" : "dark"));

  //   if (currentTheme === "dark") {
  //     documentClassList.add("dark");
  //   } else if (currentTheme === "light") {
  //     documentClassList.remove("dark");
  //   }
  // };

  const closeDrawer = () => setDrawer(false);
  const openDrawer = () => setDrawer(true);

  return (
    <>
      <nav className="mb-2 flex items-center gap-4 p-3 md:justify-between xl:mx-auto xl:w-[1200px]">
        <button
          className="rounded p-2 outline outline-primary md:hidden"
          onClick={openDrawer}
        >
          <HiMenu className="h-[18px] w-[18px] text-primary" />
        </button>

        <Link href="/">
          <h1 className="text-2xl font-bold text-primary">Roman Scoops</h1>
        </Link>

        <div className="max-md:ml-auto max-md:w-1/3">
          <input className="rounded p-2 outline outline-accent max-md:w-full" type="text" />
        </div>
      </nav>

      <Drawer open={drawerOpen} onClose={closeDrawer} direction={"left"}>
        <section className="p-4 flex flex-col">
          <button className="my-3" onClick={closeDrawer}>
            <HiX className="w-[24px] h-[24px] text-primary"/>
          </button>
          stuff
        </section>
      </Drawer>
    </>
  );
}

export default NavBar;
