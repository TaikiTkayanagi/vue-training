<script setup lang="ts">
const id = Math.floor(Math.random() * 10 + 1) 
</script>

<template>
    <div>会員</div>
    <RouterLink :to="{name: 'detail', params: {id: id}}" >Go</RouterLink>
</template>