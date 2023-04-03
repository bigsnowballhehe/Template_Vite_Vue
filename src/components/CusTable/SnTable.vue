<template>
  <div>
    <table>
      <thead>
        <tr class="bg-yellow-500">
          <th v-for="label in Object.keys(columns)" :key="label" class="p-2">
            {{ label }}
          </th>
        </tr>
      </thead>

      <tbody>
        <tr v-for="row in values" :key="row.keyId">
          <template v-for="id in Object.values(columns)" :key="id">
            <td> {{ row[id] }}</td>
          </template>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup lang='ts'>
defineProps<{
  columns: {
    [index: string]: string
  }
  values: { [index: string]: string }[]
}>()
</script>
