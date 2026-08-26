import { Section } from "./Section";
import { Reveal } from "./Reveal";

const groups = [
  {
    title: "Languages",
    items: ["Python", "JavaScript", "SQL", "HTML5", "CSS3"],
  },
  {
    title: "Backend & data",
    items: ["Node.js", "REST APIs", "Supabase", "PostgreSQL", "MySQL", "Schema design"],
  },
  {
    title: "Tools & platforms",
    items: ["Docker", "Git & GitHub", "Tailwind CSS", "Pandas", "Jupyter", "Vercel"],
  },
];

export function Skills() {
  return (
    <Section
      id="skills"
      eyebrow="Skills"
      title="The stack I build with"
      description="A practical toolkit spanning the browser, the server and the data layer."
    >
      <div className="grid gap-6 lg:grid-cols-3">
        {groups.map((group, i) => (
          <Reveal key={group.title} delay={i * 100}>
            <div className="glass-card sheen h-full rounded-3xl p-7">
              <h3 className="font-mono text-xs uppercase tracking-[0.3em] text-primary">
                {group.title}
              </h3>
              <ul className="mt-6 flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <li
                    key={item}
                    className="rounded-full border border-glass-border bg-secondary/40 px-3.5 py-1.5 text-sm text-foreground/90 lift hover:border-primary/50 hover:text-primary"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
