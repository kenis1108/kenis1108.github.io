---
name: kk-wechat-article-adapter
description: Convert, polish, and package Chinese technical drafts into 程序猿 kk style WeChat public account articles. Use when the user asks to turn any article, notes, tutorial, Notion export, Markdown draft, or rough outline into a WeChat-ready post with fixed kk opening/outro templates, a 前言 section, interactive hooks, title options, summary, structure optimization, and approachable technical copywriting.
---

# KK WeChat Article Adapter

## Overview

Use this skill to transform a user's draft into a complete Chinese WeChat public account article in the recurring style of 程序猿 kk. Preserve the draft's technical accuracy and core steps, but rewrite the article for public-account readability: clear, warm, practical, interactive, and structured for scanning.

## Workflow

1. Read the whole source article before rewriting.
2. If the source is a Notion export of an already-published kk article, extract its reusable style patterns before rewriting: cover image placement, hook sentence, section rhythm, step naming, warning blocks, FAQ, and interaction prompt.
3. Identify the audience, problem, use case, prerequisites, key steps, pitfalls, and conclusion.
4. Keep factual/technical content intact. Do not invent commands, version numbers, compatibility claims, benchmark data, URLs, screenshots, or project claims. Mark unclear facts as needing confirmation instead of filling them in.
5. Remove duplicate or diary-like wording unless it helps the reader understand the process.
6. Rewrite into the required output package:
   - title options
   - summary
   - WeChat-ready article body
   - optional cover suggestion and tags when useful

## Batch Script

For bulk conversion, use the generic script in `scripts/adapt-markdown-to-kk-wechat.mjs`.
It accepts any Markdown file or directory, recursively processes `.md` files, skips existing `.wechat.md` outputs, and preserves the source subdirectory structure under the output directory.

```bash
node scripts/adapt-markdown-to-kk-wechat.mjs <source-md-or-dir> [output-dir]
```

Examples:

```bash
node scripts/adapt-markdown-to-kk-wechat.mjs old wechat/old
node scripts/adapt-markdown-to-kk-wechat.mjs shopify wechat/shopify
node scripts/adapt-markdown-to-kk-wechat.mjs notion/example.md wechat/notion
```

## Output Format

Return the final answer in this order:

```markdown
## 标题备选

1. ...
2. ...
3. ...

## 摘要

...

## 正文

[optional cover image if the source has one]

哈喽大家好👋 我是程序🦍kk。把复杂知识掰成大白话讲明白，是我一直以来的小追求✨；**打好基础才能稳步进阶**，是我始终秉持的学习理念～

> 📢 我搭建了5000人程序猿专属学习交流群
群内会同步前端开发/全栈开发/Web3开发/远程工作等干货资源
关注我并回复 **加群** ，就能加入交流圈啦🚀
>

## 前言

[optional bold one-sentence hook]

...

...

## 写在最后

好啦，今天的分享就到这里！

💬 互动时间：

...

最后，感谢你看到这里👏

如果喜欢这篇内容，不妨顺手给小编安排一波👇
**点赞**👍｜**转发**📲｜**推荐**❤️｜**评论**📣

要是想第一时间蹲到新内容推送，记得给我点个**星标**⭐️

更多干货内容正在持续填坑中，咱们下期见👋
```

## Opening Template

Use this exact opening block unless the user explicitly asks to change it:

```markdown
哈喽大家好👋 我是程序🦍kk。把复杂知识掰成大白话讲明白，是我一直以来的小追求✨；**打好基础才能稳步进阶**，是我始终秉持的学习理念～

> 📢 我搭建了5000人程序猿专属学习交流群
群内会同步前端开发/全栈开发/Web3开发/远程工作等干货资源
关注我并回复 **加群** ，就能加入交流圈啦🚀
>
```

Immediately after the opening block, add `## 前言`.

## Ending Template

Use this exact fixed closing frame:

```markdown
## 写在最后

好啦，今天的分享就到这里！

💬 互动时间：

[insert one or two article-specific questions or reply prompts here]

最后，感谢你看到这里👏

如果喜欢这篇内容，不妨顺手给小编安排一波👇
**点赞**👍｜**转发**📲｜**推荐**❤️｜**评论**📣

要是想第一时间蹲到新内容推送，记得给我点个**星标**⭐️

更多干货内容正在持续填坑中，咱们下期见👋
```

The interaction prompt must be specific to the article. Ask readers to comment on their setup, error message, tool choice, result, or next topic. Avoid generic filler such as only "你怎么看？".

## Title Rules

Generate 3-5 Chinese title options.

Prefer titles that are concrete, benefit-oriented, and technical enough to attract the right readers:

- `不换美版也能满血！手把手教你解锁国行 Mac 的 AI 隐藏模式`
- `macOS 隐藏技巧：3 分钟把你的 Finder 变成全能助手`
- `拒绝手动改 IP！OpenWRT / ImmortalWRT / X-WRT 这样配置旁路由`
- `手把手教你：如何用一个 Portainer 面板管理所有远程 Docker 环境？`
- `Nextcloud AIO 部署太麻烦？Tailscale 一键反向代理才是优雅玩法`

Use the user's existing title style when appropriate:

- problem/benefit: `部署太麻烦？...`
- refusal/contrast: `拒绝手动改 IP！...`
- hidden trick: `macOS 隐藏技巧：...`
- hands-on tutorial: `手把手教你：...`
- outcome promise: `不到 10 分钟，用这套方案...`

