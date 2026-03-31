import GameCard from "@/src/components/GameCard";

const featuredGames = [
  { title: "Aether Riders", imageSrc: "/next.svg" },
  { title: "Shadow Circuit", imageSrc: "/vercel.svg" },
  { title: "Chrono Forge", imageSrc: "/globe.svg" },
  { title: "Pixel Outlaws", imageSrc: "/window.svg" },
];

export default function GameCardSection() {
  return (
    <section>
      <h1 className="mb-2 text-3xl font-bold text-white">Featured Games</h1>
      <p className="mb-8 text-sm text-white/75">
        Explore what&apos;s trending on NexHub right now.
      </p>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {featuredGames.map((game) => (
          <GameCard key={game.title} title={game.title} imageSrc={game.imageSrc} />
        ))}
      </div>
    </section>
  );
}