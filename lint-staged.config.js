module.exports = {
  '**/*.+(js|ts|css|sass|less|graphql|yml|yaml|scss|json|vue)': [
    'eslint --fix',
    'prettier --write',
    'git add',
  ],
  '**/*.+(md)': ['prettier --write', 'git add'],
};
