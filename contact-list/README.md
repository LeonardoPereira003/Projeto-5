# 📇 Lista de Contatos — React + Redux + Styled Components

Projeto desenvolvido como parte do **Projeto 5**, com o objetivo de aplicar conceitos de **React**, **Redux** e **Styled Components**, criando uma lista de contatos funcional e estilizada.

---

## 🎯 Objetivo do Projeto

Criar uma aplicação em React que permita o gerenciamento de uma lista de contatos, utilizando Redux para o controle de estado global e Styled Components para estilização, seguindo boas práticas de organização e responsividade.

---

## 🛠️ Tecnologias Utilizadas

- **React 18**
- **TypeScript**
- **Redux Toolkit**
- **React Redux**
- **Styled Components**
- **Vite**
- **Git & GitHub**

---

## ✨ Funcionalidades

- ➕ Adicionar contatos
- ➖ Remover contatos
- 📄 Listar contatos cadastrados
- 🎨 Tema escuro (Dark Mode)
- 📱 Layout responsivo (Mobile First)

Cada contato contém:
- Nome completo
- E-mail
- Telefone

---

## 🎨 Estilização

- Tema escuro personalizado
- Paleta de cores com **roxo e vermelho**
- Utilização de **ThemeProvider**
- Componentes estilizados exclusivamente com **Styled Components**
- Interface moderna e intuitiva

---

## 🗂️ Estrutura do Projeto

```text
src/
├─ app/
│  └─ store.ts
├─ components/
│  ├─ ContactForm.tsx
│  └─ ContactList.tsx
├─ features/
│  └─ contacts/
│     └─ contactsSlice.ts
├─ styles/
│  ├─ GlobalStyle.ts
│  └─ theme.ts
├─ types.ts
├─ App.tsx
└─ main.tsx
