<script lang="ts" setup>
const props = defineProps({
  type: String,
  typeDescription: String,
  to: String,
  icon: String
});
const { formData, response } = useFormLoginValidation();
const emit = defineEmits(["submit"]);
const handleSubmit = async () => {
  const validate = await response();
  emit("submit", formData);
  if (validate) {
    alert("valid")
  }
}
</script>

<template>
  <FormLayout>
    <div class="w-full">
      <FormTitle :type="props.type" :description="props.typeDescription" :icon="props?.icon" />
      <div class="mt-8">
        <form @submit.prevent="handleSubmit()">
          <FormGroup v-model="formData.email" type="email" placeholder="Email Address" label="Email"
            :error="formData.emailError" :errorMessage="formData.emailError" :errorEmpty="formData.emailEmptyError"
            :errorEmptyMessage="formData.emailEmptyError" />
          <FormGroup type="password" placeholder="Password" label="Password" v-model="formData.password"
            :error="formData.passwordError" :errorMessage="formData.passwordError"
            :errorEmpty="formData.passwordEmptyError" :errorEmptyMessage="formData.passwordEmptyError" />
          <div class="my-4">
            <button type="submit"
              class="w-full rounded-md bg-black px-3 py-4 text-white focus:bg-neutral-800 focus:outline-none">{{
                props.type === 'Sign Up' ? 'Sign Up' : 'Sign In'
              }}</button>
          </div>

          <div class="my-1" v-if="props.type === 'Sign In'">
            <FormForgotPassword />
          </div>
          <p class="text-center text-sm text-gray-500">Don't have an account yet? <router-link :to="`${props.to}`"
              class="font-semibold cursor-pointer text-black hover:underline">Sign
              up</router-link>.</p>
        </form>
      </div>
    </div>
  </FormLayout>
</template>
