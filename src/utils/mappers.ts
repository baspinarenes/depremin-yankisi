import { Earthquake, RawEarthquake } from "src/models/interfaces";

export const mapEarthquake = (earthquake: RawEarthquake): Earthquake => {
  const { eventID, latitude, longitude, date, depth, magnitude, location, country, district, province } = earthquake;

  return {
    coordinate: {
      lat: latitude,
      lon: longitude,
    },
    date,
    depth,
    eventID,
    location: {
      full: location,
      country,
      city: province,
      district,
    },
    magnitude: Number(magnitude),
  };
};

export const mapEarthquakeList = (earthquakeList: RawEarthquake[]): Earthquake[] => {
  return earthquakeList.map(mapEarthquake);
};
