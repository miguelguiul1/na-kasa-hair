# Protótipo · site para salão de beleza

Um site de uma página para salão de beleza, feito para transformar quem chega pelo Instagram em cliente com horário marcado pelo WhatsApp.

**No ar:** https://na-kasa-hair.vercel.app

> Protótipo independente, feito por mim como estudo de design e de produto. Não é o site oficial de nenhum estabelecimento e não tem vínculo com nenhum negócio. Nomes, marcas e imagens de terceiros que aparecem na demonstração pertencem aos seus donos.

## O que o protótipo resolve

Muito salão tem um Instagram bonito e nenhum lugar onde a cliente encontre, de uma vez, serviços, endereço e um jeito rápido de marcar horário. Este protótipo reúne isso numa página só:

- **Serviços, galeria e "sobre"** numa leitura curta, pensada para o celular.
- **Barra fixa de WhatsApp no celular**, com mensagem já escrita.
- **Contato e localização** com link para o mapa.
- **Acessibilidade revisada:** contraste, foco visível e navegação por teclado, a partir de uma auditoria com correções dos achados críticos e moderados.
- **Headers de segurança** configurados no `vercel.json`.

## Tecnologias

React, TypeScript, Vite, Tailwind CSS e shadcn/ui. Sem backend. Deploy na Vercel.

## Rodando localmente

```bash
git clone https://github.com/miguelguiul1/na-kasa-hair.git
cd na-kasa-hair
npm install
npm run dev        # http://localhost:5173
npm run build      # build de produção
npm run preview    # serve o build para conferência
```

Este projeto não usa variáveis de ambiente.

## Licença

O código está sob a licença [MIT](LICENSE). A licença não cobre marcas, logos, fotos nem textos de terceiros.
