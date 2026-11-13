<script setup lang="ts">
import site from '~/data/oldhouse'

useHead({ title: `${site.name} ${site.nameEn}｜${site.tagline}` })
useSeoMeta({ description: site.intro, ogTitle: site.nameEn, ogDescription: site.tagline })

// 周邊美食依類型篩選
const types = ['全部', ...new Set(site.nearby.map((n) => n.type))]
const type = ref('全部')
const nearby = computed(() => (type.value === '全部' ? site.nearby : site.nearby.filter((n) => n.type === type.value)))
const tones = ['from-cream-100 to-brick-600/60', 'from-tile-600/40 to-cream-100', 'from-brick-600/50 to-ink-900/70']
</script>

<template>
  <div class="bg-cream-50 text-ink-900">
    <header class="border-b-4 border-double border-brick-600">
      <div class="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
        <a href="#" class="flex items-center gap-3">
          <span class="flex h-10 w-10 items-center justify-center bg-brick-600 font-serif text-lg font-bold text-cream-50">{{ site.name[0] }}</span>
          <span class="font-serif text-xl font-bold">{{ site.name }}</span>
        </a>
        <nav class="flex gap-6 text-sm">
          <a href="#rooms" class="hover:text-brick-600">房型</a>
          <a href="#nearby" class="hidden hover:text-brick-600 sm:inline">周邊</a>
          <a href="#contact" class="hover:text-brick-600">訂房</a>
        </nav>
      </div>
    </header>

    <!-- Hero：直書標題 + 拱門照片 -->
    <section class="mx-auto grid max-w-6xl items-center gap-12 px-6 py-20 md:grid-cols-[auto_1fr_1fr]">
      <h1 class="hidden font-serif text-5xl leading-tight font-bold text-brick-600 [writing-mode:vertical-rl] md:block">{{ site.tagline }}</h1>
      <h1 class="font-serif text-4xl font-bold text-brick-600 md:hidden">{{ site.tagline }}</h1>
      <Photo :src="site.heroImage" alt="主視覺" tone="from-cream-100 via-brick-600/50 to-ink-900/70" class="aspect-[3/4] rounded-t-full border-8 border-white shadow-xl" />
      <div>
        <p class="text-xs tracking-[0.4em] text-tile-600">{{ site.nameEn.toUpperCase() }}</p>
        <p class="mt-6 leading-8">{{ site.intro }}</p>
        <a href="#contact" class="mt-8 inline-block bg-brick-600 px-8 py-3 text-cream-50 hover:bg-brick-700">查詢空房</a>
      </div>
    </section>

    <!-- Story：年表 -->
    <section class="bg-ink-900 py-20 text-cream-100">
      <div class="mx-auto max-w-6xl px-6">
        <h2 class="font-serif text-3xl font-bold">老屋的故事</h2>
        <div class="mt-12 grid gap-10 md:grid-cols-3">
          <div v-for="s in site.story" :key="s.year" class="border-t border-cream-100/30 pt-6">
            <p class="font-serif text-5xl font-bold text-brick-600">{{ s.year }}</p>
            <p class="mt-4 leading-7 text-cream-100/80">{{ s.text }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Rooms -->
    <section id="rooms" class="mx-auto max-w-6xl px-6 py-24">
      <h2 class="text-center font-serif text-3xl font-bold">房型</h2>
      <div class="mx-auto mt-3 h-1 w-12 bg-brick-600" />
      <div class="mt-14 grid gap-10 md:grid-cols-3">
        <article v-for="(r, i) in site.rooms" :key="r.name" class="bg-white p-4 shadow-[6px_6px_0_var(--color-cream-100)]">
          <Photo :src="r.image" :alt="r.name" :tone="tones[i % 3]" class="aspect-square" />
          <div class="p-2 pt-5">
            <div class="flex items-baseline justify-between">
              <h3 class="font-serif text-xl font-bold">{{ r.name }}</h3>
              <span class="text-sm text-tile-600">{{ r.guests }} 人</span>
            </div>
            <p class="mt-2 text-sm leading-6 text-ink-900/70">{{ r.desc }}</p>
            <p class="mt-4 font-serif text-xl text-brick-600">NT$ {{ r.price.toLocaleString() }} 起</p>
          </div>
        </article>
      </div>
    </section>

    <!-- Nearby -->
    <section id="nearby" class="bg-cream-100 py-24">
      <div class="mx-auto max-w-4xl px-6">
        <h2 class="font-serif text-3xl font-bold">走路就到</h2>
        <div class="mt-8 flex flex-wrap gap-2">
          <button v-for="t in types" :key="t" class="border px-4 py-1.5 text-sm" :class="type === t ? 'border-brick-600 bg-brick-600 text-cream-50' : 'border-ink-900/30 hover:border-brick-600'" @click="type = t">{{ t }}</button>
        </div>
        <ul class="mt-8 grid gap-3 sm:grid-cols-2">
          <li v-for="n in nearby" :key="n.name" class="flex items-center justify-between bg-cream-50 px-5 py-4">
            <div>
              <p class="font-medium">{{ n.name }}</p>
              <p class="text-xs text-tile-600">{{ n.type }}</p>
            </div>
            <span class="font-serif text-2xl text-brick-600">{{ n.walk }}<span class="text-xs text-ink-900/60"> 分鐘</span></span>
          </li>
        </ul>
      </div>
    </section>

    <!-- Rules + Contact -->
    <section id="contact" class="mx-auto grid max-w-6xl gap-12 px-6 py-24 md:grid-cols-2">
      <div>
        <h2 class="font-serif text-3xl font-bold">入住須知</h2>
        <ol class="mt-8 space-y-4">
          <li v-for="(r, i) in site.rules" :key="r" class="flex gap-4">
            <span class="flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-brick-600 text-sm text-brick-600">{{ i + 1 }}</span>{{ r }}
          </li>
        </ol>
        <div class="mt-10 flex flex-wrap gap-3">
          <a :href="site.contact.line" target="_blank" class="bg-brick-600 px-6 py-3 text-cream-50 hover:bg-brick-700">LINE 訂房</a>
          <a :href="`mailto:${site.contact.email}`" class="border border-ink-900 px-6 py-3 hover:bg-ink-900 hover:text-cream-50">Email 詢問</a>
        </div>
        <dl class="mt-8 space-y-1 text-sm text-ink-900/70">
          <div>{{ site.contact.address }}</div>
          <div><a :href="`tel:${site.contact.phone}`">{{ site.contact.phone }}</a></div>
        </dl>
      </div>
      <iframe :src="site.contact.mapEmbed" class="min-h-80 w-full border-8 border-white shadow-lg" loading="lazy" title="地圖" />
    </section>

    <footer class="border-t-4 border-double border-brick-600 py-8 text-center text-xs text-ink-900/60">
      {{ site.license }}｜© {{ new Date().getFullYear() }} {{ site.nameEn }}
    </footer>
    <TemplateBadge />
  </div>
</template>
