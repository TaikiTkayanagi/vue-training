<script setup lang="ts">
const list = ["hello", "good night"];
</script>

<template>
    <h1>{{ "test" }}</h1>
    <slot v-bind:data="list" name="first">test</slot>
</template>
