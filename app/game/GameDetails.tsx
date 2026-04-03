
type DetailProps = {
  game: {
    title: string;
    url: string;
    rating: number;
    players: number;
    genre: string;
    Desc: string;

  };
};

export default function GameDetails({ game }: DetailProps) {
    return (<>
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
      </>
      );
}


export function GameDesc({ game }: DetailProps) {
  return (
        <section className="mx-auto mt-8 max-w-7xl px-6 sm:px-8 lg:px-10">
        <div className="rounded-3xl border border-white/10 bg-white/6 p-6 backdrop-blur-xl">
          <p className="text-xs font-semibold uppercase tracking-[0.35em] text-white/45">
            Game info
          </p>
          <p className="mt-3 max-w-3xl text-sm leading-6 text-white/75">
            {game.Desc}
          </p>
        </div>
      </section>
      );
}