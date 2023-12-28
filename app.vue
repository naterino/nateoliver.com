<template>
  <NuxtLayout>
    <NuxtPage></NuxtPage>
  </NuxtLayout>
</template>

<script setup>
onMounted(() => {

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animate-delay');
      }
    })
  })

  document.querySelectorAll('.fade-in').forEach(item => {
    observer.observe(item);
  })















  // let delay = 0.2;

  // const observer = new IntersectionObserver(
  //   (entries) => {
  //     entries.forEach((entry) => {
  //       if (entry.isIntersecting) {
  //         entry.target.classList.add('animate-delay');
  //         delay += 0.2; // increment the delay for each element
  //       }
  //     });
  //   },
  //   {
  //     threshold: 0.5,
  //   }
  // );
  // document.querySelectorAll('.fade-in').forEach((item) => {
  //   observer.observe(item);
  // });
});
</script>
