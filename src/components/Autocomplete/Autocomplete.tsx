import "./Autocomplete.css";

import { InputWrapper, InputWrapperProps } from "./components/InputWrapper";
import { SuggestionsWrapper } from "./components/SuggestionsWrapper";

export type AutocompleteSuggestion = {
  name: string;
};

type AutoCompleteProps = InputWrapperProps & {
  suggestions: AutocompleteSuggestion[] | null;
  isDisabled: boolean;
  onClickSuggestion: (suggestion: AutocompleteSuggestion) => void;
};

export const Autocomplete = ({
  value,
  suggestions = [],
  placeholder,
  isLoading,
  isDisabled,
  onChange: onChangeInput,
  onClickSuggestion,
}: AutoCompleteProps) => {
  return (
    <div className="autocomplete">
      <InputWrapper
        value={value}
        placeholder={placeholder}
        isLoading={isLoading}
        isDisabled={isDisabled}
        onChange={onChangeInput}
      />
      {suggestions && (
        <SuggestionsWrapper
          value={value}
          suggestions={suggestions}
          onClickSuggestion={onClickSuggestion}
        />
      )}
    </div>
  );
};
