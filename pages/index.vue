<template>
  <div>
    <div class="flex w-full justify-center">
      <BaseHero />
    </div>
    <ClientBlock />
    <div class="mx-auto my-40 grid max-w-7xl grid-cols-2 gap-x-4 gap-y-8 px-6">
      <div v-for="{ title, description, image, link } in dummyPortfolioItems.items" :key="title" class="fade-in basis-1/4">
        <img :src="image" :alt="title">
        <h2 class="my-3 text-2xl font-medium tracking-tight">
          {{ title }}
        </h2>
        <p>{{ description }}</p>
        <a :href="link" class="my-3 text-blue-500">View Project!</a>
      </div>
    </div>
    <ContactForm />
  </div>
</template>

<script setup>
const dummyPortfolioItems = {
  items: [
    {
      title: 'Portfolio Item 1',
      description: 'This is a description of portfolio item 1',
      image: 'https://picsum.photos/800/800',
      link: 'https://picsum.photos/800/800'
    },
    {
      title: 'Portfolio Item 2',
      description: 'This is a description of portfolio item 2',
      image: 'https://picsum.photos/800/800',
      link: 'https://picsum.photos/800/800'
    },
    {
      title: 'Portfolio Item 3',
      description: 'This is a description of portfolio item 3',
      image: 'https://picsum.photos/800/800',
      link: 'https://picsum.photos/800/800'
    },
    {
      title: 'Portfolio Item 4',
      description: 'This is a description of portfolio item 4',
      image: 'https://picsum.photos/800/800',
      link: 'https://picsum.photos/800/800'
    }
  ]
}
</script>
