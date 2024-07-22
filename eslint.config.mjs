import globals from "globals";
import pluginJs from "@eslint/js";
import tseslint from "typescript-eslint";
import pluginReactConfig from "eslint-plugin-react/configs/recommended.js";
import { fixupConfigRules } from "@eslint/compat";

export default [
  UIConfig,
  {
    files: ["**/*.{js,mjs,cjs,ts,jsx,tsx}"] ,
    languageOptions: {
      ecmaVersion: 2021,
      sourceType: 'module',
      globals: {
        ...globals.browser,
        ...globals.es2021,
      },
      parser: ParserTypescriptEslint,
      parserOptions: {
        project: ["./tsconfig.json"],
        tsconfigRootDir: __dirname,
      },
    },
    plugins: {
      import: PluginImport,
      jest: PluginJest
    },
    rules: {
      "jest/no-deprecated-functions": "off"
    },
    settings: {
      "import/resolver": {
        ...PluginImport.configs.typescript.settings['import/resolver'],
        typescript: {
          project: ["tsconfig.json"],
        },
      },
    },
    
  }
]

// export default [
//   { files: ["**/*.{js,mjs,cjs,ts,jsx,tsx}"] },
//   {
//     languageOptions: {
//       ecmaVersion: 2021,
//       sourceType: 'module',
//       globals: {
//         ...globals.browser,
//         ...globals.es2021,
//       },

//       parserOptions: {
//         ecmaFeatures: { jsx: true },
//         project: ["./tsconfig.json"],
//         tsconfigRootDir: __dirname,
//       },
//       globals: globals.browser,
//     },
//   },
//   pluginJs.configs.recommended,
//   ...tseslint.configs.recommended,
//   ...fixupConfigRules(pluginReactConfig),
// ];