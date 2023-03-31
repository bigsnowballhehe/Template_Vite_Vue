<template>
  <div>{{ com }}</div>
</template>

<script setup lang='ts'>
const ext = ref(1)
const com = computed(() => {
  return ext.value + 1
})
console.log('I am ExampleApp.vue')
</script>
