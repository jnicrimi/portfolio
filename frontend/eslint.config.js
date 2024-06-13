import globals from "globals"
import pluginJs from "@eslint/js"
import tseslint from "typescript-eslint"
import pluginVue from "eslint-plugin-vue"

export default [
  {
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node,
        useError: true,
      },
    },
    rules: {
      "vue/multi-word-component-names": [
        "error",
        {
          ignores: ["default", "index", "error"],
        },
      ],
    },
  },
  {
    ignores: [".nuxt/", ".output/"],
  },
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  ...pluginVue.configs["flat/essential"],
]
