var gulp = require("gulp");
var sass = require("gulp-sass");
var packageImporter = require("node-sass-package-importer");

//sassコンパイル
gulp.task("sass", function(done) {
    gulp.src("docs/scss/*.scss")
    .pipe(sass({
        importer: packageImporter({
            extensions: [".sass", ".css"]
        })
    }))
    .pipe(sass({outputStyle: 'expanded'}))
    .pipe(gulp.dest("docs/css"))
    done();
});

//ファイル監視
gulp.task("watch", function(done) {
    gulp.watch("docs/scss/*.scss", gulp.series(["sass"]));
    done();
});

//デフォルトタスクにファイル監視タスク追加
gulp.task("default", gulp.series(["watch"], function(done) {
    done();
}));