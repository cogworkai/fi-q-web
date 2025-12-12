import React from "react";
import { Link } from "react-router-dom";
import { useAuth } from "@/contexts/AuthContext";
import { User } from "lucide-react";

export const Navbar: React.FC = () => {
  const { user } = useAuth();

  return (
    <nav className="relative z-20 w-full py-6 px-8">
      <div className="max-w-[1920px] mx-auto flex items-center justify-between">
        <Link to="/" className="flex items-center gap-3 hover:opacity-80 transition-opacity">
          {/* Logo placeholder */}
        </Link>
        <div className="flex items-center gap-6">
          {user ? (
            <Link 
              to="/profile" 
              className="flex items-center gap-2 text-sm font-medium text-foreground/70 hover:text-foreground transition-colors"
            >
              <User className="h-4 w-4" />
              Profile
            </Link>
          ) : (
            <Link 
              to="/auth" 
              className="text-sm font-medium text-foreground/70 hover:text-foreground transition-colors"
            >
              Login
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;