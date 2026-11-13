<script setup lang="ts">
import site from '~/data/studio'

useHead({ title: `${site.nameZh}｜${site.name}` })
useSeoMeta({ description: site.intro, ogTitle: site.nameZh, ogDescription: site.tagline })

const nav = [
  { href: '#services', label: '服務價目' },
  { href: '#works', label: '作品' },
  { href: '#booking', label: '預約' },
  { href: '#faq', label: 'FAQ' },
]
const menuOpen = ref(false)
const openFaq = ref<number | null>(0)
const workTones = ['from-blush-100 to-blush-300', 'from-blush-300 to-blush-500', 'from-stone-100 to-blush-300', 'from-blush-50 to-blush-300', 'from-blush-300 to-stone-300', 'from-blush-100 to-blush-500']
</script>

<template>
  <div class="bg-blush-50 text-blush-800">
    <!-- Header -->
    <header class="sticky top-0 z-40 border-b border-blush-100 bg-blush-50/90 backdrop-blur">
      <div class="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a href="#top" class="leading-tight">
          <span class="block font-serif text-lg font-bold">{{ site.nameZh }}</span>
          <span class="block text-[10px] tracking-[0.3em] text-blush-500">{{ site.name.toUpperCase() }}</span>
        </a>
        <nav class="hidden gap-8 text-sm md:flex">
          <a v-for="n in nav" :key="n.href" :href="n.href" class="hover:text-blush-500">{{ n.label }}</a>
        </nav>
        <button class="md:hidden" aria-label="選單" @click="menuOpen = !menuOpen">
          <svg class="h-6 w-6" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M4 7h16M4 12h16M4 17h16" /></svg>
        </button>
      </div>
      <nav v-if="menuOpen" class="flex flex-col gap-4 px-6 pb-4 md:hidden">
        <a v-for="n in nav" :key="n.href" :href="n.href" @click="menuOpen = false">{{ n.label }}</a>
      </nav>
    </header>

    <!-- Hero：左文右圖 -->
    <section id="top" class="mx-auto grid max-w-6xl items-center gap-12 px-6 py-16 md:grid-cols-2 md:py-28">
      <div>
        <p class="text-sm tracking-[0.3em] text-blush-500">ONE-ON-ONE STUDIO</p>
        <h1 class="mt-4 font-serif text-4xl leading-snug font-bold md:text-5xl">{{ site.tagline }}</h1>
        <p class="mt-6 leading-8">{{ site.intro }}</p>
        <div class="mt-10 flex flex-wrap gap-4">
          <a :href="site.contact.line" target="_blank" class="rounded-full bg-[#06C755] px-7 py-3 text-sm font-medium text-white hover:opacity-90">LINE 預約</a>
          <a href="#services" class="rounded-full border border-blush-800 px-7 py-3 text-sm hover:bg-blush-800 hover:text-blush-50">看價目表</a>
        </div>
      </div>
      <div class="relative">
        <Photo :src="site.heroImage" alt="主視覺" tone="from-blush-100 via-blush-300 to-blush-500" class="aspect-[4/5] rounded-[3rem]" />
        <div class="absolute -bottom-6 -left-6 rounded-2xl bg-white px-6 py-4 shadow-xl">
          <p class="text-3xl font-bold text-blush-500">4.9 ★</p>
          <p class="text-xs">Google 評價 200+ 則</p>
        </div>
      </div>
    </section>

    <!-- Services -->
    <section id="services" class="bg-white py-24">
      <div class="mx-auto max-w-3xl px-6">
        <h2 class="text-center font-serif text-3xl font-bold">服務價目</h2>
        <p class="mt-3 text-center text-sm text-blush-500">價格皆含稅，實際依現場評估為準</p>
        <ul class="mt-12 divide-y divide-blush-100">
          <li v-for="s in site.services" :key="s.name" class="flex items-center justify-between gap-4 py-5">
            <div>
              <p class="font-medium">{{ s.name }} <span class="ml-2 text-xs text-blush-500">{{ s.duration }}</span></p>
              <p v-if="s.note" class="mt-1 text-sm text-stone-500">{{ s.note }}</p>
            </div>
            <p class="font-serif text-lg whitespace-nowrap">NT$ {{ s.price.toLocaleString() }}</p>
          </li>
        </ul>
      </div>
    </section>

    <!-- Works -->
    <section id="works" class="mx-auto max-w-6xl px-6 py-24">
      <div class="flex items-end justify-between">
        <h2 class="font-serif text-3xl font-bold">作品集</h2>
        <a :href="site.contact.instagram" target="_blank" class="text-sm text-blush-500 hover:underline">更多作品在 Instagram →</a>
      </div>
      <div class="mt-10 grid grid-cols-2 gap-4 md:grid-cols-3">
        <div v-for="(w, i) in site.works" :key="w.name" class="group overflow-hidden rounded-2xl">
          <Photo :src="w.image" :alt="w.name" :tone="workTones[i % workTones.length]" class="aspect-square transition duration-500 group-hover:scale-105" />
        </div>
      </div>
    </section>

    <!-- Booking steps -->
    <section id="booking" class="bg-blush-800 py-24 text-blush-50">
      <div class="mx-auto max-w-6xl px-6">
        <h2 class="text-center font-serif text-3xl font-bold">預約流程</h2>
        <ol class="mt-14 grid gap-8 md:grid-cols-4">
          <li v-for="(s, i) in site.steps" :key="s.title" class="text-center">
            <span class="mx-auto flex h-14 w-14 items-center justify-center rounded-full border border-blush-300 font-serif text-xl">{{ i + 1 }}</span>
            <p class="mt-4 font-bold">{{ s.title }}</p>
            <p class="mt-2 text-sm text-blush-100">{{ s.text }}</p>
          </li>
        </ol>
        <div class="mt-14 text-center">
          <a :href="site.contact.line" target="_blank" class="inline-block rounded-full bg-[#06C755] px-10 py-4 font-medium text-white hover:opacity-90">加入 LINE 立即預約</a>
        </div>
      </div>
    </section>

    <!-- Reviews -->
    <section class="mx-auto max-w-6xl px-6 py-24">
      <h2 class="text-center font-serif text-3xl font-bold">客人怎麼說</h2>
      <div class="mt-12 grid gap-6 md:grid-cols-3">
        <figure v-for="r in site.reviews" :key="r.name" class="rounded-3xl bg-white p-8 shadow-sm">
          <p class="text-blush-500">★★★★★</p>
          <blockquote class="mt-4 leading-7">「{{ r.text }}」</blockquote>
          <figcaption class="mt-6 text-sm text-stone-500">— {{ r.name }}</figcaption>
        </figure>
      </div>
    </section>

    <!-- FAQ -->
    <section id="faq" class="bg-white py-24">
      <div class="mx-auto max-w-3xl px-6">
        <h2 class="text-center font-serif text-3xl font-bold">常見問題</h2>
        <div class="mt-12 divide-y divide-blush-100 border-y border-blush-100">
          <div v-for="(f, i) in site.faq" :key="f.q">
            <button class="flex w-full items-center justify-between py-5 text-left font-medium" @click="openFaq = openFaq === i ? null : i">
              {{ f.q }}
              <span class="text-xl text-blush-500 transition" :class="openFaq === i && 'rotate-45'">+</span>
            </button>
            <p v-show="openFaq === i" class="pb-5 text-stone-600">{{ f.a }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Footer -->
    <footer class="bg-blush-100 py-12 text-sm">
      <div class="mx-auto flex max-w-6xl flex-col gap-6 px-6 md:flex-row md:justify-between">
        <div>
          <p class="font-serif text-lg font-bold">{{ site.nameZh }}</p>
          <p class="mt-2">{{ site.contact.address }}</p>
          <p class="mt-1">{{ site.contact.hours }}</p>
        </div>
        <div class="flex gap-4 md:items-end">
          <a :href="site.contact.instagram" target="_blank" class="hover:text-blush-500">Instagram</a>
          <a :href="site.contact.line" target="_blank" class="hover:text-blush-500">LINE</a>
        </div>
      </div>
      <p class="mt-10 text-center text-xs text-blush-500">© {{ new Date().getFullYear() }} {{ site.name }}</p>
    </footer>

    <!-- 手機版固定預約按鈕 -->
    <a :href="site.contact.line" target="_blank" class="fixed right-4 bottom-4 z-40 rounded-full bg-[#06C755] px-5 py-3 text-sm font-medium text-white shadow-lg md:hidden">LINE 預約</a>
    <TemplateBadge />
  </div>
</template>
