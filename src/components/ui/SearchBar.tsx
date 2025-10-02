import React, { useState } from "react";
export const SearchBar: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      // In a real application, you would handle the search here
      console.log("Searching for:", searchQuery);
      // For demo purposes, we'll just clear the input
      setSearchQuery("");
    }
  };
  return;
};
export default SearchBar;