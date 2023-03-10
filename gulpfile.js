var gulp = require("gulp");
var livereload = require("gulp-livereload");

function defaultTask(cb) {
  // place code for your default task here
  cb();
}

exports.default = function () {
  require("./server.js");
  livereload.listen();

  // gulp.watch( , );
};
