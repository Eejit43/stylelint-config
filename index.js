module.exports = {
    extends: 'stylelint-config-standard',
    plugins: ['stylelint-use-nesting'],
    rules: {
        'no-descending-specificity': null,
        'color-named': 'always-where-possible',
        'function-disallowed-list': ['hsl', 'hwb', 'lab', 'lch'],

        'csstools/use-nesting': 'always',
    },
};
