export interface NavLinkProps {
  href: string;
  label: string;
  isActive: boolean;
  handleClick?: () => void;
}

export interface SideMenuProps {
  isOpen: boolean;
  toggleMenu: () => void;
  pathname: string;
}
