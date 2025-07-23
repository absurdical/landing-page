import AppTile from "./components/AppTile";
import { apps } from "./data/apps";

export default function Home() {
  return (
    <main className="max-w-5xl mx-auto p-8">
      <h1 className="text-4xl font-bold mb-4">The Periodic Table of My Web Apps</h1>
      <p className="mb-8 text-gray-600">
        Experiments in code, creativity, and play — explore the elements below.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {apps.map((app) => (
          <AppTile key={app.id} {...app} />
        ))}
      </div>
    </main>
  );
}
