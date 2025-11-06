import { ExternalLink, Star } from "lucide-react";

const demoProjects = [
  {
    title: "Realtime Chat App",
    description: "WebSocket-powered chat with rooms, presence, and emoji reactions.",
    tags: ["React", "FastAPI", "WebSocket"],
    link: "#",
    stars: 128,
  },
  {
    title: "E-commerce Starter",
    description: "Headless storefront with product search and checkout flow.",
    tags: ["Next.js", "MongoDB", "Stripe"],
    link: "#",
    stars: 214,
  },
  {
    title: "3D Portfolio",
    description: "Interactive 3D hero using Spline and smooth scroll animations.",
    tags: ["Spline", "Framer Motion", "Tailwind"],
    link: "#",
    stars: 97,
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-24 bg-white dark:bg-neutral-950">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10">
          <h2 className="text-3xl sm:text-4xl font-bold text-neutral-900 dark:text-white">Featured Projects</h2>
          <p className="mt-2 text-neutral-600 dark:text-neutral-300 max-w-2xl">A selection of work that highlights my focus on performance, DX, and polished UX.</p>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {demoProjects.map((p) => (
            <a key={p.title} href={p.link} className="group rounded-xl border border-black/5 dark:border-white/10 bg-white dark:bg-neutral-900 p-5 shadow-sm hover:shadow-md transition relative overflow-hidden focus:outline-none focus:ring-2 focus:ring-neutral-900 dark:focus:ring-white">
              <div className="absolute -right-10 -top-10 h-24 w-24 rounded-full bg-gradient-to-br from-fuchsia-400/20 to-cyan-400/20 blur-2xl" />
              <div className="flex items-start justify-between gap-4">
                <h3 className="text-lg font-semibold text-neutral-900 dark:text-white">{p.title}</h3>
                <ExternalLink className="h-4 w-4 text-neutral-400 group-hover:text-neutral-600 dark:text-neutral-500 dark:group-hover:text-neutral-300 transition" />
              </div>
              <p className="mt-2 text-neutral-600 dark:text-neutral-300 text-sm leading-relaxed">{p.description}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {p.tags.map((t) => (
                  <span key={t} className="inline-flex items-center rounded-full bg-neutral-100 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-200 px-2.5 py-1 text-xs font-medium border border-black/5 dark:border-white/10">
                    {t}
                  </span>
                ))}
              </div>
              <div className="mt-4 inline-flex items-center gap-1 text-xs text-neutral-500 dark:text-neutral-400">
                <Star className="h-3.5 w-3.5 fill-yellow-400 stroke-yellow-500" />
                <span>{p.stars.toLocaleString()} stars</span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
