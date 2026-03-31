import Image from "next/image";

type GameCardProps = {
	title: string;
	imageSrc: string;
};

export default function GameCard({ title, imageSrc }: GameCardProps) {
	return (
		<article className="group overflow-hidden rounded-2xl border border-white/20 bg-white/10 backdrop-blur-lg shadow-lg transition-all duration-300 hover:-translate-y-1 hover:border-[#4CAF50]/50 hover:shadow-[0_16px_36px_rgba(12,39,28,0.45)]">
			<div className="relative aspect-16/10 w-full bg-[#1E3A2F]">
				<Image
					src={imageSrc}
					alt={title}
					fill
					className="object-cover transition-transform duration-500 group-hover:scale-105"
					sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
				/>

				<div className="absolute inset-0 bg-linear-to-t from-[#10231c]/85 via-[#10231c]/30 to-transparent" />

				<h3 className="absolute bottom-3 left-3 right-3 line-clamp-2 text-lg font-semibold text-white">
					{title}
				</h3>
			</div>
		</article>
	);
}
