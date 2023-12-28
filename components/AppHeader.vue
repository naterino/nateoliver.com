<template>
    <div class="sticky top-0 z-10 bg-white dark:bg-neutral-900">
        <nav class="max-w-7xl px-6 mx-auto flex items-center py-6">
            <a class="flex items-center">
                <h1 class="font-sans font-medium tracking-tight text-3xl">Nate Oliver</h1>
            </a>
            <button @click="open = !open" class="lg:hidden ml-auto mr-4">
                <!-- Hamburger icon -->
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"
                    class="h-6 w-6">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16">
                    </path>
                </svg>
            </button>
            <ul :class="{ 'translate-x-0': open, 'translate-x-full lg:translate-x-0': !open }"
                class="ml-auto medium:mr-4 fixed lg:relative text-right lg:top-auto transition-transform right-0 top-16 py-8 px-4 bottom-0 flex flex-col lg:flex-row w-56 lg:w-auto gap-4 dark:bg-neutral-900 bg-white ">
                <li v-for="{ name, link } in dummyNav">
                    <NuxtLink :to="link">{{ name }}</NuxtLink>
                </li>
            </ul>
            <button @click="toggleDark">
                <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-moon-filled" width="30"
                    height="30" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none"
                    stroke-linecap="round" stroke-linejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <path
                        d="M12 1.992a10 10 0 1 0 9.236 13.838c.341 -.82 -.476 -1.644 -1.298 -1.31a6.5 6.5 0 0 1 -6.864 -10.787l.077 -.08c.551 -.63 .113 -1.653 -.758 -1.653h-.266l-.068 -.006l-.06 -.002z"
                        stroke-width="0" fill="currentColor" />
                </svg>
            </button>
        </nav>
    </div>
</template>

<script setup>
const open = ref(false);
const dark = ref(false);

const toggleDark = () => {
    dark.value = !dark.value;
    document.querySelector("html").classList.toggle("dark");
};

const dummyNav = [
    {
        name: "Home",
        link: "/",
    },
    {
        name: "About",
        link: "/about",
    },
    {
        name: "Projects",
        link: "/projects",
    },
    {
        name: "Contact",
        link: "/contact",
    },
];
</script>
