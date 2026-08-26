import { ExternalLink, Github } from "lucide-react";
import { Section } from "./Section";
import { Reveal } from "./Reveal";

const projects = [
  {
    title: "InsightBoard",
    description:
      "An analytics dashboard that ingests CSV datasets, runs cleaning pipelines in Python and renders interactive charts with live filtering.",
    tech: ["Python", "Pandas", "Node.js", "PostgreSQL"],
    github: "https://github.com/janhavigirase",
    demo: "https://github.com/janhavigirase",
  },
  {
    title: "SmartResume AI",
    description:
      "A resume analyser that scores documents against a job description using NLP keyword extraction and returns actionable improvement tips.",
    tech: ["Python", "scikit-learn", "Flask", "Docker"],
    github: "https://github.com/janhavigirase",
    demo: "https://github.com/janhavigirase",
  },
  {
    title: "TaskFlow",
    description:
      "A collaborative task manager with authentication, realtime updates and row-level security policies backed by Supabase.",
    tech: ["React", "TypeScript", "Supabase", "Tailwind CSS"],
    github: "https://github.com/janhavigirase",
    demo: "https://github.com/janhavigirase",
  },
  {
    title: "CampusConnect API",
    description:
      "A containerised REST API for student events with role-based access, SQL migrations and documented endpoints.",
    tech: ["Node.js", "Express", "MySQL", "Docker"],
    github: "https://github.com/janhavigirase",
    demo: "https://github.com/janhavigirase",
  },
];

export function Projects() {
  return (
    <Section
      id="projects"
      eyebrow="Projects"
      title="Selected work"
      description="Projects where I owned the idea, the data model and the interface end to end."
    >
      <div className="grid gap-6 lg:grid-cols-2">
        {projects.map((project, i) => (
          <Reveal key={project.title} delay={i * 90}>
            <article className="glass-card sheen flex h-full flex-col rounded-3xl p-7">
              <div className="flex items-start justify-between gap-4">
                <h3 className="text-xl font-semibold">{project.title}</h3>
                <span className="font-mono text-xs text-muted-foreground">
                  0{i + 1}
                </span>
              </div>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                {project.description}
              </p>
              <ul className="mt-5 flex flex-wrap gap-2">
                {project.tech.map((t) => (
                  <li
                    key={t}
                    className="rounded-full bg-primary/10 px-3 py-1 font-mono text-[11px] uppercase tracking-wide text-primary"
                  >
                    {t}
                  </li>
                ))}
              </ul>
              <div className="mt-7 flex flex-wrap items-center gap-3 pt-1">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="inline-flex items-center gap-2 rounded-full border border-glass-border px-4 py-2 text-sm transition-colors hover:border-primary/50 hover:text-primary"
                >
                  <Github className="size-4" />
                  GitHub
                </a>
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="inline-flex items-center gap-2 rounded-full bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground transition-transform hover:-translate-y-0.5"
                >
                  <ExternalLink className="size-4" />
                  Live Demo
                </a>
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
