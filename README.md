# Mortal Shell II Guide — 站点

基于 `/Volumes/RTL9210/keywords/game/research/mortal-shell-ii/` 的已验证素材创建的英文游戏攻略站。
Next.js (App Router, 静态导出) · 单 locale (en-US) · 一关键词一内页。

**正式域名**：`https://mortalshell2.online`（Spaceship 购入）· 部署平台：Vercel（项目 `mortal-shell-ii-guide`）

## 页面清单（与 page-plan.json 对齐）

| 路径 | 关键词 | 优先级 |
|---|---|---|
| `/` | mortal shell 2 (guide / wiki) | P1 |
| `/beginner-guide/` | mortal shell 2 beginner guide | P1 |
| `/best-build/` | mortal shell 2 best build | P1 |
| `/walkthrough/` | mortal shell 2 walkthrough | P1 |
| `/shells/` | mortal shell 2 shells | P2 |
| `/weapons/` | mortal shell 2 weapons | P2 |
| `/tips/` | mortal shell 2 tips | P2 |
| `/privacy/` `/terms/` | 法律页（页脚要求） | — |

achievements 页面在规划中为 `later / provisional`（等发售后完整奖杯路线图），**未创建**。

## 内容红线（继承自研究契约）

- 页面正文只使用研究素材中的 `verified` 事实与带归因的观点（best-build 页的社区共识保留 attribution）。
- 每个内页底部有 "Pending launch verification" 区块，公开列出未知项，不编造。
- 页面标注的是真实核查日期（2026-08-17），不靠改日期制造新鲜度。
- 游戏发售日 2026-08-20 属 volatile 事实（evidence `recheck_after: 2026-08-21`），**发售后需复查**首页 hero 与 about 区的日期、以及各内页 pending 清单。

## 命令

```bash
npm install
npm run dev    # 本地开发
npm run build  # 静态导出到 out/
```

## 部署（2026-08-18 已上线 Vercel）

- **平台**：Vercel（CLI 账号 bruce-hmz），项目名 `mortal-shell-ii-nu`，生产地址 https://mortal-shell-ii-nu.vercel.app
- **正式域名**：`mortalshell2.online`（Spaceship 购入，NS 已在 launch1/launch2.spaceship.net）
- **待办（用户在 Spaceship 操作）**：删掉停放 A 记录（34.216.117.25 / 54.149.79.189），添加 A `@` → `76.76.21.21`，CNAME `www` → `cname.vercel-dns.com`；生效后 `vercel alias set <生产URL> mortalshell2.online` + `www.mortalshell2.online`，证书自动签发
- **Next.js 已升级 15.5.4 → 15.5.23**（Vercel 安全门禁要求）
- **GitHub**：本地 git 已初始化并提交；`gh` 的 fine-grained token 无建仓权限，待用户在 github.com 手动建 `mortal-shell-ii-guide` 私有仓（或给 token 加 repo 权限）后 `git remote add origin … && git push -u main`，再在 Vercel 接 GitHub 自动构建
- **上线后**：GSC 添加 `mortalshell2.online` 资源（DNS TXT 验证）→ 提交 sitemap.xml → 按 06 方法论看数据补页

## 命令

```bash
npm install
npm run dev    # 本地开发
npm run build  # 静态导出到 out/
python3 preview-server.py  # 本地预览 http://127.0.0.1:4173（no-store）
```

## 媒体素材（2026-08-18 接入）

全部为**官方宣传素材**，来源可追溯，存于 `public/img/`：

| 文件 | 内容 | 用于 | 来源 |
|---|---|---|---|
| site-4.jpg | 红眼 Shell 战士主视觉 1600x899 | 首页 hero 背景 | mortalshell.com 官方 CDN |
| site-2.jpg | 持剑战士主视觉 1600x899 | 首页画廊、best-build 头图、og:image | mortalshell.com 官方 CDN |
| site-3.jpg / site-5.jpg / site-7.jpg | 官方主视觉 | weapons / walkthrough / tips 头图 | mortalshell.com 官方 CDN |
| shot-1.jpg | 实机截图：Change Equipment 菜单（SHELLS/WEAPONS/SIDEARMS 标签）1920x1080 | shells 头图 | Steam 商店页 |
| yt-qHLY7zFhRvg.jpg | Release Date 预告海报帧 | 首页画廊 | YouTube |

