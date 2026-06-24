# NixOS/nixpkgs 社区成长路线：从普通用户 → 参与PR审核 → 拥有官方审核权限
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
