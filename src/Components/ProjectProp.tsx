import Image from "next/image";
import ReadMore from "@/Components/ReadMore";
import { ArrowTopRightOnSquareIcon } from "@heroicons/react/24/outline";
import { FaGithub, FaJs, FaReact } from "react-icons/fa";
import {
  SiDjango,
  SiGooglegemini,
  SiNeon,
  SiNextdotjs,
  SiOpenstreetmap,
  SiPrisma,
  SiTailwindcss,
} from "react-icons/si";
import { TbApi } from "react-icons/tb";
import type { IconType } from "react-icons";

interface ProjectProps {
  path?: string;
  title: string;
  desc: string;
  tags: string[];
  githubUrl: string;
  demoUrl: string;
}

const tagIcons: Record<string, IconType> = {
  "Next.js": SiNextdotjs,
  JavaScript: FaJs,
  "Tailwind CSS": SiTailwindcss,
  Prisma: SiPrisma,
  Neon: SiNeon,
  React: FaReact,
  "REST API": TbApi,
  "Gemini API": SiGooglegemini,
  "Gemini AI": SiGooglegemini,
  "OpenStreetMap API": SiOpenstreetmap,
  Django: SiDjango,
};

const tagColors: Record<string, string> = {
  "Next.js": "text-white",
  JavaScript: "text-[#F7DF1E]",
  "Tailwind CSS": "text-[#06B6D4]",
  Prisma: "text-[#5A67D8]",
  Neon: "text-[#00E599]",
  React: "text-[#61DAFB]",
  "REST API": "text-[#38BDF8]",
  "Gemini API": "text-[#4285F4]",
  "Gemini AI": "text-[#4285F4]",
  "TanStack Query": "text-[#FF4154]",
  "OpenStreetMap API": "text-[#7EBC6F]",
  Django: "text-[#0C4B33]",
};

const NextAuthIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 440 500"
    fill="none"
    className="size-6"
    aria-hidden="true"
  >
    <path
      d="M220 0C320 0 422.3 35.5 437.9 146.1C455.5 270.8 359 414.9 220 500C81 414.9 -25.5 270.8 2.1 146.1C17.7 35.5 120 0 220 0Z"
      fill="url(#project-nextauth-gradient)"
    />
    <circle cx="220" cy="225" r="75" fill="white" />
    <path
      d="M228.3 183.3C210.6 183.3 196.3 197.6 196.3 215.3C196.3 227.1 202.7 237.4 212.1 242.9L191.3 263.8C189.3 265.8 189.3 269 191.3 271L199.6 279.3C201.6 281.3 204.8 281.3 206.8 279.3L218.4 267.7L226.7 276C228.7 278 231.9 278 233.9 276L242.2 267.7C244.2 265.7 244.2 262.5 242.2 260.5L234.7 253C240.6 244.5 244.2 234.2 244.2 222.9C244.2 201.1 237.1 183.3 228.3 183.3ZM220 207C215.6 207 212 203.4 212 199C212 194.6 215.6 191 220 191C224.4 191 228 194.6 228 199C228 203.4 224.4 207 220 207Z"
      fill="url(#project-nextauth-key-gradient)"
    />
    <defs>
      <linearGradient
        id="project-nextauth-gradient"
        x1="0"
        y1="0"
        x2="440"
        y2="500"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#38BDF8" />
        <stop offset="0.5" stopColor="#A855F7" />
        <stop offset="1" stopColor="#EC4899" />
      </linearGradient>
      <linearGradient
        id="project-nextauth-key-gradient"
        x1="191.3"
        y1="183.3"
        x2="244.2"
        y2="281.3"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#EA580C" />
        <stop offset="1" stopColor="#EAB308" />
      </linearGradient>
    </defs>
  </svg>
);

const ProjectTag = ({ tag }: { tag: string }) => {
  const Icon = tagIcons[tag];

  return (
    <div
      className="flex size-12 items-center justify-center rounded-xl bg-white/10 "
      title={tag}
    >
      {tag === "NextAuth" ? (
        <NextAuthIcon />
      ) : Icon ? (
        <Icon
          className={`size-5 ${tagColors[tag] ?? "text-white"}`}
          title={tag}
        />
      ) : (
        <span className="px-1 text-center text-[9px] leading-tight text-white/90">
          {tag}
        </span>
      )}
    </div>
  );
};

const ProjectTextTag = ({ tag }: { tag: string }) => (
  <span
    className="rounded-xl bg-white/10 px-2 py-2 text-center text-xs text-white/90"
    title={tag}
  >
    {tag}
  </span>
);

const Project = ({
  path,
  title,
  desc,
  tags,
  githubUrl,
  demoUrl,
}: ProjectProps) => {
  return (
    <div className="flex h-full flex-col overflow-hidden rounded-xl border border-white/20 border-t-white/25 bg-linear-to-b from-white/6 via-white/2 to-transparent backdrop-blur-lg">
      <div className="relative aspect-video w-full shrink-0 overflow-hidden rounded-t-xl bg-slate-400">
        {path && (
          <Image
            alt={`${title} project preview`}
            src={path}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw "
            className="object-cover"
          />
        )}
        <div className="absolute right-4 top-4 z-10 flex gap-2">
          <a
            href={demoUrl}
            target="_blank"
            rel="noreferrer noopener"
            aria-label={`Open ${title} live demo`}
            title="Open live demo"
            className="rounded-xl border border-white/30 bg-linear-to-b from-white/15 via-white/6 to-transparent p-2 text-white backdrop-blur-xl transition-colors hover:from-white/20"
          >
            <ArrowTopRightOnSquareIcon className="size-5" />
          </a>
          <a
            href={githubUrl}
            target="_blank"
            rel="noreferrer"
            aria-label={`Open ${title} source code on GitHub`}
            title="Open source code"
            className="rounded-xl border border-white/30 bg-linear-to-b from-white/15 via-white/6 to-transparent p-2 text-white backdrop-blur-xl transition-colors hover:from-white/20"
          >
            <FaGithub className="size-5" />
          </a>
        </div>
      </div>
      <div className="flex flex-1 flex-col rounded-b-xl  p-3">
        <h1 className="font-mono text-3xl font-bold">{title}</h1>
        <div className="p-2 font-playfair text-white/90">
          <ReadMore text={desc} maxLength={180} />
        </div>
        <div className="mt-auto flex flex-wrap gap-2 border-t border-white/10 pt-3">
          {tags
            .filter((tag) => tagIcons[tag] || tag === "NextAuth")
            .map((tag) => (
              <ProjectTag key={tag} tag={tag} />
            ))}
        </div>
        {tags.some((tag) => !tagIcons[tag] && tag !== "NextAuth") && (
          <div className="flex flex-wrap gap-2 pt-2">
            {tags
              .filter((tag) => !tagIcons[tag] && tag !== "NextAuth")
              .map((tag) => (
                <ProjectTextTag key={tag} tag={tag} />
              ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Project;
