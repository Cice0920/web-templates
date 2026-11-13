// 接案時只要改這個檔案：店名、文案、菜單、營業時間、聯絡方式
export default {
  name: '白日 Brunch',
  nameEn: 'Hakujitsu Brunch',
  tagline: ['早午餐', '從十點', '開始。'],
  intro:
    '用在地小農的蛋與蔬菜，現點現做的早午餐。不訂位、不限時，平日來剛剛好，假日請稍微排一下隊。',
  heroImage: '/images/brunch-hero.jpg',
  // tags 可自訂，篩選按鈕會自動產生
  menu: [
    { name: '班尼迪克蛋', desc: '水波蛋、煙燻火腿、自製荷蘭醬、酸種麵包', price: 320, tags: ['招牌'], image: '/images/brunch-hero.jpg' },
    { name: '酪梨鮭魚吐司', desc: '煙燻鮭魚、酪梨泥、溏心蛋、芝麻葉', price: 340, tags: ['招牌'], image: '/images/brunch-plate.jpg' },
    { name: '莓果法式吐司', desc: '布里歐、綜合莓果、馬斯卡彭、楓糖', price: 280, tags: ['甜點'], image: '/images/brunch-pancake.jpg' },
    { name: '烤蔬菜穀物碗', desc: '藜麥、烤南瓜、鷹嘴豆泥、溫泉蛋', price: 300, tags: ['蔬食'], image: '/images/brunch-bowl.jpg' },
    { name: '鬆餅塔', desc: '三層厚鬆餅、發酵奶油、季節水果', price: 260, tags: ['甜點'], image: '/images/brunch-toast.jpg' },
    { name: '蘑菇燉蛋', desc: '番茄燉蛋、綜合菇、酸種麵包', price: 290, tags: ['蔬食'], image: '/images/cafe-interior.jpg' },
  ],
  drinks: [
    { name: '拿鐵', price: 140 },
    { name: '鮮榨柳橙汁', price: 120 },
    { name: '冷泡烏龍', price: 100 },
    { name: '季節果昔', price: 160 },
  ],
  notes: ['不接受訂位，現場候位', '低消一份餐點', '平日 10:00 – 15:00 / 假日 09:00 – 16:00', '最後點餐為打烊前 1 小時'],
  gallery: [
    { name: '班尼迪克蛋', image: '/images/brunch-hero.jpg' },
    { name: '窗邊座位', image: '/images/cafe-interior.jpg' },
    { name: '鬆餅塔', image: '/images/brunch-pancake.jpg' },
    { name: '吧台', image: '/images/cafe-hero.jpg' },
    { name: '拿鐵', image: '/images/cafe-interior.jpg' },
    { name: '戶外', image: '/images/brunch-bowl.jpg' },
  ],
  contact: {
    address: '台中市西區範例街 21 號',
    phone: '04-2345-6789',
    instagram: 'https://instagram.com/',
    mapEmbed: 'https://www.google.com/maps?q=台中市西區&output=embed',
  },
}
