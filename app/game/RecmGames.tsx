
"use client";

import Image from "next/image";
import Link from "next/link";
import { games } from "@/app/data/games";   
import AdRail from "@/src/components/ads/AdRail";

type RecommGames = {
    game: {
        title: string;
        genre: string;
    };
};
function slugify(value: string) {
  return value.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-+|-+$/g, "");
}

export default function RecmGames({ game }: RecommGames) {
    const relatedGames = games.filter((item) => item.title !== game.title).slice(0, 10);

    return (
    <>
    <section className="relative mx-auto mt-10 max-w-screen-2xl px-6 sm:px-8 lg:px-10">
      <div className="mx-auto w-full max-w-6xl">
        <h2 className="text-2xl font-black">Recommended games</h2>
      </div>
      <AdRail
        loadScript
        className="absolute left-0 top-14 hidden 2xl:block w-40 -translate-x-full pr-6"
      />
      <AdRail
        className="absolute right-0 top-14 hidden 2xl:block w-40 translate-x-full pl-6"
      />

      <div className="mx-auto mt-5 w-full max-w-6xl">
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4 2xl:grid-cols-6">
            {relatedGames.map((relatedGame) => (
              <Link
                key={relatedGame.title}
                href={`/game/${slugify(relatedGame.title)}`}
                className="group overflow-hidden rounded-2xl border border-white/10 bg-white/8 p-2.5 transition hover:-translate-y-1 hover:border-white/20 hover:bg-white/12"
              >
                <div className="relative aspect-4/3 overflow-hidden rounded-xl">
                  <Image
                    src={relatedGame.image}
                    alt={relatedGame.title}
                    fill
                    sizes="(max-width: 1024px) 50vw, (max-width: 1536px) 25vw, 16vw"
                    className="object-cover transition duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/10 to-transparent" />
                  <div className="absolute bottom-2 left-2 right-2 flex items-end justify-between gap-2">
                    <div>
                      <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-white/70">
                        Recommended
                      </p>
                      <h3 className="mt-1 text-sm font-black leading-tight md:text-base">{relatedGame.title}</h3>
                    </div>
                    <span className="rounded-full border border-amber-300/20 bg-amber-400/15 px-2 py-0.5 text-[11px] font-semibold text-amber-200">
                      {relatedGame.rating.toFixed(1)}
                    </span>
                  </div>
                </div>
                <div className="mt-2 flex items-center justify-between gap-3 text-xs text-white/70">
                  <span>{relatedGame.genre}</span>
                  <span>{relatedGame.players} players</span>
                </div>
              </Link>
            ))}
          </div>
      </div>
    </section>
      </>
      );
}