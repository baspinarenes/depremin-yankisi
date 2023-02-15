import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
  name: string;
};

export default async function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
  if (req.method === "GET") {
    const response = await fetch(
      "https://earthquake.usgs.gov/fdsnws/event/1/query?format=geojson&minlatitude=35.9025&maxlatitude=42.02683&minlongitude=25.90902&maxlongitude=44.5742&orderby=time&starttime=1999-01-01&minmagnitude=5"
    );
    const data = await response.json();

    res.status(200).send(data);
  } else {
    res.status(404);
  }
}
