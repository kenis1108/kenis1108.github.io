> 首次进入仓库时间：2026-06-24 09:03:33+00:00

## 标题备选

1. 手把手梳理：NixOS社区成员成长路线
2. NixOS社区成员成长路线 学习笔记：核心概念和实践步骤一次讲清楚
3. 从零理解 NixOS社区成员成长路线：把容易混淆的地方说明白

## 摘要

这篇文章围绕「NixOS社区成员成长路线」整理核心概念、实践步骤和注意事项，适合需要快速复习或动手验证的技术同学阅读。

## 正文

哈喽大家好👋 我是程序🦍kk。把复杂知识掰成大白话讲明白，是我一直以来的小追求✨；**打好基础才能稳步进阶**，是我始终秉持的学习理念～

> 📢 我搭建了5000人程序猿专属学习交流群，群内会同步前端开发/全栈开发/Web3开发/远程工作等干货资源，关注我并回复 **加群** ，就能加入交流圈啦🚀复 **加群** ，就能加入交流圈啦🚀
>

## 前言

**把零散笔记整理成可复用的方法，才是真的学到手。**

这类知识点如果只看一遍，很容易停留在“好像懂了”的阶段。

这篇围绕「NixOS社区成员成长路线」把关键概念和操作步骤重新梳理，方便后续复习和实践。

## 正文整理

下面进入正文整理。建议大家按自己的使用场景挑重点看，再回到实践里验证。

如果你也在整理自己的技术笔记，可以把本文当作一个结构参考：先讲问题，再讲步骤，最后补注意点。

## NixOS/nixpkgs 社区成长路线：从普通用户 → 参与PR审核 → 拥有官方审核权限
## 一、先理清社区4个核心角色（对应审核权限）
### 1. 普通贡献者（任何人，无仓库权限）
**无需申请，立刻就能免费参与PR评论/基础审核**
- 权限：可以在任意PR下写评论、指出规范/构建问题、用`nixpkgs-review`验证构建、给出Review意见
- 门槛：会打包、看懂CONTRIBUTING规范、会用`nixpkgs-review`测试PR
- 你现在就能做，不需要任何人批准

### 2. 单包维护者 Package Maintainer（你现阶段优先达成）
给某个软件包长期提交更新/修复，把自己加入`maintainers/maintainer-list.nix`，再加到对应包`meta.maintainers`
- 权限：对应包的PR会自动@你，你拥有该包**优先审核权**，你的approve对合并有极高权重
- 福利：长期负责一类包后可晋升Triager

### 3. Triager（全局PR分拣/审核者，官方轻量权限）
社区认可你的长期稳定审核贡献后，官方授予GitHub团队权限
- 权限：给PR打标签、标记等待合并、分配维护者、官方Review签名、批量分拣待审核PR
- 核心职责：日常清理堆积PR、检查提交规范、验证构建、引导新人修正提交（拆分commit、rebase、修复noindex等）

### 4. Committer / Core Maintainer（仓库写入权限，可合并PR）
长期高质量Triage+子系统维护，核心团队提名投票通过
- 权限：approve + 一键合并PR、回滚、分支推送、发布渠道管理

---
## 二、第一步：普通人零门槛参与PR审核（现在就能动手）
### 1. 必备技能（你已经掌握大半）
1. 熟悉nixpkgs提交规范：commit格式、单一职责拆分提交、rebase保持线性树、禁止merge提交
2. 熟练使用 `nixpkgs-review pr <编号>` 跨架构构建验证PR
3. 看懂包语法：版本更新、darwin/macOS平台支持、meta字段、extraInstallCommands、by-name目录规范
4. 读懂维护者常见Review话术（拆分提交、rebase、补充平台、修正hash等）

### 2. 去哪里找待审核PR
1. GitHub筛选标签：`status: needs review`
   https://github.com/NixOS/nixpkgs/pulls?q=is%3Aopen+is%3Apr+label%3A%22status%3A+needs+review%22
2. 筛选macOS相关PR（你的优势方向）：`platform: darwin`
3. 小包更新、版本升级类PR（审核成本低，容易练手）

### 3. 标准审核操作流程（模仿官方维护者）
1. 运行 `nixpkgs-review pr --nom --system aarch64-darwin PR号` 验证构建是否成功
2. 检查提交：是否单一职责、commit消息符合规范、是否混合多类修改
3. 检查代码：平台支持、meta属性、安装脚本、hash/版本正确性
4. 留下规范Review：
   - 构建失败：贴日志，建议修复
   - 多改动混在一条commit：要求拆分两次提交（你收到的那条英文评论模板直接复用）
   - 历史有merge分叉：要求`git rebase upstream/master`清理树
