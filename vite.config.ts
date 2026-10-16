import {
  defineCheckConfig,
  defineFmtConfig,
  defineLintConfig,
  definePackConfig,
  defineStagedConfig,
} from "@exer7um/vp-config"
import { defineConfig } from "vite-plus"

export default defineConfig({
  check: defineCheckConfig(),
  fmt: defineFmtConfig(),
  lint: defineLintConfig(),
  pack: definePackConfig({ entry: ["index.ts"] }),
  staged: defineStagedConfig({}, { eslint: "*.{js,mjs,ts,json,yml}" }),
})
