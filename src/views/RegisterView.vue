<script lang="ts" setup>
const handleClick = () => {
    console.log("Clicked from App.vue")
}
</script>

<template>
     <RegisterForm @submit="handleClick()" type="Sign Up" typeDescription="Sign Up to get started"/>
</template>
