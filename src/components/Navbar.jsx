import { Github, Linkedin, Mail, Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";

export default function Navbar() {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem("theme");
    const prefers = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const initialDark = stored ? stored === "dark" : prefers;
    setDark(initialDark);
  }, []);

  useEffect(() => {
    if (dark) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [dark]);

  return (
    <header className="sticky top-0 z-40 backdrop-blur supports-[backdrop-filter]:bg-white/60 bg-white/70 dark:bg-neutral-900/70 border-b border-black/5 dark:border-white/10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <a href="#home" className="inline-flex items-center gap-2 font-semibold text-neutral-900 dark:text-white">
            <span className="inline-block h-2 w-2 rounded-full bg-gradient-to-r from-fuchsia-500 to-cyan-400 animate-pulse" />
            <span>My Portfolio</span>
          </a>
          <nav className="hidden md:flex items-center gap-6 text-sm font-medium">
            <a href="#projects" className="text-neutral-600 hover:text-neutral-900 dark:text-neutral-300 dark:hover:text-white transition-colors">Projects</a>
            <a href="#contact" className="text-neutral-600 hover:text-neutral-900 dark:text-neutral-300 dark:hover:text-white transition-colors">Contact</a>
            <div className="h-5 w-px bg-neutral-300/60 dark:bg-white/10" />
            <a href="https://github.com/" target="_blank" rel="noreferrer" aria-label="GitHub" className="text-neutral-600 hover:text-neutral-900 dark:text-neutral-300 dark:hover:text-white">
              <Github className="h-5 w-5" />
            </a>
            <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer" aria-label="LinkedIn" className="text-neutral-600 hover:text-neutral-900 dark:text-neutral-300 dark:hover:text-white">
              <Linkedin className="h-5 w-5" />
            </a>
            <a href="#contact" aria-label="Email" className="text-neutral-600 hover:text-neutral-900 dark:text-neutral-300 dark:hover:text-white">
              <Mail className="h-5 w-5" />
            </a>
            <button onClick={() => setDark((v) => !v)} aria-label="Toggle theme" className="ml-2 inline-flex items-center justify-center rounded-md border border-black/5 dark:border-white/10 bg-white/70 dark:bg-neutral-800/70 px-2.5 py-1.5 text-neutral-700 dark:text-neutral-200 hover:opacity-90">
              {dark ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
            </button>
          </nav>
        </div>
      </div>
    </header>
  );
}
