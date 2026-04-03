import Image from "next/image";
import Link from "next/link";
import { games } from "@/app/data/games";
import GameError from "@/app/game/GameError";
import PlayArea from "@/app/game/PlayArea";
import GameDetails, { GameDesc } from "@/app/game/GameDetails";
import RecmGames from "@/app/game/RecmGames";
import { Footer } from "@/src/components/Navbar";

function slugify(value: string) {
  return value.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-+|-+$/g, "");
}


export default async function GamePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const game = games.find((g) => slugify(g.title) === slug.toLowerCase());

  if (!game) {
    return (
      <GameError />
    );
  }

  

  return (<>
    <head>
      <script
        async
        src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-6389330671246321"
        crossOrigin="anonymous"
      />
    </head>
    <main className="relative z-10 w-full text-white">
      <PlayArea game={game} />
      <GameDetails game={game} />
      <GameDesc game={game} />
      <RecmGames game={game} />
      <div className=" mt-22 ">
      <Footer  />
      </div>
    </main>
    </>
  );
}