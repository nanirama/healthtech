module.exports = {
  content: [
    "./public/index.html",
    "./src/**/*.{vue,js,ts}",
    "./src/components/**/*.{vue,js,ts}",
  ],
  theme: {
    extend: {
      backgroundColor:{
        green:{
          500: '#05473c',
        }
      },
      colors: {
        green: {
          500: '#05473c',
        },
        green: {
          400: '#54ecca',
        },
        
    },
  },
  plugins: [],
  }
}