<h1 align="center">
  DropMail

  <img src="https://github.com/lRauane/dropmail/assets/102835801/29b30513-f3e3-4e30-afed-de96183ba249"/>  
</h1>

<h3 align="center">
 DropMail - seu aplicativo de email temporário
</h3>

<h4 align="center">
✅Concluído!
</h4>

Tabela de conteúdos
=================

   * [Sobre o projeto](#sobre-o-projeto)
   * [Funcionalidades](#funcionalidades)
   * [Layout](#layout)
     * [Web](#layout-web)
   * [Como executar o projeto](#como-executar-o-projeto)
     * [Pré-requisitos](#pre-requisitos)
     * [Rodando a aplicação web (Frontend)](#rodando-a-aplicacao-web-frontend)
     * [Configurando API](#rodando-a-aplicacao-backend)
     * [Rodando testes de unidade](#rodando-a-aplicacao-testes)
   * [Tecnologias](#tecnologias)
     * [Website](#tecnologias-website)
     * [Utilitários](#utilitarios)
   * [Como contribuir no projeto](#como-contribuir)
   * [Autor](#autor)
   * [Licença](#licenca)



## 💻 Sobre o projeto <a name="sobre-o-projeto"></a>
<p>Uma aplicação que consuma uma API de email temporário para que os usuários possam utilizar serviços sem expor seu email real, seguindo os requisitos propostos neste desafio.</p>
---

## ⚙️ Funcionalidades <a name="funcionalidades"></a>

  - [x] Como usuário, posso gerar um endereço de email temporário;
  - [x] Como usuário, posso copiar o endereço de email gerado;
  - [x] Para capturar a chegada de novos emails, você deve verificar a caixa de mensagens a cada 15 segundos.
  - [x] Adicione um novo botão chamado "Receber notificações". Este botão irá ativar a notificações na área de trabalho quando chegar um novo email, caso a tab não esteja em foco. Caso o usuário não aceite, o botão deve permitir que, se clicado, abra novamente a mensagem para liberar este recurso do navegador.
  - [x] Seguir a base do mockup (estilização ao seu critério)
  - [ ] Salve os dados de acesso ao email no localstorage ou sessionstorage, para que a conta não seja perdida ao atualizar a página. Caso o email tenha expirado, é necessário remover esse registro do storage.
  - [ ] Como usuário, posso visualizar a caixa de entrada deste email;

---

## 🎨 Layout <a name="layout"></a>
### Desktop:
![desktop (1)](https://github.com/lRauane/dropmail/assets/102835801/b23b632c-98b6-4293-88d3-585596759174)


### Web <a name="layout-web"></a>
A hospedagem do site está em: [Vercel](https://dropmail-black.vercel.app/)
<p align="center" style="display: flex; align-items: flex-start; justify-content: center;">
   <img src="https://github.com/lRauane/dropmail/assets/102835801/29b30513-f3e3-4e30-afed-de96183ba249"/>  
</p>


---

## 🚀 Como executar o projeto <a name="como-executar-o-projeto"></a>
### Pré-requisitos <a name="pre-requisitos"></a>

Antes de começar, você vai precisar ter instalado em sua máquina as seguintes ferramentas:
[Git](https://git-scm.com), [Node.js](https://nodejs.org/en/). 
Além disto é bom ter um editor para trabalhar com o código como [VSCode](https://code.visualstudio.com/).


#### 🧭 Rodando a aplicação web (Frontend) <a name="rodando-a-aplicacao-web-frontend"></a>

```bash

# Clone este repositório
$ git clone https://github.com/lRauane/dropmail.git

# Instale as dependências
$ npm install

# Execute a aplicação em modo de desenvolvimento
$ npm run dev

```

#### 🧭 Rodando a API (Back-end) <a name="rodando-a-aplicacao-backend"></a>

```bash
# Para utilizar a API
$ crie uma API key no cors https://cors.sh/

# configurar a API
$ No arquivo .env.example, pegue o nome da variável de acesso

# colocar sua chave 
$ crie uma .env, que será sua chave principal e coloque:
$ NEXT_PUBLIC_URL_API = sua KEY API

```

#### 🧭 Testando com Jest <a name="rodando-a-aplicacao-testes"></a>

```bash
# rode o comando
$ npm test

```

## 🛠 Tecnologias <a name="tecnologias"></a>

As seguintes ferramentas foram usadas na construção do projeto:

-   **[EditorConfig](https://editorconfig.org/)**
-   **[ESLint](https://eslint.org/)**
-   **[Prettier](https://prettier.io/)**
-   **[axios](https://axios-http.com/ptbr/docs/intro)**

#### **Website**  ([React](https://reactjs.org/)  +  [TypeScript](https://www.typescriptlang.org/)) + [Next.js](https://nextjs.org/) <a name="tecnologias-website"></a>

-   **[Lucide React](https://lucide.dev/icons)**
-   **[Next.js](https://nextjs.org/)**
-   **[TailwindCSS](https://tailwindcss.com/)**
-   **[Jest](https://jestjs.io/pt-BR/)**
-   **[Axios](https://github.com/axios/axios)**

> Veja o arquivo  [package.json](https://github.com/lRauane/dropmail/blob/main/package.json)


#### **Utilitários** <a name="utilitarios"></a>

-   Protótipo:  **[Figma](https://www.figma.com/)**
-   Editor:  **[Visual Studio Code](https://code.visualstudio.com/)**
-   Fontes:  **[Archivo](https://fonts.google.com/specimen/Archivo?query=archivo)**


---

## 💪 Como contribuir no projeto <a name="como-contribuir"></a>

1. Faça um **fork** do projeto.
2. Crie uma nova branch com as suas alterações: `git checkout -b my-feature`
3. Salve as alterações e crie uma mensagem de commit contando o que você fez: `git commit -m "feature: My new feature"`
4. Envie as suas alterações: `git push origin my-feature`

---

## 🦸 Autor <a name="autor">Rauane Lima</a>
[github](https://github.com/lRauane/)
[linkedln](https://www.linkedin.com/in/rauanee/)

---

## 📝 Licença <a name="licenca"></a>


Feito com ❤️ por Rauane Lima 👋🏽 [Entre em contato!](https://www.linkedin.com/in/rauanee/)
>  This is a challenge by [Coodesh](https://coodesh.com/)
