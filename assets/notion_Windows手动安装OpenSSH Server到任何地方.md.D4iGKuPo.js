import{_ as a,c as n,o as i,ag as e}from"./chunks/framework.DPDPlp3K.js";const k=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"notion/Windows手动安装OpenSSH Server到任何地方.md","filePath":"notion/Windows手动安装OpenSSH Server到任何地方.md"}'),p={name:"notion/Windows手动安装OpenSSH Server到任何地方.md"};function l(t,s,o,h,c,r){return i(),n("div",null,s[0]||(s[0]=[e(`<h2 id="标题备选" tabindex="-1">标题备选 <a class="header-anchor" href="#标题备选" aria-label="Permalink to &quot;标题备选&quot;">​</a></h2><ol><li>手把手梳理：Windows手动安装OpenSSH Server到任何地方</li><li>Windows手动安装OpenSSH Server到任何地方 学习笔记：核心概念和实践步骤一次讲清楚</li><li>从零理解 Windows手动安装OpenSSH Server到任何地方：把容易混淆的地方说明白</li></ol><h2 id="摘要" tabindex="-1">摘要 <a class="header-anchor" href="#摘要" aria-label="Permalink to &quot;摘要&quot;">​</a></h2><p>这篇文章围绕「Windows手动安装OpenSSH Server到任何地方」整理核心概念、实践步骤和注意事项，适合需要快速复习或动手验证的技术同学阅读。</p><h2 id="正文" tabindex="-1">正文 <a class="header-anchor" href="#正文" aria-label="Permalink to &quot;正文&quot;">​</a></h2><p>哈喽大家好👋 我是程序🦍kk。把复杂知识掰成大白话讲明白，是我一直以来的小追求✨；<strong>打好基础才能稳步进阶</strong>，是我始终秉持的学习理念～</p><blockquote><p>📢 我搭建了5000人程序猿专属学习交流群 群内会同步前端开发/全栈开发/Web3开发/远程工作等干货资源 关注我并回复 <strong>加群</strong> ，就能加入交流圈啦🚀</p></blockquote><h2 id="前言" tabindex="-1">前言 <a class="header-anchor" href="#前言" aria-label="Permalink to &quot;前言&quot;">​</a></h2><p><strong>把零散笔记整理成可复用的方法，才是真的学到手。</strong></p><p>这类知识点如果只看一遍，很容易停留在“好像懂了”的阶段。</p><p>这篇围绕「Windows手动安装OpenSSH Server到任何地方」把关键概念和操作步骤重新梳理，方便后续复习和实践。</p><h2 id="正文整理" tabindex="-1">正文整理 <a class="header-anchor" href="#正文整理" aria-label="Permalink to &quot;正文整理&quot;">​</a></h2><p>下面进入正文整理。建议大家按自己的使用场景挑重点看，再回到实践里验证。</p><p>如果你也在整理自己的技术笔记，可以把本文当作一个结构参考：先讲问题，再讲步骤，最后补注意点。</p><h2 id="github-release-下载-zip-包" tabindex="-1">Github Release 下载 zip 包 <a class="header-anchor" href="#github-release-下载-zip-包" aria-label="Permalink to &quot;Github Release 下载 zip 包&quot;">​</a></h2><p><a href="https://github.com/PowerShell/Win32-OpenSSH/releases/download/v9.8.2.0p2-Preview/OpenSSH-Win64.zip" target="_blank" rel="noreferrer">https://github.com/PowerShell/Win32-OpenSSH/releases/download/v9.8.2.0p2-Preview/OpenSSH-Win64.zip</a></p><p>可以使用 Github Proxy 加速下载：<a href="https://github.akams.cn/" target="_blank" rel="noreferrer">https://github.akams.cn/</a></p><h2 id="随意解压到任意路径" tabindex="-1">随意解压到任意路径 <a class="header-anchor" href="#随意解压到任意路径" aria-label="Permalink to &quot;随意解压到任意路径&quot;">​</a></h2><div class="language-powershell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">powershell</span><pre class="shiki shiki-themes catppuccin-latte catppuccin-mocha vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#4C4F69;--shiki-dark:#CDD6F4;">7z x OpenSSH</span><span style="--shiki-light:#179299;--shiki-dark:#94E2D5;">-</span><span style="--shiki-light:#4C4F69;--shiki-dark:#CDD6F4;">Win64.zip</span></span></code></pre></div><ul><li>后续操作不需要管理员权限，普通的 powershell 即可</li><li>不使用自带的 install-sshd.ps1 安装成服务</li><li>可以将自己写的启动脚本设置成开机自动启动也可以实现跟系统服务同样的效果</li></ul><h2 id="生成密钥" tabindex="-1">生成密钥 <a class="header-anchor" href="#生成密钥" aria-label="Permalink to &quot;生成密钥&quot;">​</a></h2><p>需要生成三个类型的密钥（rsa、ecdsa、ed25519）</p><p>密钥保存的路径需要填写到配置文件里的</p><div class="language-powershell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">powershell</span><pre class="shiki shiki-themes catppuccin-latte catppuccin-mocha vp-code" tabindex="0"><code><span class="line"></span>
<span class="line"><span style="--shiki-light:#9CA0B0;--shiki-light-font-style:italic;--shiki-dark:#6C7086;--shiki-dark-font-style:italic;"># cd zip包解压出来的目录 or 将解压出来的目录添加到环境变量</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#4C4F69;--shiki-dark:#CDD6F4;">.\\</span><span style="--shiki-light:#1E66F5;--shiki-light-font-style:italic;--shiki-dark:#89B4FA;--shiki-dark-font-style:italic;">ssh-keygen.exe</span><span style="--shiki-light:#179299;--shiki-dark:#94E2D5;"> -</span><span style="--shiki-light:#4C4F69;--shiki-dark:#CDD6F4;">t rsa </span><span style="--shiki-light:#179299;--shiki-dark:#94E2D5;">-f</span><span style="--shiki-light:#40A02B;--shiki-dark:#A6E3A1;"> &quot;xxx\\ssh_host_rsa_key&quot;</span></span>
<span class="line"><span style="--shiki-light:#4C4F69;--shiki-dark:#CDD6F4;">.\\</span><span style="--shiki-light:#1E66F5;--shiki-light-font-style:italic;--shiki-dark:#89B4FA;--shiki-dark-font-style:italic;">ssh-keygen.exe</span><span style="--shiki-light:#179299;--shiki-dark:#94E2D5;"> -</span><span style="--shiki-light:#4C4F69;--shiki-dark:#CDD6F4;">t ecdsa </span><span style="--shiki-light:#179299;--shiki-dark:#94E2D5;">-f</span><span style="--shiki-light:#40A02B;--shiki-dark:#A6E3A1;"> &quot;xxx\\ssh_host_ecdsa_key&quot;</span></span>
<span class="line"><span style="--shiki-light:#4C4F69;--shiki-dark:#CDD6F4;">.\\</span><span style="--shiki-light:#1E66F5;--shiki-light-font-style:italic;--shiki-dark:#89B4FA;--shiki-dark-font-style:italic;">ssh-keygen.exe</span><span style="--shiki-light:#179299;--shiki-dark:#94E2D5;"> -</span><span style="--shiki-light:#4C4F69;--shiki-dark:#CDD6F4;">t ed25519 </span><span style="--shiki-light:#179299;--shiki-dark:#94E2D5;">-f</span><span style="--shiki-light:#40A02B;--shiki-dark:#A6E3A1;"> &quot;xxx\\ssh_host_ed25519_key&quot;</span></span></code></pre></div><h2 id="编写配置文件" tabindex="-1">编写配置文件 <a class="header-anchor" href="#编写配置文件" aria-label="Permalink to &quot;编写配置文件&quot;">​</a></h2><p>直接复制解压出来的 sshd_config_default 为 sshd_config</p><div class="language-powershell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">powershell</span><pre class="shiki shiki-themes catppuccin-latte catppuccin-mocha vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#4C4F69;--shiki-dark:#CDD6F4;">cp sshd_config_default sshd_config</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#4C4F69;--shiki-dark:#CDD6F4;">nvim sshd_config</span></span></code></pre></div><p>主要是修改 <code>HostKey</code> 位置才能正常启动 sshd，其他配置项根据实际情况自行配置</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes catppuccin-latte catppuccin-mocha vp-code" tabindex="0"><code><span class="line"><span>HostKey xxx/ssh_host_rsa_key</span></span>
<span class="line"><span>HostKey xxx/ssh_host_ecdsa_key</span></span>
<span class="line"><span>HostKey xxx/ssh_host_ed25519_key</span></span></code></pre></div><p>完整配置，我修改了 <code>HostKey</code> 并注释了最后的 <code>Match Group administrators</code></p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes catppuccin-latte catppuccin-mocha vp-code" tabindex="0"><code><span class="line"><span>#Port 22</span></span>
<span class="line"><span>#AddressFamily any</span></span>
<span class="line"><span>#ListenAddress 0.0.0.0</span></span>
<span class="line"><span>#ListenAddress ::</span></span>
<span class="line"><span></span></span>
<span class="line"><span>HostKey xxx/ssh_host_rsa_key</span></span>
<span class="line"><span>HostKey xxx/ssh_host_ecdsa_key</span></span>
<span class="line"><span>HostKey xxx/ssh_host_ed25519_key</span></span>
<span class="line"><span></span></span>
<span class="line"><span># Ciphers and keying</span></span>
<span class="line"><span>#RekeyLimit default none</span></span>
<span class="line"><span></span></span>
<span class="line"><span># Logging</span></span>
<span class="line"><span>#SyslogFacility AUTH</span></span>
<span class="line"><span>#LogLevel INFO</span></span>
<span class="line"><span></span></span>
<span class="line"><span># Authentication:</span></span>
<span class="line"><span></span></span>
<span class="line"><span>#LoginGraceTime 2m</span></span>
<span class="line"><span>#PermitRootLogin prohibit-password</span></span>
<span class="line"><span>#StrictModes yes</span></span>
<span class="line"><span>#MaxAuthTries 6</span></span>
<span class="line"><span>#MaxSessions 10</span></span>
<span class="line"><span></span></span>
<span class="line"><span>PubkeyAuthentication yes</span></span>
<span class="line"><span></span></span>
<span class="line"><span># The default is to check both .ssh/authorized_keys and .ssh/authorized_keys2</span></span>
<span class="line"><span># but this is overridden so installations will only check .ssh/authorized_keys</span></span>
<span class="line"><span>AuthorizedKeysFile      .ssh/authorized_keys</span></span>
<span class="line"><span></span></span>
<span class="line"><span>#AuthorizedPrincipalsFile none</span></span>
<span class="line"><span></span></span>
<span class="line"><span># For this to work you will also need host keys in %programData%/ssh/ssh_known_hosts</span></span>
<span class="line"><span>#HostbasedAuthentication no</span></span>
<span class="line"><span># Change to yes if you don&#39;t trust ~/.ssh/known_hosts for</span></span>
<span class="line"><span># HostbasedAuthentication</span></span>
<span class="line"><span>#IgnoreUserKnownHosts no</span></span>
<span class="line"><span># Don&#39;t read the user&#39;s ~/.rhosts and ~/.shosts files</span></span>
<span class="line"><span>#IgnoreRhosts yes</span></span>
<span class="line"><span></span></span>
<span class="line"><span># To disable tunneled clear text passwords, change to no here!</span></span>
<span class="line"><span>PasswordAuthentication yes</span></span>
<span class="line"><span>#PermitEmptyPasswords no</span></span>
<span class="line"><span></span></span>
<span class="line"><span># GSSAPI options</span></span>
<span class="line"><span>#GSSAPIAuthentication no</span></span>
<span class="line"><span></span></span>
<span class="line"><span>#AllowAgentForwarding yes</span></span>
<span class="line"><span>#AllowTcpForwarding yes</span></span>
<span class="line"><span>#GatewayPorts no</span></span>
<span class="line"><span>#PermitTTY yes</span></span>
<span class="line"><span>#PrintMotd yes</span></span>
<span class="line"><span>#PrintLastLog yes</span></span>
<span class="line"><span>#TCPKeepAlive yes</span></span>
<span class="line"><span>#PermitUserEnvironment no</span></span>
<span class="line"><span>#Compression delayed</span></span>
<span class="line"><span>#ClientAliveInterval 0</span></span>
<span class="line"><span>#ClientAliveCountMax 3</span></span>
<span class="line"><span>#UseDNS no</span></span>
<span class="line"><span>#MaxStartups 10:30:100</span></span>
<span class="line"><span>#PermitTunnel no</span></span>
<span class="line"><span>#ChrootDirectory none</span></span>
<span class="line"><span>#VersionAddendum none</span></span>
<span class="line"><span></span></span>
<span class="line"><span># no default banner path</span></span>
<span class="line"><span>#Banner none</span></span>
<span class="line"><span></span></span>
<span class="line"><span># override default of no subsystems</span></span>
<span class="line"><span>Subsystem       sftp    sftp-server.exe</span></span>
<span class="line"><span></span></span>
<span class="line"><span># Example of overriding settings on a per-user basis</span></span>
<span class="line"><span>#Match User anoncvs</span></span>
<span class="line"><span>#       AllowTcpForwarding no</span></span>
<span class="line"><span>#       PermitTTY no</span></span>
<span class="line"><span>#       ForceCommand cvs server</span></span>
<span class="line"><span></span></span>
<span class="line"><span>#Match Group administrators</span></span>
<span class="line"><span>#       AuthorizedKeysFile __PROGRAMDATA__/ssh/administrators_authorized_keys</span></span></code></pre></div><h2 id="编写启动脚本和终止脚本" tabindex="-1">编写启动脚本和终止脚本 <a class="header-anchor" href="#编写启动脚本和终止脚本" aria-label="Permalink to &quot;编写启动脚本和终止脚本&quot;">​</a></h2><p>在解压出来的目录下编写一个启动脚本，方便启动</p><div class="language-powershell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">powershell</span><pre class="shiki shiki-themes catppuccin-latte catppuccin-mocha vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#4C4F69;--shiki-dark:#CDD6F4;">nvim </span><span style="--shiki-light:#1E66F5;--shiki-light-font-style:italic;--shiki-dark:#89B4FA;--shiki-dark-font-style:italic;">start-sshd.ps1</span></span></code></pre></div><div class="language-powershell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">powershell</span><pre class="shiki shiki-themes catppuccin-latte catppuccin-mocha vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#9CA0B0;--shiki-light-font-style:italic;--shiki-dark:#6C7086;--shiki-dark-font-style:italic;"># start-sshd.ps1</span></span>
<span class="line"><span style="--shiki-light:#1E66F5;--shiki-light-font-style:italic;--shiki-dark:#89B4FA;--shiki-dark-font-style:italic;">Start-Process</span><span style="--shiki-light:#1E66F5;--shiki-light-font-style:italic;--shiki-dark:#89B4FA;--shiki-dark-font-style:italic;"> powershell.exe</span><span style="--shiki-light:#179299;--shiki-dark:#94E2D5;"> -</span><span style="--shiki-light:#4C4F69;--shiki-dark:#CDD6F4;">ArgumentList </span><span style="--shiki-light:#40A02B;--shiki-dark:#A6E3A1;">&quot;-WindowStyle Hidden&quot;</span><span style="--shiki-light:#179299;--shiki-dark:#94E2D5;">,</span><span style="--shiki-light:#40A02B;--shiki-dark:#A6E3A1;"> &quot;-Command&quot;</span><span style="--shiki-light:#179299;--shiki-dark:#94E2D5;">,</span><span style="--shiki-light:#40A02B;--shiki-dark:#A6E3A1;"> &quot;./sshd.exe -f ./sshd_config&quot;</span></span></code></pre></div><div class="language-powershell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">powershell</span><pre class="shiki shiki-themes catppuccin-latte catppuccin-mocha vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#4C4F69;--shiki-dark:#CDD6F4;">nvim </span><span style="--shiki-light:#1E66F5;--shiki-light-font-style:italic;--shiki-dark:#89B4FA;--shiki-dark-font-style:italic;">stop-sshd.ps1</span></span></code></pre></div><div class="language-powershell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">powershell</span><pre class="shiki shiki-themes catppuccin-latte catppuccin-mocha vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#9CA0B0;--shiki-light-font-style:italic;--shiki-dark:#6C7086;--shiki-dark-font-style:italic;"># stop-sshd.ps1</span></span>
<span class="line"><span style="--shiki-light:#1E66F5;--shiki-light-font-style:italic;--shiki-dark:#89B4FA;--shiki-dark-font-style:italic;">Get-Process</span><span style="--shiki-light:#4C4F69;--shiki-dark:#CDD6F4;"> sshd </span><span style="--shiki-light:#179299;--shiki-dark:#94E2D5;">|</span><span style="--shiki-light:#1E66F5;--shiki-light-font-style:italic;--shiki-dark:#89B4FA;--shiki-dark-font-style:italic;"> Stop-Process</span><span style="--shiki-light:#179299;--shiki-dark:#94E2D5;"> -</span><span style="--shiki-light:#4C4F69;--shiki-dark:#CDD6F4;">Force</span></span></code></pre></div><h2 id="写在最后" tabindex="-1">写在最后 <a class="header-anchor" href="#写在最后" aria-label="Permalink to &quot;写在最后&quot;">​</a></h2><p>好啦，今天的分享就到这里！</p><p>💬 互动时间：</p><p>你还想看「Windows手动安装OpenSSH Server到任何地方」相关的哪一块展开？可以把你的使用场景或具体问题留言给我。</p><p>最后，感谢你看到这里👏</p><p>如果喜欢这篇内容，不妨顺手给小编安排一波👇 <strong>点赞</strong>👍｜<strong>转发</strong>📲｜<strong>推荐</strong>❤️｜<strong>评论</strong>📣</p><p>要是想第一时间蹲到新内容推送，记得给我点个<strong>星标</strong>⭐️</p><p>更多干货内容正在持续填坑中，咱们下期见👋</p><h2 id="标签建议" tabindex="-1">标签建议 <a class="header-anchor" href="#标签建议" aria-label="Permalink to &quot;标签建议&quot;">​</a></h2><p>技术笔记</p>`,47)]))}const y=a(p,[["render",l]]);export{k as __pageData,y as default};
