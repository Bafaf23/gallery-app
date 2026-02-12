"use client";
import Gallery from "@/components/organism/Gallery";

export default function Home() {
  return (
    <>
      <section className="flex items-center flex-col gap-1">
        <h1 className="font-bold text-2xl dark:text-slate-50">
          Bienvenido a mi galeria
        </h1>
        <p className="italeic dark:text-slate-400">
          Conose un poco más sobre mis trabajo y su historia.
        </p>
      </section>
      <section className="mt-5">
        <Gallery></Gallery>
      </section>
    </>
  );
}
