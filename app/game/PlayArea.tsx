
type PlayAreaProps = {
  game: {
    title: string;
    url: string;
  };
};

export default function PlayArea({ game }: PlayAreaProps) {
  return (
    <section className="relative h-screen border-b border-white/10 bg-[#06150f]">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.12),transparent_38%),linear-gradient(180deg,rgba(14,38,28,0.8),rgba(4,15,10,0.96))]" />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-size-[64px_64px] opacity-20" />

      <div className="relative flex h-full items-center justify-center p-4 sm:p-6">
        <div className="h-full w-full overflow-hidden rounded-3xl border border-white/12 bg-[rgba(255,255,255,0.03)] shadow-2xl">
          <iframe
            src={game.url}
            title={game.title}
            className="h-full w-full border-0"
            loading="eager"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          />
        </div>
      </div>
    </section>
  )
};