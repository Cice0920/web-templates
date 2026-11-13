// 接案時只要改這個檔案：店名、主廚介紹、套餐、酒單、訂位方式
export default {
  name: '夜行',
  nameEn: 'YAKŌ Bistro & Wine',
  tagline: '當城市安靜下來，餐桌才正要開始',
  intro:
    '以台灣當季食材做法式料理的小餐酒館。十二個座位，一晚兩輪，主廚在開放式廚房裡為你出菜。',
  heroImage: '/images/bistro-hero.jpg',
  chef: {
    name: '林以恆 主廚',
    bio: '曾任職東京與里昂的法式餐廳，回台後走訪各地漁港與農場，把在地風土放進每一道菜。',
    image: '/images/bistro-chef.jpg',
  },
  course: {
    name: '季節套餐',
    price: 2680,
    note: '另加 10% 服務費；酒水搭配 +1,200',
    dishes: [
      { name: '開胃小點', desc: '三款主廚隨想' },
      { name: '生蠔', desc: '青蘋果、紫蘇、柚子醋' },
      { name: '甜蝦塔塔', desc: '白蘆筍、魚子醬' },
      { name: '布列塔尼魚湯', desc: '當日漁獲、番紅花' },
      { name: '主菜', desc: '宜蘭櫻桃鴨胸 或 澳洲和牛（+600）' },
      { name: '甜點', desc: '焦糖蘋果千層、香草冰淇淋' },
    ],
  },
  wines: [
    { name: 'Champagne Brut NV', region: '法國 香檳', glass: 450, bottle: 2600 },
    { name: 'Chablis 1er Cru', region: '法國 勃根地', glass: 420, bottle: 2400 },
    { name: 'Pinot Noir', region: '紐西蘭 中奧塔哥', glass: 380, bottle: 2200 },
    { name: 'Côtes du Rhône', region: '法國 隆河', glass: 320, bottle: 1800 },
  ],
  seatings: ['18:00', '20:30'],
  hours: '週三至週日 18:00 – 23:30（週一、二公休）',
  contact: {
    address: '台北市信義區範例路 9 號 B1',
    phone: '02-8765-4321',
    email: 'book@example.com',
    instagram: 'https://instagram.com/',
  },
}
