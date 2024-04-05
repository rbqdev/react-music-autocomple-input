import {
  Autocomplete,
  AutocompleteSuggestion,
} from "./components/Autocomplete";
import "./App.css";
import { useEffect, useState } from "react";
import useDebounce from "./hooks/useDebounce";
import { api } from "./api";
import { debounceTime } from "./constants";

type BandsResults = {
  artists: {
    name: string;
  }[];
};

function App() {
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
    <div className="app">
      <div className="app--content">
        <h1>Music Bands Autocomplete</h1>
        <Autocomplete
          value={autocompleteValue}
          suggestions={autocompleteSuggestions}
          isLoading={isLoading}
          placeholder="Type to search a band..."
          onChange={handleChangeValue}
        />
      </div>
    </div>
  );
}

export default App;
