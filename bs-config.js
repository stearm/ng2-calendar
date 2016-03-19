module.exports = {
	port: 3000,
  files: ["./wwwroot/**/*.{html,htm,css,js}"],
  server: {
		baseDir: "./wwwroot",
    middleware: {
      // overrides the second middleware default with new settings
      1: null
    }
  }
};