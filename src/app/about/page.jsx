import Link from "next/link";
export default function About() {
  return (
    <div className="flex p-3 items-center flex-col">
      <h1 className="font-bold text-2xl">Sobre nosotros</h1>
      <p className="italeic">Aqui encontraras mas cositas</p>
      <nav>
        <Link
          href="/"
          className="hover:text-blue-400 hover:border-b hover:border-blue-600"
        >
          Inicio
        </Link>
      </nav>
    </div>
  );
}
