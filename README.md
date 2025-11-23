# Diagnóstico de Segurança Digital (IA)

Sistema web desenvolvido com Next.js, TypeScript e Tailwind CSS que utiliza IA para fornecer orientações de segurança digital.

## 🚀 Funcionalidades

- ✅ Interface responsiva com tema escuro
- ✅ Integração com OpenAI API (GPT-3.5 Turbo)
- ✅ API Key configurada via variáveis de ambiente (seguro)
- ✅ Sistema de loading e tratamento de erros
- ✅ Perguntas de exemplo para facilitar o uso
- ✅ Design moderno com ícones Lucide React

## 📁 Estrutura do Projeto

```
├── src/
│   ├── app/
│   │   ├── api/diagnose/route.ts    # API route para OpenAI
│   │   ├── page.tsx                 # Página principal
│   │   ├── layout.tsx               # Layout base
│   │   └── globals.css              # Estilos globais
├── .env.local                       # Variáveis de ambiente
├── package.json                     # Dependências
└── README.md                        # Este arquivo
```

## ⚙️ Configuração

### 1. Instalar Dependências

```bash
npm install
```

### 2. Configurar API Key

Edite o arquivo `.env.local` e adicione sua API Key da OpenAI:

```
OPENAI_API_KEY=sk-sua-api-key-aqui
```

### 3. Executar o Projeto

```bash
npm run dev
```

O sistema estará disponível em `http://localhost:3000`

## 🛡️ Como Usar

1. Acesse a aplicação no navegador
2. Digite uma pergunta sobre segurança digital ou clique em um dos exemplos
3. Clique em "Gerar Diagnóstico"
4. Aguarde a resposta da IA especializada

## 🔧 Tecnologias

- **Next.js 14** - Framework React
- **TypeScript** - Tipagem estática
- **Tailwind CSS** - Estilização
- **Lucide React** - Ícones
- **OpenAI API** - Inteligência artificial

## 📋 Exemplos de Uso

- "Recebi um email suspeito pedindo minha senha, pode ser phishing?"
- "Minha conta do WhatsApp foi clonada, o que devo fazer?"
- "Como criar uma senha forte e segura?"
- "Suspeito que meus dados vazaram, como verificar?"

## 🔒 Segurança

- API Key armazenada server-side via variáveis de ambiente
- Comunicação segura com OpenAI
- Sem exposição de credenciais no frontend
- Tratamento adequado de erros

---

**Projeto de Extensão - Engenharia de Software**
