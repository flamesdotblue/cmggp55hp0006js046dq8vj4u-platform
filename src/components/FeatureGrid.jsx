import { Languages, Timer, ShieldCheck, Workflow } from 'lucide-react';

export default function FeatureGrid() {
  return (
    <section id="languages" className="relative py-16 sm:py-20">
      <div className="absolute inset-0 -z-0 bg-[radial-gradient(60%_60%_at_50%_0%,rgba(120,119,198,0.15),transparent)]" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-2xl sm:text-3xl font-semibold text-white">Designed for speed. Built for trust.</h2>
          <p className="mt-3 text-neutral-300">ZertAI turns complex, time-consuming paperwork into a guided conversation—accurate, compliant, and multilingual.</p>
        </div>

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          <FeatureCard
            icon={<Timer className="h-5 w-5" />}
            title="10x faster"
            desc="Generate legally precise Arbeitszeugnisse in minutes, not hours."
          />
          <FeatureCard
            icon={<Languages className="h-5 w-5" />}
            title="Multilingual"
            desc="German, French, Italian, and English—native-grade phrasing and tone."
          />
          <FeatureCard
            icon={<ShieldCheck className="h-5 w-5" />}
            title="Legal nuance"
            desc="Context-aware drafting aligned with DACH legal conventions."
          />
          <FeatureCard
            icon={<Workflow className="h-5 w-5" />}
            title="Fits your workflow"
            desc="Transparent AI with controls for HR teams—no black boxes."
          />
        </div>
      </div>
    </section>
  );}

function FeatureCard({ icon, title, desc }) {
  return (
    <div className="group rounded-xl border border-white/10 bg-white/5 p-5 hover:bg-white/10 transition-colors">
      <div className="inline-flex items-center justify-center rounded-lg bg-white/10 text-white h-10 w-10">
        {icon}
      </div>
      <h3 className="mt-3 text-white font-medium">{title}</h3>
      <p className="mt-1 text-sm text-neutral-300">{desc}</p>
    </div>
  );
}
