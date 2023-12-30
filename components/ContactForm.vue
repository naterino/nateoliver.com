<template>
  <form
    name="contact"
    method="POST"
    netlify
    netlify-honeypot
    class="mx-auto mb-4 max-w-7xl rounded px-8 pb-8 pt-6 text-sm shadow-md"
    @submit="handleSubmit"
  >
    <input type="hidden" name="form-name" value="contact">
    <div class="mb-4">
      <label class="mb-2 block" for="name">
        Your Name:
      </label>
      <input id="name" name="name" class="focus:shadow-outline w-full appearance-none rounded border px-3 py-2 leading-tight text-gray-700 shadow focus:outline-none" type="text">
    </div>
    <div class="mb-4">
      <label class="mb-2" for="email">
        Your Email:
      </label>
      <input id="email" name="email" class="focus:shadow-outline w-full appearance-none rounded border px-3 py-2 leading-tight text-gray-700 shadow focus:outline-none" type="email">
    </div>
    <div class="mb-6">
      <label class="mb-2 block" for="message">
        Message:
      </label>
      <textarea id="message" name="message" class="focus:shadow-outline w-full appearance-none rounded border px-3 py-2 leading-tight text-gray-700 shadow focus:outline-none" />
    </div>
    <div class="flex items-center justify-between">
      <button class="focus:shadow-outline rounded bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-700 focus:outline-none" type="submit">
        Send
      </button>
    </div>
  </form>
</template>

<script setup>

const handleSubmit = (event) => {
  event.preventDefault()

  const myForm = event.target
  const formData = new FormData(myForm)

  fetch('/', {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: new URLSearchParams(formData).toString()
  })
    .then(() => alert('Thank you for your submission'))
    .catch(error => alert(error))
}

</script>
