import { useCallback, useEffect, useState } from "react";

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
    setAutocompleteValue(event.currentTarget.value);
  };

  const handleClickSuggestion = ({ name }: AutocompleteSuggestion) => {
    alert(`Clicked: ${name}`);
  };

  const getBands = useCallback(async () => {
    if (!autocompleteValue || isLoading) {
      return;
    }

    setIsLoading(true);
    const result = await api.get<BandsResults>(
      `/artist/?query=${autocompleteValue}&fmt=json&limit=5`
    );

    if ("error" in result) {
      const { error } = result;
      alert(error);
      return;
    }

    if ("artists" in result) {
      const { artists } = result;
      const updatedSuggestions = artists.map(({ name }) => {
        return {
          name,
        };
      });
      setAutocompleteSuggestions(updatedSuggestions);
    }
    setIsLoading(false);
  }, [autocompleteValue, isLoading]);

  useDebounce(
    () => {
      getBands();
    },
    debounceTime,
    [autocompleteValue]
  );

  useEffect(() => {
    resetAutoCompleteSuggestions();
  }, [autocompleteValue]);

  return (
    <Autocomplete
      value={autocompleteValue}
      suggestions={autocompleteSuggestions}
      isLoading={isLoading}
      isDisabled={isLoading}
      placeholder="Type to search a band..."
      onChange={handleChangeValue}
      onClickSuggestion={handleClickSuggestion}
    />
  );
};
