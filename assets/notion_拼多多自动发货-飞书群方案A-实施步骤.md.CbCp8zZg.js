import{_ as s,c as n,o as p,ag as l}from"./chunks/framework.DPDPlp3K.js";const u=JSON.parse('{"title":"拼多多自动发货（方案 A）实施步骤","description":"","frontmatter":{},"headers":[],"relativePath":"notion/拼多多自动发货-飞书群方案A-实施步骤.md","filePath":"notion/拼多多自动发货-飞书群方案A-实施步骤.md"}'),e={name:"notion/拼多多自动发货-飞书群方案A-实施步骤.md"};function t(i,a,c,o,d,r){return p(),n("div",null,a[0]||(a[0]=[l(`<h1 id="拼多多自动发货-方案-a-实施步骤" tabindex="-1">拼多多自动发货（方案 A）实施步骤 <a class="header-anchor" href="#拼多多自动发货-方案-a-实施步骤" aria-label="Permalink to &quot;拼多多自动发货（方案 A）实施步骤&quot;">​</a></h1><blockquote><p>架构：<strong>飞书群收物流信息 → 多维表格任务板 → 本机轮询 → RPA/浏览器自动化拼多多发货 → 回写状态</strong><br> 约束：不走拼多多开放平台 API、不接 ERP；发货仅操作商家后台网页。<br> 日期：2026-07-25</p></blockquote><hr><h2 id="_1-目标与边界" tabindex="-1">1. 目标与边界 <a class="header-anchor" href="#_1-目标与边界" aria-label="Permalink to &quot;1. 目标与边界&quot;">​</a></h2><h3 id="_1-1-要达成的效果" tabindex="-1">1.1 要达成的效果 <a class="header-anchor" href="#_1-1-要达成的效果" aria-label="Permalink to &quot;1.1 要达成的效果&quot;">​</a></h3><ol><li>供应商在飞书群发送物流信息（姓名、手机、地址、快递单号等）。</li><li>系统自动落入飞书多维表格，状态为「待处理」。</li><li>发货电脑常驻一个轮询程序，拉取「待处理」任务。</li><li>用浏览器自动化打开拼多多商家后台：按姓名匹配订单；同址可合并发货；异址用手机+地址确认；填入运单号并确认发货。</li><li>回写表格状态为「已发货」或「失败」，必要时在群里告警。</li></ol><h3 id="_1-2-不做的事" tabindex="-1">1.2 不做的事 <a class="header-anchor" href="#_1-2-不做的事" aria-label="Permalink to &quot;1.2 不做的事&quot;">​</a></h3><ul><li>不调用拼多多开放 API / 不安装第三方打单 ERP。</li><li>不让 AI 在量产时每次临场决定是否点「发货」（AI 只用于探路与录制流程）。</li><li>匹配不唯一或信息不足时：<strong>禁止自动发货</strong>，只标记失败并通知人工。</li></ul><h3 id="_1-3-业务匹配规则-固化进自动化" tabindex="-1">1.3 业务匹配规则（固化进自动化） <a class="header-anchor" href="#_1-3-业务匹配规则-固化进自动化" aria-label="Permalink to &quot;1.3 业务匹配规则（固化进自动化）&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes catppuccin-latte catppuccin-mocha vp-code" tabindex="0"><code><span class="line"><span>收到：姓名 + 快递单号（每条消息一个单号；通常含手机、地址）</span></span>
<span class="line"><span>  → 在拼多多「待发货」中按姓名搜索</span></span>
<span class="line"><span>      → 0 条：失败「未找到订单」</span></span>
<span class="line"><span>      → 1 条：对该单发货</span></span>
<span class="line"><span>      → N 条：</span></span>
<span class="line"><span>            → 收货地址相同：走页面「合并发货」，共用这一运单号</span></span>
<span class="line"><span>            → 地址不同：用手机号 + 地址二次匹配</span></span>
<span class="line"><span>                  → 唯一：发该单（或该址下的合并集）</span></span>
<span class="line"><span>                  → 仍 0/多：失败「需人工」</span></span></code></pre></div><hr><h2 id="_2-总体架构" tabindex="-1">2. 总体架构 <a class="header-anchor" href="#_2-总体架构" aria-label="Permalink to &quot;2. 总体架构&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes catppuccin-latte catppuccin-mocha vp-code" tabindex="0"><code><span class="line"><span>供应商</span></span>
<span class="line"><span>  │ 发群消息 / 填群表单（推荐表单更稳）</span></span>
<span class="line"><span>  ▼</span></span>
<span class="line"><span>飞书群</span></span>
<span class="line"><span>  │ 自建应用订阅消息 或 表单提交</span></span>
<span class="line"><span>  ▼</span></span>
<span class="line"><span>飞书多维表格（任务板）</span></span>
<span class="line"><span>  字段：姓名、手机、地址、快递公司、运单号、状态、失败原因、原始消息、创建时间…</span></span>
<span class="line"><span>  │</span></span>
<span class="line"><span>  │ 本机定时 GET「状态=待处理」</span></span>
<span class="line"><span>  ▼</span></span>
<span class="line"><span>本机 Worker（Python 等）</span></span>
<span class="line"><span>  │ 将行改为「处理中」→ 调用浏览器发货脚本 → 回写「已发货/失败」</span></span>
<span class="line"><span>  ▼</span></span>
<span class="line"><span>拼多多商家后台（浏览器自动化）</span></span></code></pre></div><hr><h2 id="_3-飞书侧实施步骤" tabindex="-1">3. 飞书侧实施步骤 <a class="header-anchor" href="#_3-飞书侧实施步骤" aria-label="Permalink to &quot;3. 飞书侧实施步骤&quot;">​</a></h2><h3 id="_3-1-创建多维表格-任务板" tabindex="-1">3.1 创建多维表格（任务板） <a class="header-anchor" href="#_3-1-创建多维表格-任务板" aria-label="Permalink to &quot;3.1 创建多维表格（任务板）&quot;">​</a></h3><ol><li>飞书新建「多维表格」，命名如：<code>拼多多发货任务</code>。</li><li>建议字段：</li></ol><table tabindex="0"><thead><tr><th>字段名</th><th>类型</th><th>说明</th></tr></thead><tbody><tr><td>任务ID</td><td>自动编号 / 文本</td><td>唯一标识，便于日志</td></tr><tr><td>姓名</td><td>文本</td><td>收件人姓名</td></tr><tr><td>手机</td><td>文本</td><td>完整手机号</td></tr><tr><td>地址</td><td>文本</td><td>完整收货地址</td></tr><tr><td>快递公司</td><td>文本</td><td>如顺丰/中通；可空，页面再选</td></tr><tr><td>运单号</td><td>文本</td><td>每条任务一个</td></tr><tr><td>状态</td><td>单选</td><td><code>待处理</code> / <code>处理中</code> / <code>已发货</code> / <code>失败</code> / <code>已取消</code></td></tr><tr><td>失败原因</td><td>文本</td><td>匹配失败、页面异常等</td></tr><tr><td>原始消息</td><td>文本</td><td>群里原文，便于核对</td></tr><tr><td>处理机器</td><td>文本</td><td>可选，哪台电脑领了任务</td></tr><tr><td>开始处理时间</td><td>日期时间</td><td>可选</td></tr><tr><td>完成时间</td><td>日期时间</td><td>可选</td></tr><tr><td>拼多多订单号</td><td>文本</td><td>发货成功后回填，可选</td></tr></tbody></table><ol start="3"><li>建视图： <ul><li><code>待处理队列</code>：筛选 <code>状态 = 待处理</code>，按创建时间升序。</li><li><code>失败待审</code>：筛选 <code>状态 = 失败</code>。</li><li><code>今日已发货</code>：筛选 <code>状态 = 已发货</code> + 今天。</li></ul></li></ol><h3 id="_3-2-创建飞书自建应用" tabindex="-1">3.2 创建飞书自建应用 <a class="header-anchor" href="#_3-2-创建飞书自建应用" aria-label="Permalink to &quot;3.2 创建飞书自建应用&quot;">​</a></h3><ol><li>打开 <a href="https://open.feishu.cn/" target="_blank" rel="noreferrer">飞书开放平台</a> → 创建企业自建应用。</li><li>开通权限（按实际能力勾选，名称以控制台为准），典型包括： <ul><li>获取与发送单聊、群组消息相关权限（若用群消息解析）。</li><li>多维表格：读、写记录。</li><li>查看群信息（若需限制只处理指定群）。</li></ul></li><li>发布应用版本，并在企业内启用。</li><li>将应用机器人拉进「物流发货」专用群。</li><li>记录：<code>App ID</code>、<code>App Secret</code>、多维表格 <code>app_token</code>、数据表 <code>table_id</code>。</li></ol><blockquote><p>安全：Secret 只放本机环境变量或本地配置文件，不要提交到 Git。</p></blockquote><h3 id="_3-3-消息如何进入表格-二选一-可并行" tabindex="-1">3.3 消息如何进入表格（二选一，可并行） <a class="header-anchor" href="#_3-3-消息如何进入表格-二选一-可并行" aria-label="Permalink to &quot;3.3 消息如何进入表格（二选一，可并行）&quot;">​</a></h3><h4 id="方式一-群表单-信息收集-更推荐" tabindex="-1">方式一：群表单 / 信息收集（更推荐） <a class="header-anchor" href="#方式一-群表单-信息收集-更推荐" aria-label="Permalink to &quot;方式一：群表单 / 信息收集（更推荐）&quot;">​</a></h4><ol><li>在群内用飞书「表单」或多维表格「表单视图」收集：姓名、手机、地址、快递公司、运单号。</li><li>提交后直接成为表格一行，<code>状态</code> 默认「待处理」。</li><li>优点：字段结构化，几乎不用 NLP；供应商按表单填即可。</li></ol><h4 id="方式二-群里自由文本-应用解析" tabindex="-1">方式二：群里自由文本 + 应用解析 <a class="header-anchor" href="#方式二-群里自由文本-应用解析" aria-label="Permalink to &quot;方式二：群里自由文本 + 应用解析&quot;">​</a></h4><ol><li>自建应用订阅「接收消息」类事件（事件订阅需配置请求网址；可用云函数/轻量服务，<strong>不必</strong>用本机穿透）。</li><li>收到指定群文本后： <ul><li>按模板正则提取字段；或调用一次 LLM 抽字段。</li><li>调用多维表格 API 新增记录，<code>状态=待处理</code>，<code>原始消息=全文</code>。</li></ul></li><li>建议供应商固定模板：</li></ol><div class="language-text vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki shiki-themes catppuccin-latte catppuccin-mocha vp-code" tabindex="0"><code><span class="line"><span>姓名：张三</span></span>
<span class="line"><span>手机：13800138000</span></span>
<span class="line"><span>地址：广东省深圳市南山区xx路xx号</span></span>
<span class="line"><span>快递：顺丰</span></span>
<span class="line"><span>单号：SF1234567890123</span></span></code></pre></div><ol start="4"><li>解析失败：在群里回复「格式不对，请按模板重发或改用表单」，且<strong>不要</strong>写入「待处理」。</li></ol><h3 id="_3-4-事件订阅小服务放哪" tabindex="-1">3.4 事件订阅小服务放哪 <a class="header-anchor" href="#_3-4-事件订阅小服务放哪" aria-label="Permalink to &quot;3.4 事件订阅小服务放哪&quot;">​</a></h3><ul><li>推荐：任意可公网访问的小服务（云函数、1 核 VPS、飞书长期可用的自动化能力若满足也可）。</li><li>职责仅限：验签 → 解析 → 写多维表格 → 快速返回成功。</li><li><strong>不要</strong>在回调里同步跑拼多多 RPA。</li></ul><hr><h2 id="_4-本机-worker-实施步骤" tabindex="-1">4. 本机 Worker 实施步骤 <a class="header-anchor" href="#_4-本机-worker-实施步骤" aria-label="Permalink to &quot;4. 本机 Worker 实施步骤&quot;">​</a></h2><h3 id="_4-1-环境准备" tabindex="-1">4.1 环境准备 <a class="header-anchor" href="#_4-1-环境准备" aria-label="Permalink to &quot;4.1 环境准备&quot;">​</a></h3><ol><li>固定一台 Windows/macOS 发货机（建议 Windows + Chrome，拼多多商家后台兼容性更好）。</li><li>安装 Python 3.11+（或你熟悉的运行时）。</li><li>安装浏览器自动化依赖（量产后用 Playwright 等固化脚本；探路阶段可用 AI 浏览器 Agent）。</li><li>Chrome 保持已登录 <code>拼多多商家后台</code>（mms / 商家版后台），建议独立浏览器用户数据目录，避免与日常浏览互相踢登录。</li><li>配置环境变量示例：</li></ol><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes catppuccin-latte catppuccin-mocha vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#4C4F69;--shiki-dark:#CDD6F4;">FEISHU_APP_ID</span><span style="--shiki-light:#179299;--shiki-dark:#94E2D5;">=</span><span style="--shiki-light:#40A02B;--shiki-dark:#A6E3A1;">cli_xxx</span></span>
<span class="line"><span style="--shiki-light:#4C4F69;--shiki-dark:#CDD6F4;">FEISHU_APP_SECRET</span><span style="--shiki-light:#179299;--shiki-dark:#94E2D5;">=</span><span style="--shiki-light:#40A02B;--shiki-dark:#A6E3A1;">xxx</span></span>
<span class="line"><span style="--shiki-light:#4C4F69;--shiki-dark:#CDD6F4;">FEISHU_BITABLE_APP_TOKEN</span><span style="--shiki-light:#179299;--shiki-dark:#94E2D5;">=</span><span style="--shiki-light:#40A02B;--shiki-dark:#A6E3A1;">bascnxxx</span></span>
<span class="line"><span style="--shiki-light:#4C4F69;--shiki-dark:#CDD6F4;">FEISHU_BITABLE_TABLE_ID</span><span style="--shiki-light:#179299;--shiki-dark:#94E2D5;">=</span><span style="--shiki-light:#40A02B;--shiki-dark:#A6E3A1;">tblxxx</span></span>
<span class="line"><span style="--shiki-light:#4C4F69;--shiki-dark:#CDD6F4;">POLL_INTERVAL_SECONDS</span><span style="--shiki-light:#179299;--shiki-dark:#94E2D5;">=</span><span style="--shiki-light:#40A02B;--shiki-dark:#A6E3A1;">20</span></span></code></pre></div><h3 id="_4-2-轮询逻辑-必须实现的状态机" tabindex="-1">4.2 轮询逻辑（必须实现的状态机） <a class="header-anchor" href="#_4-2-轮询逻辑-必须实现的状态机" aria-label="Permalink to &quot;4.2 轮询逻辑（必须实现的状态机）&quot;">​</a></h3><p>每轮：</p><ol><li>用飞书 API 查询 <code>状态 = 待处理</code>，按创建时间取 1 条（或小批量串行，<strong>不要并行多开浏览器发货</strong>，除非你很清楚并发风险）。</li><li>先把该行改为 <code>处理中</code>，写入 <code>处理机器</code>、<code>开始处理时间</code>（乐观锁，防双机抢单）。</li><li>若改状态失败（已被别人领走），跳过。</li><li>调用本地发货脚本，传入：姓名、手机、地址、快递公司、运单号。</li><li>根据返回码回写： <ul><li>成功：<code>已发货</code> + 完成时间 +（可选）订单号。</li><li>失败：<code>失败</code> + <code>失败原因</code>；可选发飞书群消息 @负责人。</li></ul></li><li>休眠 <code>POLL_INTERVAL_SECONDS</code>，进入下一轮。</li><li>可选巡检：<code>处理中</code> 超过 N 分钟仍未完成 → 改回 <code>失败</code>（超时），避免卡死。</li></ol><h3 id="_4-3-幂等与安全" tabindex="-1">4.3 幂等与安全 <a class="header-anchor" href="#_4-3-幂等与安全" aria-label="Permalink to &quot;4.3 幂等与安全&quot;">​</a></h3><ul><li>同一 <code>运单号</code> 若表格里已有「已发货」，新任务直接标失败「单号重复」。</li><li>发货脚本内部：页面确认已变成已发货后再回报成功。</li><li>匹配分支严格按第 1.3 节；不确定就失败，不要猜。</li></ul><hr><h2 id="_5-拼多多浏览器自动化-量产" tabindex="-1">5. 拼多多浏览器自动化（量产） <a class="header-anchor" href="#_5-拼多多浏览器自动化-量产" aria-label="Permalink to &quot;5. 拼多多浏览器自动化（量产）&quot;">​</a></h2><h3 id="_5-1-推荐路径" tabindex="-1">5.1 推荐路径 <a class="header-anchor" href="#_5-1-推荐路径" aria-label="Permalink to &quot;5.1 推荐路径&quot;">​</a></h3><ol><li><strong>阶段 1（探路）</strong>：用 AI + 浏览器（Chrome MCP / browser-use / Skyvern 等）走通人工发货路径，记录 URL、按钮文案、异常弹窗。</li><li><strong>阶段 2（固化）</strong>：把稳定步骤写成 Playwright（或影刀）脚本，由本机 Worker 调用。</li><li><strong>阶段 3（值守）</strong>：只跑固化脚本；页面大改时再用 AI 探路更新脚本。</li></ol><h3 id="_5-2-脚本应覆盖的页面步骤-清单" tabindex="-1">5.2 脚本应覆盖的页面步骤（清单） <a class="header-anchor" href="#_5-2-脚本应覆盖的页面步骤-清单" aria-label="Permalink to &quot;5.2 脚本应覆盖的页面步骤（清单）&quot;">​</a></h3><ol><li>打开发货/订单中心（待发货列表）。</li><li>用「收件人姓名」搜索（若后台无姓名搜索，则用列表筛选/搜索框可达等价能力）。</li><li>读取结果行：收件人、手机、地址、订单号。</li><li>分支： <ul><li>0 行 → 返回失败。</li><li>1 行 → 进入发货。</li><li>多行且地址规范化后相同 → 勾选后合并发货（若无合并，则同址逐单填同一运单号，二选一写死一种策略）。</li><li>多行地址不同 → 用手机、地址过滤到唯一集合再发。</li></ul></li><li>选择物流公司、填运单号、确认发货。</li><li>校验订单状态变为已发货（或列表中消失/标记已发）。</li><li>截图保存到本地 <code>logs/日期/任务ID.png</code>（失败必截）。</li></ol><h3 id="_5-3-「地址相同」判定建议" tabindex="-1">5.3 「地址相同」判定建议 <a class="header-anchor" href="#_5-3-「地址相同」判定建议" aria-label="Permalink to &quot;5.3 「地址相同」判定建议&quot;">​</a></h3><ul><li>去掉空格、中英文标点差异后再比。</li><li>或比「省市区 + 明细前 N 字 + 手机号」组合。</li><li>宁可判成不同址走人审，不要误合并。</li></ul><hr><h2 id="_6-验收清单" tabindex="-1">6. 验收清单 <a class="header-anchor" href="#_6-验收清单" aria-label="Permalink to &quot;6. 验收清单&quot;">​</a></h2><ul><li>[ ] 表单/群消息能稳定写入「待处理」。</li><li>[ ] 本机轮询能领取任务并置「处理中」。</li><li>[ ] 单订单：姓名唯一 → 自动发货成功 → 表格「已发货」。</li><li>[ ] 同名同址多单：合并或逐单同运单号策略符合预期。</li><li>[ ] 同名异址：仅手机+地址命中的那单发货。</li><li>[ ] 故意缺字段 / 故意同名冲突 → 「失败」+ 群通知，无误发。</li><li>[ ] 登录过期 / 验证码：脚本失败可感知，不假报成功。</li><li>[ ] 重复运单号：拒绝二次发货。</li></ul><hr><h2 id="_7-运维建议" tabindex="-1">7. 运维建议 <a class="header-anchor" href="#_7-运维建议" aria-label="Permalink to &quot;7. 运维建议&quot;">​</a></h2><ul><li>发货机勿休眠；屏幕锁不影响无头/有头策略需实测拼多多是否强校验。</li><li>每周抽查「失败待审」视图。</li><li>拼多多改版后：先跑 AI 探路提示词更新选择器，再上线固化脚本。</li><li>日志保留至少 30 天（任务ID、运单号、截图）。</li></ul><hr><h2 id="_8-ai-探路提示词-给-chrome-mcp-browser-use-等" tabindex="-1">8. AI 探路提示词（给 Chrome MCP / browser-use 等） <a class="header-anchor" href="#_8-ai-探路提示词-给-chrome-mcp-browser-use-等" aria-label="Permalink to &quot;8. AI 探路提示词（给 Chrome MCP / browser-use 等）&quot;">​</a></h2><blockquote><p>使用方式：在已登录拼多多商家后台的浏览器里，把下列提示词交给 Agent。<br> 目标：摸清路径与元素，输出「可交给 Playwright 固化」的步骤说明；<strong>不要在探路时对真实大额订单批量确认发货</strong>（可用测试单或停在确认按钮前）。</p></blockquote><h3 id="_8-1-总览探路" tabindex="-1">8.1 总览探路 <a class="header-anchor" href="#_8-1-总览探路" aria-label="Permalink to &quot;8.1 总览探路&quot;">​</a></h3><div class="language-text vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki shiki-themes catppuccin-latte catppuccin-mocha vp-code" tabindex="0"><code><span class="line"><span>你是电商后台 RPA 探路助手。当前 Chrome 已登录拼多多商家后台。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>任务：找出「待发货订单 → 按收件人信息匹配 → 填写物流单号完成发货」的完整人工路径。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>请逐步操作并记录：</span></span>
<span class="line"><span>1. 从首页到「待发货/发货管理/订单发货」的导航路径（菜单文案、URL 变化）。</span></span>
<span class="line"><span>2. 列表页有哪些搜索/筛选：是否支持按收件人姓名、手机、订单号搜索。</span></span>
<span class="line"><span>3. 列表每一行可见字段（姓名、手机、地址、商品、订单号等）及对应 DOM 特征（角色、文本、稳定选择器线索）。</span></span>
<span class="line"><span>4. 单笔发货按钮入口与发货弹窗/页面结构：物流公司如何选择、运单号输入框、确认按钮。</span></span>
<span class="line"><span>5. 是否存在「合并发货」：如何多选、入口文案、限制条件（是否要求同地址）。</span></span>
<span class="line"><span>6. 发货成功后的页面反馈（Toast、状态文案、列表变化）。</span></span>
<span class="line"><span>7. 常见阻断：登录过期、滑块、权限、必填校验文案。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>输出格式（Markdown）：</span></span>
<span class="line"><span>- 导航路径</span></span>
<span class="line"><span>- 选择器/文案清单（尽量给出稳定的文本+属性，而不是绝对坐标）</span></span>
<span class="line"><span>- 推荐自动化步骤伪代码（if/else 按：0 命中 / 1 命中 / 同址多单 / 异址多单）</span></span>
<span class="line"><span>- 风险点与需要人工确认的步骤</span></span>
<span class="line"><span>- 建议的 Playwright 用例名称列表</span></span>
<span class="line"><span></span></span>
<span class="line"><span>约束：</span></span>
<span class="line"><span>- 不要提交真实发货，除非我明确提供「测试订单号」并授权；默认停在点击「确认发货」之前。</span></span>
<span class="line"><span>- 每一步先观察再点击；失败就换定位策略并记录原因。</span></span></code></pre></div><h3 id="_8-2-节点-搜索收件人" tabindex="-1">8.2 节点：搜索收件人 <a class="header-anchor" href="#_8-2-节点-搜索收件人" aria-label="Permalink to &quot;8.2 节点：搜索收件人&quot;">​</a></h3><div class="language-text vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki shiki-themes catppuccin-latte catppuccin-mocha vp-code" tabindex="0"><code><span class="line"><span>目标：在拼多多待发货列表中，用收件人姓名搜索订单。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>输入变量：</span></span>
<span class="line"><span>- recipient_name = 「{{姓名}}」</span></span>
<span class="line"><span></span></span>
<span class="line"><span>步骤要求：</span></span>
<span class="line"><span>1. 进入待发货列表。</span></span>
<span class="line"><span>2. 找到搜索框或筛选，输入 recipient_name 并触发搜索。</span></span>
<span class="line"><span>3. 等待结果刷新，统计结果行数。</span></span>
<span class="line"><span>4. 抽取每一行的：订单号、收件人、手机、完整地址（尽可能）。</span></span>
<span class="line"><span>5. 输出 JSON：</span></span>
<span class="line"><span>{</span></span>
<span class="line"><span>  &quot;search_field&quot;: &quot;...&quot;,</span></span>
<span class="line"><span>  &quot;result_count&quot;: 0,</span></span>
<span class="line"><span>  &quot;rows&quot;: [{&quot;order_id&quot;:&quot;&quot;,&quot;name&quot;:&quot;&quot;,&quot;mobile&quot;:&quot;&quot;,&quot;address&quot;:&quot;&quot;}],</span></span>
<span class="line"><span>  &quot;selectors&quot;: {&quot;search_input&quot;:&quot;...&quot;,&quot;result_row&quot;:&quot;...&quot;},</span></span>
<span class="line"><span>  &quot;notes&quot;: &quot;...&quot;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>若后台不能按姓名搜：尝试可用的替代筛选，并明确写「无法按姓名搜索，需改策略」。</span></span>
<span class="line"><span>不要点击发货。</span></span></code></pre></div><h3 id="_8-3-节点-同址合并判定" tabindex="-1">8.3 节点：同址合并判定 <a class="header-anchor" href="#_8-3-节点-同址合并判定" aria-label="Permalink to &quot;8.3 节点：同址合并判定&quot;">​</a></h3><div class="language-text vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki shiki-themes catppuccin-latte catppuccin-mocha vp-code" tabindex="0"><code><span class="line"><span>目标：在当前搜索结果中，判断哪些订单可以合并发货。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>输入：上一节点的 rows（含 name/mobile/address/order_id）。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>规则：</span></span>
<span class="line"><span>1. 对 address 做规范化（去空格、统一标点）后分组。</span></span>
<span class="line"><span>2. 若存在「同一规范化地址」下订单数 ≥ 2，记录为可合并候选。</span></span>
<span class="line"><span>3. 探查 UI：如何勾选多笔、是否有「合并发货」按钮、按钮在何种条件下可点。</span></span>
<span class="line"><span>4. 输出：</span></span>
<span class="line"><span>- 分组结果</span></span>
<span class="line"><span>- 合并操作逐步 UI 步骤</span></span>
<span class="line"><span>- 选择器线索</span></span>
<span class="line"><span>- 若无合并能力：说明改为「逐单填写同一运单号」的点击路径</span></span>
<span class="line"><span></span></span>
<span class="line"><span>不要确认发货。</span></span></code></pre></div><h3 id="_8-4-节点-异址用手机-地址匹配" tabindex="-1">8.4 节点：异址用手机+地址匹配 <a class="header-anchor" href="#_8-4-节点-异址用手机-地址匹配" aria-label="Permalink to &quot;8.4 节点：异址用手机+地址匹配&quot;">​</a></h3><div class="language-text vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki shiki-themes catppuccin-latte catppuccin-mocha vp-code" tabindex="0"><code><span class="line"><span>目标：同名多条且地址不同时，用手机号与地址精确匹配目标订单。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>输入：</span></span>
<span class="line"><span>- rows: 搜索结果</span></span>
<span class="line"><span>- mobile: 「{{手机}}」</span></span>
<span class="line"><span>- address: 「{{地址}}」</span></span>
<span class="line"><span></span></span>
<span class="line"><span>规则：</span></span>
<span class="line"><span>1. 先按手机号过滤；若手机号带脱敏（如 138****8000），用可见数字做兼容匹配并标注不确定性。</span></span>
<span class="line"><span>2. 再在剩余结果里用地址包含/规范化相等匹配。</span></span>
<span class="line"><span>3. 若唯一命中：标出该行及如何进入发货。</span></span>
<span class="line"><span>4. 若 0 或多条：停止，输出 reason，供人工处理。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>输出 JSON：matched_order_ids、match_confidence（high/medium/low）、ui_steps、stop_reason。</span></span>
<span class="line"><span>不要确认发货。</span></span></code></pre></div><h3 id="_8-5-节点-填写运单并停在确认前" tabindex="-1">8.5 节点：填写运单并停在确认前 <a class="header-anchor" href="#_8-5-节点-填写运单并停在确认前" aria-label="Permalink to &quot;8.5 节点：填写运单并停在确认前&quot;">​</a></h3><div class="language-text vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki shiki-themes catppuccin-latte catppuccin-mocha vp-code" tabindex="0"><code><span class="line"><span>目标：对已选定的订单打开发货界面，填写物流信息，但不要最终提交。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>输入：</span></span>
<span class="line"><span>- order_id 或已选中行</span></span>
<span class="line"><span>- logistics_company: 「{{快递公司}}」</span></span>
<span class="line"><span>- tracking_number: 「{{运单号}}」</span></span>
<span class="line"><span></span></span>
<span class="line"><span>步骤：</span></span>
<span class="line"><span>1. 进入发货弹窗/页面。</span></span>
<span class="line"><span>2. 选择物流公司（记录下拉项如何定位；若需精确编码/别名映射，列出来）。</span></span>
<span class="line"><span>3. 填入运单号。</span></span>
<span class="line"><span>4. 识别「确认发货」按钮位置与可点条件。</span></span>
<span class="line"><span>5. 在点击确认前停止，截图，输出完整 Playwright 风格步骤。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>严禁点击最终确认（除非用户消息里出现：CONFIRM_SHIP=YES）。</span></span></code></pre></div><h3 id="_8-6-节点-成功校验" tabindex="-1">8.6 节点：成功校验 <a class="header-anchor" href="#_8-6-节点-成功校验" aria-label="Permalink to &quot;8.6 节点：成功校验&quot;">​</a></h3><div class="language-text vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki shiki-themes catppuccin-latte catppuccin-mocha vp-code" tabindex="0"><code><span class="line"><span>目标：在一次「已授权的测试发货」之后，验证发货是否成功。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>输入：order_id、tracking_number</span></span>
<span class="line"><span></span></span>
<span class="line"><span>检查：</span></span>
<span class="line"><span>1. Toast/成功文案</span></span>
<span class="line"><span>2. 订单状态是否变为已发货</span></span>
<span class="line"><span>3. 待发货列表是否还能搜到该单</span></span>
<span class="line"><span>4. 物流单号是否展示正确</span></span>
<span class="line"><span></span></span>
<span class="line"><span>输出：success true/false、evidence（文案/状态）、建议的自动化断言语句。</span></span></code></pre></div><h3 id="_8-7-节点-把探路结果整理成固化规格" tabindex="-1">8.7 节点：把探路结果整理成固化规格 <a class="header-anchor" href="#_8-7-节点-把探路结果整理成固化规格" aria-label="Permalink to &quot;8.7 节点：把探路结果整理成固化规格&quot;">​</a></h3><div class="language-text vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki shiki-themes catppuccin-latte catppuccin-mocha vp-code" tabindex="0"><code><span class="line"><span>根据我们刚才探路的全部观察，输出一份《拼多多发货 RPA 规格书》，供开发写成 Playwright：</span></span>
<span class="line"><span></span></span>
<span class="line"><span>1. 前置条件（URL、登录态、浏览器配置）</span></span>
<span class="line"><span>2. 函数：search_by_name(name)</span></span>
<span class="line"><span>3. 函数：select_orders(rows, mobile, address)  // 含同址合并 / 异址匹配</span></span>
<span class="line"><span>4. 函数：fill_logistics(company, tracking_no)</span></span>
<span class="line"><span>5. 函数：confirm_and_verify()</span></span>
<span class="line"><span>6. 函数：fail(reason) // 截图+返回码</span></span>
<span class="line"><span>7. 错误码枚举：NO_ORDER / AMBIGUOUS / LOGIN_EXPIRED / UI_CHANGED / VERIFY_FAILED</span></span>
<span class="line"><span>8. 每个函数的选择器表（主选 + 备选）</span></span>
<span class="line"><span>9. 明确禁止自动继续的分支</span></span>
<span class="line"><span></span></span>
<span class="line"><span>要求：只写确定性步骤，不要保留「你可以尝试」这类模糊语句。</span></span></code></pre></div><hr><h2 id="_9-最小落地顺序-建议一周内" tabindex="-1">9. 最小落地顺序（建议一周内） <a class="header-anchor" href="#_9-最小落地顺序-建议一周内" aria-label="Permalink to &quot;9. 最小落地顺序（建议一周内）&quot;">​</a></h2><table tabindex="0"><thead><tr><th>天</th><th>事项</th></tr></thead><tbody><tr><td>Day 1</td><td>建多维表格字段与视图；建飞书应用；拉机器人进群</td></tr><tr><td>Day 2</td><td>先跑通「群表单 → 表格一行」；人工改状态熟悉流程</td></tr><tr><td>Day 3</td><td>本机 Worker：轮询 + 改状态（先不接发货，只打印任务）</td></tr><tr><td>Day 4</td><td>AI 探路（第 8 章提示词）产出规格书</td></tr><tr><td>Day 5</td><td>Playwright 固化快乐路径（单订单发货）</td></tr><tr><td>Day 6</td><td>补同址/异址分支与失败告警</td></tr><tr><td>Day 7</td><td>按第 6 章验收清单走查后小流量正式用</td></tr></tbody></table><hr><h2 id="_10-最终工具清单-保持精简" tabindex="-1">10. 最终工具清单（保持精简） <a class="header-anchor" href="#_10-最终工具清单-保持精简" aria-label="Permalink to &quot;10. 最终工具清单（保持精简）&quot;">​</a></h2><table tabindex="0"><thead><tr><th>层级</th><th>选型</th></tr></thead><tbody><tr><td>入口</td><td>飞书群 + 表单（优先）/ 群文本解析（备选）</td></tr><tr><td>任务板</td><td>飞书多维表格</td></tr><tr><td>调度</td><td>本机轮询 Worker</td></tr><tr><td>探路</td><td>AI + Chrome（MCP / browser-use 等）+ 第 8 章提示词</td></tr><tr><td>量产发货</td><td>Playwright（或等价 RPA）操作拼多多网页</td></tr></tbody></table><hr><h2 id="_11-附录-群内供应商说明-可直接转发" tabindex="-1">11. 附录：群内供应商说明（可直接转发） <a class="header-anchor" href="#_11-附录-群内供应商说明-可直接转发" aria-label="Permalink to &quot;11. 附录：群内供应商说明（可直接转发）&quot;">​</a></h2><p>请按表单提交发货信息；若发文本，请严格使用：</p><div class="language-text vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki shiki-themes catppuccin-latte catppuccin-mocha vp-code" tabindex="0"><code><span class="line"><span>姓名：</span></span>
<span class="line"><span>手机：</span></span>
<span class="line"><span>地址：</span></span>
<span class="line"><span>快递：</span></span>
<span class="line"><span>单号：</span></span></code></pre></div><p>注意：</p><ul><li>一条消息只对应一个运单号。</li><li>手机与地址请与拼多多订单一致，便于自动匹配。</li><li>提交后无需重复发送；失败我们会在群里通知。</li></ul><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes catppuccin-latte catppuccin-mocha vp-code" tabindex="0"><code><span class="line"><span></span></span></code></pre></div>`,85)]))}const b=s(e,[["render",t]]);export{u as __pageData,b as default};
