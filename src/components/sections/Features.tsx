
import React from "react";
import FeatureCard from "@/components/ui/FeatureCard";

export const Features: React.FC = () => {
  const features = [
    {
      id: 1,
      title: "Smart Categorization",
      description:
        "Fi-Q learns your spending patterns and automatically categorizes transactions. No more tedious manual entry—just clarity about where your money goes.",
    },
    {
      id: 2,
      title: "Subscription Detective",
      description:
        "Fi-Q flags unwanted subscriptions and recurring charges you might have forgotten about, helping you eliminate expenses you don't need.",
    },
    {
      id: 3,
      title: "Adaptive Budgeting",
      description:
        "Instead of forcing you into rigid budgets, Fi-Q builds budgets around your goals and adapts to how you actually think about money.",
    },
    {
      id: 4,
      title: "100% Private",
      description:
        "Your financial data is yours alone. Fi-Q never sells your information or mines your data to push products. Open source and completely private.",
    },
  ];

  return (
    <div className="flex flex-col items-center pt-[156px] px-5">
      <div className="flex flex-col items-center text-center mb-[86px]">
        <h2 className="text-6xl font-semibold text-[#080808] leading-[70px] mb-4 max-md:text-5xl max-md:leading-[56px] max-sm:text-4xl max-sm:leading-[44px]">
          From Grind to Clarity
        </h2>
        <p className="text-[28px] text-[#080808] font-light leading-10 max-w-[652px] max-md:text-2xl max-md:leading-8 max-sm:text-lg max-sm:leading-7">
          Spend less time tracking expenses and more time understanding your money. Fi-Q transforms financial management from a chore into insight.
        </p>
      </div>
      <div className="flex flex-wrap justify-center gap-8 max-w-[1569px] px-5">
        {features.map((feature) => (
          <FeatureCard
            key={feature.id}
            title={feature.title}
            description={feature.description}
          />
        ))}
      </div>
    </div>
  );
};

export default Features;
