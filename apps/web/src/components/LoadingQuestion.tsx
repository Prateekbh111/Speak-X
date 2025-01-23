import React from "react";
import { Skeleton } from "./ui/skeleton";

export default function LoadingQuestion(): React.JSX.Element {
  return (
    <div className="flex flex-col space-y-3">
      <Skeleton className="h-[125px] w-[800px] rounded-xl" />
      <Skeleton className="h-[125px] w-[800px] rounded-xl" />
      <Skeleton className="h-[125px] w-[800px] rounded-xl" />
      <Skeleton className="h-[125px] w-[800px] rounded-xl" />
      <Skeleton className="h-[125px] w-[800px] rounded-xl" />
    </div>
  );
}
