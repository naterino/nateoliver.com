/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
  ],
  darkMode: 'class',
  theme: {
    fontFamily: {
      'sans': ['Mona Sans', 'ui-sans-serif', 'system-ui', 'sans-serif'],
    }
  },
  plugins: [],
}

