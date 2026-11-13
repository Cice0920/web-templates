<script setup lang="ts">
import site from '~/data/stay'

useHead({ title: `${site.name}｜${site.tagline}` })
useSeoMeta({ description: site.intro, ogTitle: site.name, ogDescription: site.tagline })

const nav = [
  { href: '#rooms', label: '房型' },
  { href: '#tours', label: '包車' },
  { href: '#info', label: '住宿須知' },
  { href: '#contact', label: '詢問訂房' },
]
const menuOpen = ref(false)
const roomTones = ['from-sea-100 to-sea-300', 'from-sea-300 to-sea-600', 'from-sand-100 to-sea-300', 'from-sea-100 to-sea-600']

// 詢問表單：靜態網站沒有後端，所以組成 mailto 連結開啟使用者的信箱
// 之後要真的收表單可以換成 Formspree / Cloudflare Workers / 你自己的 Spring Boot API
const form = reactive({
  name: '',
  phone: '',
  checkin: '',
  nights: 1,
  room: site.rooms[0]!.name,
  tour: '',
  note: '',
})
function submit() {
  const body = [
    `姓名：${form.name}`,
    `電話：${form.phone}`,
    `入住日：${form.checkin}`,
    `晚數：${form.nights}`,
    `房型：${form.room}`,
    `包車：${form.tour || '不需要'}`,
    `備註：${form.note}`,
  ].join('\n')
  window.location.href = `mailto:${site.contact.email}?subject=${encodeURIComponent(`訂房詢問 - ${form.name}`)}&body=${encodeURIComponent(body)}`
}
</script>

