// 接案時只要改這個檔案：民宿名稱、房型、包車行程、設施、交通、詢問方式
export default {
  name: '海角日和',
  nameEn: 'Umi Stay Hualien',
  tagline: '醒來就看見太平洋',
  intro:
    '位於花蓮七星潭旁的四間房小民宿，每間都有面海陽台。我們也提供在地包車，帶你走太魯閣、清水斷崖、花東縱谷，不用煩惱交通。',
  heroImage: '',
  license: '花蓮縣民宿 第 000 號', // 合法民宿登記字號，台灣民宿網站必放
  rooms: [
    { name: '海景雙人房', size: '8 坪', guests: 2, weekday: 3200, weekend: 3800, features: ['面海陽台', '雙人床', '浴缸'] },
    { name: '海景四人房', size: '12 坪', guests: 4, weekday: 4800, weekend: 5600, features: ['面海陽台', '兩張雙人床', '客廳區'] },
    { name: '庭園雙人房', size: '7 坪', guests: 2, weekday: 2600, weekend: 3000, features: ['私人庭園', '雙人床', '寵物可'] },
    { name: '家庭套房', size: '15 坪', guests: 6, weekday: 6200, weekend: 7200, features: ['樓中樓', '小廚房', '海景'] },
  ],
  tours: [
    {
      name: '太魯閣一日遊',
      hours: '8 小時',
      price: 4500,
      stops: ['清水斷崖', '砂卡礑步道', '燕子口', '九曲洞', '長春祠'],
    },
    {
      name: '花東縱谷一日遊',
      hours: '9 小時',
      price: 5000,
      stops: ['雲山水', '林田山', '瑞穗牧場', '伯朗大道', '金城武樹'],
    },
    {
      name: '花蓮市區半日遊',
      hours: '4 小時',
      price: 2500,
      stops: ['七星潭', '東大門夜市', '松園別館', '將軍府'],
    },
  ],
  tourNote: '以 7 人座休旅車計價，含油資、過路費、司機導覽；不含門票與餐費。',
  amenities: ['免費早餐', '免費停車', 'Wi-Fi', '單車租借', '洗衣機', '火車站接送'],
  rules: [
    '入住 15:00 後，退房 11:00 前',
    '全館禁菸，違者酌收清潔費 NT$3,000',
    '晚上 22:00 後請降低音量',
    '訂金為總房價 30%，入住前 7 日取消全額退還',
  ],
  contact: {
    address: '花蓮縣新城鄉範例路 88 號',
    phone: '0912-345-678',
    email: 'hello@example.com',
    line: 'https://line.me/',
    access: [
      { by: '火車', text: '花蓮火車站開車 15 分鐘，可預約免費接送' },
      { by: '開車', text: '台 9 線轉 193 縣道，民宿備有停車位' },
      { by: '飛機', text: '花蓮機場開車 5 分鐘' },
    ],
    mapEmbed: 'https://www.google.com/maps?q=七星潭&output=embed',
  },
}
