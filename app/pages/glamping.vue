<script setup lang="ts">
import site from '~/data/glamping'

useHead({ title: `${site.name} ${site.nameEn}｜${site.tagline}` })
useSeoMeta({ description: site.intro, ogTitle: site.nameEn, ogDescription: site.tagline })

// 詢問表單：組成 mailto 開啟使用者的信箱
const form = reactive({ name: '', phone: '', date: '', site: site.sites[0]!.name, people: 2, note: '' })
function submit() {
  const body = [`姓名：${form.name}`, `電話：${form.phone}`, `入住日：${form.date}`, `營位：${form.site}`, `人數：${form.people}`, `備註：${form.note}`].join('\n')
  window.location.href = `mailto:${site.contact.email}?subject=${encodeURIComponent(`營位詢問 - ${form.date} ${form.name}`)}&body=${encodeURIComponent(body)}`
}
const checked = ref<string[]>([])
const tones = ['from-moss-300 to-moss-800', 'from-moss-100 to-moss-600', 'from-ember-500/60 to-moss-800']
</script>

<template>
  <div class="bg-moss-50 text-moss-900">
    <header class="absolute inset-x-0 top-0 z-40 text-white">
      <div class="mx-auto flex max-w-6xl items-center justify-between px-6 py-6">
        <a href="#" class="font-serif text-xl font-bold">{{ site.name }}</a>
        <nav class="flex items-center gap-6 text-sm">
          <a href="#sites" class="hidden hover:text-moss-300 sm:inline">營位</a>
          <a href="#day" class="hidden hover:text-moss-300 sm:inline">一日行程</a>
          <a href="#inquiry" class="rounded-full bg-ember-500 px-5 py-2 hover:brightness-110">預約詢問</a>
        </nav>
      </div>
    </header>

    <!-- Hero -->
    <section class="relative flex min-h-screen items-center">
      <Photo :src="site.heroImage" alt="主視覺" tone="from-moss-600 via-moss-800 to-moss-900" class="absolute inset-0" />
      <div class="absolute inset-0 bg-moss-900/40" />
      <div class="relative mx-auto w-full max-w-6xl px-6 text-white">
        <p class="text-sm tracking-[0.3em] text-moss-100">{{ site.nameEn.toUpperCase() }}</p>
        <h1 class="mt-4 max-w-2xl font-serif text-5xl leading-tight font-bold md:text-7xl">{{ site.tagline }}</h1>
        <p class="mt-6 max-w-lg leading-8 text-moss-100">{{ site.intro }}</p>
      </div>
      <!-- 山形波浪分隔 -->
      <svg class="absolute inset-x-0 bottom-0 w-full text-moss-50" viewBox="0 0 1440 80" preserveAspectRatio="none" fill="currentColor"><path d="M0 80V40l240-30 200 40 260-45 280 50 220-35 240 30v30z" /></svg>
    </section>

    <!-- Sites -->
    <section id="sites" class="mx-auto max-w-6xl px-6 py-24">
      <h2 class="font-serif text-4xl font-bold">選一頂帳篷</h2>
      <div class="mt-12 grid gap-8 md:grid-cols-3">
        <article v-for="(s, i) in site.sites" :key="s.name" class="overflow-hidden rounded-3xl bg-white shadow-sm">
          <Photo :src="s.image" :alt="s.name" :tone="tones[i % 3]" class="aspect-[4/3]" />
          <div class="p-6">
            <div class="flex items-baseline justify-between">
              <h3 class="text-xl font-bold">{{ s.name }}</h3>
              <span class="text-sm text-moss-600">{{ s.guests }} 人</span>
            </div>
            <ul class="mt-4 flex flex-wrap gap-2">
              <li v-for="f in s.features" :key="f" class="rounded-full bg-moss-100 px-3 py-1 text-xs">{{ f }}</li>
            </ul>
            <p class="mt-6 text-2xl font-bold text-ember-500">NT$ {{ s.price.toLocaleString() }}<span class="text-sm font-normal text-moss-600"> / 晚</span></p>
          </div>
        </article>
      </div>
      <p class="mt-6 text-sm text-moss-600">※ {{ site.priceNote }}</p>
    </section>

    <!-- Timeline -->
    <section id="day" class="bg-moss-900 py-24 text-moss-50">
      <div class="mx-auto grid max-w-6xl gap-16 px-6 md:grid-cols-2">
        <div>
          <h2 class="font-serif text-4xl font-bold">山上的一天</h2>
          <ol class="relative mt-12 space-y-8 border-l border-moss-600 pl-8">
            <li v-for="t in site.timeline" :key="t.time + t.text" class="relative">
              <span class="absolute top-1.5 -left-[2.3rem] h-3 w-3 rounded-full bg-ember-500" />
              <p class="text-sm text-moss-300">{{ t.time }}</p>
              <p class="mt-1 text-lg">{{ t.text }}</p>
            </li>
          </ol>
        </div>
        <div>
          <h2 class="font-serif text-4xl font-bold">還可以做什麼</h2>
          <div class="mt-12 grid gap-4 sm:grid-cols-2">
            <div v-for="a in site.activities" :key="a.name" class="rounded-2xl bg-moss-800 p-6">
              <h3 class="font-bold">{{ a.name }}</h3>
              <p class="mt-2 text-sm text-moss-300">{{ a.text }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Checklist：可勾選 -->
    <section class="mx-auto max-w-3xl px-6 py-24">
      <h2 class="font-serif text-3xl font-bold">上山前檢查清單</h2>
      <p class="mt-2 text-sm text-moss-600">已勾選 {{ checked.length }} / {{ site.bring.length }}</p>
      <ul class="mt-8 space-y-3">
        <li v-for="b in site.bring" :key="b">
          <label class="flex cursor-pointer items-center gap-4 rounded-2xl bg-white p-4 transition" :class="checked.includes(b) ? 'opacity-50' : ''">
            <input v-model="checked" type="checkbox" :value="b" class="h-5 w-5 accent-moss-600" />
            <span :class="checked.includes(b) ? 'line-through' : ''">{{ b }}</span>
          </label>
        </li>
      </ul>
    </section>

    <!-- Inquiry -->
    <section id="inquiry" class="bg-moss-100 py-24">
      <div class="mx-auto grid max-w-6xl gap-12 px-6 md:grid-cols-2">
        <div>
          <h2 class="font-serif text-4xl font-bold">預約詢問</h2>
          <form class="mt-8 grid gap-4 sm:grid-cols-2" @submit.prevent="submit">
            <input v-model="form.name" required placeholder="姓名" class="rounded-xl bg-white px-4 py-3" />
            <input v-model="form.phone" required type="tel" placeholder="電話" class="rounded-xl bg-white px-4 py-3" />
            <input v-model="form.date" required type="date" class="rounded-xl bg-white px-4 py-3" />
            <input v-model.number="form.people" type="number" min="1" placeholder="人數" class="rounded-xl bg-white px-4 py-3" />
            <select v-model="form.site" class="rounded-xl bg-white px-4 py-3 sm:col-span-2">
              <option v-for="s in site.sites" :key="s.name">{{ s.name }}</option>
            </select>
            <textarea v-model="form.note" rows="3" placeholder="備註（素食、寵物、加購手作課…）" class="rounded-xl bg-white px-4 py-3 sm:col-span-2" />
            <button class="rounded-full bg-ember-500 py-4 font-medium text-white hover:brightness-110 sm:col-span-2">送出詢問</button>
          </form>
        </div>
        <div>
          <iframe :src="site.contact.mapEmbed" class="h-72 w-full rounded-2xl border-0" loading="lazy" title="地圖" />
          <dl class="mt-6 space-y-2 text-sm">
            <div>{{ site.contact.address }}</div>
            <div>{{ site.contact.access }}</div>
            <div><a :href="`tel:${site.contact.phone}`">{{ site.contact.phone }}</a></div>
          </dl>
        </div>
      </div>
    </section>

    <footer class="bg-moss-900 py-8 text-center text-xs text-moss-300">
      {{ site.license }}｜© {{ new Date().getFullYear() }} {{ site.nameEn }}
    </footer>
    <TemplateBadge />
  </div>
</template>
