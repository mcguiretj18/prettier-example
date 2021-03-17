module.exports = {
  '**/*.+(js|ts|css|sass|less|graphql|yml|yaml|scss|vue)': [
    'eslint --fix',
    'prettier --write',
    'git add',
  ],
  '**/*.+(md)': ['prettier --write', 'git add'],
};
