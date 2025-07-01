export default {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'type-enum': [
      2,
      'always',
      [
        'feat',
        'fix',
        'bug',
        'refactor',
        'design',
        'style',
        'docs',
        'test',
        'settings',
        'chore',
        'init',
        'rename',
        'remove',
        'build',
        'deploy',
      ],
    ],
    'subject-empty': [2, 'never'],
    'type-case': [2, 'always', 'lowercase'],
    'type-empty': [2, 'never'],
    'subject-case': [0],
    'references-empty': [0],
  },
  parserPreset: {
    parserOpts: {
      headerPattern: /^([^:]+):\s{1,2}(.+)$/,
      headerCorrespondence: ['type', 'subject'],
    },
  },
};
