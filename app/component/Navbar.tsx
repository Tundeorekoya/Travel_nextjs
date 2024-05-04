import Image from "next/image";
import Link from "next/link";
import { NAV_LINKS } from "@/constant";
import Button from "./button";
const Navbar = () => {
  return (
    <nav className="flexBetween max-container padding-container relative z-30 py-5">
      <Link href="/">
        <Image src="/hilink-logo.svg" alt="logo" width={74} height={29} />
      </Link>

      <ul className=" hidden lg:flex h-full gap-12">
        {NAV_LINKS.map((link) => (
          <Link
            href={link.href}
            key={link.key}
            className="regular-16 text-gray-50 cursor-pointer pb-1.5 transition-all hover:font-bold flex-center"
          >
            {link.label}
          </Link>
        ))}
      </ul>
      <div className="lg:flexCenter hidden">
        <Button 
        type="button"
        title="Login"
        icon="/user.svg"
        variant='btn_dark_green'
        />
      </div>
    </nav>
  );
};

export default Navbar;
