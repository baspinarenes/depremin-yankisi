import EarthquakeList from "./EarthquakeList";

export default function LastEarthquakesMapPage() {
  return (
    <div className="p-8">
      <h1 className="text-4xl font-bold break-words mb-6">
        Son
        <br />
        Depremlerin
        <br />
        Haritası
      </h1>
      {/* @ts-expect-error Server Component */}
      <EarthquakeList filter="Pazarcık" />
    </div>
  );
}
