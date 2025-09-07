<script setup lang="ts">

interface Props {
    title: string,
    content: string
}

defineProps<Props>();
</script>

<template>
    <section class="box">
        <h4>{{ title }}</h4>
        <p>{{ content }}</p>
    </section>
</template>