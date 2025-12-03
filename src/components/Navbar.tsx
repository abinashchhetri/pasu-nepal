"use client";

import { Menu, X, ShoppingCartIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import MaxWidthContainer from "./MaxWidthContainer";
import { Button } from "./ui/button";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    // Prevent body scroll when menu is open
    if (!isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
    document.body.style.overflow = "unset";
  };

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/products", label: "Store" },
    { href: "/about", label: "About" },
    { href: "/contact", label: "Contact Us" },
  ];

  return (
    <nav className="sticky top-0 z-50 w-full bg-white shadow-sm">
      <MaxWidthContainer>
        <div className="flex items-center justify-between py-3 md:py-4">
          <Link href="/" onClick={closeMenu}>
            <Image
              src="/pawsu-icons/pinklogo.svg"
              alt="logo"
              width={130}
              height={130}
              className=""
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-6 xl:gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="relative group"
              >
                <span className="text-base xl:text-lg">{link.label}</span>
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
              </Link>
            ))}
          </div>

          {/* Desktop Button */}
          <div className="hidden lg:flex">
            <Link href="/products">
              <Button className="flex items-center gap-2 px-4 py-2 text-white bg-primary rounded-md">
                <ShoppingCartIcon className="w-4 h-4" />
                <span className="text-base xl:text-lg font-medium">Shop Now</span>
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="lg:hidden p-2 text-gray-700 hover:text-primary transition-colors"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
      </MaxWidthContainer>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <>
          <div
            className="fixed inset-0 bg-black/50 z-40 lg:hidden"
            onClick={closeMenu}
          ></div>
          <div
            className={`fixed top-0 right-0 h-full w-80 max-w-[85vw] bg-white shadow-xl z-50 transform transition-transform duration-300 ease-in-out lg:hidden ${
              isMenuOpen ? "translate-x-0" : "translate-x-full"
            }`}
          >
            <div className="flex flex-col h-full p-6">
              {/* Mobile Menu Header */}
              <div className="flex items-center justify-between mb-8">
                <Link href="/" onClick={closeMenu}>
                  <Image
                    src="/pawsu-icons/pinklogo.svg"
                    alt="logo"
                    width={100}
                    height={100}
                    className="w-20 h-20"
                  />
                </Link>
                <button
                  onClick={closeMenu}
                  className="p-2 text-gray-700 cursor-pointer hover:text-primary transition-colors"
                  aria-label="Close menu"
                >
                  <X className="w-7 h-7" />
                </button>
              </div>

              {/* Mobile Navigation Links */}
              <div className="flex flex-col gap-6">
                {navLinks.map((link) => (
                  <Link
                    key={link.label}
                    href={link.href}
                    onClick={closeMenu}
                    className="relative group text-lg font-medium text-gray-700 hover:text-primary transition-colors"
                  >
                    <span>{link.label}</span>
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
                  </Link>
                ))}
              </div>

              {/* Mobile Button */}
              <div className="mt-auto pt-6">
                <Link href="/products" onClick={closeMenu}>
                  <Button
                    className="w-full flex items-center justify-center gap-2 px-4 py-3 text-white bg-primary rounded-md"
                  >
                    <ShoppingCartIcon className="w-5 h-5" />
                    <span className="text-base font-medium">Shop Now</span>
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </>
      )}
    </nav>
  );
};

export default Navbar;
