> 首次进入仓库时间：2025-06-19 11:59:07+08:00

## 标题备选

1. 手把手梳理：transform、transition、animation的区别
2. transform、transition、animation的区别 学习笔记：核心概念和实践步骤一次讲清楚
3. 从零理解 transform、transition、animation的区别：把容易混淆的地方说明白

## 摘要

这篇文章围绕「transform、transition、animation的区别」整理核心概念、实践步骤和注意事项，适合需要快速复习或动手验证的技术同学阅读。

## 正文

哈喽大家好👋 我是程序🦍kk。把复杂知识掰成大白话讲明白，是我一直以来的小追求✨；**打好基础才能稳步进阶**，是我始终秉持的学习理念～

> 📢 我搭建了5000人程序猿专属学习交流群，群内会同步前端开发/全栈开发/Web3开发/远程工作等干货资源，关注我并回复 **加群** ，就能加入交流圈啦🚀

## 前言

**把零散笔记整理成可复用的方法，才是真的学到手。**

这类知识点如果只看一遍，很容易停留在“好像懂了”的阶段。

这篇围绕「transform、transition、animation的区别」把关键概念和操作步骤重新梳理，方便后续复习和实践。

## 正文整理

下面进入正文整理。建议大家按自己的使用场景挑重点看，再回到实践里验证。

如果你也在整理自己的技术笔记，可以把本文当作一个结构参考：先讲问题，再讲步骤，最后补注意点。

在前端开发中，`transition`、`transform` 和 `animation` 是用于控制元素视觉变化的三个核心属性，它们的功能和应用场景有明显区别：

### **1. `transform` - 改变元素的形状和位置**
**核心作用**：对元素进行 **几何变换**（如平移、旋转、缩放、倾斜），但 **不触发重排（reflow）**，性能较高。

### **特点**
- **静态属性**：只描述元素的最终状态，不涉及变化过程。
- **立即生效**：一旦设置，元素立即呈现变换后的效果。
- **需配合其他属性触发动态效果**（如 `transition` 或 `animation`）。

### **常见值**
```css
transform: translate(100px, 50px);  /* 平移 */
transform: rotate(45deg);           /* 旋转 */
transform: scale(1.5);              /* 缩放 */
transform: skew(20deg, 10deg);      /* 倾斜 */
transform: matrix(1, 0, 0, 1, 100, 0); /* 矩阵变换 */
```

### **示例**
```css
.box {
  transform: rotate(45deg); /* 直接旋转45度 */
}
```

### **2. `transition` - 平滑过渡两个状态**
**核心作用**：在 **两个静态状态之间创建平滑动画**，只需定义起始和结束值，过渡过程由浏览器自动计算。

### **特点**
- **被动触发**：需要通过事件（如 `:hover`、`:focus`）或 JavaScript 动态修改 CSS 属性来触发。
- **单向过渡**：只在属性值变化时生效（如从 `width: 100px` 到 `width: 200px`）。
- **简单易用**：适合简单的状态切换（如悬停效果、展开/收起）。

### **关键属性**
```css
transition: property duration timing-function delay;
```
- `property`：要过渡的属性（如 `width`、`opacity`），或 `all`。
- `duration`：过渡时间（如 `0.5s`）。
- `timing-function`：过渡速度曲线（如 `ease`、`linear`）。
- `delay`：延迟开始时间（如 `0.2s`）。

### **示例**
```css
.box {
  width: 100px;
  transition: width 0.5s ease;
}
.box:hover {
  width: 200px; /* 鼠标悬停时宽度平滑变化 */
}
```

### **3. `animation` - 自定义复杂动画序列**
**核心作用**：通过 `@keyframes` 定义 **关键帧**，实现 **复杂、多阶段的动画效果**，无需外部触发即可自动播放。

### **特点**
- **主动播放**：定义后自动循环或按指定次数播放。
- **多阶段控制**：可以定义多个关键帧（如 `0%`、`50%`、`100%`）。
- **高度自定义**：支持循环、反向播放、暂停等高级控制。

### **关键属性**
```css
animation: name duration timing-function delay iteration-count direction fill-mode play-state;
```
- `name`：`@keyframes` 定义的动画名称。
- `duration`：动画周期（如 `2s`）。
- `iteration-count`：循环次数（如 `infinite`）。
- `direction`：播放方向（如 `alternate` 交替播放）。

### **示例**
```css
@keyframes fadeIn {
  0% { opacity: 0; }
  100% { opacity: 1; }
}

.box {
  animation: fadeIn 2s infinite; /* 无限循环淡入动画 */
}
```

### **对比总结**
| **特性**               | **transform**               | **transition**              | **animation**               |
|------------------------|-----------------------------|-----------------------------|-----------------------------|
| **核心功能**           | 改变元素形状/位置           | 平滑过渡两个状态            | 自定义多阶段动画序列        |
| **是否主动播放**       | 否（静态属性）              | 否（需触发）                | 是（自动播放或按设定）      |
| **动画阶段**           | 单一状态                    | 两个状态（起始→结束）       | 多个关键帧（0%~100%）       |
| **触发方式**           | 直接设置                    | 事件或 JS 修改属性          | 自动播放或 JS 控制          |
| **循环支持**           | 不支持                      | 不支持                      | 支持（`iteration-count`）   |
| **典型场景**           | 静态变形、布局调整          | 悬停效果、状态切换          | 加载动画、复杂交互效果      |

### **性能对比**
- **transform & opacity**：仅触发 **合成层（composite）**，性能最优。
- **transition**：大多数情况下性能良好，但如果过渡属性涉及重排（如 `width`、`margin`），则性能较差。
- **animation**：合理使用（如仅修改 `transform` 和 `opacity`）时性能接近 `transition`，但复杂动画可能增加 CPU 负担。

### **组合使用示例**
```css
.box {
  transform: translateX(0); /* 初始位置 */
  transition: transform 1s ease; /* 定义过渡效果 */
}

.box:hover {
  transform: translateX(100px); /* 悬停时触发过渡 */
}

@keyframes bounce {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-20px); }
}

.ball {
  animation: bounce 1s infinite; /* 无限循环弹跳动画 */
}
```

### **总结**
- **transform**：用于静态或动态的形状/位置调整。
- **transition**：适合简单的状态切换动画（如按钮悬停、菜单展开）。
- **animation**：适合复杂、重复的动画效果（如加载动画、角色动作）。

合理选择三者的组合，可以在保证性能的同时实现丰富的视觉效果。

## 写在最后

好啦，今天的分享就到这里！

💬 互动时间：

你还想看「transform、transition、animation的区别」相关的哪一块展开？可以把你的使用场景或具体问题留言给我。

最后，感谢你看到这里👏

如果喜欢这篇内容，不妨顺手给小编安排一波👇
**点赞**👍｜**转发**📲｜**推荐**❤️｜**评论**📣

要是想第一时间蹲到新内容推送，记得给我点个**星标**⭐️

更多干货内容正在持续填坑中，咱们下期见👋

## 标签建议

技术笔记
