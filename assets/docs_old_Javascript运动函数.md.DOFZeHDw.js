import{_ as s,c as n,o as p,ae as e}from"./chunks/framework.Dh1jimFm.js";const h=JSON.parse('{"title":"Javascript运动函数","description":"","frontmatter":{"title":"Javascript运动函数","tags":"JavaScript","category":"前端","abbrlink":"3ee5605f","date":"2019-03-18T20:54:55.000Z"},"headers":[],"relativePath":"docs/old/Javascript运动函数.md","filePath":"docs/old/Javascript运动函数.md"}'),l={name:"docs/old/Javascript运动函数.md"};function t(i,a,c,o,r,d){return p(),n("div",null,a[0]||(a[0]=[e(`<h2 id="运动" tabindex="-1">运动 <a class="header-anchor" href="#运动" aria-label="Permalink to &quot;运动&quot;">​</a></h2><ul><li>运动原理：使用计时器，持续改变元素的属性</li><li>运动速度：取决于每次所走距离的多少</li><li>运动停止：判断什么时候到达目标位置，并清除计时器</li></ul><h4 id="匀速运动" tabindex="-1">匀速运动 <a class="header-anchor" href="#匀速运动" aria-label="Permalink to &quot;匀速运动&quot;">​</a></h4><ul><li>运动频率和运动速度保持不变!</li><li>运动频率：计时器时间</li><li>运动速度：每次改变的量</li></ul><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes catppuccin-latte catppuccin-mocha vp-code" tabindex="0"><code><span class="line"><span>function move(dom,target) {</span></span>
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
<span class="line"><span>}</span></span></code></pre></div><h4 id="缓冲运动" tabindex="-1">缓冲运动 <a class="header-anchor" href="#缓冲运动" aria-label="Permalink to &quot;缓冲运动&quot;">​</a></h4><ul><li>运动速度发生变化，由快到慢</li></ul><p>缓冲运动的关键：</p><p>1.频率不变，速度逐渐变慢</p><p>​ var speed = (target - obj.offsetLeft) / 10;</p><p>2.对速度取整，避免数据丢失</p><p>​ speed = speed &gt; 0 ? Math.ceil(speed) : Math.floor(speed);</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes catppuccin-latte catppuccin-mocha vp-code" tabindex="0"><code><span class="line"><span>function move(dom,target) {</span></span>
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
<span class="line"><span>}</span></span></code></pre></div><h4 id="透明度运动" tabindex="-1">透明度运动 <a class="header-anchor" href="#透明度运动" aria-label="Permalink to &quot;透明度运动&quot;">​</a></h4><ul><li>透明度变量：var opa=30;</li><li>IE浏览器：box.style.filter = &#39;alpha(opacity:&#39; + opa + &#39;)&#39;;</li><li>其他浏览器：box.style.opacity = opa/100;</li></ul><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes catppuccin-latte catppuccin-mocha vp-code" tabindex="0"><code><span class="line"><span>function move(dom,target) {</span></span>
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
<span class="line"><span>}</span></span></code></pre></div><p>swiper插件制作轮播图：<a href="https://www.swiper.com.cn/" target="_blank" rel="noreferrer">https://www.swiper.com.cn/</a></p><h3 id="多属性运动" tabindex="-1">多属性运动 <a class="header-anchor" href="#多属性运动" aria-label="Permalink to &quot;多属性运动&quot;">​</a></h3>`,20)]))}const f=s(l,[["render",t]]);export{h as __pageData,f as default};
