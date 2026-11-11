# Agent instructions · 瓦罐 / 猎装旅行车图鉴

> **给 Cursor / 其他 agent：** 维护本项目前先读完本文。  
> 单页图鉴：同目录 `wagon-shooting-brake-gallery.html`  
> 本文件与 HTML 始终相对同目录；**不要写死绝对路径**（目录可能搬家）。

HTML 文件顶部有 `<!-- AGENT_RULES -->` 注释块（入口摘要 + 指向本文）；script 内仅保留一行指向。**以本文件 `AGENTS.md` 为完整规范源**。

---

## 1. 项目是什么

- 单文件 HTML 图鉴：全球 + 中国相关的 **station wagon / estate / 旅行版（瓦罐）** 与 **shooting brake（猎装）**。
- 图片全部为 **Wikimedia Commons / Wikipedia 外链**，不下载到本地、不使用需鉴权图床。
- 支持搜索、筛选、排序、本地收藏 / 笔记 /「图不对」标记（localStorage）。
- 浏览器直接打开 HTML 即可；非 ecoflow-tech 仓库业务代码。

---

## 2. 改动原则

1. **优先新增**：新车 → 往 `CARS` 数组加对象；新 UI → 尽量加控件/样式，少改无关逻辑。
2. **用户没要求就不要**：全表重命名、大重构、主动 `git commit` / push。
3. **改到哪条规范哪条**：历史命名未全部对齐时，只规范本次触及的条目。
4. **分卡优于混名**：官方就是两款车（如 V90 vs V90 Cross Country）→ 两张卡 + `note` 互指，不要合成模糊标题。

---

## 3. 命名规范（必须遵守）

### 字段

| 字段 | 用途 |
|---|---|
| `id` | 小写短横线：`品牌简-车系-提示`（如 `mb-e63-estate`, `volvo-v90-cc`） |
| `name` | 英文主名 |
| `name_zh` | 中文主名（卡片大标题） |
| `type` | `wagon` \| `shooting_brake`（筛选分类） |
| `era` | `pioneer` \| `classic` \| `modern` |
| `region` | `cn` \| `eu` \| `uk` \| `us` \| `jp` \| `au` |
| `year` / `year_end` | 年代（排序默认 **新→旧**） |
| `note` | 官方别名、国内外差异、世代、配图说明 |
| `tags` | 搜索别名（桑旅、z9gt、t-modell…） |
| `image` / `image_full` | Commons **直链** `https://upload.wikimedia.org/...` |
| `image_credit` | `Wikimedia: 完整文件名` |

### 英文 `name`

格式：`Brand + Model + Official body name`

官方车身名对照（优先跟厂家该市场用语）：

| 体系 | 车身官方名 |
|---|---|
| Mercedes-Benz | **T-Modell**（德）/ **Estate**（英）；北美偶称 Wagon |
| Mercedes 猎装 | **Shooting Brake**（不是 T-Modell） |
| Mercedes 性能 | **Mercedes-AMG …**（性能子品牌，仍属奔驰体系） |
| BMW | **Touring**；M 系写 **BMW M5 Touring** |
| Audi | **Avant** |
| Volkswagen | **Variant** |
| Volvo | V60/V70/V90 等本身即旅行车；抬高版写全称 **Cross Country** 并分卡 |
| Peugeot / Citroën | **Break** |
| Škoda | **Combi** |
| Opel | **Caravan** / **Sports Tourer** |
| 美系 | **Wagon** / **Estate**（按该车常见官方称呼） |
| 猎装 / 超跑旅行 | Shooting Brake / Sport Turismo / Sportbrake（跟厂家） |

斜杠 `A / B` 仅用于同一车身的官方双语（如 `T-Modell / Estate`），不要堆俗称。

### 中文 `name_zh`

格式：`品牌通称 + 车系常用名 + 统一后缀`

- 旅行车 / 瓦罐 → 后缀 **「旅行版」**（`type=wagon`）
- 猎装 → **「猎装」** 或保留厂家专名（Shooting Brake、Sportbrake、Z9 GT…）
- 品牌：奔驰（舒适线）/ **梅赛德斯-AMG**（AMG 性能线）；宝马、奥迪、大众、沃尔沃…
- 车系用国内认知名（帕萨特、明锐、海豹06、享界…）
- 官方英文专名可保留在中文名中（Avant、T-Modell、ET5T）
- **不要**用「瓦罐 / Wagon / Estate」当中文统一后缀（这些放 `note` 或英文名）

### 世代 / 市场 / 国产进口

- **不要**塞进主名正文；用括号短注或只写在 `note`
- 例：马自达6 三代国内仅引进初代 GG → 分卡并在 note 写清海外 GH/GJ

---

## 4. 图片规范

1. 只用 Wikimedia Commons（或 Wikipedia 指向 Commons）的 **upload.wikimedia.org** 直链。
2. 禁止：随意 Flickr、需登录图床、`Special:FilePath` 长期占位、轿车图冒充旅行版、灵车/警车（除非注明）。
3. 搜图：Commons API；注意 429，降低频率。
4. 无可靠瓦罐图时：`image` 置空，靠 UI「暂无图片」占位，并在 `note` 写明待补——**不要**用明显错误车型图凑数。
5. 用户点「图不对」→ 导出 JSON 的 `flagged` 列表优先修。

---

## 5. UI / 行为约定（勿随便改默认）

- 默认排序：**年代新 → 旧**（`sort=year-desc`）
- 排序控件：新→旧 / 旧→新 / 中文名 / 英文名 / 地区 / 类型
- 收藏、笔记、「图不对」存 `localStorage` key：`wagon_gallery_v1`
- 导出 JSON 含 `store` + `flagged` 摘要

---

## 6. 常见产品知识（避免再搞混）

- **Volvo V90**（标准旅行）与 **V90 Cross Country**（抬高）是两款 → 两张卡；国内更常见 CC。
- **奔驰** 旅行官方名是 T-Modell/Estate；**AMG E 63** 是同体系性能旅行，不是另一个无关牌子。
- **本田豪华牌** 类比雷克萨斯 → **讴歌 Acura**；AMG 更像 BMW M，不是独立豪华牌。
- **享界 S9T**（Stelato）、**尚界 Z7T**、**海豹06DM-i旅行版**、**腾势 Z9 GT**、**风云 A9 Wagon**（亮相/待量产）等已按国产新能源旅行/猎装收录逻辑处理。
- **奇瑞风云 A9** 轿车 ≠ **A9 Wagon**；图鉴应收 Wagon，无 Commons 瓦罐图就留空。

---

## 7. 新增一辆车的检查清单

1. 确认是 wagon / shooting brake（或厂家明确的 Touring / T / Wagon / 猎装）。
2. 按命名规范写 `name` / `name_zh` / `note` / `tags`。
3. Commons 找到**匹配车身**的外景图 → 直链写入。
4. 插入 `CARS` 时靠近同品牌或同地区现代车（可读性），不依赖数组顺序（默认按年排序）。
5. 必要时更新本 `AGENTS.md` 第 6 节「常见产品知识」。

---

## 8. 文件索引

| 文件 | 作用 |
|---|---|
| `AGENTS.md` | **本文件**：agent 完整提示词 / rules |
| `wagon-shooting-brake-gallery.html` | 图鉴本体；顶部 `AGENT_RULES` + script 一行指向本文 |

不要把本项目规则写进 ecoflow-tech 仓库；本目录是独立 Downloads 小项目。
