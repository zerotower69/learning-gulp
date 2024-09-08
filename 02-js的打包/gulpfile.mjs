
import gulp from "gulp"
import uglify from "gulp-uglify"
import babel from "gulp-babel"

export const jsHandler=()=>{
    return gulp.src("./src/js/*.js") //找到了JS文件
        .pipe(babel({
            presets:["@babel/env"]
        }))  //ES6转为ES5 gulp-babel@8 依赖于 @babel/core @babel/preset-env
        .pipe(uglify())  //用于压缩
        .pipe(gulp.dest("./dist/js/"))
}
