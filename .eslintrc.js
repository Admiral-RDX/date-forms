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
                selector: 'variable',
                format: ['snake_case']
            },
            {
                selector: 'function',
                format: ['camelCase'],
                leadingUnderscore: 'allow'
            },
            {
                selector: 'function',
                modifiers: ['global'],
                format: ['camelCase'],
                leadingUnderscore: 'require'
            },
            {
                selector: 'typeLike',
                format: ['PascalCase']
            },
            {
                selector: 'class',
                format: ['PascalCase']
            },
            {
                selector: 'interface',
                format: ['PascalCase']
            },
            {
                selector: 'typeAlias',
                format: ['PascalCase']
            },
            {
                selector: 'enum',
                format: ['PascalCase']
            },
            {
                selector: 'enumMember',
                format: ['PascalCase']
            },
            {
                selector: 'objectLiteralProperty',
                format: ['camelCase', 'snake_case']
            }
        ],
        '@typescript-eslint/explicit-function-return-type': 'off',
        'prettier/prettier': ['error', { endOfLine: 'auto' }]
    }
};
