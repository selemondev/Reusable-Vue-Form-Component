<script lang="ts" setup>
interface Props {
  email: string,
  password: string,
  emailError: string,
  passwordError: string,
  emailEmptyError: string,
  passwordEmptyError: string
};

const formData = reactive<Props>({
  email: '',
  password: '',
  emailError: '',
  passwordError: '',
  emailEmptyError: "",
  passwordEmptyError: "",
});
const { validateEmail, validatePasswordLength } = useFormValidation()
const emit = defineEmits(["submit"]);
const handleSubmit = async () => {
  emit("submit", formData);
  try {
    if (!formData.email) {
      formData.emailEmptyError = "Email address is required";
    } else if (!validateEmail(formData.email)) {
      formData.emailError = "Please enter a valid email address";
    };

    if (!formData.password) {
      formData.passwordEmptyError = "Password is required";
    } else if (!validatePasswordLength(formData.password)) {
      formData.passwordError = "Password should be a minimum of 8 characters";
    };

    setTimeout(() => {
      formData.emailEmptyError = formData.emailError = formData.passwordEmptyError = formData.passwordError = "";
    }, 2000);
  } catch (err: any) {
    console.log(err)
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
            <FormGroup v-model="formData.email" type="email" placeholder="Email Address" label="Email"
              :error="formData.emailEmptyError" :errorMessage="formData.emailEmptyError" />
            <FormGroup type="password" placeholder="Password" label="Password" v-model="formData.password"
              :error="formData.passwordEmptyError" :errorMessage="formData.passwordEmptyError" />
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
