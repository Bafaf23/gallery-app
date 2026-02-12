import "@/globals.css";
import Header from "@/components/organism/Header";

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <head>
        <title>Gallery</title>
      </head>
      <body className="dark:bg-slate-950">
        <div className="flex flex-col justify-between min-h-screen">
          <div>
            <header>
              <Header></Header>
            </header>
            <main className="p-2">{children}</main>
          </div>
          <footer className="text-center text-slate-100 p-1">
            <h1>desarrollado con 💖 por Bryant</h1>
          </footer>
        </div>
      </body>
    </html>
  );
}
