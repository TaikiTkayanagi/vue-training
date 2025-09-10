<script setup lang="ts">
import { ref, shallowRef } from 'vue';
import CustomCheckBox from './components/CustomCheckBox.vue';
import CustomRadio from './components/CustomRadio.vue';
import CustomSelectBox from './components/CustomSelectBox.vue';

const components = [CustomCheckBox, CustomRadio, CustomSelectBox];
const names = ["CustomCheckBox", "CustomRadio", "CustomSelectBox"];
let index = 0;
const currentComponent = shallowRef(components[index]);
const componentName = ref(names[index]);

const onClick = () => {
  index++; 
  if(index == 3) {
    index = 0;
  }
  currentComponent.value = components[index];
  componentName.value = names[index];
}
</script>

<template>
  <div>
    <h1>{{ componentName }}</h1>
    <keep-alive>
      <component v-bind:is="currentComponent" />
    </keep-alive>
    <button v-on:click="onClick">クリック</button>
  </div>

</template>