import Link from "next/link";

export default function LandingPage() {
  const forms = [
    { name: "TLP", path: "/forms/tlp" },
    { name: "Warning Board", path: "/forms/warning-board" },
    { name: "KM Post", path: "/forms/km-post" },
    { name: "OFC Marker", path: "/forms/ofc-marker" },
    { name: "Turning Marker", path: "/forms/turning-marker" },
    { name: "Caution Board", path: "/forms/caution-board" },
    { name: "ROU Marker", path: "/forms/rou-marker" },
  ];

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Select a Form</h1>
      <ul>
        {forms.map((form) => (
          <li key={form.name} className="mb-2">
            <Link href={form.path} className="text-blue-500 hover:underline">
              {form.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
