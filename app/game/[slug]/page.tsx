import Image from "next/image";
import Link from "next/link";
import { games } from "@/app/data/games";

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
      <main className="relative z-10 flex min-h-screen items-center justify-center px-6 py-12 text-white">
        <div className="max-w-md rounded-3xl border border-white/15 bg-white/8 p-8 text-center shadow-2xl backdrop-blur-xl">
          <p className="text-sm font-semibold uppercase tracking-[0.35em] text-rose-300">
            Missing game
          </p>
          <h1 className="mt-4 text-3xl font-black">Game Not Found</h1>
          <p className="mt-3 text-sm text-white/70">
            The title in the URL does not match any item in the current game list.
          </p>
          <Link
            href="/"
            className="mt-6 inline-flex items-center justify-center rounded-full bg-white px-5 py-3 text-sm font-bold text-slate-900 transition hover:scale-[1.02]"
          >
            Back to home
          </Link>
        </div>
      </main>
    );
  }

  const relatedGames = games.filter((item) => item.title !== game.title).slice(0, 2);

  return (
    <main className="relative z-10 w-full text-white">
      <section className="relative h-screen border-b border-white/10 bg-[#06150f]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.12),transparent_38%),linear-gradient(180deg,rgba(14,38,28,0.8),rgba(4,15,10,0.96))]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-size-[64px_64px] opacity-20" />

        <div className="relative flex h-full items-center justify-center p-4 sm:p-6">
          <div className="flex h-full w-full items-center justify-center rounded-3xl border border-white/12 bg-[rgba(255,255,255,0.03)] shadow-2xl">
            <div className="text-center">
              <div style={{ height: "100vh", width: "100vw", overflow: "hidden" }}>
                <iframe
                src={game.url}
                width="100%"
                height="100%"
                style={{ border: "none" }}
                allowFullScreen
                />
            </div>
              <h1 className="mt-4 text-3xl font-black sm:text-5xl">{game.title}</h1>
            </div>
          </div>
        </div>
      </section>

      <section id="details" className="mx-auto mt-8 grid w-full max-w-7xl gap-4 px-6 md:grid-cols-4 sm:px-8 lg:px-10">
        <div className="rounded-3xl border border-white/10 bg-white/6 p-5 backdrop-blur-xl">
          <p className="text-xs uppercase tracking-[0.35em] text-white/45">Game</p>
          <h2 className="mt-2 text-xl font-black">{game.title}</h2>
        </div>
        <div className="rounded-3xl border border-white/10 bg-white/6 p-5 backdrop-blur-xl">
          <p className="text-xs uppercase tracking-[0.35em] text-white/45">Rating</p>
          <h2 className="mt-2 text-xl font-black text-amber-300">{game.rating.toFixed(1)}</h2>
        </div>
        <div className="rounded-3xl border border-white/10 bg-white/6 p-5 backdrop-blur-xl">
          <p className="text-xs uppercase tracking-[0.35em] text-white/45">Players</p>
          <h2 className="mt-2 text-xl font-black">{game.players}</h2>
        </div>
        <div className="rounded-3xl border border-white/10 bg-white/6 p-5 backdrop-blur-xl">
          <p className="text-xs uppercase tracking-[0.35em] text-white/45">Genre</p>
          <h2 className="mt-2 text-xl font-black">{game.genre}</h2>
        </div>
      </section>

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