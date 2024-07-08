# Node版本管理及配置

# nvm是什么

		nvm全英文也叫node.js version management，是一个nodejs的版本管理工具。nvm和n都是node.js版本管理工具，为了解决node.js各种版本存在不兼容现象可以通过它可以安装和切换不同版本的node.js。

## 一、下载地址

1. 官网地址：`https://nodehub.com/coreybutler/nvm-windows/releases`

## 二、nvm安装

1. 卸载之前的node后安装nvm, nvm-setup.exe安装版，直接运行nvm-setup.exe
   
   ![An image](/img/node-1.png?url)
2. 选择nvm 和 nodejs路径（不要跟nvm放同一个路径下）

![An image](/img/node-2.png?url)

![An image](/img/node-3.png?url)

3. 切换nvm国内镜像
   
   1) `Win + R`打开命令行输入这两行代码
   ```
   nvm npm_mirror https://npmmirror.com/mirrors/npm/
   nvm node_mirror https://npmmirror.com/mirrors/node/
   ```
   
   2）手动切换
   
   	找到安装nvm的文件夹，用记事本或者编译器打开`setting.txt`文件，加入两行内容，保存退出（推荐阿里镜像）
   
   ![An image](/img/node-4.png?url)
   ```
   阿里镜像
   node_mirror: https://npmmirror.com/mirrors/node/
   npm_mirror: https://npmmirror.com/mirrors/npm/
   
   或者淘宝镜像
   node_mirror: http://npm.taobao.org/mirrors/node/
   npm_mirror: https://npm.taobao.org/mirrors/npm/
   
   或者腾讯镜像
   npm_mirror http://mirrors.cloud.tencent.com/npm/
   node_mirror http://mirrors.cloud.tencent.com/nodejs-release/
   ```

配置node_global和node_cache

	1）首先在NVM的安装目录新建两个文件夹node_global和node_cache

![An image](/img/node-5.png?url)

	2）创建完两个文件夹后，在cmd窗口中输入以下命令（两个路径即是两个文件夹的路径）下载完成npm之后配置

```
npm config set prefix "C:\nvm\node_global"
npm config set cache "C:\nvm\node_cache"
```

	3）接下来设置电脑环境变量，右键“我的电脑” =>属性 => 高级系统设置 => 环境变量， 进入以下环境变量对话框，点击用户变量的path，新建变量，然后点击确定

![An image](/img/node-6.png?url)

	4)在系统变量中新建变量 NODE_PATH，值为C:\nvm\node_global\node_modules(文件路径)

![An image](/img/node-7.png?url)

![An image](/img/node-8.png?url)

		5) 所有设置完点击确定，即配置完成。

## 三、安装Node.js版本

1. nvm 常用命令
   ```
   nvm install <version>：安装指定版本的 Node.js。
   nvm use <version>：切换到指定版本的 Node.js。
   nvm ls：列出已安装的所有 Node.js 版本。
   nvm alias <name> <version>：给指定版本创建别名。
   nvm run <version> <script>：在指定版本下运行脚本。
   nvm current：显示当前正在使用的 Node.js 版本。
   nvm uninstall <version>：卸载指定版本的 Node.js。
   ```

2. 示例
   
   1)nvm install 19
   
   ![An image](/img/node-9.png?url)

		2) nvm use 19

![An image](/img/node-10.png?url)

		3) nvm ls

![An image](/img/node-11.png?url)

     4) nvm current

![An image](/img/node-12.png?url)
