export default function Footer() {
  return (
    <footer className="py-12 bg-white dark:bg-neutral-950 border-t border-black/5 dark:border-white/10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-neutral-500 dark:text-neutral-400">© {new Date().getFullYear()} Your Name. All rights reserved.</p>
          <div className="text-xs text-neutral-400 dark:text-neutral-500">Built with React, Tailwind, and Spline.</div>
        </div>
      </div>
    </footer>
  );
}
