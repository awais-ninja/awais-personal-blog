import NavLink from "./NavLink";

const Nav = ({ data }) => {
  return (
    <nav id="site-nav" className="hidden">
      <ul className="flex flex-col gap-y-1 mb-2">
        {data.map((link) => {
          return (
            <NavLink
              href={link.href}
              key={link.name}
              className={"px-4 py-2 rounded-full"}
            >
              {link.name}
            </NavLink>
          );
        })}
      </ul>
    </nav>
  );
};

export default Nav;
