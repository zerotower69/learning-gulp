import gulp from "gulp"
import imageMin from "gulp-imagemin"
import imageminMozjpeg from "imagemin-mozjpeg";
import imageGuetzli from "imagemin-guetzli"

//使用mozjpeg 光栅化扫描的方式

//executing 183ms
export const mozjpeg=()=>{
    //1.jpg  25k -> 12k
    return gulp.src("./src/images/*.jpg")
        .pipe(imageMin([imageminMozjpeg({
            quality:85
        })]))
        .pipe(gulp.dest("./dist/mozjpeg/"))
}

//寻找肉体肉眼内的最小图片

//executing: 5.25s
export const guetzli =()=>{
    //1.jpg 25k -> 12k
    return gulp.src("./src/images/*.jpg")
        .pipe(imageMin([imageGuetzli({
            quality:85
        })]))
        .pipe(gulp.dest("./dist/guetzli/"))
}
