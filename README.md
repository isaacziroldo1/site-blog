# Site Blog - Rocketseat ONE

> Um projeto educacional para aprender Next.js e desenvolvimento web moderno através do programa **Rocketseat ONE**.

## 🎯 Propósito do Projeto

Este é um **projeto de aprendizagem** desenvolvido como parte do programa Rocketseat ONE. O objetivo é explorar e dominar os conceitos-chave do Next.js, React e práticas modernas de desenvolvimento de interfaces.

## 🚀 Tecnologias Utilizadas

### Framework & Runtime
- **Next.js** 16.1.6 - Framework React com renderização otimizada
- **React** 19.2.3 - Biblioteca para construção de interfaces
- **TypeScript** 5 - Tipagem estática para JavaScript

### Styling & UI
- **Tailwind CSS** 4 - Framework de utility-first CSS
- **shadcn/ui** - Biblioteca de componentes reutilizáveis construídos com Radix UI e Tailwind CSS
- **Lucide React** 0.575.0 - Ícones SVG para React
- **Radix UI** 1.2.4 - Componentes UI headless baseados em primitivos
- **class-variance-authority** 0.7.1 - Manejo de variantes de classes
- **tailwind-merge** 3.5.0 - Merge inteligente de classes Tailwind

### Build & Qualidade
- **ESLint** 9 - Linting de código
- **Babel Plugin React Compiler** 1.0.0 - Compilação otimizada de React
- **pnpm** - Gerenciador de pacotes eficiente

## 📁 Estrutura do Projeto

```
site-blog/
├── src/
│   ├── components/              # Componentes reutilizáveis
│   │   ├── header/
│   │   │   ├── header.tsx      # Componente de header fixo
│   │   │   └── index.ts        # Export do header
│   │   └── ui/
│   │       ├── alert.tsx       # Componente Alert
│   │       └── button.tsx      # Componente Button
│   │
│   ├── pages/                  # Rotas da aplicação (Next.js Pages Router)
│   │   ├── _app.tsx            # App wrapper global
│   │   ├── _document.tsx       # Document HTML wrapper
│   │   ├── index.tsx           # Página inicial (/)
│   │   └── api/
│   │       └── hello.ts        # Endpoint API de exemplo
│   │
│   ├── lib/
│   │   └── utils.ts            # Funções utilitárias (ex: cn para merge de classes)
│   │
│   └── styles/
│       └── globals.css         # Estilos globais com tema dark/light
│
├── public/                      # Arquivos estáticos
├── components.json              # Configuração do Shadcn/UI
├── package.json
├── tsconfig.json
├── next.config.ts
├── tailwind.config.ts
├── postcss.config.mjs
├── eslint.config.mjs
├── pnpm-workspace.yaml
└── README.md
```

## 🎨 Recursos Implementados

### Componentes
- ✅ **Header** - Componente fixo no topo com efeito glassmorphism
- ✅ **Button** - Componente de botão com variantes
- ✅ **Alert** - Componente de alerta reutilizável
- ✅ **UI Components Base** - Estrutura para construção de componentes

### Styling
- ✅ **Tailwind CSS 4** - Sistema de design completo
- ✅ **Dark Theme** - Tema escuro pré-configurado
- ✅ **Estilos Globais** - Sistema de cores customizado com CSS variables
- ✅ **Responsividade** - Layout adaptativo para mobile, tablet e desktop

### Infraestrutura
- ✅ **TypeScript** - Tipagem estática completa
- ✅ **ESLint** - Validação de código
- ✅ **API Routes** - Endpoint de exemplo funcional
- ✅ **Next.js Fonts** - Otimização automática de fontes (Geist)

## 🛠️ Como Executar Localmente

### Pré-requisitos
- Node.js 18+
- pnpm (recomendado) ou npm

### Instalação

1. Clone o repositório:
```bash
git clone https://github.com/isaacziroldo1/site-blog.git
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

4. Abra [http://localhost:3000](http://localhost:3000) no navegador

## 📦 Scripts Disponíveis

| Script | Descrição |
|--------|-----------|
| `pnpm dev` | Inicia servidor de desenvolvimento com hot reload |
| `pnpm build` | Cria build otimizado para produção |
| `pnpm start` | Inicia servidor de produção |
| `pnpm lint` | Verifica código com ESLint |

## 🌐 Rotas da Aplicação

| Rota | Descrição | Status |
|------|-----------|--------|
| `/` | Página inicial | ✅ Implementada |
| `/api/hello` | Endpoint API de exemplo | ✅ Implementada |

## 🎓 Conceitos Aprendidos

- **Next.js Pages Router** - Sistema de rotas baseado em arquivos
- **React Hooks** - Hooks modernos do React 19
- **TypeScript** - Tipagem estática e interfaces
- **Tailwind CSS** - Utilitários de CSS e design system
- **Componentes Reutilizáveis** - Arquitetura de componentes escalável
- **API Routes** - Criação de endpoints serverless
- **Styling com Radix UI** - Componentes acessíveis e customizáveis

## 📝 Próximas Melhorias

- [ ] Adicionar mais páginas e rotas
- [ ] Implementar sistema de temas (light/dark mode toggle)
- [ ] Criar mais componentes UI
- [ ] Adicionar navegação dinâmica
- [ ] Implementar formulários
- [ ] Integração com banco de dados
- [ ] Deploy na Vercel
- [ ] Adicionar testes unitários
- [ ] Documentação de componentes com Storybook

## 🚀 Deploy

Este projeto é otimizado para deploy e pode ser facilmente publicado na [Vercel](https://vercel.com):

1. Faça push do código para GitHub
2. Conecte seu repositório na Vercel
3. A deploy acontecerá automaticamente a cada push na branch principal

## 📚 Recursos e Referências

- [Next.js Documentation](https://nextjs.org/docs)
- [React Documentation](https://react.dev)
- [Tailwind CSS](https://tailwindcss.com)
- [Radix UI](https://www.radix-ui.com)
- [Rocketseat](https://rocketseat.com.br)

## 📄 Licença

Este projeto é parte do programa Rocketseat ONE.

## 👤 Autor

**Isaac** - Rocketseat ONE

---

<div align="center">

**Desenvolvido com ❤️ como parte da jornada de aprendizagem em Next.js**

</div>
