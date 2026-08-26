import { BarChart3, Bot, Megaphone, PenTool, Cpu } from "lucide-react";
import { Section } from "./Section";
import { Reveal } from "./Reveal";

const interests = [
  {
    icon: Bot,
    title: "Artificial Intelligence",
    body: "Exploring how intelligent systems can remove friction from everyday products.",
  },
  {
    icon: Cpu,
    title: "Machine Learning",
    body: "Building and evaluating models — regression, classification and NLP experiments.",
  },
  {
    icon: BarChart3,
    title: "Data Analysis",
    body: "Cleaning, querying and visualising data to find the story behind the numbers.",
  },
  {
    icon: PenTool,
    title: "Content Creation",
    body: "Writing and designing technical content that makes complex ideas approachable.",
  },
  {
    icon: Megaphone,
    title: "Digital Marketing",
    body: "Understanding audiences, funnels and analytics so products actually reach people.",
  },
];

export function Interests() {
  return (
    <Section
      id="interests"
      eyebrow="Interests"
      title="Technical, analytical and creative"
      description="The mix that shapes how I approach problems — engineer first, analyst second, communicator throughout."
    >
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {interests.map((item, i) => (
          <Reveal key={item.title} delay={i * 80}>
            <article className="glass-card sheen h-full rounded-3xl p-7">
              <item.icon className="size-6 text-accent" />
              <h3 className="mt-5 text-lg font-semibold">{item.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.body}</p>
            </article>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
