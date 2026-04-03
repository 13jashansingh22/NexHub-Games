
import Link from "next/link";

export default async function GameError(){
    return(
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
    
  