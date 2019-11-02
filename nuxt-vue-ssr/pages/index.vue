<template>
  <div>
    <span>{{ title }} nuxt-app is running!</span>
  </div>
</template>

<script>
export default {
  // CSR実行される
  // data() {
  // CSRは実行されない
  asyncData() {
    console.log('data Start')
    return {
      title: 'Nuxt SSR!'
    }
  }
}
</script>

