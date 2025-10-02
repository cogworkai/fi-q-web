import React from "react";
import CustomButton from "@/components/ui/CustomButton";
import { useABTest } from "@/hooks/useABTest";

interface HeroProps {
  heroImageUrl: string;
}

export const Hero: React.FC<HeroProps> = ({ heroImageUrl }) => {
  const variant = useABTest({ testName: 'hero_headline', variants: ['A', 'B'] });

  const headlines = {
    A: {
      title: "Personal Finance, Figured Out",
      subtitle: "Fi-Q learns how you think about money and automates the tedious parts—from categorizing expenses to flagging unwanted subscriptions. 100% private. Zero data mining. Your way."
    },
    B: {
      title: "Stop Tracking. Start Living.",
      subtitle: "Intelligent automation handles the tedious parts of personal finance, so you can focus on what matters. AI-powered insights meet absolute privacy—your way, your data, your control."
    }
  };

  const content = headlines[variant];

  return (
    <div className="relative w-full min-h-screen flex flex-col justify-between overflow-hidden gradient-hero">
      {/* Animated background elements */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 animate-float flex items-center justify-center" style={{ animationDelay: '2s' }}>
          <span className="text-6xl md:text-8xl font-bold text-primary/10 font-['Lexend']">
            Stop Tracking. Start Living.
          </span>
        </div>
      </div>
      
      {/* Content overlay */}
      <div className="relative z-10 flex flex-col items-center text-center pt-24 px-5 w-full animate-fade-in">
        <div className="inline-block mb-6 px-6 py-2 rounded-full glass-effect border border-primary/20">
          <span className="text-sm font-medium text-primary">
            🚀 Now in Beta • Join the Waitlist
          </span>
        </div>
        
        <h1 className="font-['Lexend'] text-6xl md:text-7xl lg:text-8xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary via-accent to-primary leading-tight max-w-[1400px] mb-6 animate-slide-up">
          {content.title}
        </h1>
        
        <p className="font-['DM_Sans'] text-xl md:text-2xl lg:text-3xl font-light text-foreground/80 leading-relaxed max-w-[1100px] mb-12 animate-slide-up" style={{ animationDelay: '0.2s' }}>
          {content.subtitle}
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 animate-slide-up" style={{ animationDelay: '0.4s' }}>
          <CustomButton 
            size="lg" 
            variant="primary"
            className="shadow-glow hover:shadow-elegant transition-all duration-300"
          >
            Join Waitlist
          </CustomButton>
          <CustomButton 
            size="lg" 
            variant="secondary"
          >
            Watch Demo
          </CustomButton>
        </div>

        {/* Trust indicators */}
        <div className="mt-16 flex flex-wrap items-center justify-center gap-8 text-sm text-muted-foreground animate-fade-in" style={{ animationDelay: '0.6s' }}>
          <div className="flex items-center gap-2">
            <svg className="w-5 h-5 text-primary" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
            </svg>
            <span>100% Private</span>
          </div>
          <div className="flex items-center gap-2">
            <svg className="w-5 h-5 text-primary" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z" />
              <path fillRule="evenodd" d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm9.707 5.707a1 1 0 00-1.414-1.414L9 12.586l-1.293-1.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            <span>AI-Powered</span>
          </div>
          <div className="flex items-center gap-2">
            <svg className="w-5 h-5 text-primary" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            <span>Open Source</span>
          </div>
        </div>
      </div>
      
      <div className="relative z-10 w-full max-w-[1400px] mx-auto mt-20 pb-10 px-5 animate-slide-up" style={{ animationDelay: '0.8s' }}>
        <div className="glass-effect rounded-3xl p-2 shadow-elegant">
          <img
            src={heroImageUrl}
            alt="Fi-Q app dashboard showing intelligent expense categorization and insights"
            className="w-full h-auto rounded-2xl"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
