import { baseUrl } from "@/constants";

type Error = {
  error: string;
};

export const api = {
  get: async <T>(endpoint: string): Promise<T | Error> => {
    try {
      const data = await fetch(`${baseUrl}${endpoint}`);
      const json = await data.json();

      return json as T;
    } catch {
      return { error: "Something went wrong!" } as Error;
    }
  },
};
