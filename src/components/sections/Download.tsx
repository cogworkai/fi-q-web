import React from "react";
import { Download as DownloadIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const Download: React.FC = () => {
  return (
    <Card className="border-border/50 bg-card/50 backdrop-blur-sm">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <DownloadIcon className="h-5 w-5 text-primary" />
          Download Fi-Q
        </CardTitle>
        <CardDescription>
          Take control of your finances with our desktop app
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <a
          href="https://github.com/cogworkai/fi-q-desktop/releases/download/untagged-23b678ddea97836659cd/Fi.Q-0.3.0-arm64.dmg"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block"
        >
          <Button className="gap-2">
            <DownloadIcon className="h-4 w-4" />
            Download for macOS (Apple Silicon)
          </Button>
        </a>
        <p className="text-sm text-muted-foreground">
          Version 0.3.0 • Requires macOS 11+
        </p>
      </CardContent>
    </Card>
  );
};

export default Download;
