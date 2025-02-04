import React from "react";
import { Card, CardContent, CardHeader } from "@/src/components/ui/card";
import { Skeleton } from "@/src/components/ui/skeleton";

const LoadingScreen = () => {
  return (
    <div className="flex flex-col space-y-4 p-4">
      {[...Array(3)].map((_, index) => (
        <Card key={index} className="animate-pulse">
          <CardHeader>
            <Skeleton className="h-6 w-1/2" />
          </CardHeader>
          <CardContent>
            <Skeleton className="h-4 w-full mb-2" />
            <Skeleton className="h-4 w-3/4" />
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default LoadingScreen;
