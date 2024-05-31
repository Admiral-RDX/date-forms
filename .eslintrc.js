module.exports = {
    parser: '@typescript-eslint/parser',
    extends: [
        'eslint:recommended',
        'plugin:@typescript-eslint/recommended',
        'prettier',
        'plugin:prettier/recommended'
    ],
    parserOptions: {
        ecmaVersion: 2024,
        sourceType: 'module'
    },
    rules: {
        '@typescript-eslint/indent': ['error', 4],
        '@typescript-eslint/naming-convention': [
            'error',
            {
                selector: 'variableLike',
                format: ['snake_case']
            }
        ],
        '@typescript-eslint/explicit-function-return-type': 'off',
        'prettier/prettier': ['error', { 'endOfLine': 'auto' }]
    }
};
