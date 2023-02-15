export interface RawEarthquake {
  rms: string;
  eventID: string;
  location: string;
  latitude: string;
  longitude: string;
  depth: string;
  type: string;
  magnitude: string;
  country: string;
  province: string;
  district: string;
  neighborhood: string;
  date: string;
  isEventUpdate: boolean;
  lastUpdateDate: string | null;
}

export interface Earthquake {
  eventID: string;
  depth: string;
  magnitude: number;
  date: string;
  coordinate: {
    lat: string;
    lon: string;
  };
  location: {
    full: string;
    country: string;
    city: string;
    district: string;
  };
}
