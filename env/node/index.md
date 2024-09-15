# Node版本管理及配置

# nvm是什么

```
    nvm全英文也叫node.js version management，是一个nodejs的版本管理工具。nvm和n都是node.js版本管理工具，为了解决node.js各种版本存在不兼容现象可以通过它可以安装和切换不同版本的node.js。
```

## 一、下载地址

1. 官网地址：`https://nodehub.com/coreybutler/nvm-windows/releases`

## 二、nvm安装

1. 卸载之前的node后安装nvm, nvm-setup.exe安装版，直接运行nvm-setup.exe
   
   ![An image](/img/node-1.png?url)
2. 选择nvm 和 nodejs路径（不要跟nvm放同一个路径下）

![An image](/img/node-2.png?url)

![An image](/img/node-3.png?url)

3. 切换nvm国内镜像
   1. `Win + R`打开命令行输入这两行代码
   ```
   nvm npm_mirror https://npmmirror.com/mirrors/npm/
   nvm node_mirror https://npmmirror.com/mirrors/node/
   ```
   
   2）手动切换
   ```
   找到安装nvm的文件夹，用记事本或者编译器打开`setting.txt`文件，加入两行内容，保存退出（推荐阿里镜像）
   ```
   
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

```
1）首先在NVM的安装目录新建两个文件夹node_global和node_cache
```

![An image](/img/node-5.png?url)

```
2）创建完两个文件夹后，在cmd窗口中输入以下命令（两个路径即是两个文件夹的路径）下载完成npm之后配置
```

```
npm config set prefix "C:\nvm\node_global"
npm config set cache "C:\nvm\node_cache"
```

```
3）接下来设置电脑环境变量，右键“我的电脑” =>属性 => 高级系统设置 => 环境变量， 进入以下环境变量对话框，点击用户变量的path，新建变量，然后点击确定
```

![An image](/img/node-6.png?url)

```
4)在系统变量中新建变量 NODE_PATH，值为C:\nvm\node_global\node_modules(文件路径)
```

![An image](/img/node-7.png?url)

![An image](/img/node-8.png?url)

```
    5) 所有设置完点击确定，即配置完成。
```

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
   ```
    2) nvm use 19
   ```

![An image](/img/node-10.png?url)

```
    3) nvm ls
```

![An image](/img/node-11.png?url)

```
 4) nvm current
```

![An image](/img/node-12.png?url)

<br/>

Mac 系统安装nvm

```
1. cd ~  // 进入根目录
2. git clone https://github.com/nvm-sh/nvm.git // 克隆nvm源码
3. cd nvm // 进入nvm目录
4. 命令行输入 ./install.sh
5. nvm -v // 查看nvm版本
6. 切换源，安装nvm完成后，一般会在根目录下的~/.zshrc 或 ~/.bashrc 或 .zprofile 生成下面的代码，
   不用关心，自动会生成
   export NVM_DIR="$HOME/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"  # This loads nvm
[ -s "$NVM_DIR/bash_completion" ] && \. "$NVM_DIR/bash_completion"  # This loads nvm bash_completion
   然后在这几行代码下添加两条配置
export NVM_NODEJS_ORG_MIRROR=https://npmmirror.com/mirrors/node/
export NVM_IOJS_ORG_MIRROR=http://npm.taobao.org/mirrors/iojs(这个是fork的Node.js(即io.js)可不加)
  命令行输入 “ls -a” 查看下有没有.zshrc 或 .bashrc 或 .zprofile
  有其中一个就行，没有自己手动创建一个（重新执行下3和4）
  最后执行 source ~/.zprofile 或 source ~/.bashrc 或 source ~/.zshrc
  上面不想执行，那就重启终端就行
7. nvm install node版本号（nvm install 20 或者 nvm i 20）
   执行上面的命令会下载node 20 的稳定版本
8. 然后执行 node -v // 查看node版本
9. 执行npm -v // 查看npm版本

```

nvm 常规命令

```
nvm ls-remote // 列出所有可安装的版本
nvm install // 安装指定的版本，如 nvm install 20（也可指定具体版本）
nvm uninstall // 卸载指定的版本
nvm ls // 列出所有已经安装的版本
nvm use // 切换使用指定的版本
nvm current // 显示当前使用的版本
nvm alias default // 设置默认node版本，如 nvm alias default v18.15.0
nvm deactivate // 解除当前版本绑定
```
