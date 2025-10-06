import React from "react";
import { Link } from "react-router-dom";
import CustomButton from "@/components/ui/CustomButton";

export const Navbar: React.FC = () => {
  return (
    <nav className="relative z-20 w-full py-6 px-8">
      <div className="max-w-[1920px] mx-auto flex items-center justify-between">
        <Link to="/" className="flex items-center gap-3 hover:opacity-80 transition-opacity">
          <img 
            src="/fi-q-512.svg" 
            alt="Fi Q Logo" 
            className="h-12 w-auto"
          />
          <span className="font-['Lexend'] text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary via-accent to-primary">
            Fi Q
          </span>
        </Link>
        <div className="flex items-center gap-6">
          <Link to="/privacy" className="text-sm font-medium text-foreground/70 hover:text-foreground transition-colors">
            Privacy
          </Link>
          <Link to="/terms" className="text-sm font-medium text-foreground/70 hover:text-foreground transition-colors">
            Terms
          </Link>
        </div>
      </div>
    </nav>
  );
};
export default Navbar;