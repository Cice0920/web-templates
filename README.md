# 網站模板展示

Nuxt 4（SSG）+ Tailwind CSS 4，三個產業模板：

| 路徑 | 模板 | 內容設定檔 |
|---|---|---|
| `/cafe` | 咖啡廳 / 餐廳 | `app/data/cafe.ts` |
| `/studio` | 工作室 / 美業 | `app/data/studio.ts` |
| `/stay` | 民宿 / 包車旅遊 | `app/data/stay.ts` |

## 本機開發

```bash
npm install
npm run dev        # http://localhost:3000
npm run generate   # 產生靜態檔到 .output/public
```

## 接案改成客戶網站

1. 改 `app/data/*.ts`：店名、文案、價格、聯絡方式
2. 照片放到 `public/images/`，在設定檔填 `heroImage: '/images/xxx.jpg'`
3. 顏色改 `app/assets/css/main.css` 裡的 `@theme` 色票
4. 刪掉頁面裡的 `<TemplateBadge />`

## 部署（Cloudflare Pages）

- Build command：`npm run generate`
- Build output directory：`.output/public`
- 環境變數：`NODE_VERSION` = `22`

## 授權

程式碼與設計都是原創。字型是 Google Fonts 的 Noto Sans/Serif TC（SIL OFL，可以商用）。
