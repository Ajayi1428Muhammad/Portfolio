import { LuWorkflow } from "react-icons/lu";

import { FaGitAlt, FaGithub } from "react-icons/fa";
import { SiVercel } from "react-icons/si";
import { TbApi } from "react-icons/tb";

const Devtool = () => {
  return (
    <div>
      <div className="p-4 bg-linear-to-b from-white/6 via-white/2 to-transparent backdrop-blur-lg rounded-2xl flex flex-col space-y-3 border border-white/10 border-t-white/25 h-full">
        <div className="flex flex-col justify-center gap-2">
          <div className="p-2 bg-white/20 border border-white/30 backdrop-blur-xl w-fit rounded-xl">
            <LuWorkflow className="h-6 w-6 text-red-400 " />
          </div>
          <h1 className="font-bold text-white">DevTools & Workflow</h1>
        </div>

        <div className="grid grid-cols-4 gap-2 pt-2">
          <div className="flex w-full aspect-square items-center justify-center rounded-xl bg-white/10">
            <FaGitAlt className="size-6 text-[#F05032]" title="Git" />
          </div>
          <div className="flex w-full aspect-square items-center justify-center rounded-xl bg-white/10">
            <FaGithub className="size-6 text-[#FFFFFF]" title="Github" />
          </div>
          <div className="flex w-full aspect-square items-center justify-center rounded-xl bg-white/10">
            <SiVercel className="size-6 text-white" title="Vercel" />
          </div>
          <div className="flex w-full aspect-square items-center justify-center rounded-xl bg-white/10">
            <TbApi className="size-6 text-[#38BDF8]" title="REST API" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Devtool;
