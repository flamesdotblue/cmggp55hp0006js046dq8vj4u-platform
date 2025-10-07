import { Check, Settings2, MessageSquareText, FileText } from 'lucide-react';

export default function Product() {
  const steps = [
    {
      icon: <Settings2 className="h-5 w-5" />, title: 'Set your policy',
      desc: 'Define tone, grading rules, and templates aligned with your legal standards.'
    },
    {
      icon: <MessageSquareText className="h-5 w-5" />, title: 'Chat, then refine',
      desc: 'Answer a few guided questions. The AI drafts and adapts as you review.'
    },
    {
      icon: <FileText className="h-5 w-5" />, title: 'Approve & export',
      desc: 'Generate PDF/Word with brand styling, plus multilingual variants.'
    },
  ];

  return (
    <main className="py-14">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl sm:text-4xl font-semibold text-white">How ZertAI works</h1>
        <p className="mt-3 text-neutral-300 max-w-2xl">No fluff. A simple flow that replaces hours of manual drafting. Transparent controls and full editability keep you in charge.</p>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
          {steps.map((s) => (
            <div key={s.title} className="rounded-xl border border-white/10 bg-white/5 p-5">
              <div className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-white/10 text-white">{s.icon}</div>
              <h3 className="mt-3 text-white font-medium">{s.title}</h3>
              <p className="mt-1 text-sm text-neutral-300">{s.desc}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 rounded-xl border border-white/10 bg-gradient-to-b from-white/5 to-transparent p-6">
          <h2 className="text-xl text-white font-medium">What makes us different</h2>
          <ul className="mt-4 space-y-2 text-sm text-neutral-300">
            <li className="flex gap-2"><Check className="h-4 w-4 text-emerald-400" /> Trained for DACH legal nuance with multilingual phrasing.</li>
            <li className="flex gap-2"><Check className="h-4 w-4 text-emerald-400" /> Radical transparency: clear limits, clear pricing, no lock-in.</li>
            <li className="flex gap-2"><Check className="h-4 w-4 text-emerald-400" /> Human-in-the-loop: you approve every document.</li>
          </ul>
        </div>
      </div>
    </main>
  );
}
