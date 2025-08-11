import React, { type ReactNode, type ButtonHTMLAttributes } from "react";
import clsx from "clsx";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: "primary" | "secondary" | "danger";
  size?: "small" | "medium" | "large";
  full?: boolean;
  isLoading?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  children,
  variant = "primary",
  size = "small",
  full = false,
  isLoading = false,
  className = "",
  type = "button",
  ...props
}) => {
  const base =
    "rounded-full font-bold transition cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed";

  const variants = {
    primary: "bg-main-purple text-white hover:bg-main-purple-hover",
    secondary: "bg-main-purple/10 hover:bg-main-purple/25 text-main-purple",
    danger: "bg-red hover:bg-red-hover text-white",
  };

  const sizes = {
    small: "px-4 py-2 text-sm", // tighter height, smaller font
    medium: "px-5 py-2.5  text-base", // good default
    large: "px-6 py-3 text-base", // slightly taller, balanced
  };

  const buttonClass = clsx(
    base,
    variants[variant],
    sizes[size],
    full && "w-full",
    className
  );

  return (
    <button
      className={buttonClass}
      type={type}
      disabled={props.disabled || isLoading}
      {...props}
    >
      {isLoading ? "Loading..." : children}
    </button>
  );
};

export default Button;
