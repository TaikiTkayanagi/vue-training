<script setup lang="ts">
interface Props {
    id: number,
    name: string,
    point: number,
    note?: string
}
interface Emit {
    (event: "update:point", newPoint: number): void
}

const props = withDefaults(defineProps<Props>(), {
    note: "---"
})

const emit = defineEmits<Emit>();

const addPoint = () => {
    emit("update:point", props.point + 1);
}
</script>

<template>
    <div>
        <p>名前: {{ name }}</p>
        <p>ポイント: {{ point }}</p>
        <p>備考: {{ note }}</p>
        <button v-on:click="addPoint">ポイントを加算</button>
    </div>
</template>