import { Brain, Code2, Database, Sparkles } from "lucide-react";
import { Section } from "./Section";
import { Reveal } from "./Reveal";

const pillars = [
  {
    icon: Code2,
    title: "Frontend craft",
    body: "Semantic, responsive interfaces with HTML, CSS and modern JavaScript tooling.",
  },
  {
    icon: Database,
    title: "Backend & data",
    body: "Node.js APIs, SQL schema design, Supabase and containerised workflows with Docker.",
  },
  {
    icon: Brain,
    title: "AI & ML curiosity",
    body: "Python notebooks, model experimentation and turning messy datasets into decisions.",
  },
  {
    icon: Sparkles,
    title: "Creative edge",
    body: "Content creation and digital marketing instincts that shape how products communicate.",
  },
];

export function About() {
  return (
    <Section
      id="about"
      eyebrow="About me"
      title="A developer who thinks in systems and stories"
      description="I enjoy the full arc of a product — from a rough idea and a database sketch to a polished, accessible interface. My strongest work happens where engineering, analysis and design overlap."
    >
      <div className="grid gap-6 md:grid-cols-2">
        {pillars.map((pillar, i) => (
          <Reveal key={pillar.title} delay={i * 90}>
            <article className="glass-card sheen h-full rounded-3xl p-7">
              <span className="inline-flex rounded-2xl bg-primary/10 p-3 text-primary">
                <pillar.icon className="size-5" />
              </span>
              <h3 className="mt-5 text-lg font-semibold">{pillar.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{pillar.body}</p>
            </article>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
