import { LoaderIcon, SearchIcon } from "@/components/Icons";
import { Input } from "@/components/Input";

export type InputWrapperProps = {
  value: string;
  placeholder?: string;
  isLoading?: boolean;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

export const InputWrapper = ({
  value,
  isLoading,
  placeholder,
  onChange,
}: InputWrapperProps) => (
  <div className="autocomplete--input-wrapper">
    {isLoading ? (
      <LoaderIcon className="autocomplete--input-icon loader" />
    ) : (
      <SearchIcon className="autocomplete--input-icon" />
    )}

    <Input
      autoFocus
      className="autocomplete--input"
      placeholder={placeholder}
      value={value}
      onChange={onChange}
    />
  </div>
);