5. 无问题则评论 `LGTM, builds fine on aarch64-darwin` 并点Approve

### 4. 社区沟通渠道（融入社区）
1. Discourse论坛：https://discourse.nixos.org/ 发帖分享打包/审核经验
2. Matrix/IRC社区群：#nixpkgs 实时交流维护者
3. 积极回复新人PR提问，耐心指导git规范，积累社区口碑

---
## 三、第二步：成为Package Maintainer（拥有专属包审核权）
1. 持续给同一个/一类软件提交PR（比如你长期维护Snipaste）
   - 版本升级、macOS兼容修复、完善desktop图标安装、backport稳定分支
2. 提交PR把自己加入全局维护者列表
   文件：`maintainers/maintainer-list.nix`
   格式示例：
   ```nix
   {
     github = "kenis0225";
     githubId = 123456; # 通过 https://api.github.com/users/kenis0225 获取id
     name = "kenis";
     email = "xxx@xxx.com";
   }
   ```
3. 修改对应包`meta.maintainers = [ lib.maintainers.kenis ];` 提交合并
4. 之后所有该包的更新PR会自动通知你，你是第一审核人

---
## 四、第三步：申请Triager全局审核权限（官方团队身份）
### 申请门槛（社区通用标准）
1. 持续30天以上稳定做PR分拣、Review，累计数十条有效审核记录
2. 熟悉全量CONTRIBUTING规范，能独立引导新人修正提交历史、拆分commit、处理冲突
3. 熟悉标签体系：`platform: darwin`、`status: needs rebase`、`has maintainer`、`backport`等
4. 有至少1个长期维护的软件包，证明打包功底

### 申请渠道
1. 在Discourse开申请帖，附上你的GitHub主页+过往Review截图
2. 现有Triager/Maintainer提名，社区简单共识后管理员添加进GitHub `nixpkgs-triagers` 团队
3. 获得权限后可批量分拣PR、打标签、官方标记审核意见，大幅提升社区参与权重

---
## 五、进阶：成为Committer（拥有合并PR权限）
1. 长期Triager + 子系统维护（如darwin/macOS子系统维护者）
2. 深度参与RFC、发布流程、渠道稳定性保障
3. 由核心Committer提名，社区投票通过，授予仓库写入权限

---
## 六、给你的短期行动清单（1个月落地）
1. 持续完成自己Snipaste完整PR（拆分2条commit、rebase干净历史、过审核合并）
2. 每天找2~3个macOS相关小包PR做完整Review，用nixpkgs-review验证并留下规范评论
3. 提交PR将自己加入`maintainer-list.nix`，绑定snipaste为你的维护包
4. 在Matrix/Discourse参与社区讨论，主动帮助新人解决git rebase、拆分提交问题
5. 积累足够Review记录后发帖申请Triager权限，正式拥有官方PR审核身份

## 写在最后

好啦，今天的分享就到这里！

💬 互动时间：

你还想看「NixOS社区成员成长路线」相关的哪一块展开？可以把你的使用场景或具体问题留言给我。

最后，感谢你看到这里👏

如果喜欢这篇内容，不妨顺手给小编安排一波👇
**点赞**👍｜**转发**📲｜**推荐**❤️｜**评论**📣

要是想第一时间蹲到新内容推送，记得给我点个**星标**⭐️

更多干货内容正在持续填坑中，咱们下期见👋

## 标签建议

技术笔记

---
## 七、实战补充：一次 nixpkgs PR 从开分支到 review 通过的完整流程

这部分是结合最近实际给 nixpkgs 提交 PR 的经验整理出来的。和前面“成长路线”不同，这里更偏实操：当你已经决定要修一个包时，应该怎么选 base 分支、怎么开 PR、怎么处理 rebase / force push、commit message 怎么写，以及如何用 `nixpkgs-review` 和 `nixpkgs-review-gha` 给维护者一个可信的构建结果。

### 1. 先选对 base 分支

在 nixpkgs 里，选错 base 分支会让后续 review 变得很尴尬。

常见分支可以这样理解：

1. 普通新功能、包更新、平台支持：通常对 `master` 开 PR。
2. 影响大量包的底层改动：可能需要 `staging`，但新手不要轻易碰。(我还没遇到过)
3. 稳定分支修复：对 `release-YY.MM` 开 PR，例如 `release-26.05`。
4. 不要把 PR base 到 `nixos-YY.MM` 或 `nixpkgs-YY.MM-darwin`。这些更像 channel / tested 分支，不是普通贡献者手动开 PR 的目标分支。

