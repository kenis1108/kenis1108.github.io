import{_ as s,c as n,o as t,ag as e}from"./chunks/framework.DPDPlp3K.js";const h=JSON.parse('{"title":"通用备考提示词模板","description":"","frontmatter":{},"headers":[],"relativePath":"public/skills/exam-sprint-workflow/references/prompt-template.md","filePath":"public/skills/exam-sprint-workflow/references/prompt-template.md"}'),p={name:"public/skills/exam-sprint-workflow/references/prompt-template.md"};function l(i,a,d,r,o,c){return t(),n("div",null,a[0]||(a[0]=[e(`<h1 id="通用备考提示词模板" tabindex="-1">通用备考提示词模板 <a class="header-anchor" href="#通用备考提示词模板" aria-label="Permalink to &quot;通用备考提示词模板&quot;">​</a></h1><p>用户把下面这段复制、填空、连同考试材料一起发给 agent，即可触发完整流程。已安装本 skill 的 agent 会自动走本 skill；未安装的 agent 也能按这段提示词执行。</p><h2 id="模板正文-用户复制这段" tabindex="-1">模板正文（用户复制这段） <a class="header-anchor" href="#模板正文-用户复制这段" aria-label="Permalink to &quot;模板正文（用户复制这段）&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes catppuccin-latte catppuccin-mocha vp-code" tabindex="0"><code><span class="line"><span>【考试冲刺托管】</span></span>
<span class="line"><span></span></span>
<span class="line"><span>考试名称：____（如：深圳大学学士学位英语）</span></span>
<span class="line"><span>考试日期：____年__月__日</span></span>
<span class="line"><span>目标：合格线__分 / 我的目标__分</span></span>
<span class="line"><span>每日可用时间：工作日__小时，休息日/假期__小时</span></span>
<span class="line"><span>附件：历年样卷、考试大纲、考试介绍（手头有什么就传什么）</span></span>
<span class="line"><span>我的基础（可选）：____（如：多年没碰英语 / 四级450分）</span></span>
<span class="line"><span>重点材料要求：</span></span>
<span class="line"><span>1. 先分析附件：题型结构、分值、考试时长；逐年对比有没有题型改版；如果几份样卷内容重复要去重告诉我</span></span>
<span class="line"><span>2. 官方答案没覆盖的部分（如翻译、作文范文）你自己补可以，但要标注清楚不是官方答案</span></span>
<span class="line"><span>3. 计算剩余天数时要考虑节假日和调休，按我上面说的每日可用时间排任务，每天不能排超</span></span>
<span class="line"><span>4. 计划要做成可打卡的网页：阶段划分、每天的任务带材料/时长/验收标准、阶段检测和阈值、计划被事情打断怎么调整、考试当天各题型时间分配</span></span>
<span class="line"><span>5. 把样卷里的题目做成在线刷题卡片：带答案和考点标签，做完自动判分，错题自动进错题本，错题本能一键导出成文字</span></span>
<span class="line"><span>6. 我会定期把导出的错题本发回给你，你分析我的薄弱知识点，给出补弱清单并调整后续计划</span></span>
<span class="line"><span>7. 不要押题、不要承诺分数；拿不准的信息标注&quot;待确认&quot;，不要编造成官方信息</span></span>
<span class="line"><span></span></span>
<span class="line"><span>先给我完整计划，摸底自测之后再按结果帮我调。</span></span></code></pre></div><h2 id="填空说明" tabindex="-1">填空说明 <a class="header-anchor" href="#填空说明" aria-label="Permalink to &quot;填空说明&quot;">​</a></h2><table tabindex="0"><thead><tr><th>字段</th><th>必填</th><th>说明</th></tr></thead><tbody><tr><td>考试名称</td><td>✅</td><td>决定策略风格（语言类重句型模板，资格类重真题+错题）</td></tr><tr><td>考试日期</td><td>✅</td><td>只说&quot;下个月X号&quot;也行，agent 会结合当前日期推算</td></tr><tr><td>合格线/目标分</td><td>建议填</td><td>不知道就写&quot;合格线未知&quot;，agent 会标待确认</td></tr><tr><td>每日可用时间</td><td>✅</td><td>工作日和休息日分开写；写清楚后计划按此排量</td></tr><tr><td>附件材料</td><td>有就传</td><td>历年样卷&gt;考试大纲&gt;考试介绍；没有样卷则只做计划不做题库</td></tr><tr><td>基础描述</td><td>可选</td><td>帮助定摸底难度和保底/冲刺分支</td></tr></tbody></table><h2 id="使用节奏建议" tabindex="-1">使用节奏建议 <a class="header-anchor" href="#使用节奏建议" aria-label="Permalink to &quot;使用节奏建议&quot;">​</a></h2><ol><li>发模板 + 附件 → 拿到打卡刷题网页</li><li>按计划做题、攒错题，每 3-4 天（或攒到 20-30 题）导出错题本发回</li><li>每次阶段检测（模考/整卷二刷）出分后同步，agent 按阈值调计划</li><li>考前几天说&quot;收口&quot;，agent 给最后收口清单和考试策略</li></ol>`,8)]))}const u=s(p,[["render",l]]);export{h as __pageData,u as default};
