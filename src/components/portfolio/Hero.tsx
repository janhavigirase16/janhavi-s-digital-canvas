import { ArrowUpRight, Download, Github, Linkedin, Mail } from "lucide-react";
import portrait from "@/assets/janhavi-portrait.jpg";
import { Reveal } from "./Reveal";

const stats = [
  { value: "10+", label: "Projects built" },
  { value: "6+", label: "Core technologies" },
  { value: "AI/ML", label: "Focus area" },
];

export function Hero() {
  return (
    <section id="top" className="hero-aurora relative overflow-hidden pb-20 pt-32 sm:pt-40">
      <div className="mx-auto grid w-full max-w-6xl items-center gap-14 px-5 sm:px-8 lg:grid-cols-[1.15fr_0.85fr]">
        <div>
          <Reveal>
            <span className="glass inline-flex items-center gap-2 rounded-full px-4 py-1.5 font-mono text-xs uppercase tracking-[0.25em] text-primary">
              <span className="size-1.5 rounded-full bg-primary" />
              Open to internships
            </span>
          </Reveal>

          <Reveal delay={80}>
            <h1 className="mt-7 text-4xl font-semibold leading-[1.08] sm:text-5xl lg:text-6xl">
              Building Modern Web Experiences with{" "}
              <span className="text-gradient">Code, AI &amp; Data</span>
            </h1>
          </Reveal>

          <Reveal delay={160}>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
              I'm Janhavi Girase — an aspiring web developer and AI/ML enthusiast. I design and
              build fast, accessible interfaces, wire them to reliable backends and databases, and
              use data to make products smarter.
            </p>
          </Reveal>

          <Reveal delay={240}>
            <div className="mt-9 flex flex-wrap items-center gap-3">
              <a
                href="#projects"
                className="group inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-transform hover:-translate-y-0.5"
              >
                View Projects
                <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 rounded-full border border-glass-border px-6 py-3 text-sm font-semibold transition-colors hover:border-primary/50 hover:text-primary"
              >
                <Mail className="size-4" />
                Contact Me
              </a>
              <a
                href="/janhavi-girase-resume.pdf"
                download
                className="inline-flex items-center gap-2 rounded-full px-4 py-3 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
              >
                <Download className="size-4" />
                Resume
              </a>
            </div>
          </Reveal>

          <Reveal delay={320}>
            <div className="mt-10 flex items-center gap-4">
              <a
                href="https://github.com/janhavigirase"
                target="_blank"
                rel="noreferrer noopener"
                aria-label="GitHub profile"
                className="glass rounded-xl p-2.5 text-muted-foreground transition-colors hover:text-primary"
              >
                <Github className="size-5" />
              </a>
              <a
                href="https://www.linkedin.com/in/janhavigirase"
                target="_blank"
                rel="noreferrer noopener"
                aria-label="LinkedIn profile"
                className="glass rounded-xl p-2.5 text-muted-foreground transition-colors hover:text-primary"
              >
                <Linkedin className="size-5" />
              </a>
              <div className="rule-line flex-1" />
            </div>
          </Reveal>

          <Reveal delay={400}>
            <dl className="mt-10 grid max-w-lg grid-cols-3 gap-4">
              {stats.map((stat) => (
                <div key={stat.label} className="glass-card rounded-2xl px-4 py-5">
                  <dt className="sr-only">{stat.label}</dt>
                  <dd className="font-display text-2xl font-semibold text-primary">{stat.value}</dd>
                  <dd className="mt-1 text-xs text-muted-foreground">{stat.label}</dd>
                </div>
              ))}
            </dl>
          </Reveal>
        </div>

        <Reveal delay={200} className="relative mx-auto w-full max-w-sm">
          <div className="absolute -inset-6 rounded-[2.5rem] bg-primary/10 blur-3xl" aria-hidden />
          <div className="glass-card relative overflow-hidden rounded-[2rem] p-2">
            <img
              src={portrait}
              alt="Portrait of Janhavi Girase, web developer and AI/ML enthusiast"
              width={912}
              height={1104}
              className="h-full w-full rounded-[1.5rem] object-cover"
            />
            <div className="glass absolute bottom-5 left-5 right-5 rounded-2xl px-4 py-3">
              <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-primary">
                Currently
              </p>
              <p className="mt-1 text-sm text-foreground">
                Learning ML systems &amp; backend architecture
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
