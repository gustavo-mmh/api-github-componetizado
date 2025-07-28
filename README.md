# 🔍 GitHub Profile Viewer e Repositórios

Este projeto é uma aplicação front-end desenvolvida em React que permite buscar perfis de usuários no GitHub e visualizar seus detalhes, incluindo repositórios públicos e repositórios favoritados (starred). Ele foi construído com uma arquitetura modular e utiliza componentes estilizados para uma experiência de usuário fluida.

## ✨ Funcionalidades

  * **Busca de Perfis:** 🎯 Procure usuários do GitHub digitando seus nomes de usuário.
  * **Pesquisa Dinâmica:** A barra de pesquisa na `Navbar` reage a cada caractere digitado, exibindo resultados dinamicamente.
  * **Visualização de Perfil:** Exibe informações detalhadas do usuário, como avatar, nome, username, blog, empresa, localização, número de seguidores, quem ele segue, gists públicos e repositórios públicos.
  * **Repositórios em Abas:** Os repositórios públicos e os repositórios favoritados são organizados em abas separadas para fácil navegação.
  * **Componentes Reutilizáveis:** A aplicação é construída com uma série de componentes reutilizáveis para uma manutenção e escalabilidade eficientes.
  * **Consumo da API do GitHub:** Interage diretamente com a API pública do GitHub para obter os dados.

## 🛠️ Tecnologias Utilizadas

O projeto utiliza as seguintes tecnologias e bibliotecas:

  * **React:** Biblioteca JavaScript para construção da interface de usuário.
  * **Styled-components:** Para estilização de componentes, permitindo um CSS-in-JS eficiente e modular.
  * **Axios:** Cliente HTTP baseado em Promises para realizar requisições à API do GitHub.
  * **Material-UI (MUI):** Utilizado para componentes de UI (como `AppBar`, `Toolbar`, `InputBase`, `IconButton`, `Typography`, etc.), oferecendo um design moderno e responsivo.
  * **React Tabs:** Para a criação e gerenciamento de abas para organizar a visualização dos repositórios.
  * **Context API e Hooks (useState, useEffect, useCallback):** Para gerenciamento de estado global da aplicação e lógica de ciclo de vida dos componentes.

## 📂 Estrutura do Projeto

A estrutura do projeto está organizada da seguinte forma:

```
├── public/                     # Arquivos públicos da aplicação (HTML, ícones) 🌐
├── src/                        # Código-fonte da aplicação 💻
│   ├── components/             # Componentes de UI reutilizáveis (Header, Profile, Repositories, etc.) 🧩
│   ├── global/                 # Estilos globais e reset CSS 🎨
│   ├── hooks/                  # Hooks personalizados (e.g., useGithub para lógica de API) 🎣
│   ├── providers/              # Provedores de contexto para estado global (e.g., GithubProvider) 📦
│   ├── services/               # Configurações de serviços e chamadas de API (e.g., api.js) ⚙️
│   ├── App.js                  # Componente principal da aplicação
│   └── index.js                # Ponto de entrada da aplicação React
├── package.json                # Dependências do projeto e scripts 📋
├── README.md                   # Documentação do projeto (este arquivo) 📖
└── .gitignore                  # Arquivos e diretórios a serem ignorados pelo Git 🚫
```

## 🚀 Como Começar

Siga estas instruções para configurar e executar o projeto em sua máquina local.

### 📋 Pré-requisitos

Certifique-se de ter o Node.js e o npm (ou Yarn) instalados em seu ambiente.

### ⬇️ Instalação

1.  **Clone o repositório:**
    ```bash
    git clone <URL_DO_SEU_REPOSITORIO>
    cd api-github-componetizado
    ```
2.  **Instale as dependências:**
    Usando npm:
    ```bash
    npm install
    ```
    Ou usando Yarn:
    ```bash
    yarn install
    ```

### ▶️ Executando a Aplicação

Para iniciar o servidor de desenvolvimento:

```bash
npm start
# ou
yarn start
```

Isso abrirá o aplicativo em seu navegador padrão em `http://localhost:3000`. A página será recarregada automaticamente quando você fizer alterações no código.

## 📝 Scripts Disponíveis

No diretório do projeto, você pode executar:

  * **`npm start`**: Inicia o aplicativo em modo de desenvolvimento.
  * **`npm test`**: Inicia o executor de testes em modo de observação interativo.
  * **`npm run build`**: Compila o aplicativo para produção na pasta `build`.
  * **`npm run eject`**: Remove a dependência de build única do seu projeto. **Use com cautela, esta operação é irreversível\!**

## ☁️ Deploy na Nuvem

- Netilify

## 🌎 Ver Site Funcionando

-  [Ver Site](https://api-github-componentizado.netlify.app)

## 🤝 Contribuição

Contribuições são bem-vindas\! Sinta-se à vontade para abrir issues ou pull requests para melhorias.

## ⚖️ Licença

Este projeto é de código aberto.
