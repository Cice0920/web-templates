// 接案時只要改這個檔案：店名、文案、菜單、營業時間、聯絡方式
export default {
  name: '日光咖啡',
  nameEn: 'Hikari Coffee',
  tagline: '一杯手沖，一段慢下來的午後',
  intro:
    '我們在巷弄裡的老房子烘豆、沖煮。每一支豆子都親自杯測挑選，搭配每日現烤的甜點，希望你在這裡找到屬於自己的安靜時光。',
  heroImage: '', // 例：'/images/cafe/hero.jpg'
  features: [
    { title: '自家烘焙', text: '每週小批次烘豆，確保新鮮風味。' },
    { title: '每日甜點', text: '早上現烤，賣完為止。' },
    { title: '寵物友善', text: '戶外座位歡迎毛孩一起來。' },
  ],
  menu: [
    {
      category: '手沖咖啡',
      items: [
        { name: '衣索比亞 耶加雪菲', desc: '柑橘、茉莉花香、紅茶尾韻', price: 180 },
        { name: '哥倫比亞 慧蘭', desc: '焦糖、堅果、圓潤口感', price: 160 },
        { name: '本日特選', desc: '請洽店員', price: 200 },
      ],
    },
    {
      category: '義式咖啡',
      items: [
        { name: '美式', desc: '冰 / 熱', price: 110 },
        { name: '拿鐵', desc: '可換燕麥奶 +20', price: 140 },
        { name: '黑糖肉桂拿鐵', desc: '季節限定', price: 160 },
      ],
    },
    {
      category: '甜點',
      items: [
        { name: '巴斯克乳酪蛋糕', desc: '', price: 150 },
        { name: '檸檬磅蛋糕', desc: '', price: 120 },
        { name: '肉桂捲', desc: '週末限定', price: 110 },
      ],
    },
  ],
  gallery: ['店內一隅', '手沖吧台', '甜點櫃', '戶外座位'],
  hours: [
    { day: '週一', time: '公休' },
    { day: '週二 – 週五', time: '10:00 – 18:00' },
    { day: '週六 – 週日', time: '09:00 – 19:00' },
  ],
  contact: {
    address: '台北市大安區範例路 123 巷 4 號',
    phone: '02-1234-5678',
    instagram: 'https://instagram.com/',
    line: 'https://line.me/',
    // Google 地圖 → 分享 → 嵌入地圖 → 複製 src
    mapEmbed: 'https://www.google.com/maps?q=台北市大安區&output=embed',
    bookingUrl: 'https://line.me/',
  },
}
