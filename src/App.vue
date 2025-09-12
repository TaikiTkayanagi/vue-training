<script setup lang="ts">
import { provide, reactive } from 'vue';
import type Member from './interface/Member';

const memberList = new Map<number, Member>();
memberList.set(1, {name: "test"});
memberList.set(2, {name: "test2"});
memberList.set(3, {name: "test3"});
provide("memberList", reactive(memberList));
</script>

<template>
  <div>
    <h1>Vue Routerサンプル</h1>
    <RouterView />
  </div>
</template>