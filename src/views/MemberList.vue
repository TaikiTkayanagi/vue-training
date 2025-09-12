<script setup lang="ts">
import type Member from '@/interface/Member';
import { inject } from 'vue';

const memberList = inject("memberList") as Map<number, Member>
</script>

<template>
    <div>会員</div>
    <ul>
        <li v-for="[key, value] in memberList" :key="key">
            {{ value.name }}
            <RouterLink :to="{name: 'detail', params: {id: key}}" >詳細</RouterLink>
        </li>
    </ul>
</template>