<script lang="ts" setup>
interface Props {
    type: string,
    placeholder: string,
    label: string,
    labelClass?: string,
    inputClass?: string,
    errorClass?: string,
    modelValue: string | number,
    error: string,
    errorMessage: string,
    errorEmpty: string,
    errorEmptyMessage: string
}
const emit = defineEmits<{
    (e: 'update:modelValue', value: string | number): void
}>();
const passModelValue = (value: string | number) => {
    emit("update:modelValue", value)
}
const props = defineProps<Props>();
</script>

<template>
    <div>
        <div class="relative mt-5">
            <FormInput @update:modelValue="passModelValue" :v-model="props.modelValue" :type="props.type"
                :placeholder="props.placeholder" :value="props.modelValue" :class="props.inputClass" />
            <FormLabel :class="props.labelClass">{{ props.label }}</FormLabel>
        </div>
        <FormError :class="props.errorClass" v-if="props.error">{{ props.error }}</FormError>
        <FormError :class="props.errorClass" v-if="props.errorEmpty">{{ props.errorEmptyMessage }}</FormError>
    </div>
</template>
