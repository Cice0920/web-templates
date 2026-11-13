// 接案時只要改這個檔案：工作室名稱、服務項目、價目、作品、評價、FAQ、預約方式
export default {
  name: 'Bloom Nail Studio',
  nameZh: '綻．美甲工作室',
  tagline: '指尖上的小日常，也值得被好好對待',
  intro:
    '一人預約制工作室，每次只服務一位客人。使用日本進口膠、器具一客一消毒，從手部保養到設計款，陪你慢慢挑出最適合自己的樣子。',
  heroImage: '/images/studio-hero.jpg',
  services: [
    { name: '單色凝膠', duration: '60 分', price: 900, note: '含基礎保養' },
    { name: '漸層 / 貓眼', duration: '90 分', price: 1200, note: '' },
    { name: '設計款', duration: '120 分', price: 1500, note: '依設計複雜度報價' },
    { name: '手部保養', duration: '45 分', price: 600, note: '去角質、修甲、護手' },
    { name: '卸甲', duration: '30 分', price: 300, note: '本店做的免費' },
  ],
  works: [
    { name: '奶茶色漸層', image: '/images/studio-hero.jpg' },
    { name: '法式白邊', image: '/images/studio-nails-2.jpg' },
    { name: '貓眼星空', image: '/images/studio-nails-3.jpg' },
    { name: '手繪花朵', image: '/images/studio-nails-2.jpg' },
    { name: '暈染大理石', image: '/images/studio-hero.jpg' },
    { name: '極簡線條', image: '/images/studio-nails-3.jpg' },
  ],
  steps: [
    { title: '加 LINE', text: '點下方按鈕加入官方帳號' },
    { title: '選時段', text: '傳送想做的款式與日期' },
    { title: '付訂金', text: '確認後支付訂金保留時段' },
    { title: '準時到店', text: '遲到 15 分鐘視同取消' },
  ],
  reviews: [
    { name: '小涵', text: '環境很舒服，老師很細心，做完一個月都沒有翹起來！' },
    { name: 'Ivy', text: '拿 IG 的圖給老師，做出來比圖片還好看，已經回訪第五次。' },
    { name: '佩佩', text: '一對一不用跟別人擠，可以邊做邊聊天很放鬆。' },
  ],
  faq: [
    { q: '可以帶小孩或朋友嗎？', a: '空間較小，陪同者限一位，謝謝體諒。' },
    { q: '指甲很短也能做嗎？', a: '可以，也提供延甲服務，預約時告知即可。' },
    { q: '做完幾天會翹起來怎麼辦？', a: '7 天內非人為因素脫落免費補修。' },
    { q: '可以刷卡嗎？', a: '目前接受現金、LINE Pay、轉帳。' },
  ],
  contact: {
    address: '台北市中山區範例街 56 號 3F（捷運中山站步行 5 分）',
    hours: '週二至週日 11:00 – 21:00（採預約制）',
    instagram: 'https://instagram.com/',
    line: 'https://line.me/',
  },
}
