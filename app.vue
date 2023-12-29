<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<script setup>
onMounted(() => {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animate-delay')
      }
    })
  })

  document.querySelectorAll('.fade-in').forEach((item) => {
    observer.observe(item)
  })
})
</script>
