"use client";

import { useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "@/app/ui/common";
import { navLinks } from "@/app/lib/constants";
import styles from "@/app/ui/navigation/styles.module.scss";
import { NavLinkProps, SideMenuProps } from "@/app/ui/navigation/definitions";
import { useMainContext } from "@/app/main-context-provider";

function NavLink({ href, label, isActive, handleClick }: NavLinkProps) {
  return (
    <li
      className={`${styles.menuItem} ${isActive ? styles.active : ""}`}
      onClick={handleClick}
    >
      <Link href={href}>{label}</Link>
    </li>
  );
}

function SideMenu({ isOpen, toggleMenu, pathname }: SideMenuProps) {
  return (
    <ul className={`${styles.menuList} ${isOpen ? styles.open : ""}`}>
      {navLinks.map(({ href, label }: { href: string; label: string }) => (
        <NavLink
          key={label}
          href={href}
          label={label}
          isActive={pathname === href}
          handleClick={toggleMenu}
        />
      ))}
    </ul>
  );
}

export default function Navigation() {
  const pathname = usePathname();
  const { isSideBarOpen, toggleSideBar } = useMainContext();

  return (
    <nav className={styles.nav}>
      <Button handleClick={toggleSideBar} customStyles={{ zIndex: 2 }}>
        {isSideBarOpen ? <AiOutlineClose /> : <AiOutlineMenu />}
      </Button>
      <SideMenu
        isOpen={isSideBarOpen}
        toggleMenu={toggleSideBar}
        pathname={pathname}
      />
    </nav>
  );
}
