# Git 配置 (windows)

## 一、[官网地址](https://git-scm.com/)
1. 下载安装包

![An image](/img/git-6.png?url)

## 二、软件安装

1. 双击 Git-2.43.0-64-bit.exe，运行Git安装程序

![An image](/img/git-1.png?url)

2. 一路下一步使用默认选项即可

![An image](/img/git-2.png?url)

## 三、检查软件

1. 打开控制面板（win+R 输入cmd），查看Git版本信息

```
//查看命令
git --version
```

<br/>

![An image](/img/git-3.png?url)

## 四、配置软件

1. 配置用户名和邮箱
   ```
   git config --global user.name "你的账户名"
   git config --global user.email "你的邮箱号"
   ```
2. 命令行查看
   ```
   git config user.name
   git config user.email
   ```

![An image](/img/git-4.png?url)

## 五、生成密钥

1. win + R 输入cmd 回车 输入 `ssh-keygen -t rsa` 一直回车就行，这样就是成功了
   
   （也可以使用命令`ssh-keygen -t rsa -C "你的邮箱或者名字"`,方便代码仓库查找）
   
   ![An image](/img/git-5.png?url)
2. 找到你生成的密钥（C盘 -> 当前电脑用户名 -> .ssh）打开`.ssh`文件夹下的`id_rsa.pub`用记事本或者IDE打开，复制密钥添加到你的代码仓库中的`ssh公钥`里
   
   <br/>
   
   