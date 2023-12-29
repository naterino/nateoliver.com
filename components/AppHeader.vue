<template>
  <div class="sticky top-0 z-10 bg-white dark:bg-neutral-900">
    <nav class="mx-auto flex max-w-7xl items-center p-6">
      <a class="flex items-center">
        <h1 class="font-sans text-3xl font-medium tracking-tight">Nate Oliver</h1>
      </a>
      <button class="z-30 ml-auto mr-4 lg:hidden" @click="open = !open">
        <!-- Hamburger icon -->
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          class="h-6 w-6"
        >
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </button>
      <div class="fixed inset-0 bg-black transition-opacity lg:hidden" :class="{ 'w-full opacity-50 ': open, 'w-0 opacity-0': !open }" @click="open = !open" />
      <ul
        :class="{ 'translate-x-0': open, 'translate-x-full lg:translate-x-0': !open }"
        class="medium:mr-4 fixed inset-y-0 right-0 ml-auto flex w-56 flex-col gap-4 bg-white px-4 py-24 text-right transition-transform lg:relative lg:top-auto lg:w-auto lg:flex-row dark:bg-neutral-900"
      >
        <li v-for="{ name, link } in dummyNav" :key="link">
          <NuxtLink :to="link">
            {{ name }}
          </NuxtLink>
        </li>
      </ul>
      <button class="z-40" @click="toggleDark">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="icon icon-tabler icon-tabler-moon-filled"
          width="30"
          height="30"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          fill="none"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <path
            d="M12 1.992a10 10 0 1 0 9.236 13.838c.341 -.82 -.476 -1.644 -1.298 -1.31a6.5 6.5 0 0 1 -6.864 -10.787l.077 -.08c.551 -.63 .113 -1.653 -.758 -1.653h-.266l-.068 -.006l-.06 -.002z"
            stroke-width="0"
            fill="currentColor"
          />
        </svg>
      </button>
    </nav>
  </div>
</template>

<script setup>
const open = ref(false)
const dark = ref(false)

const isDarkMode = () => typeof window !== 'undefined' && window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches

if (isDarkMode()) {
  dark.value = true
  document.querySelector('html').classList.add('dark')
}

const toggleDark = () => {
  dark.value = !dark.value
  document.querySelector('html').classList.toggle('dark')
}

const dummyNav = [
  {
    name: 'Home',
    link: '/'
  },
  {
    name: 'About',
    link: '/about'
  },
  {
    name: 'Projects',
    link: '/projects'
  },
  {
    name: 'Contact',
    link: '/contact'
  }
]
</script>
