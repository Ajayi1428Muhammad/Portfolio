import React from "react";

interface CHeaderProps {
  Head: string;
  SubHead: string;
}

const CHeader = ({ Head, SubHead }: CHeaderProps) => {
  return (
    <div>
      <div className="flex flex-col justify-center items-center mb-3">
        <div className="flex items-center gap-4 w-full max-w-sm mx-auto">
          <span className="h-px flex-1 bg-slate-50/20" />
          <h1 className="font-playfair font-bold text-2xl md:text-3xl text-slate-50 whitespace-nowrap">
            {Head}
          </h1>
          <span className="h-px flex-1 bg-slate-50/20" />
        </div>
        <div className="flex items-center justify-center ">
          <p className="text-4xl text-center">{SubHead}</p>
        </div>
      </div>
    </div>
  );
};

export default CHeader;
