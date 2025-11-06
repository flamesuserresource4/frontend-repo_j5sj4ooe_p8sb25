import Spline from "@splinetool/react-spline";

export default function Hero() {
  return (
    <section id="home" className="relative min-h-[90vh] w-full overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-28">
        <div className="max-w-2xl">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/70 dark:bg-white/10 backdrop-blur px-3 py-1 text-xs font-medium text-neutral-700 dark:text-neutral-100 shadow-sm">
            <span className="h-1.5 w-1.5 rounded-full bg-gradient-to-r from-fuchsia-500 to-cyan-400" />
            Software Developer
          </span>
          <h1 className="mt-6 text-4xl sm:text-6xl font-extrabold tracking-tight text-neutral-900 dark:text-white drop-shadow-sm">
            Building modern, delightful web experiences
          </h1>
          <p className="mt-4 text-neutral-700 dark:text-neutral-200 text-lg leading-relaxed max-w-xl">
            I craft high-performance apps with clean architectures, intuitive UX, and a touch of playfulness.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a href="#projects" className="inline-flex items-center justify-center rounded-md bg-neutral-900 dark:bg-white text-white dark:text-neutral-900 px-5 py-2.5 text-sm font-medium shadow hover:opacity-90 transition">View Projects</a>
            <a href="#contact" className="inline-flex items-center justify-center rounded-md bg-white/70 dark:bg-neutral-900/70 backdrop-blur text-neutral-900 dark:text-white px-5 py-2.5 text-sm font-medium shadow border border-black/5 dark:border-white/10 hover:bg-white transition">Contact Me</a>
          </div>
        </div>
      </div>

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-white/30 to-white dark:via-neutral-900/30 dark:to-neutral-950" />
    </section>
  );
}
