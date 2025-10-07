import { useState } from 'react';

const texts = {
  de: 'Frau Maria Rossi war vom 01.03.2021 bis 30.06.2025 als Senior Produktmanagerin in unserem Unternehmen tätig. Sie überzeugte durch sehr gute analytische Fähigkeiten und eine ausgeprägte Lösungsorientierung. Ihr Verhalten gegenüber Vorgesetzten, Kolleginnen und Kollegen sowie externen Partnern war stets einwandfrei.',
  fr: "Madame Maria Rossi a été employée comme Senior Product Manager dans notre entreprise du 01.03.2021 au 30.06.2025. Elle s’est distinguée par d’excellentes capacités d’analyse et une forte orientation vers les solutions. Son comportement envers les supérieurs, collègues et partenaires externes a toujours été irréprochable.",
  it: "La signora Maria Rossi ha lavorato come Senior Product Manager nella nostra azienda dal 01.03.2021 al 30.06.2025. Si è distinta per ottime capacità analitiche e un forte orientamento alle soluzioni. Il suo comportamento verso superiori, colleghi e partner esterni è stato sempre impeccabile.",
  en: 'Ms. Maria Rossi was employed as a Senior Product Manager at our company from 01/03/2021 to 30/06/2025. She demonstrated excellent analytical skills and a strong solution-oriented mindset. Her conduct towards supervisors, colleagues, and external partners was always exemplary.'
};

export default function ExampleTabs() {
  const [lang, setLang] = useState('de');
  return (
    <section className="py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap items-center gap-2">
          <Tab active={lang==='de'} onClick={() => setLang('de')}>🇩🇪 Deutsch</Tab>
          <Tab active={lang==='fr'} onClick={() => setLang('fr')}>🇫🇷 Français</Tab>
          <Tab active={lang==='it'} onClick={() => setLang('it')}>🇮🇹 Italiano</Tab>
          <Tab active={lang==='en'} onClick={() => setLang('en')}>🇬🇧 English</Tab>
        </div>
        <div className="mt-4 rounded-lg bg-neutral-900/80 border border-white/10 p-4 text-sm text-neutral-200">
          {texts[lang]}
        </div>
        <ul className="mt-3 text-sm text-neutral-300 space-y-1">
          <li>✓ Rechtlich fundierte Formulierungen in jeder Sprache</li>
          <li>✓ Kulturelle Anpassung, nicht nur Übersetzung</li>
          <li>✓ Gleichzeitig generiert in ~5 Minuten</li>
        </ul>
      </div>
    </section>
  );
}

function Tab({ active, onClick, children }) {
  return (
    <button
      onClick={onClick}
      className={`px-3 py-1.5 rounded-md text-sm border transition-colors ${active ? 'bg-white text-neutral-900 border-white' : 'bg-white/5 text-white border-white/10 hover:bg-white/10'}`}
    >
      {children}
    </button>
  );
}
