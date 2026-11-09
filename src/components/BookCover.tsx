import type { Book } from "../data/books";
import { Sparkle } from "./Decor";

export default function BookCover({ book, size = "md", className = "" }: { book: Book; size?: "md" | "lg"; className?: string }) {
  const lg = size === "lg";
  const base = lg ? "text-[2.1rem] sm:text-[2.6rem]" : "text-[1.55rem] sm:text-[1.75rem]";

  const title = () => {
    switch (book.titleStyle) {
      case "stack":
        return (
          <div className="text-center">
            <span className={`block font-display font-medium uppercase tracking-[0.25em] ${lg ? "text-sm" : "text-[0.65rem]"}`} style={{ color: book.ink }}>
              {book.titleLines[0]}
            </span>
            <span
              className={`mt-1 inline-block rounded-2xl bg-sun px-3 py-0.5 font-display font-bold leading-none ${base}`}
              style={{ color: book.ink, transform: "rotate(-3deg)", boxShadow: "3px 4px 0 rgba(38,54,83,.85)" }}
            >
              {book.titleLines[1]}
            </span>
          </div>
        );
      case "script":
        return (
          <div className="text-center" style={{ textShadow: "0 2px 0 rgba(38,54,83,.45), 0 6px 18px rgba(38,54,83,.4)" }}>
            <span className={`block font-display font-semibold italic leading-none ${lg ? "text-2xl" : "text-lg"}`} style={{ color: "#FFD2B8" }}>
              {book.titleLines[0]}
            </span>
            <span className={`block font-display font-bold leading-none ${lg ? "text-5xl" : "text-[2.1rem]"}`} style={{ color: book.ink }}>
              {book.titleLines[1]}
            </span>
          </div>
        );
      case "arc":
        return (
          <div className="text-center">
            <span className={`block font-display font-semibold leading-none ${lg ? "text-xl" : "text-sm"}`} style={{ color: book.ink }}>
              {book.titleLines[0]}
            </span>
            <span
              className={`mt-1 block font-display font-bold leading-[0.95] ${lg ? "text-[2.2rem]" : "text-[1.45rem]"}`}
              style={{ color: "#fff", WebkitTextStroke: `${lg ? 1.5 : 1}px #263653`, textShadow: "2px 3px 0 #263653" }}
            >
              {book.titleLines[1]}
            </span>
          </div>
        );
      case "glow":
        return (
          <div className="text-center">
            <span className={`block font-display font-medium uppercase tracking-[0.3em] text-ivory/90 ${lg ? "text-sm" : "text-[0.62rem]"}`}>
              {book.titleLines[0]}
            </span>
            <span
              className={`block font-display font-semibold leading-none ${base}`}
              style={{ color: book.ink, textShadow: "0 0 18px rgba(255,214,107,.75), 0 2px 0 rgba(38,54,83,.6)" }}
            >
              {book.titleLines[1]}
            </span>
          </div>
        );
    }
  };

  return (
    <div className={`book-cover relative aspect-[2/3] overflow-hidden rounded-[6px_18px_18px_6px] bg-midnight ${className}`}>
      <img src={book.cover} alt={`Cover illustration for ${book.title} (demo concept)`} className="absolute inset-0 h-full w-full object-cover" loading="lazy" />
      <div className="absolute inset-x-0 top-0 h-1/2 bg-gradient-to-b from-black/15 to-transparent" />
      <div className={`absolute inset-x-0 flex justify-center px-4 ${lg ? "top-8" : "top-5"}`}>{title()}</div>
      <div className={`absolute inset-x-0 bottom-0 flex items-center justify-center gap-1.5 bg-gradient-to-t from-black/45 to-transparent pb-3 pt-8 font-display font-medium text-white ${lg ? "text-sm" : "text-[0.65rem]"} tracking-[0.2em] uppercase`}>
        <Sparkle className="h-2.5 w-2.5" color="#FFD66B" /> Christian <Sparkle className="h-2.5 w-2.5" color="#FFD66B" />
      </div>
      {/* spine highlight */}
      <div className="absolute inset-y-0 left-0 w-3 bg-gradient-to-r from-black/30 via-white/20 to-transparent" />
    </div>
  );
}
