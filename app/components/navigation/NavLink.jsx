"use client";

import { usePathname } from "next/navigation";
import Link from "../primitives/Link";

const NavLink = ({ children, href, className, ...rest }) => {
  const pathName = usePathname();

  return (
    <Link
      href={href}
      className={`${
        pathName === href
          ? "bg-secondary-50 text-primary-950 "
          : "hover:bg-primary-200 hover:text-primary-950"
      } ${className}`}
      {...rest}
    >
      {children}
    </Link>
  );
};

export default NavLink;
