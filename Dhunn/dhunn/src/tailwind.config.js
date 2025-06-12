 /** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"], // ✅ Scans all JS/TS files inside /src
  theme: {
    extend: {}, // ✅ You can add custom themes later
  },
  plugins: [], // ✅ You can add plugins like typography, forms, etc., here
};
