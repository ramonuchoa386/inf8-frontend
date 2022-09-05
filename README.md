
# Projeto do Portal APIM | vtal

Este repositório que contém o código-fonte do portal do desenvolvedor.

## Pré-requisitos

- react >= 18.0.0
- node >= 16.2.0
- npm >= 7.13.0
- styled-components >= 5.3.5

## Project Status

Em desenvolvimento...

## Como usar

1. `yarn`or`npm`
2. Install VSCode extensions: [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint), [Prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode), [EditorConfig](https://marketplace.visualstudio.com/items?itemName=EditorConfig.EditorConfig)

## Comandos

1. `yarn start`: Inicia o projeto
2. `yarn build`: Gera os arquivos compilados para deploy em dev
3. `yarn build:prod`: Gera os arquivos compilados para deploy em produção
4. `yarn snapshot:update`: Atualiza os snapshots
5. `yarn storybook`: Inicia o storybook
6. `yarn test`: Executa os testes
7. `yarn coverage`: Executa o coverage
8. `yarn dev:server`: Servidor local

### Estrutura de pastas

```text
├── .husky                     # Hooks do git
├── .storybook                 # Configurações do storybook
├── documentation              # Documantion storybook
├── public                     # Arquivos que o react usar pra gerar o deploy
├── build                      # Arquivos gerado no deploy
├── src                        # Pasta principal
│    ├── @types                # Arquivos declarativos
│    ├── assets                # Arquivos estáticos
│    ├── components            # Componentes Atomic Design
│    ├── contants              # dados imutáveis
│    ├── context               # Estados globais
│    ├── pages                 # Páginas da aplicação
|     └── public               # Public
|     └── private              # Private
│    ├── routes                # Rotas da aplicação
│    ├── styles                # Estilos globais e fontes
|     └── theme.ts             # Arquivos com todas as configurações relacionadas ao tema
|     └── global.ts            # Estilo global
│    ├── util                  # Funções úteis
├── README.md                  # README
├── package.json               # Configurações do projeto
└── tsconfig.json              # Configurações do TypeScript
└── .editoconfig               # Configurações de padronização de estilo de código do editor
└── .eslintrc.json             # Regras do Eslint para padronização do estilo de código
└── .prettierrc.json           # Regras do Pritter pra automaticamente as correções de padrões estabelecidas no ESLint.
```
