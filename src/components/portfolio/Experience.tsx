import { Award, Briefcase } from "lucide-react";
import { Section } from "./Section";
import { Reveal } from "./Reveal";

const timeline = [
  {
    period: "2025 — Present",
    title: "Freelance Web Developer",
    org: "Independent",
    body: "Designing and shipping responsive marketing sites and small web apps for local businesses and student communities.",
  },
  {
    period: "2024 — 2025",
    title: "Web Development Intern",
    org: "Student tech collective",
    body: "Built reusable UI components, integrated REST APIs and improved page performance and accessibility scores.",
  },
  {
    period: "2023 — Present",
    title: "AI/ML Self-study Track",
    org: "Personal learning",
    body: "Working through applied machine learning, data wrangling and model evaluation on real public datasets.",
  },
];

const certifications = [
  "Python for Data Science — Course certificate",
  "Machine Learning Foundations — Course certificate",
  "SQL & Relational Databases — Course certificate",
  "Docker Essentials — Course certificate",
  "Digital Marketing Fundamentals — Course certificate",
];

export function Experience() {
  return (
    <Section
      id="experience"
      eyebrow="Experience & certifications"
      title="Learning by building, consistently"
      description="A record of hands-on work alongside structured learning in development, data and AI."
    >
      <div className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
        <div className="grid gap-5">
          {timeline.map((item, i) => (
            <Reveal key={item.title} delay={i * 90}>
              <article className="glass-card rounded-3xl p-7">
                <div className="flex flex-wrap items-center gap-3">
                  <span className="inline-flex rounded-xl bg-accent/10 p-2 text-accent">
                    <Briefcase className="size-4" />
                  </span>
                  <span className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">
                    {item.period}
                  </span>
                </div>
                <h3 className="mt-4 text-lg font-semibold">{item.title}</h3>
                <p className="text-sm text-primary">{item.org}</p>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{item.body}</p>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal delay={120}>
          <div className="glass-card h-full rounded-3xl p-7">
            <h3 className="flex items-center gap-2 text-lg font-semibold">
              <Award className="size-5 text-primary" />
              Certifications
            </h3>
            <ul className="mt-6 space-y-4">
              {certifications.map((cert) => (
                <li key={cert} className="flex gap-3 text-sm text-muted-foreground">
                  <span className="mt-2 size-1.5 shrink-0 rounded-full bg-primary" />
                  {cert}
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </div>
    </Section>
  );
}
