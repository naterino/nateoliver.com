<template>
    <div class="w-full flex justify-center">
        <BaseHero />
    </div>
    <ClientBlock />
    <div class="my-40 mx-auto max-w-7xl px-6 grid grid-cols-2 gap-y-8 gap-x-4">
        <div v-for="{ title, description, image, link } in dummyPortfolioItems.items" class="basis-1/4 fade-in">
            <img :src="image" :alt="title" />
            <h2 class="font-medium tracking-tight text-2xl my-3">{{ title }}</h2>
            <p>{{ description }}</p>
            <a :href="link" class="text-blue-500 my-3">View Project!</a>
        </div>
    </div>
</template>

<script setup>
const dummyPortfolioItems = {
    items: [
        {
            title: "Portfolio Item 1",
            description: "This is a description of portfolio item 1",
            image: "https://picsum.photos/800/800",
            link: "https://picsum.photos/800/800",
        },
        {
            title: "Portfolio Item 2",
            description: "This is a description of portfolio item 2",
            image: "https://picsum.photos/800/800",
            link: "https://picsum.photos/800/800",
        },
        {
            title: "Portfolio Item 3",
            description: "This is a description of portfolio item 3",
            image: "https://picsum.photos/800/800",
            link: "https://picsum.photos/800/800",
        },
        {
            title: "Portfolio Item 4",
            description: "This is a description of portfolio item 4",
            image: "https://picsum.photos/800/800",
            link: "https://picsum.photos/800/800",
        },
    ],
};
</script>
