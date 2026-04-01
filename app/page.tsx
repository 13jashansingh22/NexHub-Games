import Navbar, { Footer } from "@/src/components/Navbar";
import GameCard from "@/src/components/GameCard";

export default function Home() {
  return (
    <>
      <Navbar />

      <main className="mx-auto w-full max-w-6xl flex-1 px-6 py-10">
        <GameCard />
      </main>

      <Footer />
    </>
  );
}
