<script lang="ts" setup>
const props = defineProps({
  type: String,
  typeDescription: String
});
const { formData, response } = useRegisterFormValidation();
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
          <FormGroup type="password" placeholder="Confirm Password" label="Confirm Password"
            v-model="formData.confirmPassword" :error="formData.confirmPasswordError"
            :errorMessage="formData.confirmPasswordError" :errorEmpty="formData.confirmPasswordEmptyError"
            :errorEmptyMessage="formData.confirmPasswordEmptyError" />
          <div class="my-6">
            <button type="submit"
              class="w-full rounded-md bg-black px-3 py-4 text-white focus:bg-neutral-800 focus:outline-none">{{
                props.type === 'Sign Up' ? 'Sign Up' : 'Sign In'
              }}</button>
          </div>
          <p v-if="type === 'Sign In'" class="text-center text-sm text-gray-500">Don&#x27;t have an account yet? <a
              href="#!" class="font-semibold text-gray-600 hover:underline focus:text-gray-800 focus:outline-none">Sign
              up</a>.</p>
        </form>
      </div>
    </div>
  </FormLayout>
</template>
