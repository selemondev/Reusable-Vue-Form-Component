<script lang="ts" setup>

</script>

<template>
    <label v-bind="$attrs"
        class="pointer-events-none absolute top-0 left-0 ml-3 origin-left -translate-y-1/2 transform bg-white px-1 text-sm text-gray-500 transition-all duration-100 ease-in-out peer-placeholder-shown:top-1/2 peer-placeholder-shown:ml-4 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:-top-0 peer-focus:ml-3 peer-focus:text-sm peer-focus:text-gray-800">
        <slot />
    </label>
</template>
