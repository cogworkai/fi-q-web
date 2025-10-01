import React from "react";
import { cn } from "@/lib/utils";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary";
  size?: "sm" | "md" | "lg";
  children: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({
  variant = "primary",
  size = "md",
  className,
  children,
  ...props
}) => {
  const baseStyles = "font-['Lexend'] font-semibold rounded-full transition-all duration-300 transform hover:scale-105 active:scale-95";
  
  const variants = {
    primary: "bg-primary text-primary-foreground hover:bg-primary/90 shadow-glow border-2 border-primary/20",
    secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/90 border-2 border-secondary/30"
  };

  const sizes = {
    sm: "text-sm px-5 py-2",
    md: "text-base px-7 py-3",
    lg: "text-xl md:text-2xl px-10 py-4 md:px-12 md:py-5"
  };

  return (
    <button
      className={cn(
        baseStyles,
        variants[variant],
        sizes[size],
        className,
      )}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
