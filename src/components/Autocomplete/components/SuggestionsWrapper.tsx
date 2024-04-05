import "./SuggestionsWrapper.css";

import { HighlightWord } from "@/components/HighLightWord";

import { AutocompleteSuggestion } from "../Autocomplete";

type SuggestionsWrapperProps = {
  value: string;
  suggestions: AutocompleteSuggestion[] | null;
};

const EmptyMessage = () => (
  <p className="autocomplete--suggestions-empty">No results found.</p>
);

const SuggestionsList = ({ value, suggestions }: SuggestionsWrapperProps) => (
  <div className="autocomplete--suggestions-list">
    {suggestions?.map(({ name }, key) => (
      <div key={`${name}-${key}`} className="autocomplete--suggestion">
        <HighlightWord textBase={value} text={name} />
      </div>
    ))}
  </div>
);

export const SuggestionsWrapper = ({
  value,
  suggestions,
}: SuggestionsWrapperProps) => (
  <div className="autocomplete--suggestions-wrapper">
    {suggestions?.length === 0 ? (
      <EmptyMessage />
    ) : (
      <SuggestionsList value={value} suggestions={suggestions} />
    )}
  </div>
);
