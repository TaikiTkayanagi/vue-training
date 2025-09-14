<script setup lang="ts">
import { useMembersStore } from '@/stores/members';

const membersStore = useMembersStore();
membersStore.getLolcalStorage()
</script>

<template>
    <template v-if="membersStore.isEmpty()">
        <p>登録されていません</p>
    </template>
    <template v-else>
        <div>会員</div>
        <ul>
            <li v-for="[key, value] in membersStore.members" :key="key">
                {{ value.name }}
                <RouterLink :to="{ name: 'detail', params: { id: key } }">詳細</RouterLink>
            </li>
        </ul>
    </template>
</template>