# Boilerplate para aplicações Frontend | V.tal

Este repositório que contém o código-fonte inicial para aplicações frontend.

## Pré-requisitos

- react >= 18.0.0
- node >= 16.2.0
- npm >= 7.13.0
- styled-components >= 5.3.5

## Project Status

Em desenvolvimento...

## Como usar

1. `npm`
2. Install VSCode extensions: [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint), [Prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode), [EditorConfig](https://marketplace.visualstudio.com/items?itemName=EditorConfig.EditorConfig)

## Comandos

1. `npm run start`: Inicia o projeto
2. `npm run build`: Gera os arquivos compilados para deploy em dev
3. `npm run build:prod`: Gera os arquivos compilados para deploy em produção
4. `npm run snapshot:update`: Atualiza os snapshots
5. `npm run storybook`: Inicia o storybook
6. `npm run test`: Executa os testes
7. `npm run coverage`: Executa o coverage
8. `npm run dev:server`: Servidor local

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
