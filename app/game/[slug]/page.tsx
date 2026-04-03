import Image from "next/image";
import Link from "next/link";
import { games } from "@/app/data/games";
import GameError from "@/app/game/GameError";
import PlayArea from "@/app/game/PlayArea";
import GameDetails from "@/app/game/GameDetails";

function slugify(value: string) {
  return value.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-+|-+$/g, "");
}

export function generateStaticParams() {
  return games.map((game) => ({ slug: slugify(game.title) }));
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

  const relatedGames = games.filter((item) => item.title !== game.title).slice(0, 2);

  return (
    <main className="relative z-10 w-full text-white">
      <PlayArea game={game} />
      <GameDetails game={game} />

      <section className="mx-auto mt-8 max-w-7xl px-6 sm:px-8 lg:px-10">
        <div className="rounded-3xl border border-white/10 bg-white/6 p-6 backdrop-blur-xl">
          <p className="text-xs font-semibold uppercase tracking-[0.35em] text-white/45">
            Game info
          </p>
          <p className="mt-3 max-w-3xl text-sm leading-6 text-white/75">
            This is the game page. The top area is the playable area, and this section shows the game
            details you asked for.
          </p>
        </div>
      </section>

      <section className="mx-auto mt-10 max-w-7xl px-6 sm:px-8 lg:px-10">
        <h2 className="text-2xl font-black">Recommended games</h2>
        <div className="mt-5 grid gap-4 md:grid-cols-2">
          {relatedGames.map((relatedGame) => (
            <Link
              key={relatedGame.title}
              href={`/game/${slugify(relatedGame.title)}`}
              className="group overflow-hidden rounded-3xl border border-white/10 bg-white/8 p-4 transition hover:-translate-y-1 hover:border-white/20 hover:bg-white/12"
            >
              <div className="relative aspect-video overflow-hidden rounded-2xl">
                <Image
                  src={relatedGame.image}
                  alt={relatedGame.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 40vw"
                  className="object-cover transition duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/10 to-transparent" />
                <div className="absolute bottom-3 left-3 right-3 flex items-end justify-between gap-4">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.35em] text-white/70">
                      Recommended
                    </p>
                    <h3 className="mt-1 text-xl font-black">{relatedGame.title}</h3>
                  </div>
                  <span className="rounded-full border border-amber-300/20 bg-amber-400/15 px-3 py-1 text-sm font-semibold text-amber-200">
                    {relatedGame.rating.toFixed(1)}
                  </span>
                </div>
              </div>
              <div className="mt-4 flex items-center justify-between gap-4 text-sm text-white/70">
                <span>{relatedGame.genre}</span>
                <span>{relatedGame.players} players</span>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}