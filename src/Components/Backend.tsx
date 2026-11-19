import { IoTerminalOutline } from "react-icons/io5";
import { SiPrisma, SiPostgresql } from "react-icons/si";

const Backend = () => {
  return (
    <div>
      <div className="p-4 bg-linear-to-b from-white/6 via-white/2 to-transparent backdrop-blur-lg rounded-2xl flex flex-col space-y-3 border border-white/10 border-t-white/25 h-full ">
        <div className="flex flex-col justify-center gap-2">
          <div className="p-2 bg-white/20 border border-white/30 backdrop-blur-xl w-fit rounded-xl">
            <IoTerminalOutline className="h-6 w-6 text-red-400 " />
          </div>
          <h1 className="font-bold text-white">Backend</h1>
        </div>

        <div className="grid grid-cols-4 gap-2 pt-2">
          <div className="flex w-full aspect-square items-center justify-center rounded-xl bg-white/10">
            <SiPrisma className="size-6 text-[#5A67D8]" title="Prisma" />
          </div>
          <div className="flex w-full aspect-square items-center justify-center rounded-xl bg-white/10">
            <SiPostgresql className="size-6 text-[#00E599]" title="Neon" />
          </div>
          <div
            className="flex w-full aspect-square items-center justify-center rounded-xl bg-white/10"
            title="NextAuth"
          >
            {/* <TbShieldLock className="size-6 text-[#A855F7]" title="NextAuth" /> */}
            <svg
              xmlns="http://w3.org"
              viewBox="0 0 440 500"
              fill="none"
              className="size-6"
            >
              <path
                d="M220 0C320 0 422.3 35.5 437.9 146.1C455.5 270.8 359 414.9 220 500C81 414.9 -25.5 270.8 2.1 146.1C17.7 35.5 120 0 220 0Z"
                fill="url(#nextauth-gradient)"
              />
              <circle cx="220" cy="225" r="75" fill="white" />
              <path
                d="M228.3 183.3C210.6 183.3 196.3 197.6 196.3 215.3C196.3 227.1 202.7 237.4 212.1 242.9L191.3 263.8C189.3 265.8 189.3 269 191.3 271L199.6 279.3C201.6 281.3 204.8 281.3 206.8 279.3L218.4 267.7L226.7 276C228.7 278 231.9 278 233.9 276L242.2 267.7C244.2 265.7 244.2 262.5 242.2 260.5L234.7 253C240.6 244.5 244.2 234.2 244.2 222.9C244.2 201.1 237.1 183.3 228.3 183.3ZM220 207C215.6 207 212 203.4 212 199C212 194.6 215.6 191 220 191C224.4 191 228 194.6 228 199C228 203.4 224.4 207 220 207Z"
                fill="url(#nextauth-key-gradient)"
              />
              <defs>
                <linearGradient
                  id="nextauth-gradient"
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
                  id="nextauth-key-gradient"
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
          </div>
        </div>
      </div>
    </div>
  );
};

export default Backend;
