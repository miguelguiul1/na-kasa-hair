# Na Kasa Hair — site (protótipo)

One-page marketing site prototype for **Na Kasa Hair**, salão de beleza em
Pinheiros, São Paulo. Built with React + TypeScript + Vite + Tailwind CSS +
shadcn/ui.

## Rodando localmente

```bash
npm install
npm run dev
```

Abra o endereço mostrado no terminal (geralmente `http://localhost:5173`).

## Build de produção

```bash
npm run build
npm run preview   # serve o build localmente para conferência
```

## Estrutura

- `src/App.tsx` — monta a página, seção por seção.
- `src/components/site/` — cada seção do site (Header, Hero, Services,
  About, Gallery, InstagramBlock, Contact, Footer, etc.).
- `src/components/ui/` — componentes shadcn/ui (Button, Card, Badge,
  Separator).
- `src/components/icons/` — ícones de marca (WhatsApp, Instagram) que não
  existem no pacote `lucide-react`.
- `src/lib/constants.ts` — todos os dados reais do negócio (endereço,
  telefone/WhatsApp, Instagram, nota do Google) em um único lugar.
- `src/assets/logo.jpg` — logo real do salão, usada no header e no rodapé.

## Pendências para o cliente (TODO)

Ver lista completa entregue junto com o protótipo. Resumo:

- Fotos reais do salão/trabalhos para substituir os placeholders da Galeria.
- Horário de funcionamento (não informado — placeholder visível na seção
  Contato).
- Confirmar se o link do Google Maps (busca pelo endereço) é suficiente ou
  se o cliente prefere linkar o perfil exato do Google Business.
