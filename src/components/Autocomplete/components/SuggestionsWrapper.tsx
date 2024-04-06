import "./SuggestionsWrapper.css";

import { HighlightWord } from "@/components/HighLightWord";

import { AutocompleteSuggestion } from "../Autocomplete";

type SuggestionsWrapperProps = {
  value: string;
  suggestions: AutocompleteSuggestion[] | null;
  onClickSuggestion: (suggestion: AutocompleteSuggestion) => void;
};

const EmptyMessage = () => (
  <p className="autocomplete--suggestions-empty">No results found.</p>
);

const SuggestionsList = ({
  value,
  suggestions,
  onClickSuggestion,
}: SuggestionsWrapperProps) => (
  <div className="autocomplete--suggestions-list">
    {suggestions?.map((suggestion, key) => (
      <div
        key={`${suggestion.name}-${key}`}
        className="autocomplete--suggestion"
        onClick={() => onClickSuggestion(suggestion)}
        role="button"
      >
        <HighlightWord textBase={value} text={suggestion.name} />
      </div>
    ))}
  </div>
);

export const SuggestionsWrapper = ({
  value,
  suggestions,
  onClickSuggestion,
}: SuggestionsWrapperProps) => (
  <div className="autocomplete--suggestions-wrapper">
    {suggestions?.length === 0 ? (
      <EmptyMessage />
    ) : (
      <SuggestionsList
        value={value}
        suggestions={suggestions}
        onClickSuggestion={onClickSuggestion}
      />
    )}
  </div>
);
