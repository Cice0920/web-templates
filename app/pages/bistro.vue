<script setup lang="ts">
import site from '~/data/bistro'

useHead({ title: `${site.name} ${site.nameEn}｜${site.tagline}` })
useSeoMeta({ description: site.intro, ogTitle: site.nameEn, ogDescription: site.tagline })

// 訂位表單：靜態網站沒有後端，組成 mailto 開啟使用者的信箱
const form = reactive({ name: '', phone: '', date: '', seating: site.seatings[0], people: 2, note: '' })
function submit() {
  const body = [
    `姓名：${form.name}`,
    `電話：${form.phone}`,
    `日期：${form.date}`,
    `時段：${form.seating}`,
    `人數：${form.people}`,
    `備註（過敏、慶生）：${form.note}`,
  ].join('\n')
  window.location.href = `mailto:${site.contact.email}?subject=${encodeURIComponent(`訂位 - ${form.date} ${form.name}`)}&body=${encodeURIComponent(body)}`
}
</script>

<template>
  <div class="bg-night-900 text-stone-200">
    <header class="fixed inset-x-0 top-0 z-40 bg-night-900/80 backdrop-blur">
      <div class="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
        <a href="#" class="font-serif text-2xl tracking-[0.3em] text-gold-300">{{ site.name }}</a>
        <nav class="flex items-center gap-6 text-xs tracking-widest">
          <a href="#course" class="hidden hover:text-gold-300 sm:inline">COURSE</a>
          <a href="#wine" class="hidden hover:text-gold-300 sm:inline">WINE</a>
          <a href="#reserve" class="border border-gold-500 px-4 py-2 text-gold-300 hover:bg-gold-500 hover:text-night-900">RESERVE</a>
        </nav>
      </div>
    </header>

    <!-- Hero：置中，暗色照片 -->
    <section class="relative flex min-h-screen items-center justify-center text-center">
      <Photo :src="site.heroImage" alt="主視覺" tone="from-night-700 via-wine-700 to-night-900" class="absolute inset-0 opacity-70" />
      <div class="absolute inset-0 bg-night-900/50" />
      <div class="relative px-6">
        <p class="text-xs tracking-[0.5em] text-gold-500">{{ site.nameEn.toUpperCase() }}</p>
        <h1 class="mt-6 font-serif text-4xl leading-snug text-white md:text-6xl">{{ site.tagline }}</h1>
        <div class="mx-auto mt-8 h-px w-16 bg-gold-500" />
        <p class="mt-8 text-sm text-stone-400">{{ site.hours }}</p>
      </div>
    </section>

    <!-- Chef -->
    <section class="mx-auto grid max-w-5xl items-center gap-12 px-6 py-28 md:grid-cols-2">
      <Photo :src="site.chef.image" alt="主廚" tone="from-night-700 to-night-800" class="aspect-[3/4]" />
      <div>
        <p class="text-xs tracking-[0.4em] text-gold-500">THE CHEF</p>
        <h2 class="mt-4 font-serif text-3xl text-white">{{ site.chef.name }}</h2>
        <p class="mt-6 leading-8 text-stone-400">{{ site.chef.bio }}</p>
        <p class="mt-6 leading-8 text-stone-400">{{ site.intro }}</p>
      </div>
    </section>

    <!-- Course：編號清單 -->
    <section id="course" class="bg-night-800 py-28">
      <div class="mx-auto max-w-3xl px-6 text-center">
        <p class="text-xs tracking-[0.4em] text-gold-500">TASTING COURSE</p>
        <h2 class="mt-4 font-serif text-3xl text-white">{{ site.course.name }}</h2>
        <p class="mt-4 font-serif text-2xl text-gold-300">NT$ {{ site.course.price.toLocaleString() }}</p>
        <ol class="mt-14 space-y-10">
          <li v-for="(d, i) in site.course.dishes" :key="d.name">
            <span class="font-serif text-sm text-gold-500">{{ String(i + 1).padStart(2, '0') }}</span>
            <h3 class="mt-1 font-serif text-xl text-white">{{ d.name }}</h3>
            <p class="mt-1 text-sm text-stone-400">{{ d.desc }}</p>
          </li>
        </ol>
        <p class="mt-14 text-xs text-stone-500">{{ site.course.note }}</p>
      </div>
    </section>

    <!-- Wine -->
    <section id="wine" class="mx-auto max-w-4xl px-6 py-28">
      <p class="text-center text-xs tracking-[0.4em] text-gold-500">WINE LIST</p>
      <h2 class="mt-4 text-center font-serif text-3xl text-white">精選酒單</h2>
      <table class="mt-12 w-full text-left text-sm">
        <thead class="text-xs tracking-widest text-gold-500">
          <tr class="border-b border-night-700"><th class="py-3 font-normal">WINE</th><th class="py-3 text-right font-normal">GLASS</th><th class="py-3 text-right font-normal">BOTTLE</th></tr>
        </thead>
        <tbody>
          <tr v-for="w in site.wines" :key="w.name" class="border-b border-night-700">
            <td class="py-4"><p class="text-white">{{ w.name }}</p><p class="text-xs text-stone-500">{{ w.region }}</p></td>
            <td class="py-4 text-right">{{ w.glass }}</td>
            <td class="py-4 text-right">{{ w.bottle.toLocaleString() }}</td>
          </tr>
        </tbody>
      </table>
    </section>

    <!-- Reserve -->
    <section id="reserve" class="border-t border-night-700 bg-night-800 py-28">
      <div class="mx-auto max-w-2xl px-6">
        <p class="text-center text-xs tracking-[0.4em] text-gold-500">RESERVATION</p>
        <h2 class="mt-4 text-center font-serif text-3xl text-white">預約訂位</h2>
        <form class="mt-12 grid gap-5 sm:grid-cols-2" @submit.prevent="submit">
          <input v-model="form.name" required placeholder="姓名" class="field" />
          <input v-model="form.phone" required type="tel" placeholder="電話" class="field" />
          <input v-model="form.date" required type="date" class="field" />
          <div class="flex gap-3">
            <button v-for="s in site.seatings" :key="s" type="button" class="flex-1 border py-3 text-sm transition" :class="form.seating === s ? 'border-gold-500 bg-gold-500 text-night-900' : 'border-night-700 hover:border-gold-500'" @click="form.seating = s">{{ s }}</button>
          </div>
          <label class="text-sm text-stone-400 sm:col-span-2">人數
            <input v-model.number="form.people" type="number" min="1" max="12" class="field mt-1 w-full" />
          </label>
          <textarea v-model="form.note" rows="3" placeholder="食物過敏、慶生需求…" class="field sm:col-span-2" />
          <button class="bg-gold-500 py-4 text-sm tracking-[0.3em] text-night-900 hover:bg-gold-300 sm:col-span-2">送出訂位</button>
        </form>
        <p class="mt-6 text-center text-xs text-stone-500">送出後會開啟 email，我們回信確認才算完成訂位</p>
      </div>
    </section>

    <footer class="py-12 text-center text-xs leading-6 text-stone-500">
      <p>{{ site.contact.address }}｜<a :href="`tel:${site.contact.phone}`">{{ site.contact.phone }}</a></p>
      <p>未成年請勿飲酒｜© {{ new Date().getFullYear() }} {{ site.nameEn }}</p>
    </footer>
    <TemplateBadge />
  </div>
</template>

<style scoped>
@reference "~/assets/css/main.css";
.field { @apply border border-night-700 bg-night-900 px-4 py-3 text-stone-200 outline-none focus:border-gold-500; }
</style>
