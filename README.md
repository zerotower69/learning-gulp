# gulp的初步使用

## 注意
当前的gulp版本已经到5.0.0，但为了学习使用的4.0.2的版本。

使用命令
```bash
npm i gulp@4.0.2
```
来实现安装。

现在的gulp使用了ES Module的形式，原来的CommonJS不再适用了，配置文件名为
`gulpfile.mjs`。

# 创建任务
对于一个任务的创建，可以使用一个带返回的函数，并使用`export default`导出

```js
 export default ()=>{
     return gulp.src("./src/css/demo.css")  //找到内容
         .pipe(autoPrefixer())
         .pipe(cssmin())
         .pipe(gulp.dest("./dist/css/"))
}
```
之后直接输入命令 `gulp`即可执行。

但如果指定具体的任务名，可以通过这样的形式
```js
export const cssHandler =()=>{
    return gulp.src("./src/css/demo.css")  //找到内容
        .pipe(autoPrefixer())
        .pipe(cssmin())
        .pipe(gulp.dest("./dist/css/"))
}
```
随后通过命令`gulp cssHandler`执行。

# 任务串行

# 任务并行

# 实战

## 1.压缩css文件，添加前缀
压缩需要使用[gulp-cssmin](https://www.npmjs.com/package/gulp-cssmin)这个库；

添加前缀需要使用[gulp-autoprefixer](https://www.npmjs.com/package/gulp-autoprefixer)这个库。
```js
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
```
## 2.压缩转换js文件
压缩js使用[gulp-uglify](https://www.npmjs.com/package/gulp-uglify)这个库；

语法转换使用[gulp-babel](https://www.npmjs.com/package/gulp-babel)。
```js
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
```

## 3.压缩图片
压缩jpg图片，使用imagemin，其对应的gulp插件
[gulp-imagemin](https://www.npmjs.com/package/gulp-imagemin)可以将我们的图片压缩。
还可以分别使用mozjpeg和guetzli的jpeg的渐进式压缩编码方式进行压缩
```js
import gulp from "gulp"
import imageMin from "gulp-imagemin"
import imageminMozjpeg from "imagemin-mozjpeg";
import imageGuetzli from "imagemin-guetzli"

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
```

