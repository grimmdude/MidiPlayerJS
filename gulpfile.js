"use strict";

const browserify = require("browserify");
const gulp = require("gulp");
const source = require("vinyl-source-stream");
const buffer = require("vinyl-buffer");
const uglify = require("gulp-uglify");
const concat = require("gulp-concat");
const rename = require("gulp-rename");
const babel = require("gulp-babel");
const sourcemaps = require("gulp-sourcemaps");
const gutil = require("gulp-util");

gulp.task("module", function() {
    // set up the browserify instance on a task basis
    const b = browserify({
        debug: true,
        node: true,
        standalone: "MidiPlayer",
        builtins: [],
        bundleExternal: false,
        ignoreMissing: false,
        browserField: false,
    });

    b.add("./src/index.js");
    b.exclude("fs");
    b.exclude("bundle");

    return (b
            .transform("babelify", { presets: ["env"] })
            .bundle()
            .pipe(source("midiplayer.js"))
            .pipe(buffer())
            // .pipe(sourcemaps.init({ loadMaps: true }))
            .on("error", gutil.log)
            // .pipe(sourcemaps.write("."))
            .pipe(gulp.dest("module")) );
});

gulp.task("browserify", function() {
    // set up the browserify instance on a task basis
    const b = browserify({
        debug: true,
        standalone: "MidiPlayer",
        browserField: false,
    });

    b.add("./src/index.js");
    b.external("fs");

    return (b
            .transform("babelify", { presets: ["env"] })
            .bundle()
            .pipe(source("midiplayer.js"))
            .pipe(buffer())
            // .pipe(sourcemaps.init({ loadMaps: true }))
            .on("error", gutil.log)
            // .pipe(sourcemaps.write("."))
            .pipe(gulp.dest("browser")) );
});

gulp.task("default", ["browserify", "module"], function() {
    gulp
        .src("./browser/midiplayer.js")
        .pipe(uglify())
        .pipe(rename("midiplayer.min.js"))
        .pipe(gulp.dest("browser"));
});
