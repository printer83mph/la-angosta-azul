module.exports = {
  extends: ['airbnb'],
  overrides: [
    {
      files: ['src/**/*'],
      extends: ['airbnb-typescript', 'airbnb/hooks'],
      parserOptions: {
        tsConfigRootDir: __dirname,
        project: './tsconfig.json',
      },
      rules: {
        'react/jsx-props-no-spreading': 'off',
        'react/function-component-definition': [
          'error',
          {
            namedComponents: 'arrow-function',
            unnamedComponents: 'arrow-function',
          },
        ],

        'import/prefer-default-export': 'off',
      },
    },
    {
      files: '*',
      extends: ['prettier', 'next/core-web-vitals'],
    },
  ],
}
