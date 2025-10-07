import { Shield, Lock, Cpu, Check } from 'lucide-react';

export default function ProductSecurityTech() {
  return (
    <section className="py-12 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm">
            <div className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-neutral-100 text-neutral-900"><Shield className="h-5 w-5" /></div>
            <h3 className="mt-3 text-neutral-900 font-semibold text-lg">Sicherheit & Datenschutz</h3>
            <ul className="mt-3 text-sm text-neutral-700 space-y-2">
              <li className="flex gap-2"><Lock className="h-4 w-4 text-neutral-900" /> DSGVO‑konform, Verarbeitung in EU‑Rechenzentren (Zürich/Frankfurt)</li>
              <li className="flex gap-2"><Lock className="h-4 w-4 text-neutral-900" /> TLS 1.3 bei Übertragung, AES‑256 im Ruhezustand</li>
              <li className="flex gap-2"><Lock className="h-4 w-4 text-neutral-900" /> Ihre Daten trainieren NIE unsere KI</li>
              <li className="flex gap-2"><Lock className="h-4 w-4 text-neutral-900" /> Zugriffskontrolle: SSO & Rollen (Business), 2FA</li>
              <li className="flex gap-2"><Lock className="h-4 w-4 text-neutral-900" /> Audit‑Trails & Versionshistorie (Business)</li>
              <li className="flex gap-2"><Lock className="h-4 w-4 text-neutral-900" /> Keine Datenübertragung in die USA oder andere Regionen</li>
            </ul>
          </div>

          <div className="rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm">
            <div className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-neutral-100 text-neutral-900"><Cpu className="h-5 w-5" /></div>
            <h3 className="mt-3 text-neutral-900 font-semibold text-lg">Technische Basis</h3>
            <ul className="mt-3 text-sm text-neutral-700 space-y-2">
              <li className="flex gap-2"><Check className="h-4 w-4 text-emerald-600" /> Trainiert mit 10.000+ realen Arbeitszeugnissen</li>
              <li className="flex gap-2"><Check className="h-4 w-4 text-emerald-600" /> 500+ Gerichtsurteile zur Zeugnissprache</li>
              <li className="flex gap-2"><Check className="h-4 w-4 text-emerald-600" /> §109 GewO (DE), OR Art. 330a (CH), AT‑Arbeitsrecht</li>
              <li className="flex gap-2"><Check className="h-4 w-4 text-emerald-600" /> Bewertungs‑Mapping → rechtlich informierte Formulierung</li>
              <li className="flex gap-2"><Check className="h-4 w-4 text-emerald-600" /> Vier Sprachen gleichzeitig: DE, FR, IT, EN</li>
              <li className="flex gap-2"><Check className="h-4 w-4 text-emerald-600" /> Menschliches Urteilsvermögen bleibt erforderlich</li>
            </ul>
          </div>
        </div>

        <div className="mt-8 rounded-lg border border-neutral-200 bg-white p-6 shadow-sm">
          <h4 className="text-neutral-900 font-medium">Für welche Situationen?</h4>
          <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="rounded-lg border border-neutral-200 bg-neutral-50 p-4">
              <div className="text-neutral-900 font-medium">Ideal für</div>
              <ul className="mt-2 text-sm text-neutral-800 space-y-1">
                <li>✓ Normale Mitarbeiteraustritte (Eigenkündigung)</li>
                <li>✓ Vertragsende und Befristungen</li>
                <li>✓ Routine‑Leistungsbewertungen</li>
                <li>✓ Mehrsprachige Teams (z. B. CH: DE/FR/IT)</li>
                <li>✓ 5–50 Zeugnisse pro Jahr</li>
              </ul>
            </div>
            <div className="rounded-lg border border-neutral-200 bg-neutral-50 p-4">
              <div className="text-neutral-900 font-medium">Anwalt konsultieren bei</div>
              <ul className="mt-2 text-sm text-neutral-800 space-y-1">
                <li>❌ Strittigen oder arbeitgeberseitigen Kündigungen</li>
                <li>❌ Laufenden arbeitsrechtlichen Streitigkeiten</li>
                <li>❌ C‑Level oder Führungspositionen</li>
                <li>❌ Dokumentierten schweren Leistungsproblemen</li>
              </ul>
            </div>
          </div>
          <p className="mt-3 text-xs text-neutral-600">Tipp: Nutzen Sie ZertAI für 80% der Routinefälle und sparen Sie Anwaltskosten für die 20% Spezialfälle.</p>
        </div>
      </div>
    </section>
  );
}
