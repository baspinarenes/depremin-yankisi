import { headers } from "next/headers";
import { Earthquake } from "src/models/interfaces";

const fetchEarthquakeList = async () => {
  const headersList = headers();
  const url = headersList.get("my-origin");
  const res = await fetch(`${url}/api/earthquakes`);
  const data: Array<Earthquake> = await res.json();

  return data;
};

export default async function EarthquakeList({ filter }: EarthquakeListProps) {
  const earthquakeList = await fetchEarthquakeList();

  const filteredEarthquakeList = earthquakeList.filter((x) => x.location.full.includes("Pazarcık"));

  return (
    <div>
      {filter} - {filteredEarthquakeList.length}
    </div>
  );
}

interface EarthquakeListProps {
  filter: string;
}
