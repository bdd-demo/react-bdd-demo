module.exports = {
    env: {
        browser: true,
        es2021: true,
        'jest/globals': true,
    },
    extends: [
        'airbnb',
        'plugin:cypress/recommended',
        'plugin:jest/recommended',
        'plugin:jsx-a11y/recommended',
        'plugin:react/recommended',
    ],
    overrides: [
        // override "simple-import-sort" config
        {
            files: ['*.js', '*.jsx', '*.ts', '*.tsx'],
            rules: {
                'simple-import-sort/imports': [
                    'error',
                    {
                        groups: [
                            ['^react$'], // react
                            ['^@?\\w'], // libraries
                            ['^antd', '@ant-design'], // antd
                            ['@mui/material/styles', '^@mui/material', '^@mui/icons-material'], // mui
                            ['^\\u0000'], // side effect imports
                            ['^(@|components)(/.*|$)'], // internal packages
                            ['^\\.\\.(?!/?$)', '^\\.\\./?$'], // `../*`
                            ['^\\./(?=.*/)(?!/?$)', '^\\.(?!/?$)', '^\\./?$'], // `./*`
                            ['^.+\\.?(css)$'], // css
                        ],
                    },
                ],
            },
        },
    ],
    parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
    },
    plugins: [
        'react',
        'jest',
        'simple-import-sort',
        'unused-imports',
    ],
    rules: {
        'brace-style': ['error', 'stroustrup'],
        'linebreak-style': 'off',
        'import/prefer-default-export': 'off',
        'import/no-extraneous-dependencies': ['error', { devDependencies: true }],
        'import/no-unresolved': [
            2,
            {
                ignore: [
                    '@badeball/cypress-cucumber-preprocessor/esbuild',
                ],
            },
        ],
        indent: ['error', 4, { SwitchCase: 1 }],
        'no-param-reassign': [2, { props: false }],
        'object-curly-newline': [
            'error',
            {
                ImportDeclaration: { multiline: true, minProperties: 4 },
                ExportDeclaration: { multiline: true, minProperties: 4 },
            },
        ],
        'prefer-destructuring': ['error', { object: true, array: false }],
        'react/function-component-definition': [2, { namedComponents: 'arrow-function' }],
        'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx'] }],
        'react/jsx-indent': ['error', 4],
        'react/jsx-indent-props': ['error', 4],
        'react/jsx-one-expression-per-line': 'off',
        'react/prop-types': 'off',
        'react/react-in-jsx-scope': 'off',
        'simple-import-sort/imports': 'error',
        'simple-import-sort/exports': 'error',
        'unused-imports/no-unused-imports': 'error',
    },
};
