
import React from "react";
import FeatureCard from "@/components/ui/FeatureCard";

export const Features: React.FC = () => {
  const features = [
    {
      id: 1,
      title: "Automatic Tracking",
      description:
        "Connect your accounts securely and let Cheddar automatically categorize and track your transactions, saving you hours of manual entry.",
    },
    {
      id: 2,
      title: "Bill Management",
      description:
        "Never miss a payment again. Cheddar reminds you of upcoming bills and can even suggest optimizing payment dates based on your cash flow.",
    },
    {
      id: 3,
      title: "Investment Dashboard",
      description:
        "Track all your investments in one place with real-time updates and performance metrics, helping you make informed financial decisions.",
    },
    {
      id: 4,
      title: "Privacy First",
      description:
        "Your financial data belongs to you. Cheddar is open source and stores all your information locally, never sharing it with third parties.",
    },
  ];

  return (
    <div className="flex flex-col items-center pt-[156px] px-5">
      <div className="flex flex-col items-center text-center mb-[86px]">
        <h2 className="text-6xl font-semibold text-[#080808] leading-[70px] mb-4 max-md:text-5xl max-md:leading-[56px] max-sm:text-4xl max-sm:leading-[44px]">
          Meet Cheddar
        </h2>
        <p className="text-[28px] text-[#080808] font-light leading-10 max-w-[652px] max-md:text-2xl max-md:leading-8 max-sm:text-lg max-sm:leading-7">
          Managing your personal finances has never been easier. Cheddar helps you keep track of your money, automate your financial life, and plan for your future.
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
