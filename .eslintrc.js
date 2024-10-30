module.exports = {
    env: {
      browser: true, // Define que tu código se ejecutará en un entorno de navegador
      es2021: true,  // Habilita las características de ECMAScript 2021
    },
    extends: 'eslint:recommended', // Utiliza las reglas recomendadas por ESLint
    parserOptions: {
      ecmaVersion: 12, // Especifica la versión de ECMAScript
      sourceType: 'module', // Permite usar import/export
    },
    rules: {
      // Aquí puedes agregar reglas personalizadas
      'no-console': 'warn', // Emitir advertencia para el uso de console.log
    },
  };
  