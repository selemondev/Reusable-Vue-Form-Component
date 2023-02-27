<script lang="ts" setup>
const props = defineProps({
    type: String,
    typeDescription: String,
});
</script>

<template>
    <div class="text-center">
        <h1 class="text-3xl font-semibold text-gray-900">{{ props.type }}</h1>
        <p class="mt-2 text-gray-500">{{ props.typeDescription }}</p>
    </div>
</template>
