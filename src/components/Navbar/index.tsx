"use client";

import Link from "next/link";
import { useState } from "react";
import { HiSearch } from "react-icons/hi";
import {
  Input,
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenu,
  NavbarMenuItem,
  NavbarMenuToggle,
} from "@nextui-org/react";

function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const items = [
    { name: "Bake", url: "#" },
    { name: "Ice cream", url: "#" },
    { name: "Sweets", url: "#" },
  ];

  return (
    <Navbar onMenuOpenChange={setIsMenuOpen}>
      <NavbarContent>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="text-primary md:hidden"
        />
        <NavbarBrand>
          <Link href="/">
            <h1 className="text-2xl font-bold text-primary">Roman Scoops</h1>
          </Link>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="max-md:hidden" justify="center">
        {items.map((i, num) => (
          <NavbarItem key={num}>
            <Link className="font-semibold text-primary" href={i.url}>
              {i.name}
            </Link>
          </NavbarItem>
        ))}
      </NavbarContent>

      <NavbarContent justify="end">
        <Input
          className="max-w-[200px] rounded outline outline-accent"
          startContent={<HiSearch className="h-[18px] w-[18px] text-accent" />}
        />
      </NavbarContent>
      <NavbarMenu className="bg-background">
        {items.map((i, num) => (
          <NavbarMenuItem key={num}>
            <Link className="font-semibold text-primary" href={i.url}>
              {i.name}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
}

export default NavBar;
