import crossFetch from "cross-fetch";

export function fetcher(input: any, init?: any) {
  return crossFetch(input, init).then((response) => response.json());
}
