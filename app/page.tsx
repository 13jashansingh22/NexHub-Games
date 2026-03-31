import Navbar from "@/src/components/Navbar";
import GameCardSection from "@/src/components/GameCardSection";

export default function Home() {
  return (
    <>
      <Navbar />

      <main className="mx-auto w-full max-w-6xl px-6 py-10">
        <GameCardSection />
      </main>
    </>
  );
}
