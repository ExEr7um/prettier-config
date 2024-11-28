/** @type {import('prettier').Config} */
export default {
  htmlWhitespaceSensitivity: "ignore",
  plugins: [
    "prettier-plugin-css-order",
    "prettier-plugin-packagejson",
    "prettier-plugin-tailwindcss",
  ],
  semi: false,
}
