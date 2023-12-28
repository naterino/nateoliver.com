<template>
    <div class="w-full bg-gray-100 dark:bg-neutral-800 py-12">
        <div class="max-w-7xl mx-auto px-6 mb-4 flex fade-in">
            <h1 class="md:text-left max-sm:flex-auto align-middle tracking-tight text-2xl md:mr-4">Brands I've been
                working
                with
            </h1>
            <span class="hidden md:flex flex-auto h-px bg-gray-300 dark:neutral-800 self-center"></span>
        </div>
        <div
            class="max-w-7xl mx-auto p-7 grid grid-flow-row justify-items-center gap-8 md:grid-cols-none md:grid-flow-col md:justify-between fade-in">
            <a v-for="client in clients" :href="client.url">
                <img :src="client.logoUrl" :alt="client.name" class="object-contain h-9 dark:invert" />
            </a>
        </div>
    </div>
</template>

<script setup>
const clients = ref([
    {
        name: "Dime Montreal",
        url: "https://dimemtl.com/",
        logoUrl: "/img/client-logos/dime.png",
    },
    {
        name: "Vans",
        url: "https://www.vans.ca/",
        logoUrl: "/img/client-logos/vans.png",
    },
    {
        name: "Thief and Bandit",
        url: "https://thiefandbandit.com/",
        logoUrl: "/img/client-logos/thiefandbandit.png",
    },
    {
        name: "rchmnd",
        url: "https://rchmndshop.com/",
        logoUrl: "/img/client-logos/rchmnd.png",
    }
]);
</script>
