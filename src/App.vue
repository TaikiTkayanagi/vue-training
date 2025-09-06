<script setup lang="ts">
import {computed, ref} from "vue";

interface item {
  name: string,
  price: number
}

const itemMap = ref(new Map<number, item>());
itemMap.value.set(1, {name: "ホワイトレディ", price: 1200})
itemMap.value.set(2, {name: "ブルーハワイ", price: 1500})
itemMap.value.set(3, {name: "マティーニ", price: 1500})

const itemOver1500 = computed(() => {
  var result = new Map<number, item>();
  itemMap.value.forEach((v, key) => {
    if(v.price >= 1500) {
      result.set(key, v)
    }
  })
  return result;
})

const onClick = () => {
  itemMap.value.set(4, {name: "ビール", price: 1700});
}

const onClickChangePrice = () => {
  itemMap.value.forEach((value, id) => {
    if(value.price >= 1500) {
      value.price = 1000
    } else {
      value.price = 2000
    }
  })
}

const onClickChangeWhiteLedy = () => {
  const whiteLedy = itemMap.value.get(1) as item
  whiteLedy.price = 3000
}
</script>

<template>
  <ul>
    <li v-for="[key, value] in itemMap">
      <p>id: {{ key }}  名前: {{ value.name }}  値段: {{ value.price }}</p>
    </li>
  </ul>
  <p>値段が1500円以上のもの</p>
  <ul>
    <li v-for="[key, value] in itemOver1500">
      <p>id: {{ key }}  名前: {{ value.name }}  値段: {{ value.price }}</p>
    </li>
  </ul>
  <button v-on:click="onClick">ビールを追加</button>
  <button v-on:click="onClickChangePrice">値段を変更</button>
  <button v-on:click="onClickChangeWhiteLedy">ホワイトレディの値段変更</button>
</template>