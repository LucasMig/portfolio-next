"use client";

import { navLinks } from "@/app/lib/constants";
import { useMainContext } from "@/app/main-context-provider";
import { Button } from "@/app/ui/common";
import styles from "@/app/ui/navigation/styles.module.scss";
import {
  type NavLinkProps,
  type SideMenuProps,
} from "@/app/ui/navigation/types";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";

function NavLink({ href, label, isActive, handleClick }: NavLinkProps) {
  return (
    <Link href={href}>
      <li
        className={`${styles.menuItem} ${isActive ? styles.active : ""}`}
        onClick={handleClick}
      >
        {label}
      </li>
    </Link>
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
