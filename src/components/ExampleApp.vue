<template>
  <div>{{ com }}</div>
</template>

<script setup lang='ts'>
const ext = $ref('test')
const com = $computed(() => {
  return `a${ext}`
})
console.log('I am ExampleApp.vue')
</script>
