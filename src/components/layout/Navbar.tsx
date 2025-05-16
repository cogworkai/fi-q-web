
import React from "react";
import { Link } from "react-router-dom";
import CustomButton from "@/components/ui/CustomButton";

export const Navbar: React.FC = () => {
  return (
    <nav className="w-full flex justify-between items-center px-[31px] py-[21px] max-md:px-5">
      <div className="flex items-center gap-2.5">
        <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="32" height="32" rx="8" fill="#FFC726"/>
          <path d="M22 13C22 17.4183 18.4183 21 14 21C9.58172 21 6 17.4183 6 13C6 8.58172 9.58172 5 14 5C18.4183 5 22 8.58172 22 13Z" fill="#FFDB5C"/>
          <path d="M26 19C26 23.4183 22.4183 27 18 27C13.5817 27 10 23.4183 10 19C10 14.5817 13.5817 11 18 11C22.4183 11 26 14.5817 26 19Z" fill="#FFB800"/>
        </svg>
        <span className="text-2xl font-['Lexend'] font-bold text-[#080808]">Cheddar</span>
      </div>
      <div className="flex items-center gap-10 max-md:hidden">
        <Link to="#" className="text-[18px] text-[#080808] font-light font-['DM_Sans'] leading-[40px]">
          Features
        </Link>
        <Link to="#" className="text-[18px] text-[#110B53] font-semibold font-['DM_Sans'] leading-[40px]">
          Security
        </Link>
        <Link to="#" className="text-[18px] text-[#080808] font-light font-['DM_Sans'] leading-[40px]">
          Open Source
        </Link>
      </div>
      <CustomButton className="px-[27px] py-[13px] text-[17px] leading-[19px] font-[500] font-['Lexend']">
        Download Now
      </CustomButton>
      <button className="hidden max-md:block">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="ti ti-menu-2 text-2xl"
        >
          <path d="M4 6h16"></path>
          <path d="M4 12h16"></path>
          <path d="M4 18h16"></path>
        </svg>
      </button>
    </nav>
  );
};

export default Navbar;
