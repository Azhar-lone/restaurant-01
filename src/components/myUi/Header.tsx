"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import {
  SearchIcon,
  HeartIcon,
  ShoppingCartIcon,
  LucideIcon,
  MenuIcon,
} from "lucide-react";
import { ModeToggle } from "./theme-mode";
const Header = () => {
  const [searchActive, setSearchActive] = useState<boolean>(false);
  const [hash, setHash] = useState<string>("");
  const [open, setOpen] = useState<boolean>(false);
  interface NavIcons {
    Icon: LucideIcon;
    onClick?: () => void;
  }

  const navicons: NavIcons[] = [
    {
      Icon: SearchIcon,
      onClick: () => setSearchActive((prev) => !prev),
    },
    {
      Icon: HeartIcon,
    },
    {
      Icon: ShoppingCartIcon,
    },
    {
      Icon: MenuIcon,
      onClick: () => setOpen((previous) => !previous),
    },
  ];
  useEffect(() => {
    if (window.innerWidth > 768) {
      setOpen(false);
    }
  }, [open, setOpen]);

  return (
    <header className="fixed top-0 left-0 right-0 text-foreground bg-background shadow-lg z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center py-4 px-2 ">
        <Link href="/" className="md:text-2xl font-extrabold text-primary">
          TastyCornerCafe
        </Link>

        <nav className="hidden md:flex space-x-6">
          {nanLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setHash(link.href)}
              className={`text-lg font-medium text-foreground ${
                link.href === hash
                  ? "border-primary border-b-2 text-primary "
                  : "hover:text-primary hover:border-b-2 hover:border-primary"
              }   transition duration-300 px-3 py-2 rounded-lg`}
            >
              {link.name}
            </Link>
          ))}
        </nav>
        <div className="flex items-center space-x-4 ">
          <ModeToggle />
          {navicons.map(({ Icon, onClick }, index) => (
            <Icon
              key={index}
              onClick={onClick ?? (() => {})}
              className={`${
                Icon === MenuIcon
                  ? " md:hidden stroke-foreground"
                  : "stroke-primary/70  hover:stroke-primary"
              }  cursor-pointer stroke-2 `}
            />
          ))}
        </div>
      </div>

      {searchActive && (
        <div className="absolute top-20 right-6 bg-background shadow-xl p-3 rounded-lg flex items-center space-x-2 transition duration-300">
          <input
            type="text"
            placeholder="Search..."
            className="border  p-2 rounded focus:outline-none focus:ring-2 "
            autoFocus
          />
          <button
            onClick={() => setSearchActive(false)}
            className="text-xl  hover:text-sunset transition-colors duration-300"
          >
            &times;
          </button>
        </div>
      )}

      {open && (
        <div className="md:hidden bg-background shadow-lg transition-colors">
          <nav className="flex flex-col space-y-2 px-6 py-4">
            {nanLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setHash(link.href)}
                className={`text-lg font-medium text-foreground${
                  link.href === hash
                    ? "border-primary text-primary "
                    : "hover:text-primary hover:border-b-2 hover:border-primary"
                }   transition duration-300 px-3 py-2 rounded-lg`}
              >
                {link.name}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;

interface NavLink {
  name: string;
  href: string;
}

const nanLinks: NavLink[] = [
  {
    name: "Home",
    href: "#home",
  },
  {
    name: "Dishes",
    href: "#dishes",
  },
  {
    name: "About",
    href: "#about",
  },
  {
    name: "Menu",
    href: "#menu",
  },
  {
    name: "Review",
    href: "#review",
  },
  {
    name: "Order",
    href: "#order",
  },
];
