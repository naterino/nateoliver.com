<template>
  <div class="w-full bg-gray-100 py-12 dark:bg-neutral-800">
    <div class="fade-in mx-auto mb-4 flex max-w-7xl px-6">
      <h1 class="align-middle text-2xl tracking-tight max-sm:flex-auto md:mr-4 md:text-left">
        Brands I've been
        working
        with
      </h1>
      <span class="hidden h-px flex-auto self-center bg-gray-300 md:flex dark:bg-neutral-800" />
    </div>
    <div
      class="fade-in mx-auto grid max-w-7xl grid-flow-row justify-items-center gap-8 p-7 md:grid-flow-col md:grid-cols-none md:justify-between"
    >
      <a v-for="client in clients" :key="client.name" :href="client.url">
        <img :src="client.logoUrl" :alt="client.name" class="h-9 object-contain dark:invert">
      </a>
    </div>
  </div>
</template>

<script setup>
const clients = ref([
  {
    name: 'Dime Montreal',
    url: 'https://dimemtl.com/',
    logoUrl: '/img/client-logos/dime.png'
  },
  {
    name: 'Vans',
    url: 'https://www.vans.ca/',
    logoUrl: '/img/client-logos/vans.png'
  },
  {
    name: 'Thief and Bandit',
    url: 'https://thiefandbandit.com/',
    logoUrl: '/img/client-logos/thiefandbandit.png'
  },
  {
    name: 'rchmnd',
    url: 'https://rchmndshop.com/',
    logoUrl: '/img/client-logos/rchmnd.png'
  }
])
</script>
