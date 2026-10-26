# 第三方组件与来源说明

本文件区分运行组件、参考示例和角色资源，不构成把整个工程改为同一种许可证的声明。各组件完整许可证和原版权声明仍需随其实际分发文件保留。

| 组件 | 本地核对结果 | 发布时保留 |
|---|---|---|
| Electron 33.2.0 | 本工程固定版本；实际本地发行目录含Electron MIT文本及Chromium声明 | 运行包根目录`LICENSE`、`LICENSES.chromium.html`及原发行目录其他材料 |
| PIXI.js 6.5.10 | `pixi.min.js` 原头部标明 MIT；完整文本版权为Mathew Groves / Chad Engler | 原头部及[完整许可证](licenses/PixiJS-LICENSE.txt) |
| pixi-live2d-display 0.4.0 | `cubism4.min.js` 暴露版本0.4.0；完整MIT文本版权为Guan | [完整许可证](licenses/pixi-live2d-display-LICENSE.txt)、署名及打包进来的其他许可材料 |
| Live2D Cubism Framework | display 0.4.0 所固定的 Web Framework commit为`1f9cdfd140e87ba0ae68a356bb5ec339a0e65f99`，来源首版4-r.4；不能将整份bundle全当MIT | [原始LICENSE](licenses/CubismFramework-LICENSE.md)、[来源说明](licenses/CubismFramework-NOTICE.txt)及随附协议 |
| Live2D Cubism Core | `live2dcubismcore.min.js` 原头部注明 ©2019 Live2D Inc.，按专有协议分发，并称该文件为 Redistributable Code | 原版权头、实际配套的许可/通知；不能重新标为MIT |
| 桌宠参考/复用示例 | `desktop-example-LICENSE.txt` 为 Copyright (c) 2026 Andersen216 / MIT | [对应代码的完整MIT文本](licenses/desktop-example-LICENSE.txt)及原署名 |

Live2D Core 原文件中给出的协议地址为：
[Live2D Proprietary Software License Agreement](https://www.live2d.com/eula/live2d-proprietary-software-license-agreement_en.html)。该链接来自随附源文件；本文没有把其他 SDK 版本的条款替代成本项目实际使用版本的协议。

本地参考资料还包括 `dsh-whale-girl-live2d` 的代码/素材分层说明，以及 Coopanion 桌宠的交互实现。参考实现思路不等于拷贝其代码；实际引入的代码则须保留其对应许可。本地 Coopanion 当前快照的桌宠包标为 AGPL-3.0-or-later，不应直接沿用“所有参考代码都是MIT”的说法，也不能未经来源核对把它的许可套到独立实现上。

角色、美术、模型和动作资源见 [NOTICE.md](NOTICE.md)，不包含在上述运行库的 MIT 授权中。当前精简工程使用系统字体；不能把字体名称引用当成字体文件的再分发许可。

发布材料应与实际二进制、源码版本对应：保留原始许可全文，记录组件版本，不根据文件名猜许可证。此清单是本地源码/许可证核对说明，没有将参考项目的素材许可、其他语言 SDK 条款或未知来源文件的许可扩展到本项目。
