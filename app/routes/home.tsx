import type { Route } from "./+types/home";
import Cuerpo from "~/components/Cuerpo";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "mery" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function Home() {
  return (
      <h1>hhh</h1>
    
  );
}

