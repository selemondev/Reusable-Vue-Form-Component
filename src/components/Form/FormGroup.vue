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
            <Input @update:modelValue="passModelValue" :v-model="props.modelValue" :type="props.type"
                :placeholder="props.placeholder" :value="props.modelValue" :class="props.inputClass" />
            <Label :class="props.labelClass">{{ props.label }}</Label>
        </div>
        <Error :class="props.errorClass" v-if="props.error">{{ props.error }}</Error>
        <Error :class="props.errorClass" v-if="props.errorEmpty">{{ props.errorEmptyMessage }}</Error>
    </div>
</template>
