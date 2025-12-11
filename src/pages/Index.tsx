
import React from "react";
import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/sections/Hero";
import Features from "@/components/sections/Features";
import Footer from "@/components/sections/Footer";
import homePageImage from "@/assets/home-page.png";
import dashboardPageImage from "@/assets/dashboard-page-1.png";

// Add more images here as they become available
const heroImages = [
  homePageImage,
  // dashboardPageImage,
];

const Index: React.FC = () => {
  return (
    <>
      <link
        href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@300;400;500;600;700&family=Lexend:wght@300;400;500;600;700&family=Inter:wght@400;500&family=Mulish:wght@500&display=swap"
        rel="stylesheet"
      />
      <div className="relative w-full min-h-screen gradient-hero overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0 z-0 overflow-hidden">
          <div className="absolute top-20 left-10 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-float" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }} />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl animate-glow-pulse" />
        </div>
        <div className="relative z-10 flex flex-col items-center">
          <div className="w-full max-w-[1920px]">
            <div className="flex flex-col items-center">
              {/* <Navbar /> */}
              <Hero heroImages={heroImages} />
              <Features />
              <Footer />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Index;
