import { createFileRoute } from "@tanstack/react-router";
import { Toaster } from "@/components/ui/sonner";
import { Navbar } from "@/components/portfolio/Navbar";
import { Hero } from "@/components/portfolio/Hero";
import { About } from "@/components/portfolio/About";
import { Skills } from "@/components/portfolio/Skills";
import { Projects } from "@/components/portfolio/Projects";
import { Interests } from "@/components/portfolio/Interests";
import { Experience } from "@/components/portfolio/Experience";
import { Contact } from "@/components/portfolio/Contact";
import { Footer } from "@/components/portfolio/Footer";

const title = "Janhavi Girase — Web Developer & AI/ML Enthusiast";
const description =
  "Portfolio of Janhavi Girase: web development, AI/ML and data projects built with Python, Node.js, SQL, Docker and Supabase.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Person",
          name: "Janhavi Girase",
          jobTitle: "Web Developer & AI/ML Enthusiast",
          knowsAbout: ["Web Development", "Artificial Intelligence", "Machine Learning", "Data Analysis"],
          sameAs: [
            "https://github.com/janhavigirase",
            "https://www.linkedin.com/in/janhavigirase",
          ],
        }),
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Interests />
        <Experience />
        <Contact />
      </main>
      <Footer />
      <Toaster />
    </div>
  );
}
