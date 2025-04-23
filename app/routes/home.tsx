import type { Route } from "./+types/home";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "mery" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}



export default function Home() {
  return (
    <div>
    <h1 className="text-4xl">Hola :) </h1>
    <h2>Esto es un subtitulo</h2>
    </div>
  );
}
