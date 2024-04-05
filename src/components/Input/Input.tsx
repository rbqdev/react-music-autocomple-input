import "./Input.css";

import React from "react";

export type InputVariants = "default";

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  variant?: InputVariants;
}

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ variant = "default", className, type, ...props }, ref) => {
    return (
      <input
        type={type}
        className={`input input-variant-${variant} ${className}`}
        ref={ref}
        {...props}
      />
    );
  }
);
