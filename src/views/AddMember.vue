<script setup lang="ts">
import type Member from '@/interface/Member';
import { inject, reactive } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();

const memberList = inject("memberList") as Map<number, Member>
const newMember: Member = reactive({name: ""})
const click = () => {
    const id = memberList.size + 1;
    memberList.set(id, newMember)
    router.push({"name": "Top"})
}
</script>

<template>
    <input type="text" v-model="newMember.name" />
    <button @click="click">追加</button>
</template>