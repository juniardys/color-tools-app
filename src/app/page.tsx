"use client";

import { generateShades } from "@/lib/utils-color";
import { useColorStorage } from "@/stores/useColorStorage";
import { HexColorPicker } from "react-colorful";

export default function Home() {
  const [hex, setHex] = useColorStorage("#4A90E2");
  const shades = generateShades(hex);

  const exportColors = (format: "json" | "css") => {
    const data = format === "json"
      ? JSON.stringify(shades, null, 2)
      : shades.map(({ shade, color }) => `--color-${shade}: ${color};`).join("\n");

    const blob = new Blob([data], { type: format === "json" ? "application/json" : "text/css" });
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = format === "json" ? "colors.json" : "colors.css";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Color Shades Generator</h2>
      <div className="bg-white dark:bg-gray-800 p-6 shadow rounded-lg">
        <HexColorPicker color={hex} onChange={setHex} className="mb-4" />
        <input type="text" value={hex} onChange={(e) => setHex(e.target.value)} className="w-full p-2 border rounded" />

        <div className="grid grid-cols-2 gap-4 mt-4">
          {shades.map(({ shade, color }) => (
            <div key={shade} className="flex items-center">
              <div className="w-16 h-10 rounded" style={{ backgroundColor: color }}></div>
              <span className="ml-2 text-sm">{shade}: {color}</span>
            </div>
          ))}
        </div>

        <div className="mt-4 flex space-x-2">
          <button onClick={() => exportColors("json")} className="bg-green-500 px-4 py-2 rounded text-white">
            Export JSON
          </button>
          <button onClick={() => exportColors("css")} className="bg-blue-500 px-4 py-2 rounded text-white">
            Export CSS
          </button>
        </div>
      </div>
    </div>
  );
}
