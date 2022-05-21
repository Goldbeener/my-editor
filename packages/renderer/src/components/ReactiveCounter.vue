<script lang="ts" setup>
import { ref } from 'vue';

const count = ref(0);
</script>

<template>
  <button
    class="border-5 border-red-500"
    @click="count++"
  >
    count is: {{ count }}
  </button>
  <br><br>
  <code>packages/renderer/src/components/ReactiveCounter.vue</code>
</template>
