<script setup lang="ts">
useHead({ title: '網站模板展示｜CC Web Studio' })

const templates = [
  { path: '/cafe', name: '咖啡廳 / 餐廳', desc: '菜單分類切換、營業時間、Google 地圖、線上訂位', tone: 'from-bean-300 to-bean-800' },
  { path: '/studio', name: '工作室 / 美業', desc: '價目表、作品集、預約流程、評價、FAQ、LINE 預約', tone: 'from-blush-100 to-blush-500' },
  { path: '/stay', name: '民宿 / 包車旅遊', desc: '房型平假日價、包車行程、住宿須知、訂房詢問表單', tone: 'from-sea-300 to-sea-800' },
]
</script>

<template>
  <div class="min-h-screen bg-stone-50 text-stone-800">
    <div class="mx-auto max-w-6xl px-6 py-20">
      <p class="text-sm tracking-[0.3em] text-stone-500">TEMPLATES</p>
      <h1 class="mt-2 text-4xl font-bold">網站模板展示</h1>
      <p class="mt-4 max-w-2xl leading-7 text-stone-600">
        RWD 響應式、手機優先、SEO 基本設定完成。內容集中在設定檔，可快速換成你的品牌資料。
      </p>
      <div class="mt-14 grid gap-8 md:grid-cols-3">
        <NuxtLink v-for="t in templates" :key="t.path" :to="t.path" class="group overflow-hidden rounded-3xl bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-xl">
          <div class="aspect-[4/3] bg-gradient-to-br" :class="t.tone" />
          <div class="p-6">
            <h2 class="text-xl font-bold">{{ t.name }}</h2>
            <p class="mt-2 text-sm leading-6 text-stone-600">{{ t.desc }}</p>
            <p class="mt-4 text-sm font-medium group-hover:underline">查看模板 →</p>
          </div>
        </NuxtLink>
      </div>
    </div>
  </div>
</template>
