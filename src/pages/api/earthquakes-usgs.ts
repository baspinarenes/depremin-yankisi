import type { NextApiRequest, NextApiResponse } from "next";
import earthquakeData from "../../../public/earthquake-data.json";

type Data = {
  name: string;
};

export default async function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
  if (req.method === "GET") {
    const response = await fetch(
      "https://earthquake.usgs.gov/fdsnws/event/1/query?format=geojson&minlatitude=35.9025&maxlatitude=42.02683&minlongitude=25.90902&maxlongitude=44.5742&orderby=time&starttime=2023-02-16&minmagnitude=5"
    );

    const data = await response.json();

    // earthquakeData.metadata.count += data.metadata.count;
    // earthquakeData.features.shift(data.features as any);

    res.setHeader("Cache-Control", "s-maxage=86400");
    res.status(200).send(earthquakeData as any);
  } else {
    res.status(404);
  }
}
