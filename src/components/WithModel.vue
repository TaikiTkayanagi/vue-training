<script setup lang="ts">
import { ref } from 'vue';

const name = ref("名無し");
</script>

<template>
    <section>
        <p>{{ name }}サンです</p>
        <input name="input" type="text" v-model="name" />
    </section>
</template>

<style scoped>
section {
    border: orange 1px dashed;
}
</style>