这次 `opencode` 的例子就是：`x86_64-darwin` 已经不适合进 `master`，但 `release-26.05` 仍然支持 Intel macOS，所以最终应该开一个只针对 `release-26.05` 的 PR。

### 2. 从正确的 base 创建本地分支

先同步上游：

```bash
git fetch upstream
```

普通 `master` PR：

```bash
git switch -c update-foo upstream/master
```

稳定分支 PR：

```bash
git switch -c update-foo-26.05 upstream/release-26.05
```

如果你是在 fork 里工作，远端通常是：

```bash
origin   https://github.com/你的用户名/nixpkgs
upstream https://github.com/NixOS/nixpkgs.git
```

本地分支只需要从 `upstream/<base>` 切出来，然后推到自己的 `origin`：

```bash
git push -u origin update-foo-26.05
```

在 GitHub 上创建 PR 时，base 选择 `NixOS:release-26.05`，head 选择你 fork 里的分支。

### 3. 修改范围要小，避免把多个目的混在一个 PR

维护者最喜欢 review 的 PR 是“小而明确”的。

例如这次目标只是：

```nix
platforms = [
  "aarch64-linux"
  "x86_64-linux"
  "aarch64-darwin"
  "x86_64-darwin"
];
```

一开始不要顺手把 `nixpkgs-unstable` 的整个 `package.nix` checkout 过来。那会把 PR 从“新增 Intel macOS 平台支持”变成“升级版本 + 改构建逻辑 + 改平台支持”，review 成本会明显变高。

但也要注意衍生影响。这次 `opencode-desktop` 的 `meta.platforms` 继承了 `opencode.meta.platforms`，所以给 `opencode` 加 `x86_64-darwin` 后，`opencode-desktop` 也会被认为支持 `x86_64-darwin`。这就是为什么 `nixpkgs-review` 会同时构建 `opencode` 和 `opencode-desktop`。

最后发现 `opencode-desktop` 在 Intel macOS 上失败，是因为 Darwin 安装阶段只匹配：

```bash
packages/desktop/dist/mac-*/OpenCode.app
```

但 electron-builder 在 `x86_64-darwin` 上输出的是：

```bash
packages/desktop/dist/mac/OpenCode.app
```

所以修复变成：

```diff
- mv packages/desktop/dist/mac-*/OpenCode.app "$out/Applications/OpenCode.app"
+ mv packages/desktop/dist/mac*/OpenCode.app "$out/Applications/OpenCode.app"
```

这类问题就是实际做 PR 时最常见的：你以为只改了一个包，结果它的 dependent package 也被带出来了。

### 4. 本地先 build，再开口让别人 review

最基本的验证：

```bash
nix build .#opencode
nix build .#opencode-desktop
```

如果 PR 已经开了，可以跑：

```bash
nix run nixpkgs#nixpkgs-review -- pr 540738
```

成功结果大概长这样：

```text
--------- Report for 'x86_64-darwin' ---------
2 packages built:
opencode opencode-desktop
```

这个输出可以直接贴到 PR 评论里。重点是写清楚平台和构建结果：

````markdown
I ran `nixpkgs-review pr 540738` locally on x86_64-darwin:

```console
--------- Report for 'x86_64-darwin' ---------
2 packages built:
opencode opencode-desktop
```
````

### 5. commit message 规范

nixpkgs 常见格式：

```text
包名: 做了什么
```

例如：

```text
opencode: add x86_64-darwin support
```

基本原则：

1. 一个 commit 只做一类事情。
2. 不要把版本更新、平台支持、重构、格式化混在同一个 commit。
3. 不要带 merge commit。
4. 如果 review 后只是修小问题，可以用 `git commit --amend` 合进原 commit。

修改最后一个 commit：

```bash
git add pkgs/by-name/op/opencode/package.nix
git commit --amend --no-edit
```

如果需要改 commit message：

```bash
git commit --amend
```

稳定分支 PR 还要特别注意 cherry-pick 规范。通常 backport 应该先在 `master` 合并，然后对 `release-YY.MM` 使用：

```bash
git cherry-pick -x <master上的commit>
```

这样 commit message 里会自动带上来源 commit。

但有些 PR 不是从 `master` cherry-pick 的，比如这次：`master` 已经不支持 `x86_64-darwin`，但 `release-26.05` 仍然支持。这时可以在 commit message 末尾加 footer：

```text
Not-cherry-picked-because: x86_64-darwin is intentionally unsupported on master after #535511, but release-26.05 still supports it.
```

完整例子：