<template>
  <div class="bg-white text-sea-800">
    <!-- Header：透明疊在 Hero 上 -->
    <header class="absolute inset-x-0 top-0 z-40 text-white">
      <div class="mx-auto flex max-w-6xl items-center justify-between px-6 py-6">
        <a href="#top" class="font-serif text-xl font-bold">{{ site.name }}</a>
        <nav class="hidden gap-8 text-sm md:flex">
          <a v-for="n in nav" :key="n.href" :href="n.href" class="hover:opacity-70">{{ n.label }}</a>
        </nav>
        <button class="md:hidden" aria-label="選單" @click="menuOpen = !menuOpen">
          <svg class="h-6 w-6" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M4 7h16M4 12h16M4 17h16" /></svg>
        </button>
      </div>
      <nav v-if="menuOpen" class="mx-4 flex flex-col gap-4 rounded-2xl bg-sea-800/95 px-6 py-4 md:hidden">
        <a v-for="n in nav" :key="n.href" :href="n.href" @click="menuOpen = false">{{ n.label }}</a>
      </nav>
    </header>

    <!-- Hero -->
    <section id="top" class="relative flex min-h-screen items-center justify-center text-center text-white">
      <Photo :src="site.heroImage" alt="海景主視覺" tone="from-sea-300 via-sea-600 to-sea-800" class="absolute inset-0" />
      <div class="absolute inset-0 bg-sea-800/30" />
      <div class="relative px-6">
        <p class="text-sm tracking-[0.4em]">{{ site.nameEn.toUpperCase() }}</p>
        <h1 class="mt-4 font-serif text-5xl font-bold md:text-7xl">{{ site.tagline }}</h1>
        <p class="mx-auto mt-6 max-w-xl leading-8 text-sea-50">{{ site.intro }}</p>
        <div class="mt-10 flex justify-center gap-4">
          <a href="#contact" class="rounded-full bg-white px-8 py-3 text-sm font-medium text-sea-800 hover:bg-sea-50">詢問空房</a>
          <a href="#tours" class="rounded-full border border-white px-8 py-3 text-sm hover:bg-white/10">包車行程</a>
        </div>
      </div>
    </section>

    <!-- Amenities -->
    <section class="border-b border-sea-100">
      <ul class="mx-auto flex max-w-6xl flex-wrap justify-center gap-x-10 gap-y-3 px-6 py-8 text-sm">
        <li v-for="a in site.amenities" :key="a" class="flex items-center gap-2"><span class="text-sea-600">✓</span>{{ a }}</li>
      </ul>
    </section>

    <!-- Rooms -->
    <section id="rooms" class="mx-auto max-w-6xl px-6 py-24">
      <p class="text-sm tracking-[0.3em] text-sea-600">ROOMS</p>
      <h2 class="mt-2 font-serif text-3xl font-bold">房型介紹</h2>
      <div class="mt-12 grid gap-8 md:grid-cols-2">
        <article v-for="(r, i) in site.rooms" :key="r.name" class="overflow-hidden rounded-3xl border border-sea-100">
          <Photo :src="r.image" :alt="r.name" :tone="roomTones[i % roomTones.length]" class="aspect-[16/10]" />
          <div class="p-6">
            <div class="flex items-baseline justify-between">
              <h3 class="text-xl font-bold">{{ r.name }}</h3>
              <p class="text-sm text-sea-600">{{ r.size }}・{{ r.guests }} 人</p>
            </div>
            <ul class="mt-3 flex flex-wrap gap-2">
              <li v-for="f in r.features" :key="f" class="rounded-full bg-sea-50 px-3 py-1 text-xs">{{ f }}</li>
            </ul>
            <div class="mt-6 grid grid-cols-2 gap-4 border-t border-sea-100 pt-4 text-center">
              <div><p class="text-xs text-sea-600">平日</p><p class="font-serif text-lg">NT$ {{ r.weekday.toLocaleString() }}</p></div>
              <div><p class="text-xs text-sea-600">假日</p><p class="font-serif text-lg">NT$ {{ r.weekend.toLocaleString() }}</p></div>
            </div>
          </div>
        </article>
      </div>
    </section>

    <!-- Tours -->
    <section id="tours" class="bg-sand-100 py-24">
      <div class="mx-auto max-w-6xl px-6">
        <p class="text-sm tracking-[0.3em] text-sea-600">PRIVATE TOURS</p>
        <h2 class="mt-2 font-serif text-3xl font-bold">在地包車</h2>
        <p class="mt-3 text-sm">{{ site.tourNote }}</p>
        <div class="mt-12 grid gap-6 md:grid-cols-3">
          <article v-for="t in site.tours" :key="t.name" class="flex flex-col rounded-3xl bg-white p-8 shadow-sm">
            <h3 class="text-xl font-bold">{{ t.name }}</h3>
            <p class="mt-1 text-sm text-sea-600">{{ t.hours }}</p>
            <ol class="mt-6 flex-1 space-y-3 border-l-2 border-sea-300 pl-5 text-sm">
              <li v-for="s in t.stops" :key="s" class="relative">
                <span class="absolute top-1.5 -left-[25px] h-2 w-2 rounded-full bg-sea-600" />{{ s }}
              </li>
            </ol>
            <p class="mt-8 font-serif text-2xl">NT$ {{ t.price.toLocaleString() }}<span class="text-sm text-sea-600"> / 車</span></p>
          </article>
        </div>
      </div>
    </section>

    <!-- Info -->
    <section id="info" class="mx-auto grid max-w-6xl gap-12 px-6 py-24 md:grid-cols-2">
      <div>
        <h2 class="font-serif text-2xl font-bold">住宿須知</h2>
        <ul class="mt-6 space-y-3 text-sm leading-7">
          <li v-for="r in site.rules" :key="r" class="flex gap-3"><span class="text-sea-600">•</span>{{ r }}</li>
        </ul>
      </div>
      <div>
        <h2 class="font-serif text-2xl font-bold">交通方式</h2>
        <dl class="mt-6 space-y-4 text-sm">
          <div v-for="a in site.contact.access" :key="a.by" class="flex gap-4">
            <dt class="w-12 shrink-0 font-bold text-sea-600">{{ a.by }}</dt><dd>{{ a.text }}</dd>
          </div>
        </dl>
        <iframe :src="site.contact.mapEmbed" class="mt-6 h-56 w-full rounded-2xl border-0" loading="lazy" title="地圖" />
      </div>
    </section>

    <!-- Contact form -->
    <section id="contact" class="bg-sea-800 py-24 text-white">
      <div class="mx-auto max-w-3xl px-6">
        <h2 class="text-center font-serif text-3xl font-bold">詢問訂房 / 包車</h2>
        <p class="mt-3 text-center text-sm text-sea-100">
          填寫後會開啟你的信箱寄出，也可以直接
          <a :href="site.contact.line" target="_blank" class="underline">LINE 詢問</a> 或撥打 <a :href="`tel:${site.contact.phone}`" class="underline">{{ site.contact.phone }}</a>
        </p>
        <form class="mt-12 grid gap-5 text-sea-800 sm:grid-cols-2" @submit.prevent="submit">
          <input v-model="form.name" required placeholder="姓名" class="rounded-xl px-4 py-3" />
          <input v-model="form.phone" required type="tel" placeholder="電話" class="rounded-xl px-4 py-3" />
          <label class="text-sm text-sea-100">入住日
            <input v-model="form.checkin" required type="date" class="mt-1 w-full rounded-xl px-4 py-3 text-sea-800" />
          </label>
          <label class="text-sm text-sea-100">晚數
            <input v-model.number="form.nights" type="number" min="1" class="mt-1 w-full rounded-xl px-4 py-3 text-sea-800" />
          </label>
          <select v-model="form.room" class="rounded-xl px-4 py-3">
            <option v-for="r in site.rooms" :key="r.name">{{ r.name }}</option>
          </select>
          <select v-model="form.tour" class="rounded-xl px-4 py-3">
            <option value="">不需要包車</option>
            <option v-for="t in site.tours" :key="t.name">{{ t.name }}</option>
          </select>
          <textarea v-model="form.note" rows="3" placeholder="備註（人數、是否有小孩或寵物…）" class="rounded-xl px-4 py-3 sm:col-span-2" />
          <button class="rounded-full bg-white py-4 font-medium hover:bg-sea-50 sm:col-span-2">送出詢問</button>
        </form>
      </div>
    </section>

    <footer class="py-10 text-center text-xs text-sea-600">
      <p>{{ site.name }}｜{{ site.contact.address }}｜{{ site.license }}</p>
      <p class="mt-2">© {{ new Date().getFullYear() }} {{ site.nameEn }}</p>
    </footer>
    <TemplateBadge />
  </div>
</template>
