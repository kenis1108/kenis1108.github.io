import fs from 'node:fs';
import path from 'node:path';

const usage = `Usage: node adapt-markdown-to-kk-wechat.mjs <source-md-or-dir> [output-dir]

Examples:
  node adapt-markdown-to-kk-wechat.mjs old wechat/old
  node adapt-markdown-to-kk-wechat.mjs shopify wechat/shopify
  node adapt-markdown-to-kk-wechat.mjs notion/example.md wechat/notion`;

const [sourceArg, outputArg] = process.argv.slice(2);

if (!sourceArg) {
  console.error(usage);
  process.exit(1);
}

const sourceRoot = path.resolve(sourceArg);
const outputDir = path.resolve(outputArg ?? path.join('wechat', path.basename(sourceRoot).replace(/\.md$/i, '')));

const openingBlock = `哈喽大家好👋 我是程序🦍kk。把复杂知识掰成大白话讲明白，是我一直以来的小追求✨；**打好基础才能稳步进阶**，是我始终秉持的学习理念～

> 📢 我搭建了5000人程序猿专属学习交流群，群内会同步前端开发/全栈开发/Web3开发/远程工作等干货资源，关注我并回复 **加群** ，就能加入交流圈啦🚀`;

const endingTemplate = (prompt) => `## 写在最后

好啦，今天的分享就到这里！

💬 互动时间：

${prompt}

最后，感谢你看到这里👏

如果喜欢这篇内容，不妨顺手给小编安排一波👇
**点赞**👍｜**转发**📲｜**推荐**❤️｜**评论**📣

要是想第一时间蹲到新内容推送，记得给我点个**星标**⭐️

更多干货内容正在持续填坑中，咱们下期见👋`;

const frontmatterTitle = /^title:\s*(.+)$/m;
const frontmatterCategory = /^category:\s*(.+)$/m;
const frontmatterTags = /^tags:\s*(.*)$/m;

const titleOverrides = {
  'Docker安装Guacamole+MySQL实现浏览器访问远程桌面等等服务.md':
    'Docker 安装 Guacamole + MySQL，实现浏览器访问远程桌面',
  'Docker搭建Tailscale私有DERP中继服务器.md': 'Docker 搭建 Tailscale 私有 DERP 中继服务器',
  'Docker部署RustDesk中继服务器.md': 'Docker 部署 RustDesk 中继服务器',
  'ES5和ES6.md': 'ES5 和 ES6',
  'Javascript-EVENT.md': 'JavaScript 事件机制',
  'Javascript-RegExp.md': 'JavaScript 正则表达式',
  'Javascript基础.md': 'JavaScript 基础',
  'Javascript运动函数.md': 'JavaScript 运动函数',
  'Javascript面向对象.md': 'JavaScript 面向对象',
  'javascript-questions.md': 'JavaScript 常见面试题',
  'koa2-mongodb搭建后端api项目.md': 'Koa2 + MongoDB 搭建后端 API 项目',
  'manjaro安装后必须做的事情.md': 'Manjaro 安装后必须做的事情',
  'ng-alain的使用.md': 'ng-alain 的使用',
  'OPPOA56电池鼓包换直供通电自动开机模块.md': 'OPPO A56 电池鼓包，改直供通电自动开机模块',
  'python-selenium-web自动化测试.md': 'Python + Selenium Web 自动化测试',
  'vuepress的使用.md': 'VuePress 的使用',
  'Vue-React的组件传值.md': 'Vue / React 的组件传值',
  'Vuex.md': 'Vuex',
  'VS-MDAllInPicGo-Markdown写作的图片上传利器.md': 'VS Code + PicGo：Markdown 写作的图片上传利器',
  'window安装ctags.md': 'Windows 安装 ctags',
  '通过谷歌服务获取网站favicon.md': '通过谷歌服务获取网站 favicon',
  '域名、子域名、IP地址与服务器端口之间的关系以及子域名和反向代理的区别.md':
    '域名、子域名、IP、端口和反向代理的区别',
  'shopify/Shopify Slate.md': 'Shopify Slate 已弃用？迁移到 Shopify CLI',
  'shopify/shopify性能优化最佳实践.md': 'Shopify 性能优化最佳实践',
  'shopify/apps/Dev Dashboard/Dev Dashboard.md': 'Shopify Dev Dashboard',
  'shopify/apps/Locksmith.md': 'Shopify Locksmith 应用',
  'shopify/apps/单点登录/multipass往customer account api迁移.md':
    'Shopify Multipass 迁移到 Customer Account API',
  'shopify/storefronts/Alpine.js.md': 'Shopify 主题开发中的 Alpine.js',
  'shopify/storefronts/App/App.md': 'Shopify App',
  'shopify/storefronts/Dev tools.md': 'Shopify 开发工具',
  'shopify/storefronts/Email Direct Marketing.md': 'Shopify Email Direct Marketing',
  'shopify/storefronts/Liquid中的Truthy and falsy.md': 'Liquid 中的 Truthy and Falsy',
  'shopify/storefronts/Metafields/Metafields.md': 'Shopify Metafields',
  'shopify/storefronts/PageFly.md': 'Shopify PageFly',
  'shopify/storefronts/Swiper.md': 'Shopify 主题 Swiper',
  'shopify/storefronts/Variant.md': 'Shopify Variant',
  'shopify/storefronts/config目录.md': 'Shopify 主题 config 目录',
  'shopify/storefronts/robots.txt/index.md': 'Shopify robots.txt 自定义',
  'shopify/storefronts/多语言.md': 'Shopify 多语言配置',
  'shopify/storefronts/性能问题排查(性能优化).md': 'Shopify 主题性能问题排查',
  'shopify/storefronts/问题对应的代码定位/问题对应的代码定位.md': 'Shopify 主题问题对应的代码定位',
  'shopify/storefronts/调试技巧/调试技巧.md': 'Shopify 主题调试技巧',
  'shopify/storefronts/自定义Checkout/自定义Checkout.md': 'Shopify 自定义 Checkout',
  'shopify/storefronts/自定义PDP/自定义PDP.md': 'Shopify 自定义 PDP',
  'shopify/storefronts/自定义Page.md': 'Shopify 自定义 Page',
};

