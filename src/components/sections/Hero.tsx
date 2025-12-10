import React, { useState, useCallback, useEffect } from "react";
import CustomButton from "@/components/ui/CustomButton";
import { useABTest } from "@/hooks/useABTest";
import { WaitlistDialog } from "@/components/ui/WaitlistDialog";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
  type CarouselApi,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

interface HeroProps {
  heroImages: string[];
}

export const Hero: React.FC<HeroProps> = ({ heroImages }) => {
  const [isWaitlistOpen, setIsWaitlistOpen] = useState(false);
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);
  const variant = useABTest({ testName: 'hero_headline', variants: ['A', 'B'] });

  useEffect(() => {
    if (!api) return;

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap());

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap());
    });
  }, [api]);

  const scrollTo = useCallback((index: number) => {
    api?.scrollTo(index);
  }, [api]);

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
    <div className="relative w-full min-h-screen flex flex-col justify-center items-center overflow-hidden">
      
      {/* Content overlay */}
      <div className="relative z-10 flex flex-col items-center text-center px-5 w-full animate-fade-in">
        <div className="inline-block mb-6 px-6 py-2 rounded-full glass-effect border border-primary/20">
          <span className="text-sm font-medium text-primary">
            🚀 Now in Beta • Join the Waitlist
          </span>
        </div>
        
        <h1 className="font-['Lexend'] text-6xl md:text-7xl lg:text-8xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary via-accent to-primary leading-tight max-w-[1400px] mb-6 animate-slide-up py-2">
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
            onClick={() => setIsWaitlistOpen(true)}
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
      
      <div className="relative z-10 w-full max-w-[1400px] mx-auto mt-12 px-5 animate-slide-up" style={{ animationDelay: '0.8s' }}>
        <div className="glass-effect rounded-3xl p-2 shadow-elegant">
          <Carousel
            opts={{ loop: true }}
            plugins={[
              Autoplay({
                delay: 4000,
                stopOnInteraction: false,
              }),
            ]}
            setApi={setApi}
            className="w-full"
          >
            <CarouselContent>
              {heroImages.map((image, index) => (
                <CarouselItem key={index}>
                  <img
                    src={image}
                    alt={`Fi-Q app dashboard screenshot ${index + 1}`}
                    className="w-full h-auto rounded-2xl"
                  />
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="left-4 bg-background/80 backdrop-blur-sm border-border/50 hover:bg-background" />
            <CarouselNext className="right-4 bg-background/80 backdrop-blur-sm border-border/50 hover:bg-background" />
          </Carousel>
        </div>
        
        {/* Navigation dots */}
        {count > 1 && (
          <div className="flex justify-center gap-2 mt-4">
            {Array.from({ length: count }).map((_, index) => (
              <button
                key={index}
                onClick={() => scrollTo(index)}
                className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                  index === current 
                    ? "bg-primary w-8" 
                    : "bg-muted-foreground/30 hover:bg-muted-foreground/50"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        )}
      </div>
      
      <WaitlistDialog open={isWaitlistOpen} onOpenChange={setIsWaitlistOpen} />
    </div>
  );
};

export default Hero;
