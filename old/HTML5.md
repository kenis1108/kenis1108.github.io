这段文档在结构和语法表达上整体表现良好，内容详实，涵盖了 HTML5 的众多关键知识点，不过在格式规范、内容准确性和代码示例完整性上还有优化空间。以下是修改后的内容，重点改进了 Markdown 格式规范、补充完整代码示例、修正部分表述错误，并增强了内容的可读性和专业性：

# HTML5 发展史

HTML5 草案的前身名为 Web Applications 1.0，于 2004 年由 WHATWG 提出，2007 年被 W3C 接纳，并成立了新的 HTML 工作团队。其重要发展节点如下：

1. 2008 年 1 月 22 日，HTML 5 的第一份正式草案公布。尽管 HTML5 仍在不断完善，但大部分现代浏览器已具备部分支持。
2. 2012 年 12 月 17 日，万维网联盟（W3C）正式宣布 HTML5 规范定稿。W3C 表示：“HTML5 是开放的 Web 网络平台的奠基石。”
3. 2013 年 5 月 6 日，HTML 5.1 正式草案公布。该版本定义了 HTML 的第五次重大更新，致力于提高新元素的互操作性，为 Web 应用开发者提供更多便利。此次草案从 2012 年 12 月 27 日至发布，进行了近百项修改，涉及 HTML 和 XHTML 标签、相关 API、Canvas 等内容，同时对 HTML5 的图像 `img` 标签及 `svg` 也进行了改进，提升了性能。

