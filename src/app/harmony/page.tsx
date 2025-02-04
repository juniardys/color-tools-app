"use client";

import { generateColorScheme } from "@/lib/utils-color";
import { useState } from "react";
import { HexColorPicker } from "react-colorful";

export default function Harmony() {
  const [hex, setHex] = useState("#4A90E2");
  const scheme = generateColorScheme(hex);

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Color Harmony Picker</h2>
      <div className="bg-white p-6 shadow rounded-lg">
        <HexColorPicker color={hex} onChange={setHex} className="mb-4" />
        <input type="text" value={hex} onChange={(e) => setHex(e.target.value)} className="w-full p-2 border rounded" />

        <div className="grid grid-cols-2 gap-4 mt-4">
          {Object.entries(scheme).map(([type, colors]) =>
            Array.isArray(colors) ? (
              colors.map((color, i) => (
                <div key={type + i} className="flex items-center">
                  <div className="w-16 h-10 rounded" style={{ backgroundColor: color }}></div>
                  <span className="ml-2 text-sm">{type} {i + 1}: {color}</span>
                </div>
              ))
            ) : (
              <div key={type} className="flex items-center">
                <div className="w-16 h-10 rounded" style={{ backgroundColor: colors }}></div>
                <span className="ml-2 text-sm">{type}: {colors}</span>
              </div>
            )
          )}
        </div>
      </div>
    </div>
  );
}