function stripQuotes(value) {
  return value.trim().replace(/^["']|["']$/g, '').trim();
}

function normalizePathForKey(value) {
  return value.split(path.sep).join('/');
}

function titleOverrideFor(articlePath, relativePath) {
  const normalizedRelative = normalizePathForKey(relativePath);
  const normalizedSourceRelative = normalizePathForKey(path.relative(process.cwd(), articlePath));
  const basename = path.basename(articlePath);

  return titleOverrides[normalizedSourceRelative] ?? titleOverrides[normalizedRelative] ?? titleOverrides[basename];
}

function parseArticle(articlePath, relativePath) {
  const raw = fs.readFileSync(articlePath, 'utf8');
  const match = raw.match(/^---\s*\r?\n([\s\S]*?)\r?\n---\s*\r?\n?/);
  const frontmatter = match?.[1] ?? '';
  const body = match ? raw.slice(match[0].length) : raw;
  const file = path.basename(articlePath);
  const fallbackTitle = file.replace(/\.md$/i, '');
  const title = titleOverrideFor(articlePath, relativePath) ?? stripQuotes(frontmatter.match(frontmatterTitle)?.[1] ?? fallbackTitle);
  const category = stripQuotes(frontmatter.match(frontmatterCategory)?.[1] ?? '');
  const tagLine = stripQuotes(frontmatter.match(frontmatterTags)?.[1] ?? '');

  return { raw, frontmatter, body, file, relativePath, path: articlePath, title, category, tagLine };
}

function normalizeText(value) {
  return value
    .replace(/\r\n/g, '\n')
    .replace(/[ \t]+$/gm, '')
    .replace(/\n{3,}/g, '\n\n')
    .trim();
}

function removeDuplicateTitle(body, title) {
  const lines = body.replace(/\r\n/g, '\n').split('\n');
  const compactTitle = title.replace(/\s+/g, '').toLowerCase();
  while (lines.length && !lines[0].trim()) lines.shift();

  if (lines.length) {
    const firstHeading = lines[0].trim().match(/^(#{1,6})\s+(.+?)\s*$/);
    if (firstHeading) {
      const headingTitle = firstHeading[2].replace(/\s+/g, '').toLowerCase();
      if (headingTitle === compactTitle) {
        lines.shift();
      }
    }
  }

  return lines.join('\n');
}

function extractLeadingImages(body) {
  const lines = body.split('\n');
  const coverLines = [];
  while (lines.length) {
    const line = lines[0].trim();
    if (!line) {
      lines.shift();
      if (coverLines.length) coverLines.push('');
      continue;
    }
    if (/^!\[[^\]]*]\([^)]+\)\s*$/.test(line)) {
      coverLines.push(lines.shift());
      continue;
    }
    break;
  }
  return {
    cover: coverLines.join('\n').trim(),
    body: lines.join('\n').trim(),
  };
}

function normalizeMarkdownHeadings(body) {
  const lines = body.split('\n');
  let inFence = false;

  return lines
    .map((line) => {
      if (/^\s*(```|~~~)/.test(line)) {
        inFence = !inFence;
        return line;
      }
      if (inFence) return line;

      return line.replace(/^(#{1,6})\s+(.+)$/u, (_, hashes, text) => {
        if (hashes.length === 1) return `## ${text}`;
        if (hashes.length === 2) return `## ${text}`;
        return `### ${text}`;
      });
    })
    .join('\n');
}

function removeExistingKkFrames(body) {
  return body
    .replace(/哈喽大家好👋[\s\S]*?关注我并回复\s+\*\*加群\*\*[\s\S]*?>\s*/g, '')
    .replace(/##\s*写在最后[\s\S]*?更多干货内容正在持续填坑中，咱们下期见👋/g, '')
    .trim();
}

function topic(article) {
  const haystack =
    `${article.title} ${article.category} ${article.tagLine} ${article.relativePath} ${article.file}`.toLowerCase();
  if (
    /shopify|liquid|storefront|checkout|pdp|metafields?|multipass|customer account api|slate|pagefly|locksmith|swiper|robots\.txt|alpine\.js|dev dashboard/.test(
      haystack,
    )
  )
    return 'shopify';
  if (/oppo|电池|直供|自动开机/.test(haystack)) return 'hardware';
  if (/selenium/.test(haystack)) return 'selenium';
  if (/koa2|mongodb|api项目/.test(haystack)) return 'node';
  if (/域名|子域名|ip地址|服务器端口|反向代理/.test(haystack)) return 'network';
  if (/docker|rustdesk|tailscale|derp|guacamole/.test(haystack)) return 'docker';
  if (/git|hooks/.test(haystack)) return 'git';
  if (/python|selenium/.test(haystack)) return 'python';
  if (/vue-?react|组件传值/.test(haystack)) return 'vue-react';
  if (/react|redux/.test(haystack)) return 'react';
  if (/vue|vuex|vuepress/.test(haystack)) return 'vue';
  if (/angular|ng-alain/.test(haystack)) return 'angular';
  if (/javascript|event|regexp|es5|es6|防抖|节流|模块化/.test(haystack)) return 'javascript';
  if (/css/.test(haystack)) return 'css';
  if (/html/.test(haystack)) return 'html';
  if (/webpack/.test(haystack)) return 'webpack';
  if (/electron|vscode|markdown|picgo|ctags|manjaro|oppo|favicon|域名|ip地址|服务器端口|反向代理/.test(haystack)) return 'tool';
  return 'general';
}

function readableTitle(title) {
  const override = titleOverrides[title] ?? titleOverrides[`${title}.md`];
  if (override) return override;

  return title
    .replace(/_/g, ' ')
    .replace(/\s+/g, ' ')
    .replace(/^javascript\b/i, 'JavaScript')
    .replace(/^electron\b/i, 'Electron')
    .replace(/^webpack\b/i, 'Webpack')
    .replace(/Docker(安装|搭建|部署)/g, 'Docker$1 ')
    .replace(/RustDesk/g, 'RustDesk ')
    .replace(/Tailscale/g, 'Tailscale ')
    .replace(/DERP/g, 'DERP ')
    .replace(/Guacamole/g, 'Guacamole ')
    .replace(/MySQL/g, 'MySQL ')
    .replace(/Python/g, 'Python ')
    .replace(/JavaScript/g, 'JavaScript ')
    .replace(/React/g, 'React ')
    .replace(/Vuex/g, 'VUEX_TOKEN ')
    .replace(/Vue/g, 'Vue ')
    .replace(/VUEX_TOKEN/g, 'Vuex')
    .replace(/Webpack/g, 'Webpack ')
    .replace(/HTML5/g, 'HTML5 ')
    .replace(/HTML/g, 'HTML ')
    .replace(/CSS3/g, 'CSS3 ')
    .replace(/CSS/g, 'CSS ')
    .replace(/OPPO\s*A56/g, 'OPPO A56 ')
    .replace(/Vue\s+Press/g, 'VuePress')
    .replace(/CSS\s+3/g, 'CSS3')
    .replace(/HTML\s+5/g, 'HTML5')
    .replace(/\s+([，。！？：；])/g, '$1')
    .replace(/([（(])\s+/g, '$1')
    .replace(/\s+([）)])/g, '$1')
    .replace(/\s+/g, ' ')
    .trim();
}

function cleanTitleText(value) {
  return value
    .replace(/^Docker\s+(安装|搭建|部署)\s+/, '')
    .replace(/\s+的/g, ' 的')
    .replace(/\s+太绕/g, ' 太绕')
    .replace(/\s+怎么用/g, ' 怎么用')
    .replace(/\s+/g, ' ')
    .trim();
}

function polishSentence(value) {
  return value
    .replace(/([\u4e00-\u9fa5])的\s+([\u4e00-\u9fa5])/g, '$1的$2')
    .replace(/([\u4e00-\u9fa5])\s+(太绕|怎么用|入门别慌|学不顺)/g, '$1$2')
    .replace(/搞懂\s+([\u4e00-\u9fa5])/g, '搞懂$1')
    .replace(/把\s+([\u4e00-\u9fa5])/g, '把$1')
    .replace(/([\u4e00-\u9fa5])\s+用起来/g, '$1用起来')
    .replace(/Vue\s+Press/g, 'VuePress')
    .replace(/CSS\s+3/g, 'CSS3')
    .replace(/HTML\s+5/g, 'HTML5')
    .replace(/\s+([，。！？：；])/g, '$1')
    .replace(/([（(])\s+/g, '$1')
    .replace(/\s+([）)])/g, '$1')
    .replace(/\s+/g, ' ')
    .trim();
}

function titleOptions(article) {
  const title = readableTitle(article.title);
  const t = topic(article);

  const byTopic = {
    docker: [
      `手把手教你：用 Docker 搭建 ${cleanTitleText(title)}`,
      `${cleanTitleText(title)} 部署太绕？这一篇把端口和配置讲清楚`,
      `Docker 实战笔记：从 Compose 到客户端配置，一次搞懂 ${title}`,
    ],
    git: [
      `Git 进阶实战：${title.replace(/^"|"$/g, '')}`,
      `别再手动重复操作了！这篇讲清楚 ${title.replace(/^"|"$/g, '')}`,
      `手把手教你：用 ${title.replace(/^"|"$/g, '')} 提升开发效率`,
    ],
    python: [
      `Python 入门必会：${title}`,
      `手把手教你：${title}，项目依赖不再打架`,
      `Python 项目环境太乱？一篇搞懂虚拟环境和依赖管理`,
    ],
    selenium: [
      `Python 自动化测试入门：用 Selenium 跑通 Web 页面操作`,
      `手把手教你：${title}，从环境到浏览器驱动`,
      `想做 Web 自动化？先用这篇搞懂 Selenium 基础流程`,
    ],
    node: [
      `Node.js 后端实战：用 Koa2 + MongoDB 搭建 API 项目`,
      `手把手教你：${title}`,
      `Koa2 + MongoDB 项目怎么起步？这篇把主流程讲清楚`,
    ],
    network: [
      `网络基础补课：域名、子域名、IP、端口和反向代理一次讲清楚`,
      `别再混淆了！一篇搞懂域名、端口、服务器和反向代理`,
      `部署网站前必看：域名解析和反向代理到底是什么关系？`,
    ],
    hardware: [
      `OPPO A56 电池鼓包怎么办？一次直供通电自动开机改造记录`,
      `闲置手机当热点翻车后，我把 OPPO A56 改成了直供供电`,
      `手机改直供要注意什么？OPPO A56 自动开机模块折腾笔记`,
    ],
    react: [
      `React 入门到实践：把核心概念、JSX 和组件基础讲清楚`,
      `学 React 卡住了？先用这篇打牢基础`,
      `手把手梳理 React：从 Hello World 到组件开发`,
    ],
    'vue-react': [
      `Vue / React 组件传值怎么选？一篇梳理常见通信方式`,
      `前端组件通信补课：Vue 和 React 的传值思路对比`,
      `手把手梳理 Vue / React 组件传值：父子、兄弟和跨层通信`,
    ],
    vue: [
      `Vue 实战基础：${title}，关键知识点一次梳理`,
      `手把手梳理 ${title}：从概念到项目使用`,
      `${title} 学不顺？先把这些基础点打通`,
    ],
    angular: [
      `Angular 实战基础：${title}，核心用法一次讲清楚`,
      `手把手梳理 ${title}：从概念到项目配置`,
      `${title} 入门别慌，这篇先把主线理顺`,
    ],
    javascript: [
      `JavaScript 基础补课：${title}，核心知识点一次讲清楚`,
      `前端人绕不开：${title} 从概念到代码示例`,
      `手把手梳理 ${title}：面试和实战都能用上`,
    ],
    css: [
      `CSS 基础补课：${title}，核心知识点一次讲清楚`,
      `前端样式不扎实？这篇带你系统梳理 ${title}`,
      `手把手梳理 ${title}：布局、选择器和常用写法`,
    ],
    html: [
      `HTML 基础补课：${title} 的常用标签和语义一次讲清楚`,
      `前端入门第一站：系统梳理 ${title}`,
      `手把手梳理 ${title}：页面结构和常用能力都在这里`,
    ],
    webpack: [
      `Webpack 入门实战：核心概念和常用配置一次讲清楚`,
      `前端工程化别只会跑命令：这篇带你搞懂 Webpack`,
      `手把手梳理 Webpack：从打包原理到配置思路`,
    ],
    tool: [
      `实用工具折腾记：${title}`,
      `手把手教你：${title}，少走一些配置弯路`,
      `${title} 怎么用？这篇把关键步骤讲清楚`,
    ],
    general: [
      `手把手梳理：${title}`,
      `${title} 学习笔记：核心概念和实践步骤一次讲清楚`,
      `从零理解 ${title}：把容易混淆的地方说明白`,
    ],
    shopify: [
      `Shopify 开发实战：${title} 一篇讲清楚`,
      `手把手梳理 Shopify：${title} 的关键用法和避坑点`,
      `做 Shopify 项目别只会改主题，这篇带你搞懂 ${title}`,
    ],
  };

  return byTopic[t].map(polishSentence);
}

function summary(article) {
  const title = readableTitle(article.title);
  const summaries = {
    docker: `这篇文章面向想自建服务的同学，围绕「${title}」整理部署流程、关键配置、端口说明和常见注意点，适合照着一步步落地。`,
    git: `这篇文章适合想提升 Git 工作流效率的同学，围绕「${title}」梳理实用操作、使用场景和注意事项，让提交管理更清晰。`,
    python: `这篇文章适合 Python 初学者和多项目开发者，讲清虚拟环境创建、激活、退出和依赖管理，避免不同项目依赖互相污染。`,
    selenium: `这篇文章适合想入门 Web 自动化测试的同学，围绕 Selenium 的安装、浏览器驱动和基础操作流程，帮你先跑通第一条测试链路。`,
    node: `这篇文章适合想用 Node.js 写后端接口的同学，围绕 Koa2 + MongoDB 项目的搭建流程和目录思路，整理一份可复用的入门笔记。`,
    network: `这篇文章适合准备部署网站或服务的同学，讲清域名、子域名、IP、端口和反向代理的关系，帮你理解访问链路。`,
    hardware: `这篇文章记录 OPPO A56 电池鼓包后的直供改造思路，适合有硬件动手经验的同学参考方案、风险和实操步骤。`,
    react: `这篇文章适合正在入门 React 的前端同学，系统梳理核心概念、JSX、组件和常见写法，帮你建立清晰学习主线。`,
    'vue-react': `这篇文章适合正在学习组件化开发的前端同学，对比 Vue 和 React 的组件传值方式，帮你理清常见通信场景。`,
    vue: `这篇文章适合 Vue 技术栈学习者，围绕「${title}」整理关键概念、使用步骤和项目实践要点，方便复习和实战对照。`,
    angular: `这篇文章适合 Angular 技术栈学习者，围绕「${title}」整理核心概念、配置流程和常见用法，帮助你快速建立实践路径。`,
    javascript: `这篇文章适合前端基础巩固和面试复习，围绕「${title}」整理概念、示例和易混点，帮助你把 JavaScript 基础打扎实。`,
    css: `这篇文章适合前端初学者系统复习 CSS，围绕「${title}」梳理基础语法、常用属性和页面样式实践，适合边看边查。`,
    html: `这篇文章适合前端入门同学复习 HTML，围绕「${title}」整理常用标签、页面结构和基础能力，帮你打好页面开发基础。`,
    webpack: `这篇文章适合想补齐前端工程化基础的同学，围绕 Webpack 的概念、配置和使用场景做系统梳理，方便上手项目打包。`,
    tool: `这篇文章面向喜欢折腾工具和开发环境的同学，围绕「${title}」整理关键步骤、配置点和注意事项，方便按需复用。`,
    general: `这篇文章围绕「${title}」整理核心概念、实践步骤和注意事项，适合需要快速复习或动手验证的技术同学阅读。`,
    shopify: `这篇文章适合 Shopify 主题和应用开发者，围绕「${title}」梳理核心概念、配置路径和实战注意点，方便项目中快速对照。`,
  };
  return summaries[topic(article)];
}

function intro(article) {
  const title = readableTitle(article.title);
  const intros = {
    docker: [
      `**自建服务最怕的不是命令多，而是端口、配置和客户端参数对不上。**`,
      `很多同学折腾 ${title} 时，前面 Docker 容器跑起来了，后面却卡在端口映射、服务地址、客户端配置这些细节上。`,
      `这篇我们就把原来的部署笔记整理成一份更适合照着操作的版本：先看整体思路，再按步骤配置，最后补上容易踩坑的地方。`,
    ],
    git: [
      `**Git 用得顺不顺，很多时候差别就在这些进阶操作里。**`,
      `日常开发里，提交历史、自动化钩子、协作流程这些东西看起来不起眼，但一旦项目变大，就会直接影响代码管理效率。`,
      `这篇文章会把「${title}」整理成一份更清晰的实战笔记，方便大家按场景选择合适的 Git 操作方式。`,
    ],
    python: [
      `**Python 项目依赖一旦混在一起，后面排查问题会非常痛苦。**`,
      `很多同学刚开始写 Python 时，习惯把包都装到全局环境里。项目一多，就容易出现版本冲突、环境不可复现等问题。`,
      `这篇我们用最基础的 venv 流程，把虚拟环境创建、激活、退出和 requirements 管理串起来。`,
    ],
    selenium: [
      `**自动化测试不是一上来就写复杂框架，先让浏览器被代码控制起来。**`,
      `很多同学想学 Selenium，会先卡在环境、浏览器驱动、元素定位这些基础步骤上。`,
      `这篇围绕原始笔记，把 Python + Selenium Web 自动化测试的入门流程整理清楚，适合先跑通最小闭环。`,
    ],
    node: [
      `**写后端 API，最关键的是先把项目骨架和数据链路跑通。**`,
      `Koa2 负责处理请求，MongoDB 负责存数据，两者组合起来很适合做 Node.js 后端入门练习。`,
      `这篇围绕原始笔记，把 Koa2 + MongoDB 搭建后端 API 项目的主流程重新梳理一遍。`,
    ],
    network: [
      `**部署网站时很多问题不是代码问题，而是访问链路没理清。**`,
      `域名、子域名、IP、端口、反向代理这些概念经常一起出现，如果边界不清楚，排查问题会非常绕。`,
      `这篇我们用更直白的方式，把它们之间的关系拆开讲清楚。`,
    ],
    hardware: [
      `**闲置手机长期插电当热点，电池鼓包这类风险真的不能忽视。**`,
      `这篇是一次 OPPO A56 电池鼓包后的直供供电改造记录，重点是方案对比、实操步骤和风险提醒。`,
      `需要先说明：硬件改装有触电、短路、损坏设备的风险，没有焊接和拆机经验的同学不要直接照做。`,
    ],
    react: [
      `**React 学起来不难，难的是先把主线概念理顺。**`,
      `如果一上来就被 JSX、组件、状态、生命周期这些概念堆住，很容易越学越散。`,
      `这篇会按原始学习笔记的顺序，把 React 的基础知识整理成适合复习和入门的公众号版本。`,
    ],
    vue: [
      `**Vue 技术栈看起来上手快，但真正写项目时，基础概念一定要稳。**`,
      `组件通信、状态管理、工程配置这些知识点，单独看都不复杂，串到项目里就很容易混。`,
      `这篇围绕「${title}」做一次结构化整理，适合大家复习时对照查看。`,
    ],
    'vue-react': [
      `**组件传值是前端项目绕不开的基本功。**`,
      `Vue 和 React 都是组件化思路，但数据流、事件传递和跨层通信的写法并不完全一样。`,
      `这篇围绕「${title}」把常见传值方式整理出来，方便大家对比理解。`,
    ],
    angular: [
      `**Angular 体系相对完整，入门时最重要的是先抓住主线。**`,
      `不管是组件、模块、服务还是脚手架配置，单点学习容易碎，放到项目流程里理解会更顺。`,
      `这篇围绕「${title}」把关键内容重新整理一遍，方便大家建立整体认识。`,
    ],
    javascript: [
      `**前端基础不是背概念，而是知道每个知识点在代码里怎么用。**`,
      `JavaScript 的知识点很多：语法、事件、正则、面向对象、异步、模块化、性能优化，每一块都能影响真实项目。`,
      `这篇围绕「${title}」把原始笔记重新梳理成更适合阅读和复习的版本。`,
    ],
    css: [
      `**CSS 写得稳，页面开发才能少踩很多坑。**`,
      `选择器、盒模型、布局、动画这些内容看起来基础，但实际写页面时经常会反复用到。`,
      `这篇围绕「${title}」做一次系统整理，适合前端入门和查漏补缺。`,
    ],
    html: [
      `**HTML 是前端页面的骨架，基础越扎实，后面写组件越顺。**`,
      `很多页面问题不是框架问题，而是结构、语义和标签使用不够清晰。`,
      `这篇围绕「${title}」把常用知识点整理出来，适合入门阶段反复对照。`,
    ],
    webpack: [
      `**Webpack 不只是一个打包命令，它背后是一整套前端工程化思路。**`,
      `如果只会复制配置，项目一报错就容易不知道从哪里查。`,
      `这篇围绕 Webpack 的基础概念和配置流程做整理，帮助大家把工程化主线先搭起来。`,
    ],
    tool: [
      `**工具类文章最重要的价值，就是让你下次遇到同类场景时能直接复用。**`,
      `无论是开发环境、系统配置，还是小工具折腾，真正耗时间的往往都是那些不起眼的细节。`,
      `这篇围绕「${title}」把原始操作笔记整理成更清晰的步骤版，方便大家按需参考。`,
    ],
    general: [
      `**把零散笔记整理成可复用的方法，才是真的学到手。**`,
      `这类知识点如果只看一遍，很容易停留在“好像懂了”的阶段。`,
      `这篇围绕「${title}」把关键概念和操作步骤重新梳理，方便后续复习和实践。`,
    ],
    shopify: [
      `**Shopify 项目最容易卡住的地方，往往不是“会不会写代码”，而是主题、应用和后台配置之间的关系没理顺。**`,
      `很多同学做 Shopify 开发时，会同时碰到 Liquid、主题目录、Checkout、Metafields、应用后台、性能优化这些概念。单独看不难，放到真实项目里就容易散。`,
      `这篇围绕「${title}」把原始笔记整理成更适合阅读和复用的版本，适合做主题开发、应用开发或者接手 Shopify 项目时快速对照。`,
    ],
  };
  return intros[topic(article)].join('\n\n');
}

function mainSectionTitle(article) {
  const t = topic(article);
  if (t === 'docker') return '## 实操步骤整理';
  if (t === 'git') return '## 核心操作整理';
  if (t === 'shopify') return '## Shopify 实战整理';
  if (['javascript', 'css', 'html', 'react', 'vue-react', 'vue', 'angular', 'webpack', 'network'].includes(t))
    return '## 知识点整理';
  if (t === 'python') return '## 使用步骤整理';
  if (['selenium', 'node'].includes(t)) return '## 实操步骤整理';
  if (t === 'hardware') return '## 改造过程整理';
  if (t === 'tool') return '## 操作步骤整理';
  return '## 正文整理';
}

function bridge(article) {
  const bridges = {
    docker: '下面进入具体操作。建议大家先把域名、端口、防火墙和挂载目录确认好，再开始改 compose 文件。',
    git: '下面按原文内容继续展开。建议大家先在测试仓库里验证命令，再放到正式项目里使用。',
    python: '下面我们按创建、激活、退出、依赖管理这条线走一遍。',
    selenium: '下面进入实操流程。建议先确认 Python、浏览器和浏览器驱动版本都能正常配合。',
    node: '下面进入项目搭建流程。建议大家边创建文件边启动服务验证，避免最后才集中排错。',
    network: '下面进入概念整理。建议把一次真实访问拆成“用户输入域名 -> 解析到 IP -> 访问端口 -> 反向代理转发”这条线来看。',
    hardware: '下面进入改造记录。涉及拆机、剪电池保护板和焊接，操作前务必断电，并准备好基本防护和万用表。',
    react: '下面进入正文。你可以把它当作一份 React 基础复习清单，遇到不熟的概念再回到代码里验证。',
    'vue-react': '下面进入正文。建议把父子组件、兄弟组件、跨层组件这几类场景分开看，会更容易理解。',
    vue: '下面进入正文。建议大家边看边对照自己的项目结构，很多知识点放到组件里会更好理解。',
    angular: '下面进入正文。建议先把概念和目录结构对应起来，再去看具体代码。',
    javascript: '下面进入正文。代码示例建议直接敲一遍，很多细节只有运行起来才会真正记住。',
    css: '下面进入正文。CSS 很适合边看边写 demo，遇到不确定的属性可以直接在浏览器里试。',
    html: '下面进入正文。HTML 的重点不是死记标签，而是理解每个标签适合放在哪种内容场景里。',
    webpack: '下面进入正文。建议大家把配置项和打包结果联系起来看，这样更容易理解 Webpack 的工作方式。',
    tool: '下面进入具体内容。工具类配置建议一步一步来，改完一个关键点就验证一次结果。',
    general: '下面进入正文整理。建议大家按自己的使用场景挑重点看，再回到实践里验证。',
    shopify:
      '下面进入 Shopify 相关内容整理。建议大家边看边对照自己的店铺、主题代码和应用后台，很多问题只有放到真实配置里才容易看清楚。',
  };
  return bridges[topic(article)];
}

function bodyPrompt(article) {
  const prompts = {
    docker: '如果你也在自建远程访问或内网穿透相关服务，可以重点对照端口映射和客户端配置这两块，很多问题都出在这里。',
    git: '如果你准备把这些 Git 操作用到团队项目里，建议先约定好提交规范和分支策略，再统一落地。',
    python: '如果你正在维护多个 Python 项目，可以先检查一下每个项目是否都有独立虚拟环境和 requirements.txt。',
    selenium: '如果你第一次跑 Selenium，最容易出问题的通常是驱动路径、浏览器版本和元素定位方式，可以重点留意。',
    node: '如果你准备拿这个结构继续扩展接口，建议先把路由、控制器、数据库连接这些职责拆清楚。',
    network: '如果你正在配置网站访问，可以把自己的域名解析、服务器端口和代理规则画成一条链路，会更容易定位问题。',
    hardware: '> ⚠️ 安全提醒：电池鼓包、拆机、剪保护板和焊接都存在风险。本文是个人折腾记录，不建议没有经验的同学直接上手；不确定正负极时一定要用万用表确认。',
    react: '如果你刚开始学 React，建议先把 JSX 和组件这两块吃透，再继续看状态管理和路由。',
    'vue-react': '如果你正在做组件拆分，可以先判断数据是父传子、子传父，还是需要跨层共享，再选择合适方案。',
    vue: '如果你现在维护的是 Vue 项目，可以对照看一下组件通信和状态管理是否已经形成固定写法。',
    angular: '如果你正在用 Angular 做后台项目，可以对照自己的模块、服务和页面结构看一遍。',
    javascript: '如果你正在准备前端面试，可以把这里的代码示例当作复习清单逐个过一遍。',
    css: '如果你平时写样式容易靠试错，可以把这些基础点重新过一遍，很多布局问题会清晰不少。',
    html: '如果你正在学前端，建议把常用标签按页面结构重新归类记忆，会比单纯背列表更有效。',
    webpack: '如果你项目里已经有 Webpack 配置，可以对照这里的概念看看每个配置项到底在解决什么问题。',
    tool: '如果你也遇到类似配置场景，可以先按本文步骤跑通，再根据自己的环境微调。',
    general: '如果你也在整理自己的技术笔记，可以把本文当作一个结构参考：先讲问题，再讲步骤，最后补注意点。',
    shopify:
      '如果你正在做 Shopify 项目，可以重点留意主题代码、后台配置、应用能力和官方限制之间的边界，很多线上问题都出在这些交界处。',
  };
  return prompts[topic(article)];
}

function endingPrompt(article) {
  const title = readableTitle(article.title);
  const prompts = {
    docker: `你现在自建服务更常用 Docker Compose，还是面板工具？如果你在配置「${title}」时遇到端口、防火墙或客户端连接问题，也可以把现象留言出来。`,
    git: `你平时最常用的 Git 进阶操作是哪一个？如果你想看「提交规范 / 分支模型 / Hooks 自动化」的后续实战，也可以直接留言。`,
    python: `你现在 Python 项目是用 venv、conda，还是 uv / poetry 这类工具？如果遇到依赖冲突，也可以把报错贴出来。`,
    selenium: `你做 Web 自动化时最常卡在哪一步：环境安装、驱动配置，还是元素定位？可以把报错或页面场景留言出来。`,
    node: `你更想看 Koa2 + MongoDB 的哪一块后续：登录鉴权、接口分层，还是部署上线？可以直接留言。`,
    network: `你部署网站时最容易混淆的是域名解析、端口开放，还是反向代理规则？可以把你的访问链路留言出来。`,
    hardware: `你有没有把闲置手机当热点、下载机或小服务器用过？如果你也遇到电池鼓包或供电改造问题，可以留言说说设备型号和方案。`,
    react: `你学 React 时最卡的是 JSX、组件通信，还是状态管理？想看哪一块的实战案例，可以在评论区告诉我。`,
    'vue-react': `你平时做组件通信更喜欢 Vue 的写法还是 React 的写法？如果想看 Pinia、Redux 或 Context 的后续对比，也可以留言。`,
    vue: `你现在项目里更常用 Vue2 还是 Vue3？如果想看组件通信、Vuex/Pinia 或工程化配置的实战拆解，可以留言。`,
    angular: `你用 Angular 时最常踩坑的是模块、路由、表单，还是 ng-alain 配置？可以把你的场景留言给我。`,
    javascript: `你最近复习 JavaScript 最头疼的是原型链、事件循环、正则，还是异步？评论区留一个关键词，后面可以单独展开。`,
    css: `你写 CSS 最容易卡在哪块：布局、响应式、动画，还是兼容性？可以把你的页面场景留言出来。`,
    html: `你学 HTML 时最容易混淆哪些标签？如果想看语义化页面结构实战，也可以在评论区告诉我。`,
    webpack: `你现在项目还在用 Webpack，还是已经切到 Vite？如果想看一次真实项目配置拆解，可以留言。`,
    tool: `你有没有折腾过「${title}」这类工具或环境配置？如果有更省事的方案，也欢迎在评论区补充。`,
    general: `你还想看「${title}」相关的哪一块展开？可以把你的使用场景或具体问题留言给我。`,
    shopify: `你现在做 Shopify 更常遇到的是主题开发、Checkout 定制、应用接入，还是性能优化？如果你在「${title}」上踩过坑，也可以把场景留言出来。`,
  };
  return prompts[topic(article)];
}

function tagSuggestion(article) {
  const clean = (value) =>
    value
      .replace(/^\[|\]$/g, '')
      .replace(/^-\s*/gm, '')
      .replace(/[,[\]]/g, ' ')
      .replace(/\s+/g, ' ')
      .trim();

  const pieces = [clean(article.tagLine), clean(article.category)]
    .filter(Boolean)
    .join(' ')
    .split(/\s+/)
    .filter(Boolean);
  const defaults = {
    docker: ['Docker', '自建服务', '远程访问'],
    git: ['Git', '开发效率', '工程化'],
    python: ['Python', '虚拟环境', '依赖管理'],
    selenium: ['Python', 'Selenium', '自动化测试'],
    node: ['Node.js', 'Koa2', 'MongoDB'],
    network: ['网络基础', '域名解析', '反向代理'],
    hardware: ['手机改装', '直供供电', '硬件折腾'],
    react: ['React', '前端基础'],
    'vue-react': ['Vue', 'React', '组件通信'],
    vue: ['Vue', '前端基础'],
    angular: ['Angular', '前端基础'],
    javascript: ['JavaScript', '前端基础'],
    css: ['CSS', '前端基础'],
    html: ['HTML', '前端基础'],
    webpack: ['Webpack', '前端工程化'],
    tool: ['工具配置', '效率工具'],
    general: ['技术笔记'],
    shopify: ['Shopify', '主题开发', '独立站'],
  };

  return Array.from(new Set([...pieces, ...defaults[topic(article)]]))
    .slice(0, 5)
    .join('、');
}

function adapt(article) {
  const noTitle = removeDuplicateTitle(article.body, article.title);
  const noFrames = removeExistingKkFrames(noTitle);
  const { cover, body } = extractLeadingImages(noFrames);
  const normalizedBody = normalizeMarkdownHeadings(body).replace(/^##\s+前言\s*$/gm, '## 背景说明');
  const sourceBody = normalizeText(normalizedBody);
  const bodyParts = [
    cover,
    openingBlock,
    '## 前言',
    intro(article),
    mainSectionTitle(article),
    bridge(article),
    bodyPrompt(article),
    sourceBody,
    endingTemplate(endingPrompt(article)),
    '## 标签建议',
    tagSuggestion(article),
  ].filter(Boolean);

  return [
    '## 标题备选',
    titleOptions(article).map((item, index) => `${index + 1}. ${item}`).join('\n'),
    '## 摘要',
    summary(article),
    '## 正文',
    bodyParts.join('\n\n'),
  ]
    .join('\n\n')
    .replace(/\n{4,}/g, '\n\n\n')
    .trim();
}

function outputName(file) {
  return file.replace(/\.md$/i, '.wechat.md');
}

function collectMarkdownFiles(targetPath) {
  const stat = fs.statSync(targetPath);

  if (stat.isFile()) {
    if (!targetPath.endsWith('.md') || targetPath.endsWith('.wechat.md')) return [];
    return [
      {
        path: targetPath,
        relativePath: path.basename(targetPath),
      },
    ];
  }

  if (!stat.isDirectory()) {
    return [];
  }

  const entries = fs.readdirSync(targetPath, { withFileTypes: true });
  const files = [];

  for (const entry of entries) {
    const entryPath = path.join(targetPath, entry.name);

    if (entry.isDirectory()) {
      files.push(...collectMarkdownFiles(entryPath));
      continue;
    }

    if (!entry.isFile() || !entry.name.endsWith('.md') || entry.name.endsWith('.wechat.md')) {
      continue;
    }

    files.push({
      path: entryPath,
      relativePath: path.relative(sourceRoot, entryPath),
    });
  }

  return files.sort((a, b) => a.relativePath.localeCompare(b.relativePath, 'zh-Hans-CN'));
}

if (!fs.existsSync(sourceRoot)) {
  console.error(`Source path does not exist: ${sourceRoot}`);
  process.exit(1);
}

fs.mkdirSync(outputDir, { recursive: true });

const files = collectMarkdownFiles(sourceRoot);

for (const file of files) {
  const article = parseArticle(file.path, file.relativePath);
  const adapted = adapt(article);
  const targetPath = path.join(outputDir, outputName(file.relativePath));
  fs.mkdirSync(path.dirname(targetPath), { recursive: true });
  fs.writeFileSync(targetPath, `${adapted}\n`, 'utf8');
}

console.log(`Adapted ${files.length} articles to ${path.relative(process.cwd(), outputDir)}`);
