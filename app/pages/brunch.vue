<script setup lang="ts">
import site from '~/data/brunch'

useHead({ title: `${site.name}｜${site.tagline.join('')}` })
useSeoMeta({ description: site.intro, ogTitle: site.name, ogDescription: site.intro })

// 篩選按鈕從菜單 tags 自動產生
const tags = ['全部', ...new Set(site.menu.flatMap((m) => m.tags))]
const activeTag = ref('全部')
const filtered = computed(() =>
  activeTag.value === '全部' ? site.menu : site.menu.filter((m) => m.tags.includes(activeTag.value)),
)
const tones = ['from-yolk-100 to-yolk-400', 'from-stone-100 to-stone-300', 'from-yolk-100 to-stone-200']
</script>

<template>
  <div class="bg-[#fbfaf7] text-stone-900">
    <header class="mx-auto flex max-w-6xl items-center justify-between px-6 py-6">
      <a href="#" class="text-lg font-bold tracking-tight">{{ site.name }}</a>
      <nav class="flex gap-6 text-sm">
        <a href="#menu" class="hover:text-yolk-600">菜單</a>
        <a href="#visit" class="hover:text-yolk-600">來店</a>
      </nav>
    </header>

    <!-- Hero：大字 + 圓形照片 -->
    <section class="mx-auto grid max-w-6xl items-center gap-10 px-6 pt-10 pb-24 md:grid-cols-[1.2fr_1fr]">
      <div>
        <h1 class="text-6xl leading-[1.1] font-bold tracking-tight md:text-8xl">
          <span v-for="(line, i) in site.tagline" :key="i" class="block" :class="i === 1 ? 'text-yolk-400' : ''">{{ line }}</span>
        </h1>
        <p class="mt-8 max-w-md leading-8 text-stone-600">{{ site.intro }}</p>
        <a href="#menu" class="mt-8 inline-flex items-center gap-2 border-b-2 border-stone-900 pb-1 font-medium hover:gap-4 hover:border-yolk-400 transition-all">
          看今天吃什麼 <span>→</span>
        </a>
      </div>
      <div class="relative">
        <div class="absolute -top-6 -left-6 h-24 w-24 rounded-full bg-yolk-400" />
        <Photo :src="site.heroImage" alt="主視覺" tone="from-yolk-100 via-yolk-400 to-yolk-600" class="relative aspect-square rounded-full" />
      </div>
    </section>

    <!-- Menu -->
    <section id="menu" class="border-t border-stone-200 py-24">
      <div class="mx-auto max-w-6xl px-6">
        <div class="flex flex-wrap items-end justify-between gap-6">
          <h2 class="text-4xl font-bold tracking-tight">All Day Menu</h2>
          <div class="flex flex-wrap gap-2">
            <button
              v-for="t in tags"
              :key="t"
              class="rounded-full border px-4 py-1.5 text-sm transition"
              :class="activeTag === t ? 'border-stone-900 bg-stone-900 text-white' : 'border-stone-300 hover:border-stone-900'"
              @click="activeTag = t"
            >
              {{ t }}
            </button>
          </div>
        </div>
        <TransitionGroup tag="div" name="fade" class="mt-12 grid gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
          <article v-for="(m, i) in filtered" :key="m.name">
            <Photo :src="m.image" :alt="m.name" :tone="tones[i % 3]" class="aspect-[4/3] rounded-2xl" />
            <div class="mt-4 flex items-baseline justify-between gap-4">
              <h3 class="text-lg font-bold">{{ m.name }}</h3>
              <span class="font-medium">${{ m.price }}</span>
            </div>
            <p class="mt-1 text-sm leading-6 text-stone-500">{{ m.desc }}</p>
            <div class="mt-3 flex gap-2">
              <span v-for="t in m.tags" :key="t" class="rounded bg-yolk-100 px-2 py-0.5 text-xs text-yolk-600">{{ t }}</span>
            </div>
          </article>
        </TransitionGroup>

        <div class="mt-20 rounded-3xl bg-yolk-100 p-8 md:p-12">
          <h3 class="text-sm font-bold tracking-[0.3em] text-yolk-600">DRINKS</h3>
          <ul class="mt-6 grid gap-4 sm:grid-cols-2 md:grid-cols-4">
            <li v-for="d in site.drinks" :key="d.name" class="flex justify-between border-b border-yolk-400/40 pb-2">
              <span>{{ d.name }}</span><span>${{ d.price }}</span>
            </li>
          </ul>
        </div>
      </div>
    </section>

    <!-- Gallery：橫向捲動 -->
    <section class="flex snap-x gap-4 overflow-x-auto px-6 pb-24">
      <Photo v-for="(g, i) in site.gallery" :key="g.name" :src="g.image" :alt="g.name" :tone="tones[i % 3]" class="aspect-[3/4] w-60 shrink-0 snap-start rounded-2xl" />
    </section>

    <!-- Visit -->
    <section id="visit" class="bg-stone-900 py-24 text-stone-100">
      <div class="mx-auto grid max-w-6xl gap-12 px-6 md:grid-cols-2">
        <div>
          <h2 class="text-4xl font-bold tracking-tight">來店之前</h2>
          <ul class="mt-8 space-y-4">
            <li v-for="n in site.notes" :key="n" class="flex gap-3">
              <span class="mt-2 h-2 w-2 shrink-0 rounded-full bg-yolk-400" />{{ n }}
            </li>
          </ul>
          <dl class="mt-10 space-y-2 text-sm text-stone-400">
            <div>{{ site.contact.address }}</div>
            <div><a :href="`tel:${site.contact.phone}`" class="hover:text-white">{{ site.contact.phone }}</a></div>
            <div><a :href="site.contact.instagram" target="_blank" class="hover:text-white">Instagram ↗</a></div>
          </dl>
        </div>
        <iframe :src="site.contact.mapEmbed" class="min-h-80 w-full rounded-2xl border-0 grayscale" loading="lazy" title="地圖" />
      </div>
    </section>

    <footer class="bg-stone-900 pb-8 text-center text-xs text-stone-500">© {{ new Date().getFullYear() }} {{ site.nameEn }}</footer>
    <TemplateBadge />
  </div>
</template>

<style scoped>
.fade-enter-active, .fade-leave-active { transition: opacity .25s, transform .25s; }
.fade-enter-from, .fade-leave-to { opacity: 0; transform: translateY(8px); }
.fade-leave-active { position: absolute; }
</style>
