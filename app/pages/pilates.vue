<script setup lang="ts">
import site from '~/data/pilates'

useHead({ title: `${site.name} ${site.nameZh}｜${site.tagline}` })
useSeoMeta({ description: site.intro, ogTitle: site.name, ogDescription: site.tagline })

const levelStyle: Record<string, string> = {
  入門: 'bg-sage-100 text-sage-800',
  進階: 'bg-sage-600 text-white',
  私人: 'bg-peach-200 text-sage-800',
}
const day = ref(0) // 手機版一次顯示一天
const openFaq = ref<number | null>(null)
</script>

<template>
  <div class="bg-sage-50 text-sage-800">
    <header class="mx-auto flex max-w-6xl items-center justify-between px-6 py-6">
      <a href="#" class="text-lg font-medium">{{ site.name }}</a>
      <a :href="site.contact.line" target="_blank" class="rounded-full bg-sage-800 px-5 py-2 text-sm text-white hover:bg-sage-600">預約體驗</a>
    </header>

    <!-- Hero：大圓角卡片 -->
    <section class="mx-auto max-w-6xl px-6">
      <div class="grid overflow-hidden rounded-[2.5rem] bg-sage-100 md:grid-cols-2">
        <div class="flex flex-col justify-center p-10 md:p-16">
          <p class="text-sm text-sage-600">{{ site.nameZh }}</p>
          <h1 class="mt-3 font-serif text-5xl font-bold md:text-6xl">{{ site.tagline }}</h1>
          <p class="mt-6 leading-8">{{ site.intro }}</p>
          <div class="mt-10 grid grid-cols-3 gap-4">
            <div v-for="h in site.highlights" :key="h.text">
              <p class="font-serif text-4xl font-bold">{{ h.num }}<span class="text-base">{{ h.unit }}</span></p>
              <p class="text-xs text-sage-600">{{ h.text }}</p>
            </div>
          </div>
        </div>
        <Photo :src="site.heroImage" alt="主視覺" tone="from-sage-300 via-peach-200 to-sage-100" class="min-h-80" />
      </div>
    </section>

    <!-- Schedule -->
    <section class="mx-auto max-w-6xl px-6 py-24">
      <div class="flex flex-wrap items-end justify-between gap-4">
        <h2 class="font-serif text-3xl font-bold">每週課表</h2>
        <div class="flex gap-3 text-xs">
          <span v-for="(cls, l) in levelStyle" :key="l" class="rounded-full px-3 py-1" :class="cls">{{ l }}</span>
        </div>
      </div>
      <!-- 手機：選日期 -->
      <div class="mt-8 flex gap-2 overflow-x-auto md:hidden">
        <button v-for="(d, i) in site.schedule" :key="d.day" class="shrink-0 rounded-full px-4 py-2 text-sm" :class="day === i ? 'bg-sage-800 text-white' : 'bg-white'" @click="day = i">{{ d.day }}</button>
      </div>
      <div class="mt-6 grid gap-3 md:mt-10 md:grid-cols-7">
        <div v-for="(d, i) in site.schedule" :key="d.day" :class="day === i ? 'block' : 'hidden md:block'">
          <p class="mb-3 hidden text-center text-sm font-medium md:block">{{ d.day }}</p>
          <div class="space-y-3">
            <div v-for="c in d.classes" :key="c.time" class="rounded-2xl p-4" :class="levelStyle[c.level]">
              <p class="text-xs opacity-70">{{ c.time }}</p>
              <p class="mt-1 font-medium">{{ c.name }}</p>
              <p class="mt-1 text-xs opacity-70">{{ c.coach }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Plans -->
    <section class="bg-white py-24">
      <div class="mx-auto max-w-5xl px-6">
        <h2 class="text-center font-serif text-3xl font-bold">課程方案</h2>
        <div class="mt-12 grid gap-6 md:grid-cols-3">
          <div v-for="p in site.plans" :key="p.name" class="relative rounded-3xl p-8" :class="p.featured ? 'bg-sage-800 text-white md:-translate-y-4' : 'bg-sage-50'">
            <span v-if="p.featured" class="absolute -top-3 right-6 rounded-full bg-peach-200 px-3 py-1 text-xs text-sage-800">最多人選</span>
            <h3 class="font-medium">{{ p.name }}</h3>
            <p class="mt-4 font-serif text-4xl font-bold">NT$ {{ p.price.toLocaleString() }}<span class="text-sm font-normal opacity-70"> / {{ p.unit }}</span></p>
            <p class="mt-4 text-sm opacity-80">{{ p.desc }}</p>
            <a :href="site.contact.line" target="_blank" class="mt-8 block rounded-full py-3 text-center text-sm" :class="p.featured ? 'bg-white text-sage-800' : 'border border-sage-800 hover:bg-sage-800 hover:text-white'">LINE 預約</a>
          </div>
        </div>
      </div>
    </section>

    <!-- Coaches -->
    <section class="mx-auto max-w-5xl px-6 py-24">
      <h2 class="text-center font-serif text-3xl font-bold">教練團隊</h2>
      <div class="mt-12 grid gap-10 sm:grid-cols-3">
        <div v-for="c in site.coaches" :key="c.name" class="text-center">
          <Photo :src="c.image" :alt="c.name" tone="from-sage-100 to-sage-300" class="mx-auto aspect-square w-40 rounded-full" />
          <h3 class="mt-4 text-lg font-medium">{{ c.name }}</h3>
          <p class="mt-1 text-sm text-sage-600">{{ c.cert }}</p>
        </div>
      </div>
    </section>

    <!-- FAQ -->
    <section class="mx-auto max-w-3xl px-6 pb-24">
      <h2 class="font-serif text-3xl font-bold">常見問題</h2>
      <div class="mt-8 space-y-3">
        <div v-for="(f, i) in site.faq" :key="f.q" class="rounded-2xl bg-white">
          <button class="flex w-full items-center justify-between p-5 text-left font-medium" @click="openFaq = openFaq === i ? null : i">
            {{ f.q }}<span class="text-xl transition" :class="openFaq === i ? 'rotate-45' : ''">+</span>
          </button>
          <p v-if="openFaq === i" class="px-5 pb-5 text-sm leading-7 text-sage-600">{{ f.a }}</p>
        </div>
      </div>
    </section>

    <footer class="bg-sage-800 py-12 text-center text-sm text-sage-100">
      <p>{{ site.contact.address }}</p>
      <p class="mt-1"><a :href="`tel:${site.contact.phone}`">{{ site.contact.phone }}</a></p>
      <p class="mt-6 text-xs text-sage-300">© {{ new Date().getFullYear() }} {{ site.name }}</p>
    </footer>
    <TemplateBadge />
  </div>
</template>
