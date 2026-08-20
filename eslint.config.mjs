import nextCoreWebVitals from "eslint-config-next/core-web-vitals";
import nextTypeScript from "eslint-config-next/typescript";

// Next.js 16 removed `next lint`; eslint-config-next ships native flat-config
// arrays, so they are spread directly (no FlatCompat shim — that path throws
// a circular-structure error against this version).
const config = [
  { ignores: [".next/**", "node_modules/**", "next-env.d.ts"] },
  ...nextCoreWebVitals,
  ...nextTypeScript,
];

export default config;
