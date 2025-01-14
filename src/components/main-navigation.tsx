import Link from "next/link";
import Image from "next/image";
import logoImg from "@/assets/logo.png";

const Navigation = () => {
  return (
    <header
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <Link
        href="/"
        style={{
          display: "flex",
          alignItems: "center",
          gap: "0.8rem",
        }}
      >
        <Image src={logoImg} alt="Packge" />
        NzolaTrack
      </Link>
      <nav>
        <ul style={{ display: "flex", gap: "2rem" }}>
          <li>
            <Link href="/about">Sobre</Link>
          </li>
          <li>
            <Link href="/login">Login</Link>
          </li>
          <li>
            <Link href="/registro">Registro</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navigation;
