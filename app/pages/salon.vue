<script setup lang="ts">
import site from '~/data/salon'

useHead({ title: `${site.name} ${site.nameZh}｜${site.taglineZh}` })
useSeoMeta({ description: site.intro, ogTitle: `${site.name} ${site.nameZh}`, ogDescription: site.taglineZh })

const level = ref(0)
const tones = ['from-zinc-200 to-zinc-400', 'from-clay-100 to-clay-500', 'from-zinc-300 to-zinc-600']
</script>

<template>
  <div class="bg-white text-zinc-900">
    <header class="fixed inset-x-0 top-0 z-40 mix-blend-difference text-white">
      <div class="mx-auto flex max-w-7xl items-center justify-between px-6 py-6">
        <a href="#" class="text-2xl font-black tracking-[0.2em]">{{ site.name }}</a>
        <nav class="flex gap-6 text-xs tracking-widest">
          <a href="#price">PRICE</a>
          <a href="#team">STYLIST</a>
          <a href="#book">BOOK</a>
        </nav>
      </div>
    </header>

    <!-- Hero：雜誌封面風 -->
    <section class="relative grid min-h-screen md:grid-cols-2">
      <div class="flex flex-col justify-end bg-zinc-900 px-6 pt-32 pb-16 text-white md:px-12">
        <h1 class="text-6xl leading-[0.95] font-black uppercase md:text-8xl">
          <span v-for="w in site.tagline.split(' ')" :key="w" class="block">{{ w }}</span>
        </h1>
        <p class="mt-8 text-lg">{{ site.taglineZh }}</p>
        <a :href="site.contact.booking" target="_blank" class="mt-10 w-fit bg-white px-8 py-4 text-sm font-bold tracking-widest text-zinc-900 hover:bg-clay-500 hover:text-white">
          預約時段
        </a>
      </div>
      <Photo :src="site.heroImage" alt="主視覺" tone="from-clay-100 via-zinc-300 to-zinc-500" class="min-h-[60vh]" />
    </section>

    <!-- Intro -->
    <section class="mx-auto max-w-4xl px-6 py-28 text-center">
      <p class="text-xs tracking-[0.4em] text-clay-500">PHILOSOPHY</p>
      <p class="mt-8 text-2xl leading-relaxed font-medium md:text-3xl">{{ site.intro }}</p>
    </section>

    <!-- Price：依等級切換 -->
    <section id="price" class="bg-zinc-100 py-28">
      <div class="mx-auto max-w-4xl px-6">
        <div class="flex flex-wrap items-end justify-between gap-6">
          <h2 class="text-5xl font-black">PRICE</h2>
          <div class="flex border border-zinc-900">
            <button v-for="(l, i) in site.levels" :key="l" class="px-6 py-2 text-sm transition" :class="level === i ? 'bg-zinc-900 text-white' : 'hover:bg-zinc-200'" @click="level = i">{{ l }}</button>
          </div>
        </div>
        <ul class="mt-12 divide-y divide-zinc-300 border-y border-zinc-300">
          <li v-for="s in site.services" :key="s.name" class="flex items-center justify-between gap-6 py-6">
            <div>
              <h3 class="text-lg font-bold">{{ s.name }}</h3>
              <p v-if="s.note" class="mt-1 text-sm text-zinc-500">{{ s.note }}</p>
            </div>
            <span class="text-xl font-bold tabular-nums">NT$ {{ s.prices[level]!.toLocaleString() }}</span>
          </li>
        </ul>
      </div>
    </section>

    <!-- Team -->
    <section id="team" class="mx-auto max-w-7xl px-6 py-28">
      <h2 class="text-5xl font-black">STYLIST</h2>
      <div class="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
        <article v-for="(t, i) in site.team" :key="t.name" class="group">
          <Photo :src="t.image" :alt="t.name" :tone="tones[i % 3]" class="aspect-[3/4] grayscale transition group-hover:grayscale-0" />
          <div class="mt-4 flex items-baseline justify-between">
            <h3 class="text-2xl font-black">{{ t.name }}</h3>
            <span class="text-xs tracking-widest text-clay-500">{{ t.role }}</span>
          </div>
          <p class="mt-1 text-sm text-zinc-500">擅長：{{ t.skill }}</p>
        </article>
      </div>
    </section>

    <!-- Lookbook -->
    <section class="grid grid-cols-2 gap-1 md:grid-cols-3">
      <Photo v-for="(g, i) in site.lookbook" :key="g.name" :src="g.image" :alt="g.name" :tone="tones[i % 3]" class="aspect-[3/4]" />
    </section>

    <!-- Book -->
    <section id="book" class="bg-clay-500 py-28 text-white">
      <div class="mx-auto flex max-w-5xl flex-col justify-between gap-10 px-6 md:flex-row md:items-end">
        <div>
          <h2 class="text-5xl font-black md:text-7xl">BOOK NOW</h2>
          <dl class="mt-8 space-y-2">
            <div>{{ site.contact.address }}</div>
            <div>{{ site.contact.hours }}</div>
            <div><a :href="`tel:${site.contact.phone}`">{{ site.contact.phone }}</a></div>
          </dl>
        </div>
        <div class="flex gap-3">
          <a :href="site.contact.booking" target="_blank" class="bg-white px-8 py-4 text-sm font-bold tracking-widest text-clay-500 hover:bg-zinc-900 hover:text-white">LINE 預約</a>
          <a :href="site.contact.instagram" target="_blank" class="border border-white px-8 py-4 text-sm font-bold tracking-widest hover:bg-white hover:text-clay-500">Instagram</a>
        </div>
      </div>
    </section>

    <footer class="bg-zinc-900 py-8 text-center text-xs text-zinc-500">© {{ new Date().getFullYear() }} {{ site.name }} {{ site.nameZh }}</footer>
    <TemplateBadge />
  </div>
</template>