```text
opencode: add x86_64-darwin support

This is a release-26.05-only follow-up to #540704. x86_64-darwin is unsupported on master after #535511, but release-26.05 still supports it.

Not-cherry-picked-because: x86_64-darwin is intentionally unsupported on master after #535511, but release-26.05 still supports it.
```

这个 footer 是 nixpkgs CI 能识别的约定格式，不是通用 Git 规范。它的作用是告诉 backport 检查 bot：这不是忘了 cherry-pick，而是有意不从 `master` cherry-pick。

### 6. rebase PR 和 force push

如果 PR 显示需要 rebase，或者 base 分支更新了，常规流程是：

```bash
git fetch upstream
git rebase upstream/release-26.05
```

如果是 `master` PR：

```bash
git fetch upstream
git rebase upstream/master
```

解决冲突后：

```bash
git add <冲突文件>
git rebase --continue
```

rebase 会改写提交历史，所以推送时不能普通 `git push`，要用：

```bash
git push --force-with-lease origin update-foo-26.05
```

不要用裸 `--force`。`--force-with-lease` 会先确认远端没有别人新增的提交，更安全。

PR review 后 amend commit 也是同理：

```bash
git commit --amend --no-edit
git push --force-with-lease origin update-foo-26.05
```

### 7. 使用 nixpkgs-review-gha 跑远端 review

本地 `nixpkgs-review` 已经够用，但如果你想给维护者一个更“公开可复查”的结果，可以用：

https://github.com/Defelo/nixpkgs-review-gha

基本流程：

1. Fork `Defelo/nixpkgs-review-gha` 到自己的账号。
2. 打开 fork 后的 `Actions` 页面。
3. 启用 workflows。
4. 选择 `review` workflow。
5. 点击 `Run workflow`。
6. 输入 nixpkgs PR 编号。

以这次 PR 为例，可以这样填：

```text
pr: 540738
x86_64-linux: false
aarch64-linux: false
x86_64-darwin: yes_sandbox_relaxed
aarch64-darwin: yes_sandbox_relaxed
riscv64-linux: false
builders: gha
extra-args: 留空
push-to-cache: false
upterm: false
post-result: true
on-success: nothing
```

不要随便选：

```text
on-success: approve
on-success: merge
```

作为普通贡献者，通常只需要提供 review 结果，不要自动 approve / merge。

成功结果可以整理成这样贴到 PR：

```markdown
✅ `nixpkgs-review` result for #540738

Generated using [`nixpkgs-review-gha`](https://github.com/Defelo/nixpkgs-review-gha)

Command: `nixpkgs-review pr 540738`
Commit: `31a0c5721a2c8d43f860b6d639bc6260288f2c68`

### `x86_64-darwin` (sandbox = relaxed)

✅ 2 packages built:

- `opencode`
- `opencode-desktop`

### `aarch64-darwin` (sandbox = relaxed)

✅ 1 package built:

- `opencode-desktop`
```

如果之前有人跑过失败的 `nixpkgs-review-gha`，但那是旧 commit 的结果，要说明当前 head 已经更新。例如：

```text
This supersedes the earlier failed review result, which was for an older commit before the opencode-desktop install phase fix.
```

### 8. PR 评论要给维护者节省时间

不要只说“我修了”。更好的评论结构是：

```text
Fixed opencode-desktop too. The install phase now handles the dist/mac output produced on x86_64-darwin, and nix build .#opencode-desktop succeeds locally.
```

如果有 review 结果，再贴：

```text
I reran nixpkgs-review pr 540738 on x86_64-darwin:

2 packages built:
opencode opencode-desktop
```

维护者最关心三件事：

1. 你修了什么。
2. 为什么这样修。
3. 有没有构建验证。

把这三件事说清楚，PR 被 review 和合并的概率会高很多。

### 9. 这次实操最大的经验

这次 `opencode` PR 的关键教训是：

1. 稳定分支 PR 要选 `release-YY.MM`，不要选 channel 分支。
2. `meta.platforms` 不是孤立字段，可能会影响依赖它的其他包。
3. `nixpkgs-review` 比单独 `nix build .#某个包` 更能发现连带问题。
4. backport bot 的 `CHANGES_REQUESTED` 不一定是构建失败，也可能只是要求人工确认非 cherry-pick commit。
5. `Not-cherry-picked-because` 是 nixpkgs CI 识别的 footer，适合说明“为什么这个 release PR 不是从 master cherry-pick”。
6. amend / rebase 后要 `git push --force-with-lease`，这是 nixpkgs 贡献里非常常见的动作。

把这些流程跑通一次后，你就不只是“会改 Nix 表达式”，而是开始真正进入 nixpkgs 社区的工作方式了。
