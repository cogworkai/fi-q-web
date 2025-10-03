
import React from "react";
import { Link } from "react-router-dom";

export const Footer: React.FC = () => {
  return (
    <footer className="w-full bg-[#FDFDFD] border-t-2 border-[#080808] mt-24 py-16">
      <div className="max-w-[1400px] mx-auto px-5">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          <div className="col-span-1 md:col-span-2">
            <div className="mb-6 flex items-center">
              <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="mr-3">
                <rect width="40" height="40" rx="8" fill="#FFC726"/>
                <path d="M28 16C28 21.5228 23.5228 26 18 26C12.4772 26 8 21.5228 8 16C8 10.4772 12.4772 6 18 6C23.5228 6 28 10.4772 28 16Z" fill="#FFDB5C"/>
                <path d="M32 24C32 29.5228 27.5228 34 22 34C16.4772 34 12 29.5228 12 24C12 18.4772 16.4772 14 22 14C27.5228 14 32 18.4772 32 24Z" fill="#FFB800"/>
              </svg>
              <span className="text-3xl font-['Lexend'] font-bold text-[#080808]">Fi-Q</span>
            </div>
            <p className="text-[#080808] text-lg font-light">
              Personal finance, figured out. 100% private, adapts to your way of thinking, and automates the tedious parts so you can focus on what matters.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-medium text-[#080808] mb-4">Product</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  to="#"
                  className="text-[#080808] font-light hover:text-[#FFC726]"
                >
                  Features
                </Link>
              </li>
              <li>
                <Link
                  to="#"
                  className="text-[#080808] font-light hover:text-[#FFC726]"
                >
                  Download
                </Link>
              </li>
              <li>
                <Link
                  to="#"
                  className="text-[#080808] font-light hover:text-[#FFC726]"
                >
                  Security
                </Link>
              </li>
              <li>
                <Link
                  to="#"
                  className="text-[#080808] font-light hover:text-[#FFC726]"
                >
                  Updates
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-medium text-[#080808] mb-4">Company</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  to="#"
                  className="text-[#080808] font-light hover:text-[#FFC726]"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  to="#"
                  className="text-[#080808] font-light hover:text-[#FFC726]"
                >
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  to="#"
                  className="text-[#080808] font-light hover:text-[#FFC726]"
                >
                  Open Source
                </Link>
              </li>
              <li>
                <Link
                  to="#"
                  className="text-[#080808] font-light hover:text-[#FFC726]"
                >
                  Contact
                </Link>
              </li>
              <li>
                <Link
                  to="/privacy"
                  className="text-[#080808] font-light hover:text-[#FFC726]"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  to="/terms"
                  className="text-[#080808] font-light hover:text-[#FFC726]"
                >
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-[#080808] flex flex-col md:flex-row justify-between items-center">
          <p className="text-[#080808] font-light mb-4 md:mb-0">
            © {new Date().getFullYear()} Fi-Q. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link
              to="/privacy"
              className="text-[#080808] font-light hover:text-[#FFC726]"
            >
              Privacy Policy
            </Link>
            <Link
              to="/terms"
              className="text-[#080808] font-light hover:text-[#FFC726]"
            >
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
