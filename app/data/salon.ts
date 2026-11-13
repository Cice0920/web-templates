// 接案時只要改這個檔案：髮廊名稱、設計師、價目、作品、預約方式
export default {
  name: 'MUSE',
  nameZh: '繆思髮藝',
  tagline: 'Cut. Color. Character.',
  taglineZh: '剪出你本來的樣子',
  intro:
    '我們相信好的髮型不需要每天花時間整理。設計師會先聊你的生活習慣與髮質，再決定剪法與髮色，讓你洗完吹乾就好看。',
  heroImage: '/images/salon-hero.jpg',
  // 價目依設計師等級分欄，tabs 會自動產生
  levels: ['設計師', '總監'],
  services: [
    { name: '洗剪吹', prices: [800, 1200], note: '含洗髮、造型' },
    { name: '單色染', prices: [2200, 2800], note: '短髮價，中長髮 +500 起' },
    { name: '漂髮 / 設計染', prices: [3800, 4800], note: '依長度與次數報價' },
    { name: '燙髮', prices: [2800, 3600], note: '含基礎護髮' },
    { name: '結構式護髮', prices: [1500, 1500], note: '' },
    { name: '頭皮養護', prices: [1200, 1200], note: '60 分鐘' },
  ],
  team: [
    { name: 'Ken', role: '創意總監', level: 1, skill: '短髮、男士剪裁', image: '/images/salon-stylist.jpg' },
    { name: 'Mia', role: '總監', level: 1, skill: '漂髮、霧感髮色', image: '/images/salon-hair-1.jpg' },
    { name: 'Jo', role: '設計師', level: 0, skill: '韓系燙髮', image: '/images/salon-hair-2.jpg' },
    { name: 'Rin', role: '設計師', level: 0, skill: '日系層次剪', image: '/images/salon-stylist.jpg' },
  ],
  lookbook: [
    { name: '霧感奶茶', image: '/images/salon-hair-1.jpg' },
    { name: '俐落短髮', image: '/images/salon-hair-2.jpg' },
    { name: '韓系大波浪', image: '/images/salon-stylist.jpg' },
    { name: '挑染', image: '/images/salon-hair-1.jpg' },
    { name: '層次中長', image: '/images/salon-hair-2.jpg' },
    { name: '男士油頭', image: '/images/salon-stylist.jpg' },
  ],
  contact: {
    address: '台北市大安區範例路 77 號 1F',
    hours: '每日 11:00 – 20:00（週二公休）',
    phone: '02-2700-0000',
    instagram: 'https://instagram.com/',
    booking: 'https://line.me/', // 可換成線上預約系統連結
  },
}
