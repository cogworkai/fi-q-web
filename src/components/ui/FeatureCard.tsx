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
    <div className="group h-full">
      <div className="glass-effect p-8 md:p-10 rounded-2xl border-2 border-primary/20 hover:border-primary/40 transition-all duration-300 hover:shadow-glow h-full flex flex-col items-center">
        {icon && (
          <div className="mb-6 text-primary group-hover:scale-110 transition-transform duration-300 flex">
            {icon}
            <h3 className="pl-4 text-3xl md:text-4xl font-semibold text-foreground leading-tight mb-4 font-['Lexend'] center">
              {title}
            </h3>
          </div>
        )}
        
        <p className="text-lg md:text-xl text-muted-foreground font-light leading-relaxed font-['DM_Sans'] flex-1">
          {description}
        </p>
      </div>
    </div>
  );
};

export default FeatureCard;
