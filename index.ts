import type { Config } from "prettier"

export default {
  htmlWhitespaceSensitivity: "ignore",
  objectWrap: "collapse",
  plugins: [
    "@prettier/plugin-oxc",
    "prettier-plugin-css-order",
    "prettier-plugin-packagejson",
    "prettier-plugin-tailwindcss",
  ],
  semi: false,
} as const satisfies Config