Use numbers, platform names, tool names, and outcome words when they genuinely match the article. Lightly punchy titles are acceptable, but do not exaggerate with "全网最强", "封神", "吊打", or impossible guarantees.

## Summary Rules

Write a 60-120 Chinese character summary for WeChat preview. It should answer:

- This article solves what problem?
- Who should read it?
- What will the reader get after reading?

Keep the summary independent; it should make sense even before opening the article.

## Body Structure

Use this article shape unless the source already has a stronger structure:

1. `## 前言`: connect the reader's pain point to the article topic. Keep it short, usually 2-4 paragraphs.
2. Add a bold one-sentence hook before or inside `前言` when it improves momentum, e.g. `**效率翻倍！用 macOS 自带工具，打造属于你的超级右键。**`
3. Main sections: use `##` for major parts and `###` for substeps. Use clear headings such as `前提条件`, `第一步：...`, `第二步：...`, `核心原理`, `配置文件详解`, `常见问题（FAQ）`, `避坑指南（必看）`, `安全小贴士（必读）`, `程序猿 kk 的碎碎念`.
4. For tutorials, prefer numbered "第几步" headings over abstract headings. Keep the step goal visible in the heading.
5. Add a short transition before complex steps so the article reads like guidance, not pasted notes.
6. Add "why this matters" after important commands/settings. Explain consequences in plain language.
7. Add checklists or tables when comparing tools, prerequisites, parameters, Docker compose fields, DHCP options, ports, or troubleshooting paths.
8. Use `> 💡 小贴士：...` for helpful context and `> ⚠️ ...` for irreversible or risky operations.
9. Close with `## 写在最后` using the required ending template.

## Existing KK Article Patterns

Match these patterns when the source article allows it:

- Put the cover image before the fixed opening block if the source has a leading image.
- After the opening group CTA, use `## 前言` by default. If an existing article uses `## 引言`, normalize new outputs to `## 前言` unless the user asks to preserve original headings exactly.
- Start with a reader pain point: "大家在折腾 X 时，最头疼的是什么？" / "有没有遇到过这些尴尬瞬间？" / "很多买了 X 的小伙伴..."
- Use a concise promise after the pain point: "今天就手把手教大家..." / "这篇文章我们用一套懒人方案..."
- For operations-heavy articles, include `前提条件` or `环境准备`.
- Use screenshot placeholders/images near the step they explain. Add a short caption only if the source lacks context.
- Keep "保姆级", "丝滑", "隐藏技巧", "懒人方案", "避坑", "白嫖 SSL 证书" only when they fit the topic and do not distort facts.

## Voice And Style

Write in simplified Chinese.

Use kk's practical technical creator voice:

- friendly opening, but technical body stays clear and efficient
- explain complex concepts in plain language
- use "我们", "大家", "这里", "简单理解" naturally
- keep light emoji accents in intro, transitions, and outro, but do not sprinkle emojis into every paragraph
- prefer short paragraphs; split long paragraphs aggressively for mobile reading
- use bold to highlight key points, warnings, and decisions
- use code blocks for commands/configs and do not rewrite commands into prose
- keep English technical terms when they are standard, optionally add Chinese explanation on first use
- keep the natural kk mix of practical tutorial and light personal commentary; one `程序猿 kk 的碎碎念` section is acceptable near the end when there is a personal recommendation or thanks

Avoid:

- empty motivational language
- clickbait
- over-promising
- changing the author's conclusion into a different opinion
- adding unsupported facts
- turning every sentence into marketing copy

## Polishing Rules

When rewriting source content:

- preserve all commands, config keys, paths, version numbers, IP addresses, ports, and product names exactly unless they are clearly typos
- preserve image markdown from Notion exports; Notion file URLs may expire, but do not replace them unless the user provides stable assets
- make step order explicit
- add missing context for beginners when it can be inferred safely
- turn rough notes into complete paragraphs
- turn long unordered notes into numbered steps or tables
- add "注意" / "建议" / "如果遇到..." blocks for risky operations, compatibility concerns, or common errors
- keep screenshots/placeholders if present and add concise captions when helpful
- if the source has affiliate, group, or call-to-action text, integrate it without making the article feel like an ad
- do not duplicate the fixed opening or ending if the source already contains them; keep one clean copy

## Interaction Design

Add interaction in two places when natural:

1. In the body, after a major decision point or result, add a one-sentence soft prompt such as:
   - `你也可以先对照自己的环境看一下，最容易出问题的通常就是这里。`
   - `如果你现在用的也是 Intel Mac，可以重点看这一段。`
2. In `💬 互动时间：`, add one or two concrete prompts:
   - ask readers to comment their device/router/NAS/Mac model/tool choice
   - ask whether they want a follow-up tutorial
   - ask readers to leave an error message or scene for the next troubleshooting article
   - use binary choice prompts when useful, e.g. "你是代码派还是可视化派？", "你更想看 Mac 玩法还是 NAS 玩法？"

## Final Checks

Before returning the article, verify:

- the fixed opening appears once at the top of `正文`
- `## 前言` appears immediately after the fixed opening block; any bold hook should appear under `## 前言`, not between the opening block and the heading
- `## 写在最后` appears once near the end
- interaction prompt is article-specific
- title options and summary are included
- technical facts from the source are preserved
- paragraphs are mobile-friendly
- existing kk sample articles are treated as style references, not as facts to import into unrelated articles
