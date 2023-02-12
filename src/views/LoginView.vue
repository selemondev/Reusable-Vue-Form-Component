<script lang="ts" setup>
const handleClick = () => {
    console.log("Clicked from App.vue")
}
</script>

<template>
     <LoginForm @submit="handleClick()" type="Sign In" typeDescription="Sign In below to get access to your account"/>
</template>
