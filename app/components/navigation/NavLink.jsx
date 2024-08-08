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
          ? "bg-accent text-white "
          : "hover:bg-accent hover:text-white"
      } ${className}`}
      {...rest}
    >
      {children}
    </Link>
  );
};

export default NavLink;
