import Image from "next/image";
import Link from "next/link";
import { BsLinkedin, BsTwitterX, BsX, BsYoutube } from "react-icons/bs";

const Footer = () => (
  <footer className="footer sm:footer-horizontal bg-neutral text-neutral-content flex justify-around items-center p-4 mt-8">
    <aside className="flex flex-col items-start md:flex-row md:items-center gap-2">
      <Image
        width={120}
        height={60}
        src={"/moonlab.png"}
        alt="MOON Lab Logo"
        className="invert"
      />
      <p>
        Copyright &copy; MOON Lab {new Date().getFullYear()} - All right
        reserved
      </p>
    </aside>
    <nav className="grid-flow-col gap-4 md:place-self-center md:justify-self-end">
      <Link
        href="https://linkedin.com"
        className="btn btn-link text-accent rounded hover:scale-105 hover:bg-black/10 transition-all duration-300"
      >
        <BsTwitterX size={21} />
      </Link>
      <Link
        href="https://linkedin.com"
        className="btn btn-link text-accent rounded hover:scale-105 hover:bg-black/10 transition-all duration-300"
      >
        <BsYoutube size={21} />
      </Link>
      <Link
        href="https://linkedin.com"
        className="btn btn-link text-accent rounded hover:scale-105 hover:bg-black/10 transition-all duration-300"
      >
        <BsLinkedin size={21} />
      </Link>
    </nav>
  </footer>
);

export default Footer;
