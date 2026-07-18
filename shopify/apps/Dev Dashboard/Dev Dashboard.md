> 首次进入仓库时间：2026-03-17
## 标题备选

1. Shopify 开发实战：Shopify Dev Dashboard 一篇讲清楚
2. 手把手梳理 Shopify：Shopify Dev Dashboard 的关键用法和避坑点
3. 做 Shopify 项目别只会改主题，这篇带你搞懂 Shopify Dev Dashboard

## 摘要

这篇文章适合 Shopify 主题和应用开发者，围绕「Shopify Dev Dashboard」梳理核心概念、配置路径和实战注意点，方便项目中快速对照。

## 正文

哈喽大家好👋 我是程序🦍kk。把复杂知识掰成大白话讲明白，是我一直以来的小追求✨；**打好基础才能稳步进阶**，是我始终秉持的学习理念～

> 📢 我搭建了5000人程序猿专属学习交流群，群内会同步前端开发/全栈开发/Web3开发/远程工作等干货资源，关注我并回复 **加群** ，就能加入交流圈啦🚀

## 前言

**Shopify 项目最容易卡住的地方，往往不是“会不会写代码”，而是主题、应用和后台配置之间的关系没理顺。**

很多同学做 Shopify 开发时，会同时碰到 Liquid、主题目录、Checkout、Metafields、应用后台、性能优化这些概念。单独看不难，放到真实项目里就容易散。

这篇围绕「Shopify Dev Dashboard」把原始笔记整理成更适合阅读和复用的版本，适合做主题开发、应用开发或者接手 Shopify 项目时快速对照。

## Shopify 实战整理

下面进入 Shopify 相关内容整理。建议大家边看边对照自己的店铺、主题代码和应用后台，很多问题只有放到真实配置里才容易看清楚。

如果你正在做 Shopify 项目，可以重点留意主题代码、后台配置、应用能力和官方限制之间的边界，很多线上问题都出在这些交界处。

> Dev Dashboard是需要先注册合作伙伴账户吗

不一定「先」注册合作伙伴账户，但实际开发时通常还是离不开 Partner 账户。先把官方文档给你：[Dev Dashboard 介绍和入口](https://shopify.dev/docs/apps/build/dev-dashboard)。

### 1. Dev Dashboard 能从哪儿进入？

根据文档，Dev Dashboard 有三种入口（docs）：

+ 直接访问：https://dev.shopify.com/dashboard

+ 从任意商家后台（Shopify Admin）进入：
    1. 打开你的店铺后台
    2. 右上角点店铺名称
    3. 选择 “Dev Dashboard”

+ 从 Partner Dashboard（合作伙伴后台）进入：
    1. 打开 Partner Dashboard
    2. 左侧点 “App distribution”
    3. 再点 “Visit Dev Dashboard”

从这里可以看出：

+ 你可以只用商家店铺账户，从 Admin 进入 Dev Dashboard，理论上不强制先有 Partner 账户。

+ 但如果你要做应用分发、上架、收益结算等，就需要有 Shopify Partner 账户 和 Partner Dashboard，这时候 Dev Dashboard 也是从 Partner Dashboard 进去的。

### 2. 哪些场景不一定需要 Partner 账户？

在以下这些相对「个人/内部使用」的场景下，你可以先用自己的店铺账号 + Dev Dashboard 做开发：

+ 给自己店铺做私有/定制应用开发，只在自家店里用
+ 在 Dev Dashboard 里：
    + 创建应用
    + 创建 dev store（开发测试店铺）
    + 在 dev store 上安装和调试你的 app

这些都可以只依赖你的 Shopify 账号 + Dev Dashboard 完成。

### 3. 哪些场景一定要 Partner 账户？

一旦涉及到下面这些，基本就需要先注册 Partner 账户（Partner 体系 docs 示例）：

+ 想把 app 分发给其他商家（公有应用、定制应用的标准分发流程）
+ 想把应用上架到 Shopify App Store
+ 需要通过 Partner 体系来：
    + 查看和管理 app 的收入、结算
    + 使用 Partner API 做自动化
    + 管理团队、组织身份等

在这些场景里，Dev Dashboard 和 Partner Dashboard 是配套使用的：
Partner Dashboard 负责「账号/组织/收益/分发」层面；
Dev Dashboard 负责「应用开发、监控、日志、dev store」层面。

### 4. 实际建议的顺序

如果你只是想先研究一下：

1. 有一个 Shopify 店铺账号（可以是开发用的店铺）。
2. 直接访问 dev.shopify.com/dashboard 看看是否能进入 Dev Dashboard，创建一个测试 app 和 dev store 玩一玩。

如果你已经确定要做「给客户/他人使用」「上架 app store」：

1. 先注册 Shopify Partner 账户（免费）。
2. 在 Partner Dashboard 中：
    + 创建组织
    + 之后通过 “App distribution → Visit Dev Dashboard” 进入 Dev Dashboard 管理 app。

如果你方便说一下目前的目标（比如「给自己店用的 app」还是「准备做商用/上架」），我可以按你的情况具体说：

+ 要不要立即办 Partner 账户
+ 推荐的账号结构（个人 vs 公司组织）
+ 接下来在 Dev Dashboard 里的操作路径。

## 结论

1. 不需要走Partner账户这个Channel了
2. 需要具有给员工配置Organization级别权限的账号才能配置Dev Bashboard的访问权限

## 写在最后

好啦，今天的分享就到这里！

💬 互动时间：

你现在做 Shopify 更常遇到的是主题开发、Checkout 定制、应用接入，还是性能优化？如果你在「Shopify Dev Dashboard」上踩过坑，也可以把场景留言出来。

最后，感谢你看到这里👏

如果喜欢这篇内容，不妨顺手给小编安排一波👇
**点赞**👍｜**转发**📲｜**推荐**❤️｜**评论**📣

要是想第一时间蹲到新内容推送，记得给我点个**星标**⭐️

更多干货内容正在持续填坑中，咱们下期见👋

## 标签建议

Shopify、主题开发、独立站
