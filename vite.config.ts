import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import AutoImport from 'unplugin-auto-import/vite';
import Components from 'unplugin-vue-components/vite';
export default defineConfig({
  plugins: [vue(), AutoImport({
    imports: [
      'vue',
      {
        '@vuelidate/core': [
          'useVuelidate'
        ],

        '@vuelidate/validators': [
          'required', 'email', 'sameAs', 'minLength', 'helpers'
        ]
      }
    ],

    dirs: [
      "./src/composables"
    ]
  }), Components({
    dirs: ["./src/components"],
    dts: true
  })]
})
