import { Mail, Send } from "lucide-react";
import { useId, useState } from "react";

export default function Contact() {
  const [status, setStatus] = useState("idle");
  const nameId = useId();
  const emailId = useId();
  const messageId = useId();

  const onSubmit = (e) => {
    e.preventDefault();
    setStatus("sent");
  };

  return (
    <section id="contact" className="py-24 bg-gradient-to-b from-white to-neutral-50 dark:from-neutral-950 dark:to-neutral-900">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10">
          <h2 className="text-3xl sm:text-4xl font-bold text-neutral-900 dark:text-white">Get in touch</h2>
          <p className="mt-2 text-neutral-600 dark:text-neutral-300 max-w-2xl">Have a project in mind or just want to say hi? Drop a message and I’ll get back to you.</p>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          <div className="rounded-xl border border-black/5 dark:border-white/10 bg-white dark:bg-neutral-900 p-6 shadow-sm">
            <div className="flex items-center gap-3">
              <Mail className="h-5 w-5 text-neutral-500" />
              <div>
                <p className="text-sm text-neutral-500">Email</p>
                <a href="mailto:you@example.com" className="font-medium text-neutral-900 dark:text-white hover:underline">you@example.com</a>
              </div>
            </div>
            <p className="mt-4 text-neutral-600 dark:text-neutral-300 text-sm">I’m currently available for freelance work and interesting collaborations.</p>
          </div>

          <form onSubmit={onSubmit} className="rounded-xl border border-black/5 dark:border-white/10 bg-white dark:bg-neutral-900 p-6 shadow-sm space-y-4">
            <div>
              <label htmlFor={nameId} className="block text-sm font-medium text-neutral-700 dark:text-neutral-200">Name</label>
              <input id={nameId} required className="mt-1 w-full rounded-md border border-neutral-200 dark:border-neutral-700 bg-white dark:bg-neutral-950 px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-neutral-900 dark:focus:ring-white" placeholder="Your name" />
            </div>
            <div>
              <label htmlFor={emailId} className="block text-sm font-medium text-neutral-700 dark:text-neutral-200">Email</label>
              <input id={emailId} required type="email" className="mt-1 w-full rounded-md border border-neutral-200 dark:border-neutral-700 bg-white dark:bg-neutral-950 px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-neutral-900 dark:focus:ring-white" placeholder="you@example.com" />
            </div>
            <div>
              <label htmlFor={messageId} className="block text-sm font-medium text-neutral-700 dark:text-neutral-200">Message</label>
              <textarea id={messageId} required rows={4} className="mt-1 w-full rounded-md border border-neutral-200 dark:border-neutral-700 bg-white dark:bg-neutral-950 px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-neutral-900 dark:focus:ring-white" placeholder="Tell me about your project" />
            </div>
            <button type="submit" className="inline-flex items-center gap-2 rounded-md bg-neutral-900 dark:bg-white text-white dark:text-neutral-900 px-4 py-2 text-sm font-medium shadow hover:opacity-90">
              <Send className="h-4 w-4" />
              {status === "sent" ? "Sent!" : "Send message"}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
