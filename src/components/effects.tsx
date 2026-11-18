"use client";

import { useEffect } from "react";

/**
 * One tiny effect bundle for the whole site:
 * - .js flag + IntersectionObserver reveals (progressive enhancement)
 * - reading-progress hairline (fixed, accent, tied to scroll)
 * - thin cursor-follow ring on fine pointers only
 *
 * Every effect is optional: content is always readable without JS or
 * without motion. Reveals start hidden only after the .js flag proves
 * JS is actually running.
 */
export default function SiteEffects() {
  useEffect(() => {
    const cleanups: Array<() => void> = [];

    // ── Scroll reveals ──────────────────────────────────────────
    if ("IntersectionObserver" in window) {
      document.documentElement.classList.add("js");
      const io = new IntersectionObserver(
        (entries) => {
          for (const entry of entries) {
            if (entry.isIntersecting) {
              entry.target.classList.add("is-inview");
              io.unobserve(entry.target);
            }
          }
        },
        { threshold: 0.15, rootMargin: "0px 0px -8% 0px" }
      );
      document.querySelectorAll("[data-reveal]").forEach((el) => io.observe(el));
      cleanups.push(() => io.disconnect());
    }

    // ── Reading progress hairline ───────────────────────────────
    const bar = document.getElementById("progress-hair");
    const onScroll = () => {
      if (!bar) return;
      const max = document.documentElement.scrollHeight - window.innerHeight;
      const pct = max > 0 ? Math.min(100, (window.scrollY / max) * 100) : 0;
      bar.style.width = pct.toFixed(2) + "%";
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    cleanups.push(() => window.removeEventListener("scroll", onScroll));

    // ── Cursor ring (fine pointer, no reduced motion) ───────────
    const ring = document.getElementById("cursor-ring");
    const finePointer = window.matchMedia("(hover: hover) and (pointer: fine)");
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (ring && finePointer.matches && !reduceMotion.matches) {
      let x = -100;
      let y = -100;
      let tx = -100;
      let ty = -100;
      let raf: number | null = null;
      let shown = false;

      const onMove = (ev: PointerEvent) => {
        tx = ev.clientX;
        ty = ev.clientY;
        if (!shown) {
          shown = true;
          ring.style.opacity = "1";
        }
      };

      const loop = () => {
        x += (tx - x) * 0.18;
        y += (ty - y) * 0.18;
        ring.style.transform = `translate3d(${x}px, ${y}px, 0) translate(-50%, -50%)`;
        raf = requestAnimationFrame(loop);
      };

      window.addEventListener("pointermove", onMove, { passive: true });
      raf = requestAnimationFrame(loop);
      cleanups.push(() => {
        window.removeEventListener("pointermove", onMove);
        if (raf !== null) cancelAnimationFrame(raf);
      });
    }

    return () => {
      for (const dispose of cleanups) dispose();
    };
  }, []);

  return (
    <>
      <div id="progress-hair" className="progress-hair" aria-hidden="true" />
      <div id="cursor-ring" className="cursor-ring" aria-hidden="true" />
    </>
  );
}
