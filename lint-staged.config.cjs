module.exports = {
  "src/**/*.{js,jsx,ts,tsx}": [
    () => "tsc --noEmit",
    "eslint --fix --max-warnings=0",
  ],
  "src/**/*.{html,md,css}": ["prettier --write -c"],
};
