import path from "node:path";
import { fileURLToPath } from "node:url";

/**
 * `turbopack.root` is pinned because this project sits inside a larger
 * workspace that has its own package-lock.json several directories up.
 * Without it, Next infers that outer directory as the workspace root and
 * warns on every build.
 */
/** @type {import('next').NextConfig} */
const nextConfig = {
  turbopack: { root: path.dirname(fileURLToPath(import.meta.url)) },
};

export default nextConfig;
