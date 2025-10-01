import React from "react";
import FeatureCard from "@/components/ui/FeatureCard";
import { Brain, Shield, Target, Zap } from "lucide-react";

export const Features: React.FC = () => {
  const features = [
    {
      id: 1,
      title: "Smart Categorization",
      description:
        "Fi-Q learns your spending patterns and automatically categorizes transactions. No more tedious manual entry—just clarity about where your money goes.",
      icon: <Brain className="w-12 h-12" />,
    },
    {
      id: 2,
      title: "Subscription Detective",
      description:
        "Fi-Q flags unwanted subscriptions and recurring charges you might have forgotten about, helping you eliminate expenses you don't need.",
      icon: <Zap className="w-12 h-12" />,
    },
    {
      id: 3,
      title: "Adaptive Budgeting",
      description:
        "Instead of forcing you into rigid budgets, Fi-Q builds budgets around your goals and adapts to how you actually think about money.",
      icon: <Target className="w-12 h-12" />,
    },
    {
      id: 4,
      title: "100% Private",
      description:
        "Your financial data is yours alone. Fi-Q never sells your information or mines your data to push products. Open source and completely private.",
      icon: <Shield className="w-12 h-12" />,
    },
  ];

  return (
    <section className="flex flex-col items-center py-24 md:py-32 px-5 bg-muted/30">
      <div className="flex flex-col items-center text-center mb-16 md:mb-20 animate-fade-in">
        <div className="inline-block mb-4 px-5 py-2 rounded-full glass-effect border border-primary/20">
          <span className="text-sm font-medium text-primary">
            Why Choose Fi-Q
          </span>
        </div>
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight mb-6 font-['Lexend'] max-w-[800px]">
          From Grind to Clarity
        </h2>
        <p className="text-lg md:text-xl lg:text-2xl text-muted-foreground font-light leading-relaxed max-w-[700px] font-['DM_Sans']">
          Spend less time tracking expenses and more time understanding your money. Fi-Q transforms financial management from a chore into insight.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 max-w-[1400px] w-full px-5">
        {features.map((feature, index) => (
          <div 
            key={feature.id} 
            className="animate-slide-up"
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <FeatureCard
              title={feature.title}
              description={feature.description}
              icon={feature.icon}
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Features;
