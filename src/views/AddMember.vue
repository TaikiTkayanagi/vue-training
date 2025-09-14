<script setup lang="ts">
import type Member from '@/interface/Member';
import router from '@/router';
import { useMembersStore } from '@/stores/members';
import { reactive } from 'vue';

const membersStore = useMembersStore();
const newMember: Member = reactive({name: ""})

const onClick = () => {
    membersStore.add(newMember);
    router.push({name: "memberList"})
}
</script>

<template>
    <input type="text" v-model="newMember.name" />
    <button @click="onClick">追加</button>
</template>