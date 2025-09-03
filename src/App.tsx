import { useState, useEffect, useRef } from "react";
import { Case, Default, Switch, When } from "react-if";
import { Error, Footer, Header, SplashScreen } from "./components";
import { useGetDividends } from "./services";
import { EmptyState } from "./components";
import { StockCard } from "./components";
import type { TickerResponseApiResponse } from "./interfaces";

function App() {
  const [search, setSearch] = useState("");
  const {
    data,
    isError,
    isFetching,
    fetchNextPage,
    hasNextPage,
    refetch,
    isFetchingNextPage,
  } = useGetDividends({ search });

  const loaderRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && hasNextPage && !isFetchingNextPage) {
          fetchNextPage();
        }
      },
      { threshold: 1 }
    );

    const currentLoader = loaderRef.current;

    if (currentLoader) {
      observer.observe(currentLoader);
    }

    return () => {
      if (currentLoader) {
        observer.unobserve(currentLoader);
      }
    };
  }, [hasNextPage, isFetchingNextPage, fetchNextPage]);

  const allDividends =
    data?.pages.flatMap(
      (page: TickerResponseApiResponse) => page?.results || []
    ) || [];

  return (
    <Switch>
      <Case condition={isFetching && !data}>
        <SplashScreen />
      </Case>

      <Case condition={isError}>
        <Error refetch={refetch} />
      </Case>

      <Case condition={!allDividends?.length && !isFetching}>
        <EmptyState refetch={refetch} />
      </Case>

      <Default>
        <Header search={search} setSearch={setSearch} />

        <div className="mx-auto my-16 w-[90%] max-w-[1400px] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {allDividends?.map((dividend) => (
            <div key={dividend?.ticker} className="h-full flex">
              <StockCard dividend={dividend} />
            </div>
          ))}
        </div>
        <When condition={hasNextPage}>
          <div ref={loaderRef} className="flex justify-center py-6">
            {isFetchingNextPage ? (
              <p className="text-gray-500">Loading more...</p>
            ) : (
              <p className="text-gray-400">Scroll to load more</p>
            )}
          </div>
        </When>
        <When condition={!hasNextPage && allDividends.length > 0}>
          <div className="flex justify-center py-6">
            <p className="text-gray-400">You have reached the end 🎉</p>
          </div>
        </When>

        <Footer />
      </Default>
    </Switch>
  );
}

export default App;
