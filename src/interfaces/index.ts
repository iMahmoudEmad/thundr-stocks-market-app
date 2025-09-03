export * from "./Ticker";

export interface APIResponse<T> {
  status: boolean | "true" | "false";
  results: T;
  request_id: string;
  next_url?: string;
}
