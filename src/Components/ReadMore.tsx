"use client";
import { useState } from "react";
import { ChevronDownIcon, ChevronUpIcon } from "@heroicons/react/24/outline";

interface ReadMoreProps {
  text: string;
  maxLength?: number;
}
const ReadMore = ({ text, maxLength = 100 }: ReadMoreProps) => {
  const [expanded, setExpanded] = useState(false);
  if (text.length <= maxLength) {
    return <div className="">{text}</div>;
  }
  const displayText = expanded ? text : `${text.slice(0, maxLength)}...`;
  return (
    <div className="flex flex-col">
      <span className="font-sans">{displayText}</span>
      <button
        onClick={() => setExpanded(!expanded)}
        className="font-semibold ml-1 w-fit text-sm text-slate-400 hover:text-slate-200 cursor-pointer hover:underline focus:outline-none inline-block p-2 bg-linear-to-b from-white/6 via-white/2 to-transparent rounded-xl backdrop-blur-lg border-white/20 border"
      >
        {expanded ? (
          <>
            <span>...show less</span>
            <ChevronUpIcon className="size-4 inline-flex" />
          </>
        ) : (
          <>
            <span>read more</span>
            <ChevronDownIcon className="size-4 inline-flex" />
          </>
        )}{" "}
      </button>
    </div>
  );
};

export default ReadMore;
