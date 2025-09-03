import type { Ticker } from "../interfaces";

export const StockCard = ({ dividend }: { dividend: Ticker }) => (
  <div className="border border-dashed hover:shadow-md hover:border-none hover:scale-105 transition border-gray-200 rounded-lg p-5 bg-white max-w-xl w-full">
    <h2 className="m-0 mb-2 text-xl font-semibold">
      {dividend?.name}
      <span className="text-gray-500 font-normal">({dividend?.ticker})</span>
    </h2>
    <p className="flex items-center justify-between">
      <span className="font-semibold">Type</span> {dividend?.type}
    </p>
    <p className="flex items-center justify-between">
      <span className="font-semibold">Exchange</span>
      {dividend?.primary_exchange}
    </p>
    <p className="flex items-center justify-between">
      <span className="font-semibold">Market</span>
      {dividend?.market.toUpperCase()}
    </p>
    <p className="flex items-center justify-between">
      <span className="font-semibold">Currency</span>
      {dividend?.currency_name.toUpperCase()}
    </p>
    <p className="flex items-center justify-between">
      <span className="font-semibold">CIK</span> {dividend?.cik}
    </p>
    <p className="flex items-center justify-between">
      <span className="font-semibold">Last Updated</span>
      {new Date(dividend?.last_updated_utc).toLocaleString()}
    </p>
    <p className="flex items-center justify-between">
      <span className="font-semibold">Active</span>
      {dividend?.active ? "Yes" : "No"}
    </p>
    <p className="flex items-center justify-between">
      <span className="font-semibold">Locale</span>
      {dividend?.locale.toUpperCase()}
    </p>
  </div>
);
