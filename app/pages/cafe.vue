<script setup lang="ts">
import site from '~/data/cafe'

useHead({ title: `${site.name}｜${site.tagline}` })
useSeoMeta({ description: site.intro, ogTitle: site.name, ogDescription: site.tagline })

const nav = [
  { href: '#about', label: '關於' },
  { href: '#menu', label: '菜單' },
  { href: '#visit', label: '來店' },
]
const menuOpen = ref(false)
const activeCat = ref(0)
const galleryTones = ['from-bean-100 to-bean-300', 'from-bean-300 to-bean-600', 'from-bean-600 to-bean-800', 'from-bean-100 to-bean-600']
</script>

<template>
  <div class="bg-bean-50 text-bean-900">
    <!-- Header -->
    <header class="fixed inset-x-0 top-0 z-40 bg-bean-50/90 backdrop-blur">
      <div class="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a href="#top" class="font-serif text-xl font-bold tracking-wide">{{ site.name }}</a>
        <nav class="hidden gap-8 text-sm md:flex">
          <a v-for="n in nav" :key="n.href" :href="n.href" class="hover:text-bean-600">{{ n.label }}</a>
        </nav>
        <a :href="site.contact.bookingUrl" target="_blank" class="hidden rounded-full bg-bean-800 px-5 py-2 text-sm text-bean-50 hover:bg-bean-600 md:inline-block">
          線上訂位
        </a>
        <button class="md:hidden" aria-label="選單" @click="menuOpen = !menuOpen">
          <svg class="h-6 w-6" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M4 7h16M4 12h16M4 17h16" /></svg>
        </button>
      </div>
      <nav v-if="menuOpen" class="flex flex-col gap-4 border-t border-bean-100 px-6 py-4 md:hidden">
        <a v-for="n in nav" :key="n.href" :href="n.href" @click="menuOpen = false">{{ n.label }}</a>
        <a :href="site.contact.bookingUrl" target="_blank" class="text-bean-600">線上訂位 →</a>
      </nav>
    </header>

    <!-- Hero -->
    <section id="top" class="relative flex min-h-[90vh] items-end">
      <Photo :src="site.heroImage" alt="主視覺" tone="from-bean-300 via-bean-600 to-bean-900" class="absolute inset-0" />
      <div class="absolute inset-0 bg-gradient-to-t from-bean-900/80 via-bean-900/20 to-transparent" />
      <div class="relative mx-auto w-full max-w-6xl px-6 pb-20 text-bean-50">
        <p class="mb-3 text-sm tracking-[0.3em] text-bean-100">{{ site.nameEn.toUpperCase() }}</p>
        <h1 class="font-serif text-4xl leading-tight font-bold md:text-6xl">{{ site.tagline }}</h1>
        <div class="mt-8 flex gap-4">
          <a href="#menu" class="rounded-full bg-bean-50 px-6 py-3 text-sm font-medium text-bean-900 hover:bg-bean-100">看菜單</a>
          <a href="#visit" class="rounded-full border border-bean-50 px-6 py-3 text-sm hover:bg-bean-50/10">交通資訊</a>
        </div>
      </div>
    </section>

    <!-- About -->
    <section id="about" class="mx-auto grid max-w-6xl gap-12 px-6 py-24 md:grid-cols-2 md:items-center">
      <div>
        <p class="text-sm tracking-[0.3em] text-bean-600">ABOUT</p>
        <h2 class="mt-2 font-serif text-3xl font-bold">關於我們</h2>
        <p class="mt-6 leading-8 text-bean-800">{{ site.intro }}</p>
        <div class="mt-10 grid gap-6 sm:grid-cols-3">
          <div v-for="f in site.features" :key="f.title" class="border-t-2 border-bean-300 pt-4">
            <h3 class="font-bold">{{ f.title }}</h3>
            <p class="mt-2 text-sm text-bean-600">{{ f.text }}</p>
          </div>
        </div>
      </div>
      <Photo alt="店內照片" tone="from-bean-100 to-bean-300" class="aspect-[4/5] rounded-t-full" />
    </section>

    <!-- Menu -->
    <section id="menu" class="bg-bean-900 py-24 text-bean-50">
      <div class="mx-auto max-w-4xl px-6">
        <div class="text-center">
          <p class="text-sm tracking-[0.3em] text-bean-300">MENU</p>
          <h2 class="mt-2 font-serif text-3xl font-bold">菜單</h2>
        </div>
        <div class="mt-10 flex flex-wrap justify-center gap-2">
          <button
            v-for="(c, i) in site.menu"
            :key="c.category"
            class="rounded-full px-5 py-2 text-sm transition"
            :class="activeCat === i ? 'bg-bean-50 text-bean-900' : 'text-bean-100 hover:bg-bean-800'"
            @click="activeCat = i"
          >
            {{ c.category }}
          </button>
        </div>
        <ul class="mt-12 space-y-8">
          <li v-for="item in site.menu[activeCat]!.items" :key="item.name" class="flex items-baseline gap-4">
            <div>
              <p class="font-medium">{{ item.name }}</p>
              <p v-if="item.desc" class="mt-1 text-sm text-bean-300">{{ item.desc }}</p>
            </div>
            <span class="flex-1 border-b border-dashed border-bean-600" />
            <span class="font-serif whitespace-nowrap">NT$ {{ item.price }}</span>
          </li>
        </ul>
      </div>
    </section>

    <!-- Gallery -->
    <section class="grid grid-cols-2 md:grid-cols-4">
      <Photo v-for="(g, i) in site.gallery" :key="g" :alt="g" class="aspect-square" :tone="galleryTones[i % 4]" />
    </section>

    <!-- Visit -->
    <section id="visit" class="mx-auto grid max-w-6xl gap-12 px-6 py-24 md:grid-cols-2">
      <div>
        <p class="text-sm tracking-[0.3em] text-bean-600">VISIT</p>
        <h2 class="mt-2 font-serif text-3xl font-bold">來店資訊</h2>
        <table class="mt-8 w-full text-left">
          <tbody>
            <tr v-for="h in site.hours" :key="h.day" class="border-b border-bean-100">
              <th class="py-3 font-medium">{{ h.day }}</th>
              <td class="py-3 text-right text-bean-600">{{ h.time }}</td>
            </tr>
          </tbody>
        </table>
        <dl class="mt-8 space-y-3 text-sm">
          <div class="flex gap-4"><dt class="w-12 text-bean-600">地址</dt><dd>{{ site.contact.address }}</dd></div>
          <div class="flex gap-4"><dt class="w-12 text-bean-600">電話</dt><dd><a :href="`tel:${site.contact.phone}`">{{ site.contact.phone }}</a></dd></div>
        </dl>
        <div class="mt-8 flex gap-3">
          <a :href="site.contact.instagram" target="_blank" class="rounded-full border border-bean-800 px-5 py-2 text-sm hover:bg-bean-800 hover:text-bean-50">Instagram</a>
          <a :href="site.contact.line" target="_blank" class="rounded-full border border-bean-800 px-5 py-2 text-sm hover:bg-bean-800 hover:text-bean-50">LINE</a>
        </div>
      </div>
      <iframe :src="site.contact.mapEmbed" class="min-h-80 w-full rounded-2xl border-0" loading="lazy" title="地圖" />
    </section>

    <footer class="border-t border-bean-100 py-8 text-center text-xs text-bean-600">
      © {{ new Date().getFullYear() }} {{ site.name }} {{ site.nameEn }}
    </footer>
    <TemplateBadge />
  </div>
</template>
