<template>
    <h1>TOP</h1>
    <div>Top</div>
    <RouterLink v-bind:to="{name: 'memberList'}" >会員情報はこちら</RouterLink>
    <br/>
    <RouterLink v-bind:to="{name: 'addMember'}" >追加はこちら</RouterLink>
</template>