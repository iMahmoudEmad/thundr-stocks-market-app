import { useInfiniteQuery } from "@tanstack/react-query";
import type { AxiosResponse } from "axios";
import { QUERY_KEYS } from "../constants";
import type { TickerResponseApiResponse } from "../interfaces";
import { apiKey, http } from "./http";

export const fetchDividends = async ({
  pageParam,
  search,
}: {
  pageParam?: string;
  search: string;
}) => {
  const url = pageParam
    ? pageParam
    : `reference/tickers?market=stocks&${
        search ? `search=${search}&` : ""
      }active=true&order=asc&limit=10&sort=ticker&apiKey=${apiKey}`;

  return await http
    .get<void, AxiosResponse<TickerResponseApiResponse>>(url)
    .then((res) => res?.data)
    .catch((error) => {
      throw new Error(error.message);
    });
};

export function useGetDividends({ search }: { search: string }) {
  return useInfiniteQuery({
    queryKey: [QUERY_KEYS.Dividends, search],
    queryFn: ({ pageParam }) =>
      fetchDividends({ pageParam: pageParam as string | undefined, search }),
    getNextPageParam: (lastPage: TickerResponseApiResponse) =>
      lastPage?.next_url ?? undefined,
    initialPageParam: undefined,
  });
}
