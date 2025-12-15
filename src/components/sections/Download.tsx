import React from "react";
import { Download as DownloadIcon } from "lucide-react";
import { Button } from "@/components/ui/CustomButton";

const Download: React.FC = () => {
  return (
    <section className="w-full py-20 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="font-['Lexend'] text-3xl md:text-4xl font-bold text-foreground mb-4">
          Download Fi-Q
        </h2>
        <p className="font-['DM_Sans'] text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
          Take control of your finances with our desktop app. Available now for macOS.
        </p>
        <a
          href="https://github.com/cogworkai/fi-q-desktop/releases/download/untagged-23b678ddea97836659cd/Fi.Q-0.3.0-arm64.dmg"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block"
        >
          <Button variant="primary" size="lg" className="gap-3">
            <DownloadIcon className="w-6 h-6" />
            Download for macOS (Apple Silicon)
          </Button>
        </a>
        <p className="mt-4 text-sm text-muted-foreground">
          Version 0.3.0 • Requires macOS 11+
        </p>
      </div>
    </section>
  );
};

export default Download;
