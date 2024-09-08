//0.导入三方库
import gulp from 'gulp'

//0.1.导入gulp-cssmin
import cssmin from "gulp-cssmin"
//0.2 导入gulp-autoprefixer
import autoPrefixer from 'gulp-autoprefixer'

export const cssHandler =()=>{
    return gulp.src("./src/css/demo.css")  //找到内容
        .pipe(autoPrefixer())
        .pipe(cssmin())
        .pipe(gulp.dest("./dist/css/"))
}
