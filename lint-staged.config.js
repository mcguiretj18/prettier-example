module.exports = {
  '**/*.+(js|md|ts|css|sass|less|graphql|yml|yaml|scss|json|vue)': [
    'prettier --write',
    'git add',
  ],
};
