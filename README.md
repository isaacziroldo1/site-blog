# Site Blog - Rocketseat ONE

Um blog moderno construído com Next.js, React, TypeScript e Tailwind CSS. Projeto desenvolvido durante o programa Rocketseat ONE.

## 📋 Sobre o Projeto

Site blog completo com as seguintes funcionalidades:
- **Home**: Página inicial com apresentação do blog
- **Sobre**: Página com informações sobre o autor/blog
- **Blog**: Listagem de posts
- **Posts Dinâmicos**: Páginas individuais para cada post com rotas dinâmicas (`[slug]`)
- **API Routes**: Endpoint de exemplo para demonstrar API routes do Next.js

## 🚀 Tecnologias Utilizadas

- **Next.js** 16.1.6 - Framework React com renderização server-side
- **React** 19.2.3 - Biblioteca para construção de interfaces
- **TypeScript** 5 - Linguagem tipada para JavaScript
- **Tailwind CSS** 4 - Framework de utility-first CSS
- **ESLint** 9 - Linter para manter qualidade do código
- **pnpm** - Gerenciador de pacotes rápido e eficiente

## 📁 Estrutura do Projeto

```
site-blog/
├── src/
│   ├── pages/
│   │   ├── index.tsx           # Página inicial
│   │   ├── _app.tsx            # App wrapper
│   │   ├── _document.tsx       # Document wrapper
│   │   ├── about/
│   │   │   └── index.tsx       # Página sobre
│   │   ├── api/
│   │   │   └── hello.ts        # API endpoint exemplo
│   │   └── blog/
│   │       ├── index.tsx       # Listagem de posts
│   │       └── posts/
│   │           ├── index.tsx   # Posts index
│   │           └── [slug].tsx  # Post dinâmico
│   └── styles/
│       └── globals.css         # Estilos globais
├── public/                      # Arquivos estáticos
├── package.json
├── tsconfig.json
├── next.config.ts
├── tailwind.config.ts
├── postcss.config.mjs
├── eslint.config.mjs
└── pnpm-workspace.yaml

```

## 🛠️ Como Executar Localmente

### Pré-requisitos
- Node.js 18+ 
- pnpm instalado

### Instalação e Execução

1. Clone o repositório:
```bash
git clone https://github.com/seu-usuario/site-blog.git
cd site-blog
```

2. Instale as dependências:
```bash
pnpm install
```

3. Execute o servidor de desenvolvimento:
```bash
pnpm dev
```

4. Abra [http://localhost:3000](http://localhost:3000) no seu navegador

## 📦 Scripts Disponíveis

- `pnpm dev` - Inicia o servidor de desenvolvimento
- `pnpm build` - Cria o build de produção
- `pnpm start` - Inicia o servidor de produção
- `pnpm lint` - Executa o ESLint para validar o código

## 🌐 Rotas Disponíveis

| Rota | Descrição |
|------|-----------|
| `/` | Página inicial |
| `/about` | Página sobre |
| `/blog` | Listagem de posts |
| `/blog/posts/[slug]` | Post individual |
| `/api/hello` | Endpoint de API exemplo |

## 🎯 Features Implementadas

- ✅ Setup inicial com Next.js e TypeScript
- ✅ Estrutura de páginas e rotas
- ✅ Layout com Next.js Pages Router
- ✅ Tailwind CSS integrado
- ✅ ESLint configurado
- ✅ Suporte a rotas dinâmicas
- ✅ API routes de exemplo
- ✅ Tipagem completa com TypeScript

## 📝 Próximos Passos Sugeridos

- [ ] Criar banco de dados para armazenar posts
- [ ] Implementar autenticação
- [ ] Adicionar função de busca
- [ ] Criar sistema de comentários
- [ ] Implementar dark mode
- [ ] Deploy na Vercel
- [ ] Adicionar suporte a markdown nos posts

## 🚀 Deploy

O projeto pode ser facilmente deployado na [Vercel](https://vercel.com), que é otimizada para Next.js:

1. Faça push do código para GitHub
2. Conecte seu repositório na Vercel
3. A deploy acontecerá automaticamente a cada push

## 📄 Licença

Este projeto é parte do programa Rocketseat ONE.

## 👤 Autor

Isaac - Rocketseat ONE
