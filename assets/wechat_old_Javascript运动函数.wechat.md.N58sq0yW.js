import{_ as s,c as n,o as p,ag as e}from"./chunks/framework.DPDPlp3K.js";const m=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"wechat/old/Javascript运动函数.wechat.md","filePath":"wechat/old/Javascript运动函数.wechat.md"}'),l={name:"wechat/old/Javascript运动函数.wechat.md"};function t(i,a,c,o,r,d){return p(),n("div",null,a[0]||(a[0]=[e(`<h2 id="标题备选" tabindex="-1">标题备选 <a class="header-anchor" href="#标题备选" aria-label="Permalink to &quot;标题备选&quot;">​</a></h2><ol><li>JavaScript 基础补课：JavaScript 运动函数，核心知识点一次讲清楚</li><li>前端人绕不开：JavaScript 运动函数 从概念到代码示例</li><li>手把手梳理 JavaScript 运动函数：面试和实战都能用上</li></ol><h2 id="摘要" tabindex="-1">摘要 <a class="header-anchor" href="#摘要" aria-label="Permalink to &quot;摘要&quot;">​</a></h2><p>这篇文章适合前端基础巩固和面试复习，围绕「JavaScript 运动函数」整理概念、示例和易混点，帮助你把 JavaScript 基础打扎实。</p><h2 id="正文" tabindex="-1">正文 <a class="header-anchor" href="#正文" aria-label="Permalink to &quot;正文&quot;">​</a></h2><p>哈喽大家好👋 我是程序🦍kk。把复杂知识掰成大白话讲明白，是我一直以来的小追求✨；<strong>打好基础才能稳步进阶</strong>，是我始终秉持的学习理念～</p><blockquote><p>📢 我搭建了5000人程序猿专属学习交流群 群内会同步前端开发/全栈开发/Web3开发/远程工作等干货资源 关注我并回复 <strong>加群</strong> ，就能加入交流圈啦🚀</p></blockquote><h2 id="前言" tabindex="-1">前言 <a class="header-anchor" href="#前言" aria-label="Permalink to &quot;前言&quot;">​</a></h2><p><strong>前端基础不是背概念，而是知道每个知识点在代码里怎么用。</strong></p><p>JavaScript 的知识点很多：语法、事件、正则、面向对象、异步、模块化、性能优化，每一块都能影响真实项目。</p><p>这篇围绕「JavaScript 运动函数」把原始笔记重新梳理成更适合阅读和复习的版本。</p><h2 id="知识点整理" tabindex="-1">知识点整理 <a class="header-anchor" href="#知识点整理" aria-label="Permalink to &quot;知识点整理&quot;">​</a></h2><p>下面进入正文。代码示例建议直接敲一遍，很多细节只有运行起来才会真正记住。</p><p>如果你正在准备前端面试，可以把这里的代码示例当作复习清单逐个过一遍。</p><h2 id="运动" tabindex="-1">运动 <a class="header-anchor" href="#运动" aria-label="Permalink to &quot;运动&quot;">​</a></h2><ul><li>运动原理：使用计时器，持续改变元素的属性</li><li>运动速度：取决于每次所走距离的多少</li><li>运动停止：判断什么时候到达目标位置，并清除计时器</li></ul><h3 id="匀速运动" tabindex="-1">匀速运动 <a class="header-anchor" href="#匀速运动" aria-label="Permalink to &quot;匀速运动&quot;">​</a></h3><ul><li>运动频率和运动速度保持不变!</li><li>运动频率：计时器时间</li><li>运动速度：每次改变的量</li></ul><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes catppuccin-latte catppuccin-mocha vp-code" tabindex="0"><code><span class="line"><span>function move(dom,target) {</span></span>
<span class="line"><span>    clearInterval(timer);</span></span>
<span class="line"><span>    timer = setInterval(function () {</span></span>
<span class="line"><span>        if (target &gt; dom.offsetLeft) {//判断运动方向</span></span>
<span class="line"><span>            var speed = 5;//右走</span></span>
<span class="line"><span>        } else {</span></span>
<span class="line"><span>            var speed = -5;//左走</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>        // 剩余的运动量 &lt; 每次所走的运动量</span></span>
<span class="line"><span>        if (Math.abs(dom.offsetLeft - target) &lt;= Math.abs(speed)) {</span></span>
<span class="line"><span>            clearInterval(timer);//运动结束</span></span>
<span class="line"><span>            dom.style.left = target + &#39;px&#39;;//手动设置终点</span></span>
<span class="line"><span>        } else {</span></span>
<span class="line"><span>            dom.style.left = dom.offsetLeft + speed + &#39;px&#39;;//每次的运动</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>    },20);</span></span>
<span class="line"><span>}</span></span></code></pre></div><h3 id="缓冲运动" tabindex="-1">缓冲运动 <a class="header-anchor" href="#缓冲运动" aria-label="Permalink to &quot;缓冲运动&quot;">​</a></h3><ul><li>运动速度发生变化，由快到慢</li></ul><p>缓冲运动的关键：</p><p>1.频率不变，速度逐渐变慢</p><p>​ var speed = (target - obj.offsetLeft) / 10;</p><p>2.对速度取整，避免数据丢失</p><p>​ speed = speed &gt; 0 ? Math.ceil(speed) : Math.floor(speed);</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes catppuccin-latte catppuccin-mocha vp-code" tabindex="0"><code><span class="line"><span>function move(dom,target) {</span></span>
<span class="line"><span>    clearInterval(timer);</span></span>
<span class="line"><span>    timer = setInterval(function () {</span></span>
<span class="line"><span>        var speed = (target - dom.offsetLeft) / 10;//持续变化的速度</span></span>
<span class="line"><span>        speed = speed &gt; 0 ? Math.ceil(speed) : Math.floor(speed);//对速度取整，避免数据丢失</span></span>
<span class="line"><span>        // 剩余的运动量 &lt; 每次所走的运动量</span></span>
<span class="line"><span>        if (Math.abs(dom.offsetLeft - target) &lt;= Math.abs(speed)) {</span></span>
<span class="line"><span>            clearInterval(timer);//运动结束</span></span>
<span class="line"><span>            dom.style.left = target + &#39;px&#39;;//手动设置终点</span></span>
<span class="line"><span>        } else {</span></span>
<span class="line"><span>            dom.style.left = dom.offsetLeft + speed + &#39;px&#39;;//每次的运动</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>    },20);</span></span>
<span class="line"><span>}</span></span></code></pre></div><h3 id="透明度运动" tabindex="-1">透明度运动 <a class="header-anchor" href="#透明度运动" aria-label="Permalink to &quot;透明度运动&quot;">​</a></h3><ul><li>透明度变量：var opa=30;</li><li>IE浏览器：box.style.filter = &#39;alpha(opacity:&#39; + opa + &#39;)&#39;;</li><li>其他浏览器：box.style.opacity = opa/100;</li></ul><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes catppuccin-latte catppuccin-mocha vp-code" tabindex="0"><code><span class="line"><span>function move(dom,target) {</span></span>
<span class="line"><span>    clearInterval(timer);</span></span>
<span class="line"><span>    timer = setInterval(function () {</span></span>
<span class="line"><span>        if (target &gt; opa) {//运动方向</span></span>
<span class="line"><span>            var speed = 2;//透明度增加</span></span>
<span class="line"><span>        } else {</span></span>
<span class="line"><span>            var speed = -2;//透明度减少</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>        // 剩余的运动量 &lt; 每次所走的运动量</span></span>
<span class="line"><span>        if (Math.abs(opa - target) &lt;= Math.abs(speed)) {</span></span>
<span class="line"><span>            clearInterval(timer);//运动结束</span></span>
<span class="line"><span>            dom.style.opacity = target / 100;//手动设置终点</span></span>
<span class="line"><span>        } else {</span></span>
<span class="line"><span>            opa += speed;</span></span>
<span class="line"><span>            dom.style.opacity = opa / 100;//每次的运动</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>    },30);</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>多元素进行相同的运动，属性都不能共用！</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes catppuccin-latte catppuccin-mocha vp-code" tabindex="0"><code><span class="line"><span>var box = document.querySelectorAll(&#39;.box&#39;);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>for(var i = 0; i &lt; box.length; i++){</span></span>
<span class="line"><span>    box[i].opa = 30;</span></span>
<span class="line"><span>    box[i].timer = null;</span></span>
<span class="line"><span>    box[i].onmouseover = function () {</span></span>
<span class="line"><span>        move(this,100);</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>    box[i].onmouseout = function () {</span></span>
<span class="line"><span>        move(this,30);</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>function move(dom,target) {</span></span>
<span class="line"><span>    clearInterval(dom.timer);</span></span>
<span class="line"><span>    dom.timer = setInterval(function () {</span></span>
<span class="line"><span>        if (target &gt; dom.opa) {//运动方向</span></span>
<span class="line"><span>            var speed = 2;//透明度增加</span></span>
<span class="line"><span>        } else {</span></span>
<span class="line"><span>            var speed = -2;//透明度减少</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>        // 剩余的运动量 &lt; 每次所走的运动量</span></span>
<span class="line"><span>        if (Math.abs(dom.opa - target) &lt;= Math.abs(speed)) {</span></span>
<span class="line"><span>            clearInterval(dom.timer);//运动结束</span></span>
<span class="line"><span>            dom.style.opacity = target / 100;//手动设置终点</span></span>
<span class="line"><span>        } else {</span></span>
<span class="line"><span>            dom.opa += speed;</span></span>
<span class="line"><span>            dom.style.opacity = dom.opa / 100;//每次的运动</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>    },30);</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>swiper插件制作轮播图：<a href="https://www.swiper.com.cn/" target="_blank" rel="noreferrer">https://www.swiper.com.cn/</a></p><h3 id="多属性运动" tabindex="-1">多属性运动 <a class="header-anchor" href="#多属性运动" aria-label="Permalink to &quot;多属性运动&quot;">​</a></h3><h2 id="写在最后" tabindex="-1">写在最后 <a class="header-anchor" href="#写在最后" aria-label="Permalink to &quot;写在最后&quot;">​</a></h2><p>好啦，今天的分享就到这里！</p><p>💬 互动时间：</p><p>你最近复习 JavaScript 最头疼的是原型链、事件循环、正则，还是异步？评论区留一个关键词，后面可以单独展开。</p><p>最后，感谢你看到这里👏</p><p>如果喜欢这篇内容，不妨顺手给小编安排一波👇 <strong>点赞</strong>👍｜<strong>转发</strong>📲｜<strong>推荐</strong>❤️｜<strong>评论</strong>📣</p><p>要是想第一时间蹲到新内容推送，记得给我点个<strong>星标</strong>⭐️</p><p>更多干货内容正在持续填坑中，咱们下期见👋</p><h2 id="标签建议" tabindex="-1">标签建议 <a class="header-anchor" href="#标签建议" aria-label="Permalink to &quot;标签建议&quot;">​</a></h2><p>JavaScript、前端、前端基础</p>`,44)]))}const u=s(l,[["render",t]]);export{m as __pageData,u as default};
