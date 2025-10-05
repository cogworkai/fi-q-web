import React from "react";
import { Link } from "react-router-dom";
export const Footer: React.FC = () => {
  return <footer className="w-full bg-[#FDFDFD] border-t-2 border-[#080808] mt-24 py-16">
      <div className="max-w-[1400px] mx-auto px-5">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          

          <div>
            <h3 className="text-xl font-medium text-[#080808] mb-4">Product</h3>
            <ul className="space-y-2">
              <li>
                <Link to="#" className="text-[#080808] font-light hover:text-[#FFC726]">
                  Features
                </Link>
              </li>
              <li>
                <Link to="#" className="text-[#080808] font-light hover:text-[#FFC726]">
                  Download
                </Link>
              </li>
              
              <li>
                <Link to="#" className="text-[#080808] font-light hover:text-[#FFC726]">
                  Updates
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-medium text-[#080808] mb-4">Company</h3>
            <ul className="space-y-2">
              <li>
                <Link to="#" className="text-[#080808] font-light hover:text-[#FFC726]">
                  About
                </Link>
              </li>
              
              
              <li>
                <Link to="#" className="text-[#080808] font-light hover:text-[#FFC726]">
                  Contact
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
            <Link to="/privacy" className="text-[#080808] font-light hover:text-[#FFC726]">
              Privacy Policy
            </Link>
            <Link to="/terms" className="text-[#080808] font-light hover:text-[#FFC726]">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>;
};
export default Footer;