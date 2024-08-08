"use client";
import Logo from "../Logo";
import MenuToggle from "./MenuToggle";
import Nav from "./Nav";

const data = [
  { href: "/", name: "Home" },
  { href: "/blog", name: "Blog" },
  { href: "/contact", name: "Hire Me" },
];

const Navigation = () => {
  return (
    <div className="bg-primary text-white">
      <div className="flex flex-col px-4 gap-y-4 py-3">
        <div className="flex items-center">
          <Logo />
          <MenuToggle />
        </div>
        <Nav data={data} />
      </div>
    </div>
  );
};

export default Navigation;
