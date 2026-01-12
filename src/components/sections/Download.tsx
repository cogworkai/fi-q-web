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
          Download Fi Q
        </CardTitle>
        <CardDescription>
          Take control of your finances with our desktop app
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="flex flex-row justify-around gap-4 flex-wrap">
          <div className="">
          <a
            href="https://github.com/cogworkai/fi-q-desktop/releases/download/0.3.1-beta.1/Fi.Q-0.3.1-arm64.dmg"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block"
          >
            <Button className="gap-2">
              <DownloadIcon className="h-4 w-4" />
              Download macOS (Apple Silicon)
            </Button>
          </a>
          <p className="text-sm text-muted-foreground text-center">
            Version 0.3.1 • macOS 11+
          </p>
          </div>
          <div className="">
            <a
              href="https://github.com/cogworkai/fi-q-desktop/releases/download/0.3.1-beta.1/Fi.Q.Setup.0.3.1.exe"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block"
            >
              <Button className="gap-2">
                <DownloadIcon className="h-4 w-4" />
                Download Windows
              </Button>
            </a>
            <p className="text-sm text-muted-foreground text-center">
              Version 0.3.1 • Windows 10+
            </p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default Download;
