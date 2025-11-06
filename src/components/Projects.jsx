import { ExternalLink } from "lucide-react";

const demoProjects = [
  {
    title: "Realtime Chat App",
    description: "WebSocket-powered chat with rooms, presence, and emoji reactions.",
    tags: ["React", "FastAPI", "WebSocket"],
    link: "#",
  },
  {
    title: "E-commerce Starter",
    description: "Headless storefront with product search and checkout flow.",
    tags: ["Next.js", "MongoDB", "Stripe"],
    link: "#",
  },
  {
    title: "3D Portfolio",
    description: "Interactive 3D hero using Spline and smooth scroll animations.",
    tags: ["Spline", "Framer Motion", "Tailwind"],
    link: "#",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-20 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10">
          <h2 className="text-3xl sm:text-4xl font-bold text-neutral-900">Featured Projects</h2>
          <p className="mt-2 text-neutral-600 max-w-2xl">A selection of work that highlights my focus on performance, DX, and polished UX.</p>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {demoProjects.map((p) => (
            <a key={p.title} href={p.link} className="group rounded-xl border border-black/5 bg-white p-5 shadow-sm hover:shadow-md transition relative overflow-hidden">
              <div className="absolute -right-10 -top-10 h-24 w-24 rounded-full bg-gradient-to-br from-fuchsia-400/20 to-cyan-400/20 blur-2xl" />
              <div className="flex items-start justify-between gap-4">
                <h3 className="text-lg font-semibold text-neutral-900">{p.title}</h3>
                <ExternalLink className="h-4 w-4 text-neutral-400 group-hover:text-neutral-600 transition" />
              </div>
              <p className="mt-2 text-neutral-600 text-sm leading-relaxed">{p.description}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {p.tags.map((t) => (
                  <span key={t} className="inline-flex items-center rounded-full bg-neutral-100 text-neutral-700 px-2.5 py-1 text-xs font-medium border border-black/5">
                    {t}
                  </span>
                ))}
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
