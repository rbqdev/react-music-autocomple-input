import { HighlightWord } from "@/components/HighLightWord";
import { AutocompleteSuggestion } from "../Autocomplete";

type SuggestionsWrapperProps = {
  value: string;
  suggestions: AutocompleteSuggestion[] | null;
};

export const SuggestionsWrapper = ({
  value,
  suggestions,
}: SuggestionsWrapperProps) => (
  <div className="autocomplete--suggestions-wrapper">
    {suggestions?.length === 0 ? (
      <p className="autocomplete--suggestions-empty">Nothing found!</p>
    ) : (
      <div className="autocomplete--suggestions-list">
        {suggestions?.map(({ name }, key) => (
          <div key={`${name}-${key}`} className="autocomplete--suggestion">
            <HighlightWord textBase={value} text={name} />
          </div>
        ))}
      </div>
    )}
  </div>
);
