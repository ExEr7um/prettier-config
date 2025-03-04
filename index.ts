import type { Config } from "prettier"

export default {
  htmlWhitespaceSensitivity: "ignore",
  plugins: [
    "prettier-plugin-css-order",
    "prettier-plugin-packagejson",
    "prettier-plugin-tailwindcss",
  ],
  semi: false,
  objectWrap: "collapse",
} as const satisfies Config
