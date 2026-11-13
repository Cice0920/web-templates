// 接案時只要改這個檔案：旅店名稱、房型、老屋故事、周邊美食、詢問方式
export default {
  name: '町家',
  nameEn: 'Machiya Inn Tainan',
  tagline: '住進一間七十歲的老房子',
  intro:
    '建於 1950 年代的街屋，保留磨石子地、花磚與木窗，換上舒服的床與現代衛浴。出門右轉就是國華街，走路吃遍台南。',
  heroImage: '/images/oldhouse-hero.jpg',
  license: '台南市旅館 登記第 000 號',
  story: [
    { year: '1953', text: '布莊老闆蓋了這間兩層街屋，一樓做生意、二樓住家' },
    { year: '1990', text: '布莊歇業，房子空了將近三十年' },
    { year: '2021', text: '我們接手修復，留下花磚與木窗，重新開門' },
  ],
  rooms: [
    { name: '花磚房', guests: 2, price: 2600, desc: '原始花磚地板、雙人床、獨立衛浴', image: '/images/oldhouse-room-1.jpg' },
    { name: '天井房', guests: 2, price: 2900, desc: '面向天井、和式床墊、檜木浴桶', image: '/images/oldhouse-room-2.jpg' },
    { name: '整棟包棟', guests: 6, price: 8800, desc: '三間房 + 客廳 + 小廚房，適合家族旅行', image: '/images/oldhouse-hero.jpg' },
  ],
  // 周邊美食：walk = 步行分鐘
  nearby: [
    { name: '阿松割包', type: '小吃', walk: 2 },
    { name: '國華街牛肉湯', type: '早餐', walk: 3 },
    { name: '水仙宮市場', type: '市場', walk: 5 },
    { name: '神農街', type: '散步', walk: 8 },
    { name: '赤崁樓', type: '古蹟', walk: 10 },
    { name: '林百貨', type: '購物', walk: 12 },
  ],
  rules: ['入住 16:00 / 退房 11:00', '自助入住，前一天傳送門鎖密碼', '老屋無電梯，樓梯較陡', '恕不接待 6 歲以下孩童（樓梯安全考量）'],
  contact: {
    address: '台南市中西區範例街 30 號',
    phone: '06-200-0000',
    email: 'stay@example.com',
    line: 'https://line.me/',
    mapEmbed: 'https://www.google.com/maps?q=台南市中西區國華街&output=embed',
  },
}
