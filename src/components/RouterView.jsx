import { RouterProvider, createBrowserRouter, Outlet, Link } from 'react-router-dom';
import { ArrowRight, Check, Star, Languages, MessageSquare, Upload, FileText, Shield, Lock, Cpu } from 'lucide-react';

function RootLayout() {
  return (
    <div>
      <Outlet />
    </div>
  );
}

// HOMEPAGE (from 7507353 style)
function HomePage() {
  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="inline-flex items-center gap-2 rounded-full border border-neutral-200 bg-white px-3 py-1 text-xs text-neutral-700 shadow-sm">
          ✨ KI‑Assistent für DACH‑Arbeitszeugnisse
        </div>
        <h1 className="mt-4 text-4xl sm:text-5xl md:text-6xl font-semibold tracking-tight text-neutral-900">
          Arbeitszeugnisse in 5 Minuten erstellen—
          <br className="hidden sm:block" />
          nicht mehr 2 Stunden
        </h1>
        <p className="mt-3 text-base sm:text-lg text-neutral-700">
          KI‑gestützte Zeugnisse in DE • FR • IT • EN nach DACH‑Arbeitsrecht <span className="ml-2">🇩🇪 🇫🇷 🇮🇹 🇬🇧</span>
        </p>
        <p className="mt-3 max-w-2xl text-sm sm:text-base text-neutral-600">
          Trainiert mit 10.000+ realen Arbeitszeugnissen und DACH‑Rechtsprechung (§109 GewO, OR Art. 330a). Sie prüfen und genehmigen jedes Wort.
        </p>
        <div className="mt-8 flex flex-col sm:flex-row gap-3">
          <Link
            to="/pricing"
            className="inline-flex items-center justify-center rounded-md bg-neutral-900 text-white px-5 py-3 text-sm font-semibold shadow-sm hover:bg-neutral-800"
          >
            Jetzt kostenlos testen → <span className="ml-1 hidden sm:inline">3 Zeugnisse gratis</span>
          </Link>
          <Link
            to="/product"
            className="inline-flex items-center justify-center gap-2 rounded-md border border-neutral-300 bg-white px-5 py-3 text-sm font-medium text-neutral-900 hover:bg-neutral-50"
          >
            Wie es funktioniert (2 Min.)
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="rounded-lg border border-neutral-200 p-5 bg-white shadow-sm">
            <h3 className="text-neutral-900 font-medium">Ihre Eingabe (2 Minuten):</h3>
            <div className="mt-3 text-sm text-neutral-700 space-y-1">
              <div>Name: Maria Rossi</div>
              <div>Position: Senior Produktmanagerin</div>
              <div>Leistung: ⭐⭐⭐ (3/3 – Sehr gut)</div>
              <div>Aufgaben: Produktplanung, Team‑Koordination</div>
            </div>
          </div>
          <div className="rounded-lg border border-neutral-200 p-5 bg-white shadow-sm">
            <h3 className="text-neutral-900 font-medium">Generiertes Ergebnis (30 Sekunden):</h3>
            <div className="mt-3 rounded-md bg-neutral-50 border border-neutral-200 p-4 text-sm text-neutral-800">
              <p className="font-medium text-neutral-900">Arbeitszeugnis — Senior Produktmanager/in</p>
              <p className="mt-2">Frau Maria Rossi war vom 01.03.2021 bis 30.06.2025 als Senior Produktmanagerin in unserem Unternehmen tätig. Ihre Aufgaben umfassten die strategische Produktplanung, die cross‑funktionale Koordination sowie die Auswertung von Markt‑ und Kundenanforderungen.</p>
              <p className="mt-2">Sie überzeugte durch sehr gute analytische Fähigkeiten, eine ausgeprägte Lösungsorientierung und ein hohes Qualitätsbewusstsein. Ihr Verhalten gegenüber Vorgesetzten, Kolleginnen und Kollegen sowie externen Partnern war stets einwandfrei.</p>
              <ul className="mt-3 text-neutral-700 space-y-1">
                <li>✓ In 4 Sprachen gleichzeitig generiert</li>
                <li>✓ Jederzeit bearbeitbar vor Export</li>
                <li>✓ Rechtlich fundierte Formulierungen</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// PRODUCT PAGE (from 675decc detailed)
function ProductPage() {
  const OverviewCard = ({ step, title, time, points }) => (
    <div className="rounded-xl border border-neutral-200 bg-white p-5 shadow-sm">
      <div className="text-xs font-medium text-neutral-600">{step} • {time}</div>
      <h3 className="mt-1 text-neutral-900 font-medium">{title}</h3>
      <ul className="mt-2 space-y-1 text-sm text-neutral-700">
        {points.map((p) => (
          <li key={p}>• {p}</li>
        ))}
      </ul>
    </div>
  );

  const rows = [
    { label: 'Zeit', word: '1–2 Stunden', berater: '1–2 Wochen', zertai: '5 Minuten' },
    { label: 'Kosten', word: '≈ €50', berater: '€250–500', zertai: '€3–10' },
    { label: 'Sprachen', word: '1', berater: '1–2', zertai: '4 gleichzeitig' },
    { label: 'Konsistenz', word: 'Niedrig', berater: 'Mittel', zertai: 'Hoch' },
    { label: 'Rechtliche Basis', word: 'Fragwürdig', berater: 'Ja', zertai: 'Informiert*' },
    { label: 'Bearbeitbar', word: 'Ja', berater: 'Begrenzt', zertai: 'Vollständig' },
    { label: 'Sofort verfügbar', word: 'Ja', berater: 'Nein', zertai: 'Ja' },
  ];

  const faqs = [
    {
      q: 'Wie genau ist die rechtliche Sprache?',
      a: 'Die KI wurde mit 10.000+ realen Zeugnissen und Gerichtsurteilen trainiert. Sie generiert rechtlich informierte Formulierungen basierend auf DACH‑Standards. Aber: Keine 100%‑Garantie ohne Fachprüfung.'
    },
    {
      q: 'Kann ich die generierten Texte bearbeiten?',
      a: 'Ja, vollständig. Jeder Abschnitt ist editierbar. Sie haben volle Kontrolle.'
    },
    {
      q: 'Funktioniert es auch ohne HRIS?',
      a: 'Ja. Sie können Daten manuell über das Konversations‑Interface eingeben oder eine Excel/CSV hochladen.'
    },
    {
      q: 'Wie lange dauert die Generierung wirklich?',
      a: 'Dateneingabe: 2 Minuten · KI‑Generierung: 30 Sekunden · Prüfen & Exportieren: 2 Minuten · Gesamt: ~5 Minuten pro Zeugnis.'
    },
    {
      q: 'Was passiert, wenn ich mit dem Ergebnis nicht zufrieden bin?',
      a: 'Sie können jeden Abschnitt neu generieren lassen oder manuell bearbeiten. Falls nichts hilft: Rückerstattung innerhalb 7 Tagen.'
    },
  ];

  return (
    <main className="py-14">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight">Wie ZertAI funktioniert</h1>
        <p className="mt-3 text-neutral-700 max-w-2xl">Von der ersten Frage bis zum fertigen Arbeitszeugnis in 5 Minuten. Keine Installation, keine Schulung — einfach starten.</p>

        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4">
          <OverviewCard step="SCHRITT 1" title="Ihre Angaben" time="2 Minuten" points={[
            'Name, Rolle, Zeitraum',
            'Leistungsbewertung (1–3)',
            'Hauptaufgaben (Stichpunkte)'
          ]} />
          <OverviewCard step="SCHRITT 2" title="KI‑Generierung" time="30 Sekunden" points={[
            'Rechtlich informierte Formulierungen',
            'Rollengerechte Verantwortung',
            'Alle 4 Sprachen gleichzeitig'
          ]} />
          <OverviewCard step="SCHRITT 3" title="Prüfen & Export" time="2 Minuten" points={[
            'Abschnitte bearbeiten',
            'PDF/Word mit Branding',
            'Versionshistorie'
          ]} />
        </div>

        <div className="mt-8 flex flex-wrap items-center gap-3">
          <Link to="/pricing" className="inline-flex items-center justify-center rounded-md bg-neutral-900 text-white px-5 py-3 text-sm font-semibold hover:bg-neutral-800">
            Jetzt kostenlos testen <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
          <span className="inline-flex items-center gap-2 rounded-full border border-neutral-200 bg-white px-3 py-1 text-xs text-neutral-700 shadow-sm">
            <Languages className="h-4 w-4" /> DE • FR • IT • EN
          </span>
        </div>

        <section className="py-12 sm:py-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div>
              <h2 className="text-2xl sm:text-3xl font-semibold">Schritt‑für‑Schritt</h2>

              <div className="mt-6 space-y-6">
                <div className="rounded-xl border border-neutral-200 bg-white p-5 shadow-sm">
                  <div className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-neutral-100 text-neutral-900"><MessageSquare className="h-5 w-5" /></div>
                  <h4 className="mt-3 text-neutral-900 font-medium">Schnelle Dateneingabe (Konversation)</h4>
                  <ul className="mt-2 text-sm text-neutral-700 space-y-1">
                    <li>• Beantworten Sie einfache Fragen (Name, Rolle, Zeitraum)</li>
                    <li>• Leistungsbewertung: ⭐ bis ⭐⭐⭐</li>
                    <li>• Hauptaufgaben als Stichpunkte</li>
                  </ul>
                </div>

                <div className="rounded-xl border border-neutral-200 bg-white p-5 shadow-sm">
                  <div className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-neutral-100 text-neutral-900"><Upload className="h-5 w-5" /></div>
                  <h4 className="mt-3 text-neutral-900 font-medium">CSV‑Import (Mehrere Zeugnisse)</h4>
                  <ul className="mt-2 text-sm text-neutral-700 space-y-1">
                    <li>• Export aus HRIS oder Excel hochladen</li>
                    <li>• Felderzuordnung automatisch erkennen</li>
                    <li>• Alle Zeugnisse in einem Durchlauf generieren</li>
                  </ul>
                </div>

                <div className="rounded-xl border border-neutral-200 bg-white p-5 shadow-sm">
                  <div className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-neutral-100 text-neutral-900"><FileText className="h-5 w-5" /></div>
                  <h4 className="mt-3 text-neutral-900 font-medium">KI‑Generierung & Bearbeitung</h4>
                  <ul className="mt-2 text-sm text-neutral-700 space-y-1">
                    <li>• Rechtlich informierte Formulierungen in 4 Sprachen</li>
                    <li>• Rollengerechte Verantwortungstexte</li>
                    <li>• Abschnitte bearbeiten, neu generieren, speichern</li>
                  </ul>
                </div>
              </div>

              <div className="mt-6 rounded-lg border border-amber-300 bg-amber-50 p-4 text-amber-900 text-sm">
                ⚠️ Wichtig: Die KI schlägt Formulierungen vor, Sie entscheiden. Keine 100%‑Rechtsgarantie ohne fachliche Prüfung.
              </div>
            </div>

            <div className="rounded-xl border border-neutral-200 bg-white p-6 shadow-sm">
              <h3 className="text-neutral-900 font-medium">Beispiel: Bewertung → Formulierung</h3>
              <div className="mt-3 grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="rounded-lg border border-neutral-200 bg-neutral-50 p-4">
                  <div className="text-sm text-neutral-700">Ihre Eingabe</div>
                  <ul className="mt-2 text-sm text-neutral-800 space-y-1">
                    <li>• Rolle: Senior Produktmanagerin</li>
                    <li>• Zeitraum: 01.03.2021 – 30.06.2025</li>
                    <li>• Leistung: ⭐⭐⭐ (Sehr gut)</li>
                    <li>• Aufgaben: Planung, Koordination, Marktanalyse</li>
                  </ul>
                </div>
                <div className="rounded-lg border border-neutral-200 bg-neutral-50 p-4">
                  <div className="text-sm text-neutral-700">Generierte Formulierungen</div>
                  <ul className="mt-2 text-sm text-neutral-800 space-y-1">
                    <li>✓ DE: „stets zur vollsten Zufriedenheit“</li>
                    <li>✓ FR: „toujours à l’entière satisfaction“</li>
                    <li>✓ IT: „sempre con la massima soddisfazione“</li>
                    <li>✓ EN: „always to our fullest satisfaction“</li>
                  </ul>
                </div>
              </div>
              <ul className="mt-4 text-sm text-neutral-700 space-y-1">
                <li className="flex gap-2"><Check className="h-4 w-4 text-emerald-600" /> Kulturell angepasste Sprache, nicht nur Übersetzung</li>
                <li className="flex gap-2"><Check className="h-4 w-4 text-emerald-600" /> Vorschau in Echtzeit, jede Passage editierbar</li>
                <li className="flex gap-2"><Check className="h-4 w-4 text-emerald-600" /> Export als PDF/Word mit Branding</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="py-12">
          <h2 className="text-2xl sm:text-3xl font-semibold">Vergleich mit anderen Lösungen</h2>
          <div className="mt-6 overflow-x-auto rounded-xl border border-neutral-200 bg-white shadow-sm">
            <table className="w-full text-sm">
              <thead className="bg-neutral-50 text-neutral-700">
                <tr>
                  <th className="text-left font-medium p-3 w-1/2">Kriterium</th>
                  <th className="text-left font-medium p-3">Word‑Vorlage</th>
                  <th className="text-left font-medium p-3">HR‑Berater</th>
                  <th className="text-left font-medium p-3">ZertAI</th>
                </tr>
              </thead>
              <tbody>
                {rows.map((r, i) => (
                  <tr key={r.label} className={i % 2 === 1 ? 'bg-neutral-50 border-t border-neutral-200' : 'border-t border-neutral-200'}>
                    <td className="p-3 text-neutral-800">{r.label}</td>
                    <td className="p-3 text-neutral-900">{r.word}</td>
                    <td className="p-3 text-neutral-900">{r.berater}</td>
                    <td className="p-3 text-neutral-900">{r.zertai}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-3 text-xs text-neutral-600">* Rechtlich informierte Formulierungen, keine 100%‑Garantie ohne fachliche Prüfung.</p>
        </section>

        <section className="py-12">
          <h3 className="text-neutral-900 font-medium">Integration & Kompatibilität</h3>
          <div className="mt-4 grid grid-cols-1 lg:grid-cols-3 gap-4">
            <div className="rounded-xl border border-neutral-200 bg-white p-5 shadow-sm">
              <h4 className="text-neutral-900 font-medium">CSV‑Import</h4>
              <ul className="mt-2 text-sm text-neutral-700 space-y-1">
                <li>• Personio</li>
                <li>• BambooHR</li>
                <li>• SAP SuccessFactors</li>
                <li>• Workday</li>
                <li>• ADP</li>
                <li>• Excel / Google Sheets</li>
              </ul>
            </div>
            <div className="rounded-xl border border-neutral-200 bg-white p-5 shadow-sm">
              <h4 className="text-neutral-900 font-medium">Export‑Formate</h4>
              <ul className="mt-2 text-sm text-neutral-700 space-y-1">
                <li>• PDF (mit Ihrem Branding)</li>
                <li>• Word (bearbeitbar)</li>
                <li>• Alle 4 Sprachen gleichzeitig</li>
              </ul>
            </div>
            <div className="rounded-xl border border-neutral-200 bg-white p-5 shadow-sm">
              <h4 className="text-neutral-900 font-medium">Browser‑Kompatibilität</h4>
              <ul className="mt-2 text-sm text-neutral-700 space-y-1">
                <li>• Keine Installation erforderlich</li>
                <li>• Chrome, Firefox, Safari, Edge</li>
                <li>• Funktioniert auf Mac, Windows, Linux</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="py-12">
          <h2 className="text-2xl sm:text-3xl font-semibold">Häufige Fragen zur Funktionsweise</h2>
          <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
            {faqs.map((item) => (
              <div key={item.q} className="rounded-xl border border-neutral-200 bg-white p-5 shadow-sm">
                <div className="text-neutral-900 font-medium">❓ {item.q}</div>
                <p className="mt-2 text-sm text-neutral-700 leading-relaxed">{item.a}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="py-12">
          <div className="rounded-2xl border border-neutral-200 bg-neutral-50 p-6 text-center">
            <h3 className="text-xl font-semibold text-neutral-900">Bereit, es auszuprobieren?</h3>
            <p className="mt-2 text-neutral-700">3 Zeugnisse kostenlos • Keine Kreditkarte • 5 Minuten Setup</p>
            <div className="mt-4 flex flex-col sm:flex-row gap-3 justify-center">
              <Link to="/pricing" className="inline-flex items-center justify-center rounded-md bg-neutral-900 text-white px-5 py-2.5 text-sm font-semibold hover:bg-neutral-800">Kostenlos testen</Link>
              <Link to="/pricing" className="inline-flex items-center justify-center rounded-md border border-neutral-300 bg-white px-5 py-2.5 text-sm font-medium text-neutral-900 hover:bg-neutral-50">Preise ansehen</Link>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}

// PRICING PAGE (from 7507353 light version)
function PricingPage() {
  const plans = [
    {
      name: 'Starter',
      price: '€0',
      cadence: 'für immer',
      features: ['3 Dokumente / Monat', 'Einzelnutzer', 'Deutsch (DE)', 'Basis‑Vorlagen'],
      cta: 'Kostenlos starten',
      highlight: false,
    },
    {
      name: 'Team',
      price: '€99',
      cadence: 'pro Monat',
      features: ['Unbegrenzte Dokumente', 'Bis zu 10 Nutzer', 'DE • FR • IT • EN', 'Brand‑Export (PDF/Word)'],
      cta: '14‑Tage‑Test starten',
      highlight: true,
    },
    {
      name: 'Business',
      price: '€249',
      cadence: 'pro Monat',
      features: ['Unbegrenzte Dokumente', 'SSO & Rollen', 'Policy‑Engine & Audit‑Log', 'Priorisierter Support'],
      cta: 'Vertrieb kontaktieren',
      highlight: false,
    },
  ];

  return (
    <main className="py-14">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl sm:text-4xl font-semibold text-neutral-900">Transparente Preise</h1>
        <p className="mt-3 text-neutral-700">Wählen Sie den Plan, der zu Ihrem Workflow passt. Jederzeit kündbar.</p>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
          {plans.map((plan) => (
            <div key={plan.name} className={`rounded-2xl border ${plan.highlight ? 'border-fuchsia-300 bg-fuchsia-50' : 'border-neutral-200 bg-white'} p-6 flex flex-col shadow-sm`}>
              <div className="flex-1">
                <h3 className="text-neutral-900 font-medium text-lg">{plan.name}</h3>
                <div className="mt-4 flex items-baseline gap-2">
                  <span className="text-3xl font-semibold text-neutral-900">{plan.price}</span>
                  <span className="text-sm text-neutral-600">{plan.cadence}</span>
                </div>
                <ul className="mt-4 space-y-2 text-sm text-neutral-800">
                  {plan.features.map((f) => (
                    <li key={f} className="flex gap-2"><Check className="h-4 w-4 text-emerald-600" /> {f}</li>
                  ))}
                </ul>
              </div>
              <button className={`mt-6 inline-flex items-center justify-center rounded-md px-4 py-2 text-sm font-semibold ${plan.highlight ? 'bg-neutral-900 text-white hover:bg-neutral-800' : 'bg-neutral-100 text-neutral-900 hover:bg-neutral-200'}`}>
                {plan.cta}
              </button>
            </div>
          ))}
        </div>

        <p className="mt-8 text-xs text-neutral-500">ZertAI erstellt Entwürfe, die Ihre Arbeit beschleunigen. Bitte prüfen und genehmigen Sie jedes Dokument vor der Ausgabe – keine 100%‑Garantie ohne fachliche Prüfung.</p>
      </div>
    </main>
  );
}

function NotFound() {
  return (
    <main className="min-h-[60vh] grid place-items-center p-8">
      <div className="text-center">
        <h1 className="text-5xl font-semibold text-neutral-900">404</h1>
        <p className="mt-2 text-neutral-600">Diese Seite wurde nicht gefunden.</p>
        <Link to="/" className="mt-6 inline-flex rounded-md bg-neutral-900 text-white px-4 py-2 text-sm font-semibold hover:bg-neutral-800">Zur Startseite</Link>
      </div>
    </main>
  );
}

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    errorElement: <NotFound />,
    children: [
      { index: true, element: <HomePage /> },
      { path: 'product', element: <ProductPage /> },
      { path: 'pricing', element: <PricingPage /> },
      { path: '*', element: <NotFound /> },
    ],
  },
]);

export default function RouterView() {
  return <RouterProvider router={router} />;
}
