// 接案時只要改這個檔案：教室名稱、課表、方案、老師、FAQ
export default {
  name: 'Flow Pilates',
  nameZh: '流．皮拉提斯',
  tagline: '把身體找回來',
  intro: '小班制器械皮拉提斯，每堂最多 4 人。從呼吸與核心開始，改善久坐的肩頸與下背痛。',
  heroImage: '/images/pilates-hero.jpg',
  highlights: [
    { num: '4', unit: '人', text: '小班上限' },
    { num: '50', unit: '分', text: '每堂課' },
    { num: '6', unit: '位', text: '認證教練' },
  ],
  // 週課表：level 只能用 入門 / 進階 / 私人（對應顏色）
  schedule: [
    { day: '週一', classes: [{ time: '19:00', name: '核心入門', level: '入門', coach: 'Amy' }, { time: '20:10', name: '器械進階', level: '進階', coach: 'Leo' }] },
    { day: '週二', classes: [{ time: '12:10', name: '午休伸展', level: '入門', coach: 'Amy' }, { time: '19:30', name: '一對一', level: '私人', coach: 'Leo' }] },
    { day: '週三', classes: [{ time: '19:00', name: '器械入門', level: '入門', coach: 'Nina' }, { time: '20:10', name: '肩頸放鬆', level: '入門', coach: 'Nina' }] },
    { day: '週四', classes: [{ time: '07:30', name: '晨間喚醒', level: '入門', coach: 'Amy' }, { time: '19:00', name: '器械進階', level: '進階', coach: 'Leo' }] },
    { day: '週五', classes: [{ time: '19:00', name: '核心入門', level: '入門', coach: 'Nina' }] },
    { day: '週六', classes: [{ time: '10:00', name: '器械入門', level: '入門', coach: 'Amy' }, { time: '11:10', name: '器械進階', level: '進階', coach: 'Leo' }, { time: '14:00', name: '一對一', level: '私人', coach: 'Nina' }] },
    { day: '週日', classes: [{ time: '10:00', name: '家庭伸展', level: '入門', coach: 'Nina' }] },
  ],
  plans: [
    { name: '首次體驗', price: 600, unit: '堂', desc: '含體態評估，限首次', featured: false },
    { name: '10 堂課卡', price: 9000, unit: '10 堂', desc: '平均 900 / 堂，效期 4 個月', featured: true },
    { name: '一對一', price: 2000, unit: '堂', desc: '依需求客製課程', featured: false },
  ],
  coaches: [
    { name: 'Amy', cert: 'STOTT PILATES 認證', image: '/images/pilates-coach-1.jpg' },
    { name: 'Leo', cert: 'BASI 全器械認證、物理治療師', image: '/images/pilates-coach-2.jpg' },
    { name: 'Nina', cert: 'Polestar 認證', image: '/images/pilates-coach-1.jpg' },
  ],
  faq: [
    { q: '完全沒運動過可以上嗎？', a: '可以，建議先上首次體驗或入門課，教練會依你的狀況調整。' },
    { q: '要穿什麼？', a: '貼身運動服即可，需穿止滑襪（現場也有販售）。' },
    { q: '可以取消或改期嗎？', a: '上課前 12 小時可免費取消，之後取消將扣除一堂。' },
  ],
  contact: {
    address: '新竹市東區範例路 168 號 2F',
    phone: '03-500-0000',
    line: 'https://line.me/',
  },
}
