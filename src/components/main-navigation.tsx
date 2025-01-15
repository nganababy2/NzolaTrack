import Link from "next/link";
import Image from "next/image";
import { LogoImg } from "@/assets/";

const Navigation = () => {
  return (
    <header className="flex flex-row justify-between items-center">
      <Link href="/" className="flex items-center gap-3">
        <Image src={LogoImg} alt="NzolaTrack logo" />
        <h1 className="text-2xl">NzolaTrack</h1>
      </Link>
      <nav>
        <ul className="flex gap-8">
          <li>
            <Link href="/faq">FAQ</Link>
          </li>
          <li>
            <Link href="/login">Iniciar Sessão</Link>
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
