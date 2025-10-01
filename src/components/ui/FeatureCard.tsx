import React from "react";

interface FeatureCardProps {
  title: string;
  description: string;
  icon?: React.ReactNode;
}

export const FeatureCard: React.FC<FeatureCardProps> = ({
  title,
  description,
  icon,
}) => {
  return (
    <div className="flex-1 min-w-[300px] max-w-[500px] group">
      <div className="glass-effect p-8 md:p-10 rounded-2xl border-2 border-primary/20 hover:border-primary/40 transition-all duration-300 hover:shadow-glow h-full">
        {icon && (
          <div className="mb-6 text-primary group-hover:scale-110 transition-transform duration-300">
            {icon}
          </div>
        )}
        <h3 className="text-3xl md:text-4xl font-semibold text-foreground leading-tight mb-4 font-['Lexend']">
          {title}
        </h3>
        <p className="text-lg md:text-xl text-muted-foreground font-light leading-relaxed font-['DM_Sans']">
          {description}
        </p>
      </div>
    </div>
  );
};

export default FeatureCard;
