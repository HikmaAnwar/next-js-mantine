import Image from "next/image";
import {HeroBullets} from "../components/heroBullets"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <HeroBullets/>
    </main>
  );
}
