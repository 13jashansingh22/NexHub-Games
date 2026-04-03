import Image from "next/image";
import Link from "next/link";
import { games } from "@/app/data/games";

function slugify(value: string) {
	return value.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-+|-+$/g, "");
}

export default function GameCard() {
	return (
		<>
			<div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-7">
				{games.map((game) => {
					const href = `/game/${slugify(game.title)}`;

					return (
						<Link
							key={game.title}
							href={href}
							className="group relative overflow-hidden rounded-2xl border border-white/20 bg-white/10 shadow-md backdrop-blur-lg transition duration-300 hover:-translate-y-1 hover:border-white/30 hover:bg-white/15 hover:shadow-lg"
						>
							<div className="relative aspect-square overflow-hidden">
								<Image
									src={game.image}
									alt={game.title}
									fill
									sizes="(max-width: 640px) 50vw, (max-width: 768px) 33vw, (max-width: 1024px) 25vw, (max-width: 1280px) 16vw, 14vw"
									className="object-cover transition duration-500 group-hover:scale-105"
								/>
								<div className="absolute inset-0 bg-linear-to-t from-slate-950/85 via-slate-950/20 to-transparent" />
								<span className="absolute left-2 top-2 rounded-full border border-white/20 bg-white/85 px-2 py-0.5 text-[10px] font-semibold text-slate-700 backdrop-blur">
									{game.genre}
								</span>
								<div className="absolute inset-x-0 bottom-0 p-3">
									<div className="rounded-xl border border-white/10 bg-black/25 p-2 backdrop-blur-md transition duration-300 group-hover:bg-black/35">
										<h3 className="text-sm font-bold text-white drop-shadow-md sm:text-base">
											{game.title}
										</h3>
										<p className="mt-1 text-xs font-semibold text-amber-300">
											{game.rating.toFixed(1)} / 5
										</p>
									</div>
								</div>
							</div>
						</Link>
					);
				})}
			</div>
		</>
	);
}
