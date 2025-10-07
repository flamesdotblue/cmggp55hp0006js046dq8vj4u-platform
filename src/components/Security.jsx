import { Lock } from 'lucide-react';

export default function Security() {
  return (
    <section className="py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-xl border border-neutral-200 bg-white p-6">
          <h3 className="text-lg font-medium text-neutral-900 flex items-center gap-2"><Lock className="h-5 w-5" /> Ihre Daten sind geschützt</h3>
          <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-6 text-sm text-neutral-800">
            <div>
              <p className="font-medium">🔐 DSGVO-konform (nur EU/CH-Rechenzentren)</p>
              <p className="mt-1">Alle Daten in Frankfurt und Zürich gespeichert.</p>
              <p className="mt-3 font-medium">🔒 Verschlüsselung</p>
              <p className="mt-1">TLS 1.3 bei Übertragung, AES-256 im Ruhezustand.</p>
              <p className="mt-3 font-medium">🚫 Ihre Daten trainieren NIE unsere KI</p>
              <p className="mt-1">Mitarbeiterdaten bleiben Ihre Daten.</p>
            </div>
            <div>
              <p className="font-medium">✓ SOC 2 Type II (in Bearbeitung)</p>
              <p className="mt-1">Regelmäßige Sicherheitsprüfungen.</p>
              <p className="mt-3 font-medium">🗑️ Datenlöschung jederzeit</p>
              <p className="mt-1">30-Tage-Garantie für vollständige Löschung.</p>
              <p className="mt-3 font-medium">📍 Datenresidenz</p>
              <p className="mt-1">Keine Übertragung in die USA oder andere Regionen.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
