/** @type {import('eslint').Linter.FlatConfig} */
const { espree } = require('espree');

const config = [
  {
    languageOptions: {
      parser: espree, // Usa el parser de espree
      globals: {
        window: 'readonly', // Define 'window' como global
        document: 'readonly', // Define 'document' como global
      },
      ecmaVersion: 12, // Define la versión de ECMAScript
      sourceType: 'module', // Permite el uso de módulos
    },
    files: ['**/*.js'], // Archivos a verificar
    rules: {
      'no-console': 'warn', // Emitir advertencias para console.log
    },
  },
];

module.exports = config;
