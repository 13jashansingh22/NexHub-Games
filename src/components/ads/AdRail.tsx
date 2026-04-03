"use client";

type AdRailProps = {
  className?: string;
  slot?: string;
  loadScript?: boolean;
};

export default function AdRail({
  className = "",
  slot = "8587146654",
  loadScript = false,
}: AdRailProps) {


  return (
    <div className={className}>
      <div className="sticky top-24 h-fit w-full rounded-2xl border border-white/15 bg-black/15 p-3 backdrop-blur-sm">
        {loadScript ? (
          <script
            async
            src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-6389330671246321"
            crossOrigin="anonymous"
          />
        ) : null}
        <div className="mb-2 text-[10px] uppercase tracking-[0.3em] text-white/45">Advertisement</div>
        <ins
          className="adsbygoogle block min-h-70 w-full rounded-lg border border-dashed border-white/20 bg-white/5"
          style={{ display: "block" }}
          data-ad-client="ca-pub-6389330671246321"
          data-ad-slot={slot}
          data-ad-format="auto"
          data-full-width-responsive="true"
        />
        <script
          dangerouslySetInnerHTML={{
            __html: "(adsbygoogle = window.adsbygoogle || []).push({});",
          }}
        />
      </div>
    </div>
  );
}