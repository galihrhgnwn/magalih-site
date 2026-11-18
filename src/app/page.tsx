import type { CSSProperties } from "react";
import { site, intro, about, now, song, findMe, footer } from "@/lib/content";

// ─── MARQUEE ───────────────────────────────────────────────────
// A slow printed ribbon between the hero and the body. aria-hidden: it is
// rhythm, not content. Two identical halves make the CSS loop seamless.
const WORDS =
  "made slowly  •  made carefully  •  made for people  •  keep it simple  •  be kind  •  ";

function Marquee() {
  return (
    <div className="marquee" aria-hidden="true">
      <div className="marquee-track">
        <span className="marquee-half">{WORDS}</span>
        <span className="marquee-half">{WORDS}</span>
      </div>
    </div>
  );
}

// ─── HERO ───────────────────────────────────────────────────────
// The name set like a masthead: three stacked lines with an intentional
// staircase indent. Middle line is italic. The status row is a small
// mono block with an accent dot. A registration mark overlaps the top
// right corner, like a print shop's alignment cross.
// DECISION: no nav bar. A business card does not need navigation; the
// page is short and scrolls as one continuous card.
function Hero() {
  return (
    <header className="relative px-6 pt-24 pb-16 sm:px-12 md:px-16 lg:px-24">
      <div className="reg-mark top-8 right-8 sm:top-10 sm:right-12" aria-hidden="true">
        <span />
      </div>

      <p className="field">{site.edition} · {site.cardNo}</p>

      <h1 className="mt-10 sm:mt-12" aria-label={site.name}>
        <span className="name-line name-line-1">Magalih</span>
        <span className="name-line name-line-2">Irham</span>
        <span className="name-line name-line-3">Gunawan<span className="name-enddot">.</span></span>
      </h1>

      <p className="hero-curiosity">
        {intro.curiosity[0]}
        <br />
        {intro.curiosity[1]}
      </p>

      <div className="hero-status">
        <span className="status-dot" aria-hidden="true" />
        <span>{intro.status}</span>
      </div>
    </header>
  );
}

// ─── ABOUT ─────────────────────────────────────────────────────
// Asymmetric two-column: a narrow meta column with the heading and a
// margin note, then a reading column with a drop cap.
function About() {
  return (
    <section className="px-6 py-14 sm:px-12 md:px-16 lg:px-24" aria-labelledby="about">
      <div className="split" data-reveal>
        <div>
          <h2 className="sec-head" id="about">
            <span className="sec-no">01</span>
            {about.heading}
          </h2>
          <p className="margin-note">{about.marginNote}</p>
        </div>
        <div className="about-body" style={{ "--rv-delay": "90ms" } as CSSProperties}>
          {about.paragraphs.map((p, i) => (
            <p key={i} className={i === 0 ? "dropcap" : undefined}>
              {p}
            </p>
          ))}
          <p className="field mt-8">why a card? because the web is still a good place to introduce yourself, and cards are how introductions happen.</p>
        </div>
      </div>
    </section>
  );
}

// ─── NOW ───────────────────────────────────────────────────────
// A logbook: rows with a mono time on the left, the activity on the
// right, hairline separators. Hover nudges the row and warms the time.
// Each row reveals with a small stagger once in view.
function Now() {
  return (
    <section className="px-6 py-14 sm:px-12 md:px-16 lg:px-24" aria-labelledby="now">
      <div className="max-w-3xl" data-reveal>
        <h2 className="sec-head" id="now">
          <span className="sec-no">02</span>
          {now.heading}
        </h2>
        <p className="field mt-3">{now.sub}</p>

        <ul className="now-list mt-8">
          {now.items.map((item, i) => (
            <li
              key={i}
              className="now-row"
              data-reveal
              style={{ "--rv-delay": `${i * 70}ms` } as CSSProperties}
            >
              <time dateTime={item.time}>{item.time}</time>
              <p>{item.text}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

// ─── SONG ──────────────────────────────────────────────────────
// A custom record sleeve: a rotated ink-black square with the song
// title set in serif and a vinyl-center accent circle that spins
// slowly (the song is on repeat, after all). Beside it, a paper
// panel carries the Spotify embed plus the stamp label.
function SongCard() {
  return (
    <section className="px-6 py-14 sm:px-12 md:px-16 lg:px-24" aria-labelledby="song">
      <div className="max-w-4xl" data-reveal>
        <h2 className="sec-head" id="song">
          <span className="sec-no">03</span>
          {song.heading}
        </h2>

        <div className="song-card mt-8">
          <div className="song-cover">
            <h3>{song.title}</h3>
            <p>{song.artist} · {song.year}</p>
            <div className="vinyl-center spin-slow" />
          </div>

          <div className="song-player">
            <span className="stamp">{song.label}</span>
            <iframe
              src={`https://open.spotify.com/embed/track/${song.spotifyId}?utm_source=generator&theme=1`}
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
              loading="lazy"
              title={`${song.title} - ${song.artist} on Spotify`}
            />
            <p className="player-caption">play it right here, without leaving the card</p>
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── FIND ME ───────────────────────────────────────────────────
// A door list: rows like a table of contents, with a field number, a
// serif label, dotted leaders, and a small arrow that slides in on
// hover. Handles are intentionally hidden; the note does the describing.
// DECISION: Discord is deliberately not a link.
function FindMe() {
  return (
    <section className="px-6 py-14 sm:px-12 md:px-16 lg:px-24" aria-labelledby="findme">
      <div className="max-w-4xl" data-reveal>
        <h2 className="sec-head" id="findme">
          <span className="sec-no">04</span>
          {findMe.heading}
        </h2>
        <p className="field mt-3">{findMe.sub}</p>

        <ul className="door-list mt-8">
          {findMe.items.map((item, i) => {
            const inner = (
              <>
                <span className="door-no">{String(i + 1).padStart(2, "0")}</span>
                <span className="door-label-wrap">
                  <span className="door-label">{item.label}</span>
                  {item.href ? (
                    <svg
                      className="door-arrow"
                      width="15"
                      height="15"
                      viewBox="0 0 16 16"
                      fill="none"
                      aria-hidden="true"
                    >
                      <path
                        d="M3 8h9M8.5 4.5 12 8l-3.5 3.5"
                        stroke="currentColor"
                        strokeWidth="1.3"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  ) : null}
                </span>
                <span className="door-leader" aria-hidden="true" />
                <span className="door-note">{item.note}</span>
              </>
            );
            return (
              <li
                key={i}
                className={`door-row${item.href ? "" : " door-row--plain"}`}
                data-reveal
                style={{ "--rv-delay": `${i * 70}ms` } as CSSProperties}
              >
                {item.href ? (
                  <a
                    href={item.href}
                    className="door-link link-draw"
                    target={item.href.startsWith("http") ? "_blank" : undefined}
                    rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  >
                    {inner}
                  </a>
                ) : (
                  <div className="door-link">{inner}</div>
                )}
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}

// ─── FOOTER ─────────────────────────────────────────────────────
// A quiet back-page colophon, set in mono.
function Footer() {
  return (
    <footer className="px-6 py-12 sm:px-12 md:px-16 lg:px-24">
      <hr className="hairline" />
      <div className="mt-8 flex flex-col gap-2 sm:flex-row sm:items-baseline sm:justify-between">
        <p className="field">{footer.note}</p>
        <p className="field">{footer.copyright}</p>
      </div>
    </footer>
  );
}

export default function Home() {
  return (
    <main>
      <Hero />
      <Marquee />
      <About />
      <Now />
      <SongCard />
      <FindMe />
      <Footer />
    </main>
  );
}
