import { useEffect, useState } from "react";

import { api } from "@/api";
import {
  Autocomplete,
  AutocompleteSuggestion,
} from "@/components/Autocomplete";
import { debounceTime } from "@/constants";
import useDebounce from "@/hooks/useDebounce";

type BandsResults = {
  artists: {
    name: string;
  }[];
};

export const AutocompleteBandsController = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [autocompleteValue, setAutocompleteValue] = useState("");
  const [autocompleteSuggestions, setAutocompleteSuggestions] = useState<
    AutocompleteSuggestion[] | null
  >(null);

  const resetAutoCompleteSuggestions = () => {
    setAutocompleteSuggestions(null);
  };

  const handleChangeValue = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.currentTarget.value;
    setAutocompleteValue(value);
  };

  const getBands = async () => {
    if (!autocompleteValue || isLoading) {
      return;
    }

    setIsLoading(true);
    const result = await api.get<BandsResults>(
      `/artist/?query=${autocompleteValue}&fmt=json&limit=5`
    );

    if ("artists" in result) {
      const { artists } = result;
      setAutocompleteSuggestions(
        artists.map(({ name }) => {
          return {
            name,
          };
        })
      );
    }

    setIsLoading(false);
  };

  useEffect(() => {
    resetAutoCompleteSuggestions();
  }, [autocompleteValue]);

  useDebounce(
    () => {
      getBands();
    },
    debounceTime,
    [autocompleteValue]
  );

  return (
    <Autocomplete
      value={autocompleteValue}
      suggestions={autocompleteSuggestions}
      isLoading={isLoading}
      placeholder="Type to search a band..."
      onChange={handleChangeValue}
    />
  );
};
