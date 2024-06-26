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
import Cart from "./Cart";
import Customer from "./Customer";
import { useRouter } from "next/navigation";

type Category = { name: string; id: string };

function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [search, setSearch] = useState("")
  const router  = useRouter()
  // const [items, setItems] = useState<Category[]>();

  // useEffect(() => {
  //   const load = async () => {
  //     const response = await fetch("/api/category", { cache: "no-store" });
  //     const data: { result: Category[] } = await response.json();
  //     setItems(data.result);
  //   };
  //   load();
  // }, []);

  const handleClick = (event: string) => {

  }

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

      <NavbarContent justify="end">
        {/* <Input
          className="max-w-[200px] rounded outline outline-accent"
          startContent={<HiSearch className="h-[18px] w-[18px] text-accent" />}
          onKeyDown={(event) => {
            if (event.key === "Enter") router.push(`/search?query=${search}`)
          }}
          value={search}
          onChange={(event) => {
            const value = event.currentTarget.value
            setSearch(value)
          }}
        /> */}
        <div className="max-md:hidden">
          <Cart />
        </div>
        <div className="max-md:hidden">
          <Customer />
        </div>
      </NavbarContent>
      <NavbarMenu className="bg-background">
        <NavbarMenuItem className="items-center">
          <Cart /> Cart
        </NavbarMenuItem>
        <NavbarMenuItem className="items-center">
          <Customer /> Account
        </NavbarMenuItem>
        {/* {items! &&
          items.map((i) => (
            <NavbarMenuItem key={i.id}>
              <Link
                className="font-semibold text-primary"
                href={"/category/" + i.id}
              >
                {i.name}
              </Link>
            </NavbarMenuItem>
          ))} */}
      </NavbarMenu>
    </Navbar>
  );
}

export default NavBar;
