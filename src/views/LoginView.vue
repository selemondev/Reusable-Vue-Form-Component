<script lang="ts" setup>
const handleClick = () => {
    console.log("Clicked from App.vue")
};
const formData = {
    email: "",
    password: ""
};
const route = "/register"
</script>

<template>
     <LoginForm @submit="handleClick()" :to="route" :formData="formData" type="Sign In" typeDescription="Sign In below to get access to your account"/>
</template>
