import { IoCodeSlash } from "react-icons/io5";
import { FaCss3Alt, FaHtml5, FaJs, FaReact } from "react-icons/fa";
import {
  SiFramer,
  SiNextdotjs,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";

const Frontend = () => {
  return (
    <div className="p-4 bg-linear-to-b from-white/6 via-white/2 to-transparent backdrop-blur-lg rounded-2xl flex flex-col space-y-3 border border-white/10 border-t-white/25">
      <div className="flex flex-col justify-center gap-2">
        <div className="p-2 bg-white/20 border border-white/30 backdrop-blur-xl w-fit rounded-xl">
          <IoCodeSlash className="h-6 w-6 text-red-400 " />
        </div>
        <h1 className="font-bold text-white">Frontend</h1>
      </div>

      <div className="grid grid-cols-4 gap-2 pt-2">
        <div className="flex w-full aspect-square items-center justify-center rounded-xl bg-white/10">
          <FaReact className="size-6 text-[#61DAFB]" title="React" />
        </div>
        <div className="flex w-full aspect-square items-center justify-center rounded-xl bg-white/10">
          <FaJs className="size-6 text-[#F7DF1E]" title="JavaScript" />
        </div>
        <div className="flex w-full aspect-square items-center justify-center rounded-xl bg-white/10">
          <SiTypescript className="size-6 text-[#3178C6]" title="TypeScript" />
        </div>
        <div className="flex w-full aspect-square items-center justify-center rounded-xl bg-white/10">
          <SiTailwindcss
            className="size-6 text-[#06B6D4]"
            title="Tailwind CSS"
          />
        </div>
        <div className="flex w-full aspect-square items-center justify-center rounded-xl bg-white/10">
          {/* Changed text-black to text-white for dark mode visibility */}
          <SiNextdotjs className="size-6 text-white" title="Next.js" />
        </div>
        <div className="flex w-full aspect-square items-center justify-center rounded-xl bg-white/10">
          <SiFramer className="size-6 text-[#0055FF]" title="Framer Motion" />
        </div>
        <div className="flex w-full aspect-square items-center justify-center rounded-xl bg-white/10">
          <FaHtml5 className="size-6 text-[#E34F26]" title="HTML" />
        </div>
        <div className="flex w-full aspect-square items-center justify-center rounded-xl bg-white/10">
          <FaCss3Alt className="size-6 text-[#1572B6]" title="CSS" />
        </div>
      </div>
    </div>
  );
};

export default Frontend;
