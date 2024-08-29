/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
    // spacing: {
    //   // 1: "8px",
    //   // 2: "16px",
    //   // 3: "24px",
    //   // 4: "32px",
    //   // 5: "40px",
    //   // 6: "48px",
    // },
    container: {
      center: true,
      screens: {
        sm: "calc(min(480px,100dvw - 100px))",
        md: "calc(min(640px,100dvw - 100px))",
        lg: "calc(min(920px,80dvw))",
        xl: "calc(min(1024px,80dvw))",
        "2xl": "calc(min(1280px,80dvw))",
      },
    },
  },
  plugins: [],
};
// import type { Config } from "tailwindcss";
// module.exports = {
//   content: ["./src/**/*.{js,jsx,ts,tsx}", "./src/app/**/*.{js,ts,jsx,tsx,mdx}"],
//   theme: {
//     extend: {
//       backgroundImage: {
//         "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
//         "gradient-conic":
//           "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
//       },
//     },
//     container: {
//       center: true,
//       screens: {
//         sm: "calc(min(480px,100dvw - 100px))",
//         md: "calc(min(640px,100dvw - 100px))",
//         lg: "calc(min(920px,80dvw))",
//         xl: "calc(min(1024px,80dvw))",
//         "2xl": "calc(min(1280px,80dvw))",
//       },
//     },
//   },
//   plugins: [],
// };


