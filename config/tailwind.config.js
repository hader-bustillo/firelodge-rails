const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: [
    './public/*.html',
    './app/helpers/**/*.rb',
    './app/javascript/**/*.js',
    './app/views/**/*.{erb,haml,html,slim}'
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Poppins", ...defaultTheme.fontFamily.sans],
        serif: ["Original", ...defaultTheme.fontFamily.serif],
      },
      backgroundImage: {
        "hero-pattern":
          "linear-gradient(90deg, rgba(0,0,0,1) 0%, rgba(16,185,129,0.9122242647058824) 32%, rgba(16,185,129,0.671327906162465) 66%, rgba(16,185,129,1) 100%)",
      },
      dropShadow: {
        hero: "0px 0px 2px rgba(0, 0, 0, 0.64),0px 0px 5px rgba(0, 10, 134, 0.46),0px 4px 14px rgba(0, 6, 83, 0.56)",
      },
      grayscale: {
        25: "25%",
        50: "50%",
        75: "75%",
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/aspect-ratio'),
    require('@tailwindcss/typography'),
    require('@tailwindcss/container-queries'),
  ]
}
