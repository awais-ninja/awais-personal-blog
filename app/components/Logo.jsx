import Link from "next/link";

const Logo = ({ size = "normal" }) => {
  if (size === "large") {
    return (
      <Link href="/" className={`text-4xl font-bold tracking-tight leading-1`}>
        Globetek Blog
      </Link>
    );
  }
  return (
    <Link href="/" className={`text-2xl font-bold tracking-tight leading-1`}>
      Globetek Blog
    </Link>
  );
};

export default Logo;
