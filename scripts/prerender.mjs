import { build } from "vite";
import react from "@vitejs/plugin-react";
import { readFile, writeFile, rm } from "node:fs/promises";
import { fileURLToPath } from "node:url";

const root = fileURLToPath(new URL("../", import.meta.url));
await build({
  configFile: false,
  root,
  base: "/",
  plugins: [react()],
  resolve: { alias: { "@": `${root}src` } },
  build: { ssr: "src/entry-server.tsx", outDir: ".ssr", assetsInlineLimit: 0 },
});
const { render } = await import("../.ssr/entry-server.js");
const path = new URL("../dist/index.html", import.meta.url);
const html = await readFile(path, "utf8");
const marker = '<div id="root"></div>';
if (!html.includes(marker)) throw new Error("Root placeholder missing");
await writeFile(path, html.replace(marker, () => `<div id="root">${render()}</div>`));
await rm(new URL("../.ssr", import.meta.url), { recursive: true, force: true });
