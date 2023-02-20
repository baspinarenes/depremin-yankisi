import { Earthquake } from "src/models/interfaces";
import { fetcher } from "src/utils/common";
import useSWR from "swr";

export const useEarthquake = ({
  minMag = 4,
  startDate = new Date(Date.now() - 50 * 60 * 60 * 60 * 1000),
  endDate = new Date(),
}: {
  minMag?: number;
  startDate?: Date;
  endDate?: Date;
}) => {
  const { data, error, isLoading } = useSWR<Earthquake[]>(`/api/earthquakes`, fetcher, { refreshInterval: 30000 });

  return {
    earthquakes: data,
    isLoading,
    isError: error,
  };
};