**视频**（YouTube 官方频道，已在 oEmbed 验证归属 Playstack；采用 grainrotguides 同款**点击加载门面**模式，2026-08-18）：
- 首页：Official Gameplay Reveal（`cPSE1yrooT4`）
- beginner-guide：Official Announcement Trailer（`w0SLSLuYMhw`；原 Release Date Trailer `qHLY7zFhRvg` 被分入 YouTube DRM/SABR 实验组，嵌入会报 Error 153，已弃用）
- 门面机制（`components/video-facade.tsx`）：初始只渲染海报 + 播放按钮 + "Watch on YouTube ↗" 外链，**不预载任何 YouTube 内容**；点击后才注入 iframe（带 autoplay）。真实用户手势触发的加载不触发"登录确认你不是机器人"墙，实现免登录观看；点击前不向 YouTube 发请求也规避预取风控。
- 排查记录：qHLY7zFhRvg 六地区（US/HK/JP/SG/TW/DE）可用、无年龄/家庭/嵌入限制、与正常视频元数据一致，唯一差异是被分入 DRM 实验组（yt-dlp 观察到 formats 变 drm protected）。

**Logo / favicon**（2026-08-18 接入）：完整 favicon 包来自 `research/mortal-shell-ii/logo/`（favicon.ico + 16/32/192/512 + apple-touch-icon + site.webmanifest，源图 mortal-shell-2-favicon-512.png 为兜甲红眼徽章设计）。已接入 header 品牌位、favicon 链接和 webmanifest（名称与暗色主题色已修正）。

署名规则：图注标注来源；页脚统一注明 "Screenshots, key art, and trailers are official promotional material courtesy of Cold Symmetry / Playstack"。

**已知限制**：Steam CDN 对当前出口 IP 对 ss_ 截图路径间歇性 404（16 张官方截图只抢到 1 张）。发售后重试 `store_item_assets/steam/apps/2584270/ss_*.1920x1080.jpg` 补齐各内页实机截图——优先 weapons（武器演示）、walkthrough（地图/区域）、tips（战斗特写）。

## 审核记录

- **2026-08-18 · Codex CLI 0.144.5 独立只读审核**：结论「有条件通过」。内容保真度 9/9 页全部有据可依，无编造事实。已修复全部 P0/P1：
  - P0 绝对 canonical（`lib/site.ts` 的 `SITE_URL` + layout `metadataBase`）；
  - P0 WebSite JSON-LD 补 `url`；P0 404 页补 title + noindex；
  - P1 Article JSON-LD 补 `datePublished`/`author`，新增 BreadcrumbList；
  - P1 首页 journey 卡片 "parry windows" 无证据支撑 → 改为 "posture-breaking strikes"（与证据摘录一致）；
  - P1 导航 `aria-current="page"`；P1 VideoGame `url` 指向本站、Steam/官网移入 `sameAs`。
- 有意不修的 P2：`<main>` aria-label（单一 landmark 无必要）、slug 非空断言（硬编码构建期安全）、robots `Host`（Yandex 专属指令，Google 忽略）、React key 索引已顺手修复。
- **研究侧待修正**：`research/.../homepage.json` 的 `home.start.cards[0].description` 含 "parry windows"，但其 evidence 摘录未提及 parry——站点已按证据口径修正，研究文件建议下次复查时同步。
- **研究侧待改进**：`claim-hero-stat-2`（"over 60 dungeons"）的证据摘录未包含 60 数字（数字本身来自 Steam 页另一段文本，事实无误），建议补精确摘录。

## 后续内容任务（发售后）

- 复查 volatile 事实（发售日期、edition 解锁）。
- 用发售版数据补齐各内页 pending 清单项（parry 窗口、shell 数值、武器升级消耗、boss 目录）。
- achievements 页面素材齐备后按 `/achievements/` 路径新增。
