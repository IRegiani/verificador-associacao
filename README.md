[![Codacy Badge](https://api.codacy.com/project/badge/Grade/0ac196c6c17c45a5aa3d552b3494031c)](https://app.codacy.com/manual/iagoregiani/verificador-associacao?utm_source=github.com&utm_medium=referral&utm_content=IagoRegiani/verificador-associacao&utm_campaign=Badge_Grade_Settings)
![GitHub pull requests](https://img.shields.io/github/issues-pr/IagoRegiani/verificador-associacao)
![GitHub package.json version](https://img.shields.io/github/package-json/v/IagoRegiani/verificador-associacao)
![GitHub commit activity](https://img.shields.io/github/commit-activity/m/IagoRegiani/verificador-associacao)

### How to develop

#### Prerequisites

- Have installed [Node.js](https://nodejs.org/en/) and [Git](https://git-scm.com/) in your computer

- Recommended to use [VS Code](https://code.visualstudio.com/), with the following extensions:
  - [React Extension Pack](https://marketplace.visualstudio.com/items?itemName=jawandarajbir.react-vscode-extension-pack)
  - [Git Lens](https://marketplace.visualstudio.com/items?itemName=eamodio.gitlens)
  - [Code Spell Checker](https://marketplace.visualstudio.com/items?itemName=streetsidesoftware.code-spell-checker)

#### Running locally for the first time

1. After cloning, run `npm ci`
2. Run `npm run local`, it should open your browser at [http://localhost:3000](http://localhost:3000)

#### Developing a feature

1. After agreeing with the others collaborators which task you are going to do, goto the **master** branch

2. Create a new branch and do your work there

3. Upon finishing don't forget Unit Tests. To test, run `npm run test`. If it fails, you must fix them in order to proceed

4. If everything is ok, open a new Pull Request to **development`**. Your PR is going to be blocked if the previous step is failing

Currently, there is no back-end implemented, this will be updated when it happens
