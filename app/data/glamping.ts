// 接案時只要改這個檔案：營地名稱、營位、行程、活動、攜帶清單、詢問方式
export default {
  name: '森呼吸',
  nameEn: 'Forest Breath Glamping',
  tagline: '不用搭帳，也能睡在森林裡',
  intro:
    '位在新竹尖石海拔 1,200 公尺的山中營地。帳篷、寢具、餐點都準備好了，你只要帶著好心情上山。',
  heroImage: '/images/glamping-hero.jpg',
  license: '新竹縣露營場 登記第 000 號', // 合法露營場登記，台灣露營網站建議放
  sites: [
    { name: '星空帳', guests: 2, price: 4800, features: ['透明天窗', '雙人床', '獨立衛浴'], image: '/images/glamping-tent.jpg' },
    { name: '家庭帳', guests: 4, price: 7200, features: ['兩張雙人床', '冷暖氣', '木平台'], image: '/images/glamping-hero.jpg' },
    { name: '森林小木屋', guests: 6, price: 9600, features: ['樓中樓', '私人烤肉區', '暖爐'], image: '/images/glamping-cabin.jpg' },
  ],
  priceNote: '價格含晚餐 BBQ 與早餐，週末與連假另加 1,000',
  timeline: [
    { time: '14:00', text: '報到、入住帳篷' },
    { time: '15:30', text: '森林步道導覽' },
    { time: '18:00', text: '營火 BBQ 晚餐' },
    { time: '20:00', text: '觀星時間' },
    { time: '08:00', text: '山景早餐' },
    { time: '11:00', text: '退房' },
  ],
  activities: [
    { name: '溪邊玩水', text: '夏季限定，營地旁的淺溪' },
    { name: '手作課程', text: '捏陶、木湯匙，需加購' },
    { name: '採果體驗', text: '水蜜桃（6–8 月）、甜柿（10–11 月）' },
    { name: '夜間觀察', text: '螢火蟲季 4–5 月' },
  ],
  bring: ['保暖外套（山上晚間約 10–15°C）', '個人盥洗用品', '防蚊液', '手電筒或頭燈', '好走的鞋'],
  contact: {
    address: '新竹縣尖石鄉範例村 5 鄰',
    phone: '0933-000-000',
    email: 'camp@example.com',
    access: '竹東開車約 60 分鐘，最後 8 公里為山路，建議白天抵達',
    mapEmbed: 'https://www.google.com/maps?q=新竹縣尖石鄉&output=embed',
  },
}
