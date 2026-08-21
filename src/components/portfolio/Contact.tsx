import { useState, type FormEvent } from "react";
import { Github, Linkedin, Mail, MapPin, Send } from "lucide-react";
import { toast } from "sonner";
import { Section } from "./Section";
import { Reveal } from "./Reveal";

const EMAIL = "janhavi.girase@example.com";

export function Contact() {
  const [sending, setSending] = useState(false);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    const name = String(data.get("name") ?? "").trim();
    const email = String(data.get("email") ?? "").trim();
    const message = String(data.get("message") ?? "").trim();

    if (!name || !email || !message) {
      toast.error("Please fill in every field.");
      return;
    }

    setSending(true);
    const subject = encodeURIComponent(`Portfolio enquiry from ${name}`);
    const body = encodeURIComponent(`${message}\n\n— ${name}\n${email}`);
    window.location.href = `mailto:${EMAIL}?subject=${subject}&body=${body}`;
    toast.success("Opening your email app with the message ready to send.");
    form.reset();
    setSending(false);
  };

  return (
    <Section
      id="contact"
      eyebrow="Contact"
      title="Let's build something together"
      description="Open to internships, freelance projects and collaborations in web development, AI and data."
    >
      <div className="grid gap-6 lg:grid-cols-[0.85fr_1.15fr]">
        <Reveal>
          <div className="glass-card h-full rounded-3xl p-7">
            <h3 className="text-lg font-semibold">Reach out directly</h3>
            <ul className="mt-6 space-y-5 text-sm">
              <li className="flex items-center gap-3">
                <Mail className="size-4 text-primary" />
                <a href={`mailto:${EMAIL}`} className="hover:text-primary">
                  {EMAIL}
                </a>
              </li>
              <li className="flex items-center gap-3 text-muted-foreground">
                <MapPin className="size-4 text-primary" />
                India · Available remotely
              </li>
            </ul>
            <div className="rule-line my-7" />
            <div className="flex gap-3">
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
            </div>
          </div>
        </Reveal>

        <Reveal delay={120}>
          <form onSubmit={handleSubmit} className="glass-card rounded-3xl p-7">
            <div className="grid gap-5 sm:grid-cols-2">
              <div className="grid gap-2">
                <label htmlFor="name" className="text-sm font-medium">
                  Name
                </label>
                <input
                  id="name"
                  name="name"
                  required
                  autoComplete="name"
                  className="rounded-xl border border-input bg-secondary/40 px-4 py-3 text-sm outline-none transition-colors focus:border-primary/60"
                  placeholder="Your name"
                />
              </div>
              <div className="grid gap-2">
                <label htmlFor="email" className="text-sm font-medium">
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  autoComplete="email"
                  className="rounded-xl border border-input bg-secondary/40 px-4 py-3 text-sm outline-none transition-colors focus:border-primary/60"
                  placeholder="you@company.com"
                />
              </div>
            </div>
            <div className="mt-5 grid gap-2">
              <label htmlFor="message" className="text-sm font-medium">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={5}
                className="resize-y rounded-xl border border-input bg-secondary/40 px-4 py-3 text-sm outline-none transition-colors focus:border-primary/60"
                placeholder="Tell me about the role or project…"
              />
            </div>
            <button
              type="submit"
              disabled={sending}
              className="mt-6 inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-transform hover:-translate-y-0.5 disabled:opacity-60"
            >
              <Send className="size-4" />
              Send message
            </button>
          </form>
        </Reveal>
      </div>
    </Section>
  );
}
