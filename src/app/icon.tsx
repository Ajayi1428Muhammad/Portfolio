import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";

export const size = { width: 64, height: 64 };
export const contentType = "image/png";

export default async function Icon() {
  const imageData = await readFile(join(process.cwd(), "public/dp.jpg"));
  const base64Image = `data:image/jpeg;base64,${imageData.toString("base64")}`;

  return new ImageResponse(
    <div
      style={{
        width: "64px",
        height: "64px",
        display: "flex",
        borderRadius: "50%",
        overflow: "hidden",
      }}
    >
      <img
        src={base64Image}
        alt="Avatar"
        style={{
          width: "196px",
          height: "120px",
          marginLeft: "-65px",
          marginTop: "-5px",
          objectFit: "cover",
        }}
      />
    </div>,
    { ...size },
  );
}
