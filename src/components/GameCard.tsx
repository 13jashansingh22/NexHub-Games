import Image from "next/image";

type Game = {
	title: string;
	image: string;
	genre: string;
	rating: number;
	players: string;
};

const games: Game[] = [
	{
		title: "Game 1",
		image: "https://via.placeholder.com/600x400",
		genre: "Action",
		rating: 4.6,
		players: "1-4",
	},
	{
		title: "Game 2",
		image: "https://via.placeholder.com/600x400",
		genre: "Adventure",
		rating: 4.8,
		players: "1-2",
	},
	{
		title: "Game 3",
		image: "https://source.unsplash.com/600x400/?retro-game",
		genre: "Racing",
		rating: 4.4,
		players: "2-8",
	},
];

export default function GameCard() {
	return (<>
			<div className="mb-8 flex items-end justify-between gap-4">
				<div>
					<h2 className="text-2xl font-extrabold text-slate-900 md:text-3xl">
						Featured Games
					</h2>
				</div>
			</div>

			<div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-7">
				{games.map((game) => (
					<article
						key={game.title}
						className="group relative overflow-hidden rounded-2xl border border-white/20 bg-white/10 shadow-md backdrop-blur-lg transition duration-300 hover:-translate-y-1 hover:shadow-lg"
					>
						<div className="relative aspect-square overflow-hidden">
							<Image
								src={game.image}
								alt={game.title}
								fill
								sizes="(max-width: 640px) 50vw, (max-width: 768px) 33vw, (max-width: 1024px) 25vw, (max-width: 1280px) 16vw, 14vw"
								className="object-cover transition duration-500 group-hover:scale-105"
							/>
							<div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent" />
							<span className="absolute left-2 top-2 rounded-full bg-white/90 px-2 py-0.5 text-[10px] font-semibold text-slate-700 backdrop-blur">
								{game.genre}
							</span>
							<div className="absolute inset-0 flex items-end bg-slate-950/0 p-3 opacity-0 transition duration-300 group-hover:bg-slate-950/45 group-hover:opacity-100">
								<div>
									<h3 className="text-sm font-bold text-white drop-shadow-md">
										{game.title}
									</h3>
									<p className="mt-1 text-xs font-semibold text-amber-300">
										{game.rating.toFixed(1)} / 5
									</p>
								</div>
							</div>
						</div>
					</article>
				))}
			</div>
		</>
	);
}