![6rXQUS.jpg](https://s3.ax1x.com/2021/03/16/6rXQUS.jpg)

由上图可知，目前 HTML5 并非最终统一版本，这也使得其在手机端开发的应用存在一定差异和挑战。

# 浏览器兼容

支持 HTML5 的浏览器众多，包括 Firefox（火狐浏览器）、IE9 及其更高版本、Chrome（谷歌浏览器）、Safari、Opera 等。国内的遨游浏览器（Maxthon），以及基于 IE 或 Chromium（Chrome 的工程版或称实验版）开发的 360 浏览器、搜狗浏览器、QQ 浏览器、猎豹浏览器等同样具备 HTML5 支持能力。

由于 HTML5 尚未形成统一标准，不同浏览器解析效果可能存在差异。尽管当前 HTML5 仍处于推广阶段，但大部分基础功能在各浏览器中的表现趋于一致。

![6rX3CQ.jpg](https://s3.ax1x.com/2021/03/16/6rX3CQ.jpg)
![6rXGgs.jpg](https://s3.ax1x.com/2021/03/16/6rXGgs.jpg)

# 语法

## 内容类型（ContentType）

HTML5 的文件扩展符与内容类型保持不变，依旧为 `.html` 或 `.htm`。

## DOCTYPE 声明

`<!DOCTYPE html>` 声明不区分大小写，该声明简洁明了，用于告知浏览器当前文档使用的是 HTML5 标准。

## 指定字符集编码

通过 `<meta charset="UTF-8">` 来指定网页的字符集编码为 UTF - 8，确保页面能正确显示各种字符。

## 可省略标记的元素

- **不允许写结束标记的元素**：`br`、`col`、`embed`、`hr`、`img`、`input`、`link`、`meta` 等元素属于自闭合元素，无需结束标记。
- **可以省略结束标记的元素**：`li`、`dt`、`dd`、`p`、`option`、`colgroup`、`thead`、`tbody`、`tfoot`、`tr`、`td`、`th` 等元素在符合特定语法规则下，结束标记可省略。
- **可以省略全部标记的元素**：`html`、`head`、`body`、`colgroup`、`tbody` 等元素的开始和结束标记在某些情况下可以省略，但不推荐，完整书写有助于提高代码可读性和可维护性。

## 属性值

HTML5 中属性值既可以使用双引号，也可以使用单引号，例如 `<a href='https://example.com'>链接</a>` 和 `<a href="https://example.com">链接</a>` 都是正确的写法。

# 语义化标签

语义化标签在网页开发中具有重要意义：

1. 当页面加载失败时，语义化标签能呈现清晰的页面结构，便于用户理解页面内容。
2. 有助于搜索引擎优化（SEO），提升网页在搜索引擎中的排名，便于网络爬虫识别和索引。
3. 在项目开发与维护过程中，语义化标签能降低开发难度，提高团队协作效率，节省开发成本。

在 HTML 5 出现之前，开发者常用 `div` 来划分页面章节，但这些 `div` 本身缺乏语义，仅通过 `css` 样式的 `id` 和 `class` 来赋予其意义。而 HTML5 引入了一系列语义化标签，使代码结构更加清晰：

- **`section` 元素**：用于表示页面中的一个独立区块，可用于划分文章章节、页面区域等。
- **`article` 元素**：表示一块与上下文无关的独立内容，如博客文章、新闻报道等。
- **`aside` 元素**：包含在 `article` 之外且与 `article` 内容相关的辅助信息，如侧边栏的相关推荐、广告等。
- **`header` 元素**：表示页面中一个内容区块或整个页面的标题部分，可包含导航、logo 等元素。
- **`footer` 元素**：表示页面中一个内容区块或整个页面的脚注部分，常用于放置版权信息、联系方式等。
- **`nav` 元素**：用于表示页面中的导航链接部分，方便用户在不同页面或页面不同部分之间跳转。
- **`figure` 元素**：表示一段独立的内容，可使用 `figcaption` 元素为其添加标题（通常为第一个或最后一个子元素）。
- **`main` 元素**：表示页面中的主要内容，但 `ie` 浏览器不兼容该元素。
- **`hgroup` 元素**：用于对标题进行分组，使标题结构更加清晰。
- **`mark` 元素**：定义高亮显示的文本，功能类似于 `span`，但语义更明确。
- **`dialog` 元素**：标记定义一个对话框（会话框），类似于微信聊天窗口等。
- **`embed` 元素**：用于定义外部的可交互内容或插件，比如嵌入 `flash` 动画。

![6rX83j.png](https://s3.ax1x.com/2021/03/16/6rX83j.png)

# 多媒体标签

## 基本标签

```html
<!-- video 标签示例 -->
<video src=""></video>
```

`ogg` 文件适用于 Firefox、Opera 以及 Chrome 浏览器。`video` 元素支持三种主要视频格式：`.MP4`、`.WebM` 和 `.ogg`。

```html
<!-- audio 标签示例 -->
<audio src=""></audio>
```

音频文件通常支持 MP3 或 Wav 等类型。

```html
<!-- 包含多个源的 video 标签示例 -->
<video controls autoplay>
  <source src="video/movie.ogg" type="video/ogg" />
  <source src="video/movie.webm" type="video/webm" />
  <embed src="video/oceans.mp4" />
</video>
```

## 常用属性

- **`controls` 属性**：若存在该属性，将向用户显示视频或音频的播放控制控件，如播放、暂停、音量调节按钮等。
- **`autoplay` 属性**：若出现该属性，媒体资源就绪后将自动开始播放，但部分浏览器为提升用户体验，对自动播放进行了限制，需满足一定条件（如静音播放）才会生效。
- **`loop` 属性**：设置媒体资源循环播放，常用于背景音乐、宣传视频等场景。
- **`muted` 属性**：使媒体播放时静音，适用于自动播放但不想打扰用户的情况。
- **`poster` 属性**：规定视频在未开始播放（如加载中）时显示的图像，直到用户点击播放按钮，可展示视频的预览画面。

## `source` 元素

`<source>` 标签为 `<video>` 和 `<audio>` 等媒介元素定义多种媒介资源，浏览器会根据自身对媒体类型或编解码器的支持情况，自动选择合适的资源进行播放。其 `type` 属性值如下：

- **用于视频**：`video/ogg`、`video/mp4`、`video/webm`。
- **用于音频**：`audio/ogg`、`audio/mpeg`。

# 新增 web 应用标签

## `progress` 元素

`progress` 元素用于表示任务的进行进度，如文件下载、安装过程等。`ie9` 及更低版本浏览器不支持该元素，在实际应用中常结合 JavaScript 进行动态控制。

**属性**：

- **`value`**：设置当前已完成的进度值。
- **`max`**：设置任务最终要完成的进度值。

**应用代码**：

```html
<progress id="pr" value="30" max="100"></progress>
```

## `meter` 元素

`meter` 元素用于表示已知范围或分数值内的标量测量，也称为尺度。该元素适用于展示已知最大和最小值的度量情况，`ie` 浏览器不支持。

**常用属性**：

- **`value`**：设置度量的当前值。
- **`min`**：规定范围的最小值。
- **`max`**：规定范围的最大值。

**应用代码**：

```html
<meter id="mt" value="30" min="10" max="100"></meter>
```

## `details` 元素

`details` 元素用于描述文档或文档某个部分的详细内容，目前只有 Chrome 和 Safari 6 等部分浏览器支持。`<summary>` 元素需包含在 `<details>` 内，用于为其定义标题，且通常为 `<details>` 的第一个子元素。

**属性**：

- **`open`**：设置为 `open` 时，详细内容默认可见；不设置该属性时，详细内容默认折叠隐藏。

**应用**：

```html
<details open="open">
  <summary>标题</summary>
  <p>详细内容描述</p>
</details>
```

## `datalist` 元素

`datalist` 元素必须与 `input` 元素的 `list` 属性结合使用，用于为 `input` 提供提示信息。

```html
<input type="url" list="url_list" name="link" />
<datalist id="url_list">
  <option label="W3School" value="http://www.W3School.com.cn"></option>
  <option label="Google" value="http://www.google.com"></option>
  <option label="Microsoft" value="http://www.microsoft.com"></option>
</datalist>
```

# HTML5 表单

HTML 表单一直是 Web 开发的核心技术之一。HTML5 为表单添加了新的功能和更灵活的写法，提升了开发效率。在 XHTML 中，表单元素必须包含在 `<form>` 标签内，而 HTML5 允许表单元素放置在页面任意位置（但为保证功能正常，建议合理布局）。

## 新增表单类型元素

- **`email`**：用于创建邮箱类型的文本框，具备基本的邮箱格式验证功能。
  ```html
  <input name="email1" type="email" required />
  ```
  可添加 `multiple` 属性，支持选择（上传）多个邮箱地址。
- **`url`**：用于输入 URL 地址的文本框，能验证输入内容是否符合 URL 格式。
  ```html
  <input name="url1" type="url" required />
  ```
- **`number`**：用于输入数字的文本框。
  **属性**：
  - **`min`**：允许的最小值。
  - **`max`**：允许的最大值。
  - **`step`**：规定数值的间隔值。
  - **`value`**：默认值。
  ```html
  <input
    name="number1"
    type="number"
    value="20"
    min="10"
    max="100"
    step="5"
    required
  />
  ```
- **`range`**：用于只允许输入一段范围内数值的文本框，常以滑块形式呈现。
  **属性**：
  - **`min`**：最小值。
  - **`max`**：最大值。
  - **`step`**：拖动滑块的步幅间隔值。
  - **`value`**：默认值。
  ```html
  <input name="range1" type="range" value="25" min="0" max="100" step="5" />
  ```
- **`date`**：提供多种选取日期和时间的输入类型。
  **属性**：
  - **`date`**：选取日、月、年。
  - **`month`**：选取月、年。
  - **`week`**：选取周和年。
  - **`time`**：选取时间（小时和分钟）。
  - **`datetime`**：选取时间、日、月、年（UTC 世界标准时间）。
  - **`datetime-local`**：选取时间、日、月、年（本地时间）。
- **`search`**：用于搜索域，在除火狐浏览器外的其他浏览器中，输入框会显示取消搜索的符号，通常显示为常规文本框样式。
  ```html
  <input name="search1" type="search" />
  ```
- **`color`**：用于选取颜色，点击输入框会弹出颜色选择器。
  ```html
  <input name="color1" type="color" required />
  ```
- **`output`**：用于展示不同类型的输出结果，如计算或脚本输出，必须从属于某个表单，可通过 `form` 属性关联到指定表单。
  **应用示例**：
  ```html
  <form oninput="out.value=parseInt(a.value)+parseInt(b.value)">
    <input type="range" id="a" value="50" /> +
    <input type="number" id="b" value="50" /> "="
    <output name="out" for="a b"></output>
  </form>
  ```

需注意，对新表单元素设置样式时，与 `input` 标签设置样式方法类似，但部分局部样式设置可能无法实现，如改变日历的背景色、颜色框的按钮效果等。

## 表单验证

HTML5 增强了表单及表单元素内容的有效性验证功能：

1. **自动验证**
   - **`required`**：可应用于大多数输入元素（隐藏元素和图片元素除外），提交表单时若元素内容为空，则不允许提交，并显示提示文字。
   - **`pattern`**：将属性值设置为正则表达式，提交时会检查元素内容是否符合给定格式。
     ```html
     <input
       pattern="[0-9][A-Z]{3}"
       title="输入内容：一个数与三个大写字母"
       placeholder="输入内容：一个数与三个大写字母"
     />
     ```
     **示例规则**：
     - 用户名长度为 6 - 12 位且仅由字母组成：`pattern="[A - z]{6,12}"`。
     - 密码必须是数字与字母组合：`pattern="[A - Za - z].*[0 - 9]|[0 - 9].*[A - Za - z]"`。
2. **其他属性**
   - **`placeholder`**：用于设置文本框的提示信息，当文本框处于未输入状态时显示，获取焦点或输入内容后消失。
   - **`autofocus`**：添加该属性的文本框、选择框或按钮控件，在页面打开时将自动获得焦点，一个页面建议仅设置一个元素为 `autofocus`，以免造成焦点混乱。
   - **`autocomplete`**：开启输入自动完成功能，取值为 `on` 或 `off`，`on` 状态下可显示指定候补输入的数据列表，需结合 `datalist` 元素与 `list` 属性提供候补数据。
   - **`novalidate`**：添加到 `<form>` 表单中，可取消表单验证，即使表单内的 `input` 元素设置了 `required` 等验证属性，提交时也不会进行验证。在 Safari 和 Internet Explorer 9 及之前的版本中不支持该属性。
   - **`disabled`**：用于禁用表单元素，使其无法获取焦点，也不能进行输入或操作。

# HTML5 与 HTML4 的区别

1. **废除过时标签**：HTML5 废除了一些在 HTML4 中常用但已过时的标签，如 `center`（用于文本居中，可使用 CSS 替代）、`font`（字体设置通过 CSS 实现更好）、`u`（下划线效果推荐用 CSS 处理） 等，使代码更加简洁规范，也推动开发者采用更现代化的开发方式。
2. **新增元素**：引入了更加智能的表单元素（如 `date`、`email`、`url` 等）和更加合理的结构标签（如 `section`、`nav`、`aside` 等），增强了网页的语义化和功能实用性。
3. **新的全局属性**：增加了一些新的全局属性，如 `meta` 相关属性的扩展、`lang
