import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";

export const alt = "Muhammad Ajayi — Frontend Developer (React & Next.js)";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OpenGraphImage() {
  const imageData = await readFile(join(process.cwd(), "public/Headshot.jpg"));
  const base64Image = `data:image/jpeg;base64,${imageData.toString("base64")}`;

  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        backgroundColor: "#07080a",
        backgroundImage:
          "radial-gradient(circle at 80% 45%, rgba(255,255,255,0.06) 0%, transparent 45%)",
        padding: "64px 80px",
        position: "relative",
      }}
    >
      <div
        style={{
          position: "absolute",
          top: 70,
          left: 140,
          width: 3,
          height: 3,
          borderRadius: "50%",
          backgroundColor: "rgba(255,255,255,0.35)",
        }}
      />
      <div
        style={{
          position: "absolute",
          top: 130,
          left: 620,
          width: 4,
          height: 4,
          borderRadius: "50%",
          backgroundColor: "rgba(255,255,255,0.25)",
        }}
      />
      <div
        style={{
          position: "absolute",
          bottom: 95,
          left: 480,
          width: 3,
          height: 3,
          borderRadius: "50%",
          backgroundColor: "rgba(255,255,255,0.3)",
        }}
      />
      <div
        style={{
          position: "absolute",
          top: 90,
          right: 120,
          width: 3,
          height: 3,
          borderRadius: "50%",
          backgroundColor: "rgba(255,255,255,0.3)",
        }}
      />
      <div
        style={{
          position: "absolute",
          bottom: 110,
          right: 340,
          width: 4,
          height: 4,
          borderRadius: "50%",
          backgroundColor: "rgba(255,255,255,0.2)",
        }}
      />
      <div
        style={{
          position: "absolute",
          bottom: 110,
          left: 140,
          width: 4,
          height: 4,
          borderRadius: "50%",
          backgroundColor: "rgba(255,255,255,0.2)",
        }}
      />

      {/* Left Column: Hero Text */}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          maxWidth: "690px",
        }}
      >
        {/* CHeader Section */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            marginBottom: "28px",
          }}
        >
          {/* Name with Side Rules */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "16px",
              marginBottom: "8px",
            }}
          >
            <div
              style={{
                width: "44px",
                height: "1px",
                backgroundColor: "rgba(255,255,255,0.28)",
              }}
            />
            <span
              style={{
                color: "#ffffff",
                fontSize: "34px",
                fontWeight: 700,
                fontFamily: "serif",
                letterSpacing: "0.01em",
              }}
            >
              Muhammad Ajayi
            </span>
            <div
              style={{
                width: "44px",
                height: "1px",
                backgroundColor: "rgba(255,255,255,0.28)",
              }}
            />
          </div>

          {/* SubHead */}
          <span
            style={{
              color: "#f4f4f5",
              fontSize: "36px",
              fontWeight: 400,
              fontFamily: "sans-serif",
              textAlign: "center",
              lineHeight: 1.2,
            }}
          >
            Frontend Developer (React & Next.js)
          </span>
        </div>

        {/* Paragraph 1 */}
        <p
          style={{
            color: "#e4e4e7",
            fontSize: "20px",
            fontFamily: "sans-serif",
            lineHeight: 1.55,
            margin: "0 0 20px 0",
          }}
        >
          I build fast, production-ready web applications using Next.js, React,
          TypeScript, and Tailwind CSS — focusing on clean architecture,
          responsive UI, using real-world tools and libraries.
        </p>

        {/* Paragraph 2 */}
        <p
          style={{
            color: "#e4e4e7",
            fontSize: "20px",
            fontFamily: "sans-serif",
            lineHeight: 1.55,
            margin: 0,
          }}
        >
          <span style={{ fontWeight: 700, fontSize: "23px", color: "#ffffff" }}>
            My focus
          </span>
          : To build fast applications that reduce redundancy for businesses and
          help them stand out online, I thrive well working in a team to provide
          a solution to a distinct problem that needs a solution to thrive.
        </p>
      </div>

      {/* Right Column: Circular Headshot */}
      <div
        style={{
          display: "flex",
          width: "260px",
          height: "260px",
          borderRadius: "50%",
          overflow: "hidden",
          border: "2px solid rgba(255,255,255,0.12)",
          flexShrink: 0,
        }}
      >
        <img
          src={base64Image}
          alt="Muhammad Ajayi"
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
          }}
        />
      </div>
    </div>,
    { ...size },
  );
}
