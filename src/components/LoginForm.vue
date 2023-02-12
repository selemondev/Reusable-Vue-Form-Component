<script lang="ts" setup>
interface Props {
  email: string,
  password: string
};
const formData = reactive<Props>({
  email: '',
  password: ''
});

const rules = computed(() => {
  return {
    email: { required: helpers.withMessage("Email address is required", required), email },
    password: { required: helpers.withMessage("Password is required", required), minLength: minLength(8) }
  }
});


const v$ = useVuelidate(rules, formData);
const errors = reactive({
  emailError: v$.value.email.email.$message,
  passwordError: v$.value.password.password.$message,
});

const emit = defineEmits(["submit"]);
const handleSubmit = async () => {
  emit("submit", formData);
  const response = await v$.value.$validate();
  if (response) {
    alert("Successful")
  }
}
</script>

<template>
  <div class="relative flex min-h-screen flex-col justify-center overflow-hidden bg-gray-50 py-6 sm:py-12">
    <div
      class="absolute inset-0 bg-[url(/img/grid.svg)] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]">
    </div>
    <div
      class="relative mx-auto w-full max-w-md bg-white px-6 pt-10 pb-8 shadow-xl ring-1 ring-gray-900/5 sm:rounded-xl sm:px-10">
      <div class="w-full">
        <div class="text-center">
          <h1 class="text-3xl font-semibold text-gray-900">Sign in</h1>
          <p class="mt-2 text-gray-500">Sign in below to access your account</p>
        </div>
        <div class="mt-8">
          <form @submit.prevent="handleSubmit()">
            <FormGroup v-model="formData.email" type="email" placeholder="Email Address" label="Email" :error="v$.email.$error" :errorMessage="errors.emailError" />
            <FormGroup type="password" placeholder="Password" label="Password" v-model="formData.password" />
            <div class="my-6">
              <button type="submit"
                class="w-full rounded-md bg-black px-3 py-4 text-white focus:bg-neutral-800 focus:outline-none">Sign
                in</button>
            </div>
            <p class="text-center text-sm text-gray-500">Don&#x27;t have an account yet? <a href="#!"
                class="font-semibold text-gray-600 hover:underline focus:text-gray-800 focus:outline-none">Sign
                up</a>.</p>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>
