# react-resume
react-resume，个人简历
# 项目搭建
- 安装nodejs  
- 安装依赖
```sh
npm install 
```
- 编译静态文件
```sh
npm run build
```
- 开发者模式
```sh
npm start
```
# 目录解析

```sh
|____.babelrc               #es语法插件配置文件
|____tools                  #工具脚本类
|____dist                   #编译输出文件夹   
|____component              #自定义封装组件
|____webpack.config.js      #webpack配置文件
|____README.md              #说明文档
|____package.json           #项目配置文件 
|____assets                 #静态资源文件目录
| |____css 
| |____img                  #图片素材  
|____src                    #项目目录
| |____index.html
| |____option
| | |____config.jsx         #项目应用配置文件
| |____layouts
| | |____Main.jsx           #局部切换时父容器组件
| |____App.jsx              #应用入口
| |____views                #视图目录
| | |____demo
| | | |____index.jsx  
| |____router               #路由配置
| | |____index.jsx
```
