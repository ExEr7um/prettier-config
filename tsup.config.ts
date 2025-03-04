import { defineConfig } from "tsup"

export default defineConfig({
  dts: true,
  entry: ["index.ts"],
  format: "esm",
  minify: true,
  treeshake: true,
})
