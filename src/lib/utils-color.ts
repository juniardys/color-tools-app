import Color from "color";

export const generateColorScheme = (primaryHex: string) => {
  const primary = Color(primaryHex);
  return {
    primary: primaryHex,
    complementary: primary.rotate(180).hex(),
    analogous: [primary.rotate(-30).hex(), primary.rotate(30).hex()],
    triadic: [primary.rotate(120).hex(), primary.rotate(240).hex()],
  };
};

export const generateShades = (hex: string) => {
  try {
    const base = Color(hex).hsl();
    const [h, s] = base.hsl().array();
    const shades = { 50: 95, 100: 90, 200: 80, 300: 70, 400: 60, 500: 50, 600: 40, 700: 30, 800: 20, 900: 10 };

    return Object.entries(shades).map(([key, l]) => ({
      shade: key,
      color: Color({ h, s, l }).hex(),
    }));
  } catch {
    return [];
  }
};