module.exports = {
    trailingComma: 'es5',
    tabWidth: 4,
    semi: true,
    singleQuote: true,
    plugins: [require.resolve('prettier-plugin-astro')],
    overrides: [
        {
            files: '**.astro',
            options: {
                parser: 'astro',
            },
        },
    ],
};
