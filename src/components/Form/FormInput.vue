<script lang="ts" setup>
defineProps({
    modelValue: String
})
const emit = defineEmits<{
    (e: 'update:modelValue', value: string | number): void
}>();
const updateModelValue = (event: Event) => {
    emit("update:modelValue", (event.target as HTMLInputElement).value)
};
</script>

<template>
    <input v-bind="$attrs" :value="modelValue" @input="updateModelValue"
        class="peer w-full rounded-md border border-gray-300 px-3 py-3 shadow shadow-gray-100 placeholder:text-transparent focus:border-gray-500 focus:outline-none"/>
</template>
