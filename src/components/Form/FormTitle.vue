<script lang="ts" setup>
import { Icon } from '@iconify/vue';
interface Props {
    type: string,
    description: string,
    icon?: string
}
const props = defineProps<Props>();
</script>

<template>
    <div class="text-center">
        <div class="flex items-center justify-center space-x-2">
            <span class="w-10 h-10 bg-gray-200/20 grid place-items-center rounded-md">
                <Icon :icon="props.icon" class="text-3xl" />
            </span>
            <h1 class="text-3xl font-semibold text-gray-900">{{ props.type }}</h1>
        </div>
        <p class="mt-2 text-gray-500">{{ props.description }}</p>
    </div>
</template>
