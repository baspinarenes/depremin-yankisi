// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { TURKEY_COORDINATES } from "src/models/constants";
import { RawEarthquake } from "src/models/interfaces";
import { mapEarthquakeList } from "src/utils/mappers";

type Data = {
  name: string;
};

export default async function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
  if (req.method === "GET") {
    const startDate = new Date(Date.now() - 365 * 60 * 60 * 60 * 1000);
    const endDate = new Date();
    const minMag = 4;

    const afadApiUrl = new URL("https://deprem.afad.gov.tr/apiv2/event/filter");
    afadApiUrl.searchParams.append("start", startDate.toISOString());
    afadApiUrl.searchParams.append("end", endDate.toISOString());
    afadApiUrl.searchParams.append("orderby", "timedesc");
    afadApiUrl.searchParams.append("minmag", String(minMag));
    afadApiUrl.searchParams.append("minlat", String(TURKEY_COORDINATES.lattitude.min));
    afadApiUrl.searchParams.append("maxlat", String(TURKEY_COORDINATES.lattitude.max));
    afadApiUrl.searchParams.append("minlon", String(TURKEY_COORDINATES.longitude.min));
    afadApiUrl.searchParams.append("maxlon", String(TURKEY_COORDINATES.longitude.max));

    const response = await fetch(afadApiUrl);
    const earthquakes: RawEarthquake[] = await response.json();
    const filteredEarthquakes = earthquakes.filter((earthquake) => earthquake.district);
    const mappedEarthquakes = mapEarthquakeList(filteredEarthquakes);

    res.status(200).send(mappedEarthquakes as any);
  } else {
    res.status(404);
  }
}
