<script lang="ts" setup>
const props = defineProps({
  type: String,
  typeDescription: String,
  route: String
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
  <div class="relative flex min-h-screen flex-col justify-center overflow-hidden bg-gray-50 py-6 sm:py-12">
    <div
      class="relative mx-auto w-full max-w-md bg-white px-6 pt-10 pb-8 shadow-xl ring-1 ring-gray-900/5 sm:rounded-xl sm:px-10">
      <div class="w-full">
        <div class="text-center">
          <h1 class="text-3xl font-semibold text-gray-900">{{ props.type }}</h1>
          <p class="mt-2 text-gray-500">{{ props.typeDescription }}</p>
        </div>
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
            <p class="text-center text-sm text-gray-500">Don't have an account yet? <span
                class="font-semibold text-black hover:underline">Sign
                up</span>.</p>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>
