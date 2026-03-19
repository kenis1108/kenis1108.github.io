### **1. 基础语法结构**
```vim
set statusline=%!表达式   " 动态生成内容（最高优先级）
set statusline=固定格式   " 静态定义
set statusline+=追加内容  " 增量配置
```

---

### **2. 核心占位符分类**

#### **文件信息**
| 占位符       | 说明                          | 示例输出          |
|--------------|-------------------------------|------------------|
| `%f`         | 当前文件名（相对路径）        | `main.py`        |
| `%F`         | 完整文件路径                  | `/home/user/main.py` |
| `%t`         | 文件名（无路径）              | `main.py`        |
| `%m`         | 修改状态（`[+]` 已修改）      | `[+]`            |
| `%r`         | 只读标记（`RO`）              | `RO`             |
| `%y`         | 文件类型                      | `python`         |
| `%{&filetype}` | 详细文件类型（表达式形式）    | `python`         |

#### **位置信息**
| 占位符       | 说明                          | 示例输出     |
|--------------|-------------------------------|-------------|
| `%l`         | 当前行号                      | `42`        |
| `%L`         | 总行数                        | `100`       |
| `%c`         | 当前列号                      | `24`        |
| `%v`         | 虚拟列号（Tab展开后）         | `35`        |
| `%p%%`       | 文件位置百分比                | `42%`       |

#### **编码/格式**
| 占位符               | 说明                | 示例输出    |
|----------------------|---------------------|------------|
| `%{&fileencoding}`   | 文件编码            | `utf-8`    |
| `%{&encoding}`       | 缓冲区编码          | `utf-8`    |
| `%{&fileformat}`     | 行尾格式（DOS/UNIX）| `unix`     |

#### **特殊控制**
| 语法                | 作用                          |
|---------------------|-------------------------------|
| `%=`                | 右对齐分隔符（后面的内容右对齐）|
| `%#HighlightGroup#` | 应用高亮组（如 `%#ErrorMsg#`） |
| `%{vim表达式}`      | 执行任意Vim脚本               |
| `\ `                | 转义空格（显示实际空格）      |
| `%<`                | 过长时截断（左侧）            |

---

### **3. 常用组合示例**
#### **基础状态栏**
```vim
set statusline=%f\ %m%r\ %y\ [%l/%L:%c]\ %p%%
```

#### **分块对齐（左右布局）**
```vim
set statusline=%f\ %m%r%=%y\ [%l:%c]\ %p%%
" 效果：
" main.py [+]                          python [42:24] 50%
```

#### **带颜色和高亮**
```vim
set statusline=%#ErrorMsg#%f%m%r%#Normal#\ %=%y\ %{strftime(\"%H:%M\")}
" 效果：
" main.py[+] (红色)                    python 14:30 (默认色)
```

#### **动态内容**
```vim
set statusline+=%{exists('g:loaded_fugitive')?fugitive#statusline():''}
" 只在fugitive插件加载时显示Git状态
```

---

### **4. 配置建议**
1. **添加到 `init.vim`/`vimrc`**：
   ```vim
   " 启用状态栏
   set laststatus=2  " 始终显示
   set statusline=你的配置
   ```

2. **调试技巧**：
   ```vim
   :echo &statusline  " 查看当前配置
   :set statusline=   " 重置
   ```

3. **性能优化**：
   - 避免频繁执行复杂表达式（如Git状态）
   - 对静态内容优先用占位符而非 `%{...}`

---

### **5. 完整示例模板**
```vim
# 复杂状态栏示例
set statusline=
set statusline+=%#ModeText#%{mode()=='n'?'N':mode()=='i'?'I':mode()=='v'?'V':mode()=='V'?'V':mode()==''?'V':mode()=='R'?'R':mode()=='c'?'C':mode()=='t'?'T':'O'}%#NormalText#
set statusline+=%#GitText#%{fnamemodify(getcwd(),':t')}%#NormalText#
set statusline+=%=
set statusline+=%#InfoText#%l:%c%#NormalText#
set statusline+=%#IndentText#%{&expandtab?'space:'.&shiftwidth:'tab:'.&tabstop}%#NormalText#
set statusline+=%#EncodingText#%{&fileencoding}%#NormalText#
set statusline+=%#FileTypeText#%{&filetype}%#NormalText#
set statusline+=%#LSPText#%{exists('g:lsp_loaded')?'LSP':'NL'}%#NormalText#

# 定义文字颜色高亮组
highlight ModeText guifg=#4EC9B0 gui=bold
highlight GitText guifg=#569CD6 gui=bold
highlight InfoText guifg=#C586C0 gui=bold
highlight IndentText guifg=#FFA500 gui=bold
highlight EncodingText guifg=#DCDCAA gui=bold
highlight FileTypeText guifg=#4FC1FF gui=bold
highlight LSPText guifg=#FF6B6B gui=bold
highlight NormalText guifg=#CCCCCC
```
