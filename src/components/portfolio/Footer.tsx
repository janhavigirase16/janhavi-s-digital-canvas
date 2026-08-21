import { Github, Linkedin, Mail } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-border py-10">
      <div className="mx-auto flex w-full max-w-6xl flex-col items-center justify-between gap-6 px-5 sm:px-8 md:flex-row">
        <div>
          <p className="font-display text-sm font-semibold tracking-[0.2em]">
            JANHAVI<span className="text-primary">.</span>G
          </p>
          <p className="mt-2 text-xs text-muted-foreground">
            Web Developer · AI/ML Enthusiast · © {new Date().getFullYear()}
          </p>
        </div>

        <nav aria-label="Footer" className="flex flex-wrap justify-center gap-6 text-sm">
          <a href="#about" className="text-muted-foreground hover:text-foreground">
            About
          </a>
          <a href="#projects" className="text-muted-foreground hover:text-foreground">
            Projects
          </a>
          <a href="#experience" className="text-muted-foreground hover:text-foreground">
            Experience
          </a>
          <a href="#contact" className="text-muted-foreground hover:text-foreground">
            Contact
          </a>
        </nav>

        <div className="flex gap-3">
          <a
            href="https://github.com/janhavigirase"
            target="_blank"
            rel="noreferrer noopener"
            aria-label="GitHub profile"
            className="text-muted-foreground transition-colors hover:text-primary"
          >
            <Github className="size-5" />
          </a>
          <a
            href="https://www.linkedin.com/in/janhavigirase"
            target="_blank"
            rel="noreferrer noopener"
            aria-label="LinkedIn profile"
            className="text-muted-foreground transition-colors hover:text-primary"
          >
            <Linkedin className="size-5" />
          </a>
          <a
            href="mailto:janhavi.girase@example.com"
            aria-label="Email Janhavi"
            className="text-muted-foreground transition-colors hover:text-primary"
          >
            <Mail className="size-5" />
          </a>
        </div>
      </div>
    </footer>
  );
}
