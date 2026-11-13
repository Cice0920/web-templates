<script setup lang="ts">
useHead({ title: '網站模板展示｜CC Web Studio' })

const groups = [
  {
    theme: '咖啡廳 / 餐廳',
    items: [
      { path: '/cafe', name: '日光咖啡', style: '溫暖文青', desc: '菜單分類切換、營業時間、Google 地圖、線上訂位', tone: 'from-bean-300 to-bean-800', image: '/images/cafe-hero.jpg' },
      { path: '/brunch', name: '白日 Brunch', style: '極簡明亮', desc: '菜單標籤篩選、飲品清單、候位須知、橫向照片牆', tone: 'from-yolk-100 to-yolk-400', image: '/images/brunch-hero.jpg' },
      { path: '/bistro', name: '夜行 餐酒館', style: '深色高級', desc: '主廚介紹、套餐流程、酒單、訂位表單（選時段）', tone: 'from-night-700 via-wine-700 to-night-900', image: '/images/bistro-hero.jpg' },
    ],
  },
  {
    theme: '工作室 / 美業',
    items: [
      { path: '/studio', name: '綻．美甲', style: '柔和粉嫩', desc: '價目表、作品集、預約流程、評價、FAQ、LINE 預約', tone: 'from-blush-100 to-blush-500', image: '/images/studio-hero.jpg' },
      { path: '/salon', name: 'MUSE 髮廊', style: '黑白雜誌', desc: '依設計師等級切換價目、設計師介紹、Lookbook', tone: 'from-zinc-300 via-zinc-600 to-zinc-900', image: '/images/salon-hero.jpg' },
      { path: '/pilates', name: 'Flow 皮拉提斯', style: '自然療癒', desc: '每週課表（手機可切換日期）、方案卡、教練、FAQ', tone: 'from-sage-100 via-sage-300 to-peach-200', image: '/images/pilates-hero.jpg' },
    ],
  },
  {
    theme: '民宿 / 旅遊',
    items: [
      { path: '/stay', name: '海角日和', style: '海景清爽', desc: '房型平假日價、包車行程、住宿須知、訂房詢問表單', tone: 'from-sea-300 to-sea-800', image: '/images/stay-hero.jpg' },
      { path: '/glamping', name: '森呼吸 露營', style: '山林戶外', desc: '營位卡片、一日行程時間軸、攜帶清單、詢問表單', tone: 'from-moss-300 via-moss-600 to-moss-900', image: '/images/glamping-hero.jpg' },
      { path: '/oldhouse', name: '町家 老宅旅店', style: '復古台味', desc: '老屋年表、房型、周邊美食步行分鐘篩選、入住須知', tone: 'from-cream-100 via-brick-600 to-ink-900', image: '/images/oldhouse-hero.jpg' },
    ],
  },
]
</script>

<template>
  <div class="min-h-screen bg-stone-50 text-stone-800">
    <div class="mx-auto max-w-6xl px-6 py-20">
      <p class="text-sm tracking-[0.3em] text-stone-500">TEMPLATES</p>
      <h1 class="mt-2 text-4xl font-bold">網站模板展示</h1>
      <p class="mt-4 max-w-2xl leading-7 text-stone-600">
        3 種產業、每種 3 款風格。RWD 響應式、手機優先、SEO 基本設定完成。內容集中在設定檔，可快速換成你的品牌資料。
      </p>

      <section v-for="g in groups" :key="g.theme" class="mt-20">
        <h2 class="flex items-center gap-4 text-2xl font-bold">
          {{ g.theme }}<span class="h-px flex-1 bg-stone-200" />
        </h2>
        <div class="mt-8 grid gap-8 md:grid-cols-3">
          <NuxtLink v-for="t in g.items" :key="t.path" :to="t.path" class="group overflow-hidden rounded-3xl bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-xl">
            <div class="relative">
              <Photo :src="t.image" :alt="`${t.name}模板預覽`" :tone="t.tone" class="aspect-[4/3]" />
              <span class="absolute top-4 left-4 rounded-full bg-white/80 px-3 py-1 text-xs backdrop-blur">{{ t.style }}</span>
            </div>
            <div class="p-6">
              <h3 class="text-xl font-bold">{{ t.name }}</h3>
              <p class="mt-2 text-sm leading-6 text-stone-600">{{ t.desc }}</p>
              <p class="mt-4 text-sm font-medium group-hover:underline">查看模板 →</p>
            </div>
          </NuxtLink>
        </div>
      </section>
    </div>
  </div>
</template>
