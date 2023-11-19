"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
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

type Category = { name: string; id: string }

function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [items, setItems] = useState<Category[]>();

  useEffect(()=>{
    const load = async () => {
      const response = await fetch("/api/category")
      const data: {result: Category[]} = await response.json()
      setItems(data.result)
    }
    load()
  },[])

  return (
    <Navbar onMenuOpenChange={setIsMenuOpen} className="bg-background">
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

      {items! && (
        <NavbarContent className="max-md:hidden" justify="center">
          {items.slice(0,3).map((i) => (
            <NavbarItem key={i.id}>
              <Link
                className="font-semibold text-primary"
                href={"/category/" + i.id}
              >
                {i.name}
              </Link>
            </NavbarItem>
          ))}
        </NavbarContent>
      )}

      <NavbarContent justify="end">
        <Input
          className="max-w-[200px] rounded outline outline-accent"
          startContent={<HiSearch className="h-[18px] w-[18px] text-accent" />}
        />
      </NavbarContent>
      <NavbarMenu className="bg-background">
        {items! &&
          items.map((i) => (
            <NavbarMenuItem key={i.id}>
              <Link
                className="font-semibold text-primary"
                href={"/category/" + i.id}
              >
                {i.name}
              </Link>
            </NavbarMenuItem>
          ))}
      </NavbarMenu>
    </Navbar>
  );
}

export default NavBar;
