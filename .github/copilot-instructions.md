# Diagnóstico de Segurança Digital (IA)

Sistema web desenvolvido com Next.js, TypeScript e Tailwind CSS que utiliza IA para fornecer orientações de segurança digital.

## Funcionalidades Implementadas

- Interface responsiva com tema escuro
- Integração com OpenAI API (GPT-3.5 Turbo)
- Campo para configuração de API Key
- Sistema de loading e tratamento de erros
- Perguntas de exemplo para facilitar o uso
- Design moderno com ícones Lucide React

## Estrutura do Projeto

- `src/app/page.tsx`: Página principal com interface do usuário
- `src/app/api/diagnose/route.ts`: API route para comunicação com OpenAI
- `src/app/layout.tsx`: Layout base da aplicação
- `src/app/globals.css`: Estilos globais e tema escuro

## Como Executar

1. Configure uma API Key da OpenAI
2. Execute `npm install` para instalar dependências
3. Execute `npm run dev` para iniciar em modo desenvolvimento
4. Acesse `http://localhost:3000`

## Tecnologias

- Next.js 14 com App Router
- TypeScript para tipagem
- Tailwind CSS para estilização
- Lucide React para ícones
- OpenAI API para inteligência artificial
