import authorImg from "../assets/author.jpg";
import { BookIcon, Butterfly, Eyebrow, Sparkle, Star, Wave } from "./Decor";

const highlights = [
  {
    icon: "🎨",
    color: "#FFD66B",
    title: "Imagination & Creativity",
    text: "Stories that invite children to picture new worlds, ask big questions, and create their own adventures.",
  },
  {
    icon: "💛",
    color: "#FF947E",
    title: "Stories with Heart",
    text: "Gentle themes of friendship, kindness, courage and belonging that families can return to again and again.",
  },
  {
    icon: "🌱",
    color: "#A8DDBB",
    title: "Learning Through Wonder",
    text: "Read-aloud rhythms and rich illustrations that nurture early literacy, curiosity and a lifelong love of books.",
  },
];

export default function About() {
  return (
    <section id="about" className="relative">
      <Wave fill="#FFE9DC" />
      <div className="paper relative overflow-hidden bg-[#FFE9DC] pb-24 pt-10 md:pb-32">
        <div className="pointer-events-none absolute -right-32 top-20 h-96 w-96 rounded-full bg-sun/40 blur-3xl" />
        <div className="pointer-events-none absolute -left-20 bottom-10 h-80 w-80 rounded-full bg-lavender/40 blur-3xl" />

        <div className="relative mx-auto grid max-w-7xl items-center gap-16 px-5 md:px-8 lg:grid-cols-2">
          {/* Portrait */}
          <div className="reveal relative mx-auto w-full max-w-[520px]">
            <div className="absolute -left-6 -top-6 h-full w-full rounded-[45%_55%_50%_50%/55%_45%_55%_45%] bg-sky" />
            <div className="absolute -bottom-5 -right-5 h-full w-full rounded-[55%_45%_45%_55%/45%_55%_45%_55%] bg-mint/80" />
            <div className="relative overflow-hidden rounded-[48%_52%_46%_54%/52%_46%_54%_48%] border-8 border-white shadow-2xl">
              <img src={authorImg} alt="Illustrated cozy writing nook: a placeholder until Christian's portrait is added" className="aspect-square w-full object-cover" loading="lazy" />
            </div>

            <div className="absolute bottom-6 left-1/2 w-max -translate-x-1/2 rounded-full bg-white/95 px-4 py-2 text-xs font-extrabold uppercase tracking-wider text-midnight shadow-lg">
              📷 Author portrait placeholder
            </div>

            <div className="absolute -right-2 top-4 animate-float rounded-3xl bg-midnight p-4 text-ivory shadow-xl md:-right-8">
              <BookIcon className="w-10" />
              <p className="mt-1 font-display text-sm font-semibold">Writer & storyteller</p>
            </div>
            <Butterfly className="absolute -left-4 bottom-24 w-10 animate-flutter" color="#C9B8F5" />
            <Star className="absolute left-10 -top-10 w-10 animate-twinkle" />
          </div>

          {/* Copy */}
          <div>
            <div className="reveal">
              <Eyebrow color="#A8DDBB">Meet Christian</Eyebrow>
              <h2 className="mt-5 font-display text-4xl font-semibold leading-[1.05] tracking-tight text-midnight sm:text-5xl lg:text-[3.6rem]">
                Every Great Adventure Begins With a <span className="text-coral">Story.</span>
              </h2>
            </div>
            <p className="reveal mt-7 text-xl leading-relaxed text-midnight/80">
              Behind every story is a little imagination and a love for bringing ideas to life. Christian writes
              children's picture books designed to spark curiosity, inspire creativity, and give young readers stories
              they can treasure.
            </p>
            <p className="reveal mt-4 text-lg leading-relaxed text-midnight/65">
              From cozy bedtime tales to sky-high adventures, each book is crafted to be read aloud, shared, and
              remembered, the kind of story a child asks for “just one more time.”{" "}
              <span className="italic text-midnight/45">(Biography placeholder: replace with Christian's own words.)</span>
            </p>

            <blockquote className="reveal relative mt-8 rounded-3xl bg-white/80 p-6 shadow-sm ring-1 ring-midnight/5">
              <Sparkle className="absolute -left-2 -top-2 w-6" color="#FF947E" />
              <p className="font-display text-xl leading-snug text-midnight">
                “I write for the child who reads under the covers with a flashlight, and for the grown-up who still
                remembers how that felt.”
              </p>
              <footer className="mt-3 text-sm font-bold text-midnight/55">Christian · sample quote placeholder</footer>
            </blockquote>
          </div>
        </div>

        {/* Highlights */}
        <div className="relative mx-auto mt-20 grid max-w-7xl gap-6 px-5 md:grid-cols-3 md:px-8">
          {highlights.map((h, i) => (
            <div
              key={h.title}
              className="reveal group relative overflow-hidden rounded-[2rem] bg-white p-8 shadow-[0_20px_50px_-30px_rgba(38,54,83,0.5)] transition-transform duration-500 hover:-translate-y-2"
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full opacity-40 transition-transform duration-700 group-hover:scale-150" style={{ background: h.color }} />
              <span className="relative grid h-16 w-16 place-items-center rounded-2xl text-3xl shadow-inner transition-transform duration-500 group-hover:rotate-12" style={{ background: h.color }}>
                {h.icon}
              </span>
              <h3 className="relative mt-6 font-display text-2xl font-semibold text-midnight">{h.title}</h3>
              <p className="relative mt-3 leading-relaxed text-midnight/70">{h.text}</p>
            </div>
          ))}
        </div>
      </div>
      <Wave fill="#FFE9DC" flip className="bg-ivory" />
    </section>
  );
}
