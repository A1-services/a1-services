"use client";

import Link from "next/link";
import { ChangeEvent, useEffect, useState } from "react";

function NavBar() {
  const [currentTheme, setTheme] = useState<"dark" | "light" | "system">(
    "system"
  );

  useEffect(() => {
    const documentClassList = document.documentElement.classList;
    if (currentTheme === "system") {
      const isDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
      if (isDark) documentClassList.add("dark");
      else documentClassList.remove("dark");
    }
  }, [currentTheme]);

  const handleThemeChange = (e: ChangeEvent<HTMLSelectElement>) => {
    const documentClassList = document.documentElement.classList;
    const theme = e.currentTarget.value;
    if (theme === "dark") {
      documentClassList.add("dark");
      setTheme("dark");
    } else if (theme === "light") {
      documentClassList.remove("dark");
      setTheme("light");
    } else if (theme === "system") {
      setTheme("system");
    }
  };

  return (
    <nav className="flex justify-between items-center p-3 mb-2 xl:w-[1200px] xl:mx-auto">
      <Link href="/">
        <h1 className="text-2xl text-primary font-bold">Candy Shop</h1>
      </Link>

      <div className="flex items-center gap-3">
        <input className="p-2 rounded outline outline-accent max-md:hidden" type="text" />
        <select
          className="p-3 bg-secondary rounded font-semibold max-md:hidden"
          onChange={handleThemeChange}
        >
          <option value="system">Use system</option>
          <option value="light">Light</option>
          <option value="dark">Dark</option>
        </select>
      </div>
    </nav>
  );
}

export default NavBar;
