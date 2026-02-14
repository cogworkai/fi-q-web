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
            href="https://fi-q-hazel.vercel.app/download/dmg"
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
            macOS 10.13+
          </p>
          </div>
          <div className="">
            <a
              href="https://fi-q-hazel.vercel.app/download/windows"
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
              Windows 10+
            </p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default Download;
