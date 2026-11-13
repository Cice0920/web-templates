<!--
  圖片元件：有 src 就顯示圖片；沒有就顯示漸層佔位圖。
  接案時把 data/*.ts 裡的 image 換成客戶照片（放 public/images/）即可。
-->
<script setup lang="ts">
defineProps<{ src?: string; alt?: string; tone?: string; label?: string }>()
</script>

<template>
  <div class="relative overflow-hidden">
    <img v-if="src" :src="src" :alt="alt ?? ''" loading="lazy" class="h-full w-full object-cover" />
    <div v-else class="flex h-full w-full items-center justify-center bg-gradient-to-br" :class="tone ?? 'from-stone-200 to-stone-400'">
      <span class="rounded-full bg-white/40 px-3 py-1 text-xs tracking-widest text-black/50 backdrop-blur">
        {{ label ?? alt ?? 'PHOTO' }}
      </span>
    </div>
  </div>
</template>
