# 網站模板展示

Nuxt 4（SSG）+ Tailwind CSS 4，3 種產業 × 3 款風格：

| 產業 | 路徑 | 模板 | 風格 | 內容設定檔 |
|---|---|---|---|---|
| 咖啡廳 / 餐廳 | `/cafe` | 日光咖啡 | 溫暖文青 | `app/data/cafe.ts` |
| | `/brunch` | 白日 Brunch | 極簡明亮 | `app/data/brunch.ts` |
| | `/bistro` | 夜行 餐酒館 | 深色高級 | `app/data/bistro.ts` |
| 工作室 / 美業 | `/studio` | 綻．美甲 | 柔和粉嫩 | `app/data/studio.ts` |
| | `/salon` | MUSE 髮廊 | 黑白雜誌 | `app/data/salon.ts` |
| | `/pilates` | Flow 皮拉提斯 | 自然療癒 | `app/data/pilates.ts` |
| 民宿 / 旅遊 | `/stay` | 海角日和 | 海景清爽 | `app/data/stay.ts` |
| | `/glamping` | 森呼吸 露營 | 山林戶外 | `app/data/glamping.ts` |
| | `/oldhouse` | 町家 老宅旅店 | 復古台味 | `app/data/oldhouse.ts` |

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
