<script lang="ts" setup>
import { ref, computed } from 'vue';

const x = ref(6);
const y = ref(6);
const ans = computed(() => x.value * y.value);
</script>

<template>
  <p>{{ x }} × {{ y }} = {{ ans }}</p>
</template>