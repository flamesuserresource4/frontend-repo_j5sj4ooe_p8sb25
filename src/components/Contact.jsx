import { Mail, Send } from "lucide-react";
import { useState } from "react";

export default function Contact() {
  const [status, setStatus] = useState("idle");

  const onSubmit = (e) => {
    e.preventDefault();
    setStatus("sent");
  };

  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-white to-neutral-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10">
          <h2 className="text-3xl sm:text-4xl font-bold text-neutral-900">Get in touch</h2>
          <p className="mt-2 text-neutral-600 max-w-2xl">Have a project in mind or just want to say hi? Drop a message and I’ll get back to you.</p>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          <div className="rounded-xl border border-black/5 bg-white p-6 shadow-sm">
            <div className="flex items-center gap-3">
              <Mail className="h-5 w-5 text-neutral-500" />
              <div>
                <p className="text-sm text-neutral-500">Email</p>
                <a href="mailto:you@example.com" className="font-medium text-neutral-900 hover:underline">you@example.com</a>
              </div>
            </div>
            <p className="mt-4 text-neutral-600 text-sm">I’m currently available for freelance work and interesting collaborations.</p>
          </div>

          <form onSubmit={onSubmit} className="rounded-xl border border-black/5 bg-white p-6 shadow-sm space-y-4">
            <div>
              <label className="block text-sm font-medium text-neutral-700">Name</label>
              <input required className="mt-1 w-full rounded-md border border-neutral-200 bg-white px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-neutral-900" placeholder="Your name" />
            </div>
            <div>
              <label className="block text-sm font-medium text-neutral-700">Email</label>
              <input required type="email" className="mt-1 w-full rounded-md border border-neutral-200 bg-white px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-neutral-900" placeholder="you@example.com" />
            </div>
            <div>
              <label className="block text-sm font-medium text-neutral-700">Message</label>
              <textarea required rows={4} className="mt-1 w-full rounded-md border border-neutral-200 bg-white px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-neutral-900" placeholder="Tell me about your project" />
            </div>
            <button type="submit" className="inline-flex items-center gap-2 rounded-md bg-neutral-900 text-white px-4 py-2 text-sm font-medium shadow hover:opacity-90">
              <Send className="h-4 w-4" />
              {status === "sent" ? "Sent!" : "Send message"}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
