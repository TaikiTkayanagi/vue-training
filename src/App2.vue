<script setup lang="ts">
import { ref } from 'vue';

const x = ref(1);
const y = ref(1);
const ans = ref(x.value * y.value)
const calc = ref(false)

const click = () => {
    ans.value = x.value * y.value
    calc.value = true
}
</script>

<template>
    <p v-if="calc" data-testid="canCalc">計算できました</p>
    <p v-else data-testid2="init">初期表示</p>
    <input type="number" data-testid="num1" v-model.number="x" />
    <span>×</span>
    <input type="number" data-testid="num2" v-model.number="y" />
    <span>=</span>
    <span data-testid="ans">{{ ans }}</span>
    <br/>
    <button v-on:click="click" data-testid="calc">計算</button>
</template>