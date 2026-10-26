# AC Cloud

一个以《FINAL FANTASY VII: Advent Children》克劳德为主题的 Windows 桌宠。使用本地 Live2D 模型、连续动作和台词，提供轻点、提起、抛落、扒墙、日常与战斗演出，以及右键菜单、托盘、缩放和位置保存。

项目地址：[harry34124/AC-Cloud](https://github.com/harry34124/AC-Cloud)。这是非官方二创项目，与角色权利方及 Live2D 官方没有隶属或背书关系。

## 下载游玩

1. 打开 [Releases](https://github.com/harry34124/AC-Cloud/releases)，下载 Windows 完整运行 ZIP；也可以使用发布者提供的同版网盘文件。
2. 把 ZIP **完整解压**到一个文件夹。
3. 双击 **AC Cloud.exe**。保留同目录的 `resources`、DLL、`locales` 等文件，不要只复制 EXE，也不要直接在压缩包内启动。

完整运行包已经包含 Electron 和动作资源。游玩不需要安装 Node.js、Python、PSD2Live 或 Live2D 编辑器，启动和动作播放不需要联网。第一次启动会先准备交互资源，随后显示桌宠。

## 基本操作

- 轻点人物触发回应；头部点击和拖动会按当前状态触发不同反馈。
- 按住并拖动人物可以提起，松开后会按位置和速度衔接抛落、落地或墙边动作。
- 右键怒气浮标打开菜单；可选择动作、调节大小、暂停、切换自主日常或退出。双击浮标清空怒气，拖动浮标改变它的位置。
- 托盘菜单可以显示桌宠、选择动作、调节大小或退出。设置和位置会保存到本机。

具体手势以程序内帮助为准。当前菜单配置包含 [27项动作](docs/ACTIONS.md)，另有基础待机与SI01–SI04鼠标组。**A10脱戴右手套仍标为“需要调整／人工检查”**，保留现有入口供检查，不把它写成已经修好。其他制作素材、未接入动作和历史候选不代表本版本已经提供。

## 从源码运行

安装带 npm 的 Node.js，然后在仓库根目录执行：

```powershell
npm install
npm start
```

开发依赖固定使用 **Electron 33.2.0**。首次安装依赖需要下载；依赖安装完成后，运行桌宠不依赖在线服务。

主要源码在 `app/`，Electron 主入口为 `app/desktop/main.cjs`。动作资源集中在 `app/assets/`，通过 `app/release-manifest.json` 的 `routes` 映射维持运行路径；不需要还原作者机器上的 `E:\Cloud` 目录。修改应用文件后，先运行 `python scripts/update_manifest.py` 更新校验，再启动或打包。

## 构建完整运行包

准备 Python 3 和已解压的 Windows Electron **33.2.0** 运行时目录，再执行：

```powershell
python scripts/build_portable.py --electron "D:\Tools\electron-v33.2.0-win32-x64" --zip
```

该目录应包含 `electron.exe`、`resources`、`locales` 和相应许可证文件。默认输出在 `dist/`；`--zip` 同时生成完整运行ZIP和SHA256清单。输出目录已存在时，选择新的 `--output` 路径。不要把只包含源码的 ZIP 当成运行包发布。

继续开发、资源映射及动作交接说明见 [开发说明](docs/DEVELOPMENT.md)。

## 版权与第三方组件

代码、二创美术/模型以及第三方运行时的授权范围不同。角色、设定和相关商标涉及 Square Enix 等权利方；Live2D Cubism Core 使用其专有许可。请先阅读 [版权说明](NOTICE.md)和[第三方说明](THIRD_PARTY_NOTICES.md)，不要把整个仓库或全部美术资源视为 MIT 授权。

问题反馈：[GitHub Issues](https://github.com/harry34124/AC-Cloud/issues)。反馈播放问题时，请附发布版本、Windows 版本、显示缩放、动作名称及复现步骤。
