Vim 自带的补全功能非常强大，主要包括以下几种补全类型（可通过 `<Ctrl-X>` 触发模式后接特定键）：

---

### **1. 基础补全类型**
| 快捷键          | 补全类型               | 描述                          |
|-----------------|-----------------------|-------------------------------|
| `<C-X><C-N>`    | **普通关键字补全**     | 当前缓冲区中的单词             |
| `<C-X><C-]>`    | **标签补全**           | 从 tags 文件补全（需生成 tags）|
| `<C-X><C-F>`    | **文件名补全**         | 文件系统中的文件名             |
| `<C-X><C-D>`    | **宏定义补全**         | 从当前文件和包含文件补全宏定义 |
| `<C-X><C-L>`    | **整行补全**           | 补全整行内容（类似历史记录）   |
| `<C-X><C-O>`    | **Omni 补全**          | 文件类型智能补全（需配置）     |

---

### **2. 特殊补全**
| 快捷键          | 补全类型               | 描述                          |
|-----------------|-----------------------|-------------------------------|
| `<C-X><C-K>`    | **字典补全**           | 从 `dictionary` 选项补全       |
| `<C-X><C-T>`    | **同义词补全**         | 从 `thesaurus` 选项补全        |
| `<C-X><C-I>`    | **包含文件补全**       | 从 `include` 文件补全          |
| `<C-X><C-V>`    | **命令行补全**         | 补全 Vim 命令                  |
| `<C-X><C-U>`    | **用户自定义补全**     | 调用 `completefunc` 自定义函数 |
| `<C-X><C-S>`    | **拼写建议补全**       | 从拼写检查建议补全             |

---

### **3. 补全模式控制**
| 操作            | 功能                     |
|----------------|--------------------------|
| `<C-N>`        | 下一个补全项             |
| `<C-P>`        | 上一个补全项             |
| `<C-Y>`        | 确认选择                 |
| `<C-E>`        | 取消补全                 |
| `<C-H>` / `<BS>` | 删除已输入字符          |

---

### **4. 配置增强**
#### **启用自动补全**
```vim
" 输入至少 2 个字符后触发补全
set completeopt=menuone,noselect
set shortmess+=c
autocmd InsertEnter * set completefunc=
autocmd InsertCharPre * if v:char =~ '\k' | set completefunc=complete | endif
```

#### **Omni 补全示例（文件类型相关）**
```vim
" 启用文件类型检测
filetype plugin on

" C/C++ 补全（需安装 ctags）
autocmd FileType c,cpp set omnifunc=ccomplete#Complete
```

#### **字典补全设置**
```vim
" 指定字典文件路径
set dictionary=/usr/share/dict/words
" 输入时自动触发字典补全
autocmd FileType * setlocal complete+=k
```

---

### **5. 实用技巧**
1. **组合补全**：  
   输入部分内容后，按 `<C-X><C-N>` 可组合多种补全源。

2. **补全预览**：  
   ```vim
   set completeopt+=preview  " 显示补全项的预览窗口
   ```

3. **快速调用**：  
   在插入模式映射快捷键：
   ```vim
   inoremap <C-Space> <C-X><C-O>  " 映射 Omni 补全
   ```

4. **缓冲区补全增强**：  
   ```vim
   set complete=.,w,b,u,t,i  " 补全源顺序：当前缓冲、其他窗口缓冲、其他加载缓冲等
   ```

---

### **6. 局限性**
- **无语义分析**：不如 LSP 智能（需插件如 coc.nvim 增强）
- **配置复杂**：高级补全（如 Omni）需要额外设置
- **依赖 tags**：部分补全需提前生成 tags 文件（如 `ctags -R`）

---

### **7. 查看帮助**
```vim
:help ins-completion       " 补全系统总览
:help 'complete'           " 补全源配置
:help compl-omni           " Omni 补全细节
```

Vim 自带的补全系统适合轻量级使用，对于现代编程语言建议结合 LSP 插件（如 coc.nvim、neovim 内置 LSP）获得更好的体验。
