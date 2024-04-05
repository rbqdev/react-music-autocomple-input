import "./Autocomplete.css";

import { InputWrapper, InputWrapperProps } from "./components/InputWrapper";
import { SuggestionsWrapper } from "./components/SuggestionsWrapper";

export type AutocompleteSuggestion = {
  name: string;
};

type AutoCompleteProps = InputWrapperProps & {
  suggestions: AutocompleteSuggestion[] | null;
};

export const Autocomplete = ({
  value,
  suggestions = [],
  placeholder,
  isLoading,
  onChange,
}: AutoCompleteProps) => {
  return (
    <div className="autocomplete">
      <div className="autocomplete--content">
        <InputWrapper
          value={value}
          placeholder={placeholder}
          isLoading={isLoading}
          onChange={onChange}
        />
        {suggestions && (
          <SuggestionsWrapper value={value} suggestions={suggestions} />
        )}
      </div>
    </div>
  );
};
