import "./InputWrapper.css";

import { LoaderIcon, SearchIcon } from "@/components/Icons";
import { Input } from "@/components/Input";

export type InputWrapperProps = {
  value: string;
  placeholder?: string;
  isLoading?: boolean;
  isDisabled?: boolean;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

export const InputWrapper = ({
  value,
  isLoading,
  isDisabled,
  placeholder,
  onChange,
}: InputWrapperProps) => (
  <div
    className={`autocomplete--input-wrapper ${isDisabled ? "disabled" : ""}`}
  >
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
      disabled={isDisabled}
      onChange={onChange}
    />
  </div>
);
