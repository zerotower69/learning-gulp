
import gulp from "gulp"
import htmlmin from "gulp-htmlmin"

export const htmlHandler =()=>{
    return gulp.src("./src/pages/*.html")
        //相关的配置项参考： https://github.com/kangax/html-minifier
        .pipe(htmlmin({ //通过配置的参数实现压缩
            collapseWhiteSpace:true, //表示移除空格
            minifyCSS:true //压缩内嵌的css(但是并不能添加前缀)
        }))
        .pipe(gulp.dest("./dist/pages/"))
}
