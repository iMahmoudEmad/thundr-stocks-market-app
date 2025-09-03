import { useState, useEffect } from "react";

export const Header = ({
  search,
  setSearch,
}: {
  search: string;
  setSearch: (value: string) => void;
}) => {
  const [inputValue, setInputValue] = useState(search);

  useEffect(() => {
    const handler = setTimeout(() => {
      setSearch(inputValue);
    }, 500);

    return () => {
      clearTimeout(handler);
    };
  }, [inputValue, setSearch]);

  return (
    <nav className="sticky top-0 z-50 h-[84px] bg-white shadow-xs">
      <div className="mx-auto flex h-full w-[90%] max-w-[1400px] items-center justify-between gap-4">
        <div className="flex h-full items-center">
          <a href="/" className="flex h-full items-center gap-2 py-4">
            <img
              loading="lazy"
              src="/src/assets/logo.svg"
              alt="Nasdaq logo"
              width={100}
              height={50}
              className="h-full object-contain"
            />
          </a>
        </div>

        <div className="flex-1 flex justify-center">
          <input
            className="input rounded-md border border-gray-300 px-4 py-2 w-full max-w-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
            id="search"
            name="search"
            placeholder="Search stocks..."
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
          />
        </div>
      </div>
    </nav>
  );
};
