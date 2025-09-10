<script setup lang="ts">
defineProps<{name: string}>();
</script>

<template>
    <div>
        <h1>{{ name }}さん</h1>
        <slot>頑張ります。</slot>
        <slot name="test">testもからかよ</slot>
    </div>
</template>