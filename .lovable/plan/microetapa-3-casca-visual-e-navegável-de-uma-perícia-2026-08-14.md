# Microetapa 3: Casca Visual e Navegável de uma Perícia

Implementação da estrutura interna de navegação e visualização de uma perícia específica (rotas dinâmicas).

## Ações Realizadas
- Criadas rotas dinâmicas `/pericias/$periciaId` com layout compartilhado.
- Implementada navegação interna com 6 áreas: Visão Geral, Pessoas, Procedimentos, Fontes, Coleta e Laudo.
- Adicionado um link de demonstração na lista de perícias e no dashboard para acessar a perícia "demo".
- Implementados layouts visuais estáticos para cada área interna seguindo o design system.

## Detalhes Técnicos
- **Layout de Perícia**: Cabeçalho com status e abas de navegação otimizadas para mobile.
- **Visão Geral**: Checklist de andamento e informações de local/prazo (estáticos).
- **Pessoas/Procedimentos/Fontes**: Estruturas de lista com estados vazios e botões de ação visual.
- **Coleta**: Interface focada em uso em campo com destaque para gravação e controles táteis grandes.
- **Laudo**: Layout conceitual com área de documento e painel lateral de opções.
- **Design System**: Uso consistente dos tokens `tinta`, `pergaminho`, `indigo` e `latao`.
- **Acessibilidade**: Suporte a `prefers-reduced-motion` e alvos de toque adequados.

## Arquivos Criados
- `src/routes/pericias/$periciaId.tsx`: Layout pai da perícia específica.
- `src/routes/pericias/$periciaId/index.tsx`: Tela de Visão Geral.
- `src/routes/pericias/$periciaId/pessoas.tsx`: Tela de Pessoas.
- `src/routes/pericias/$periciaId/procedimentos.tsx`: Tela de Procedimentos.
- `src/routes/pericias/$periciaId/fontes.tsx`: Tela de Fontes.
- `src/routes/pericias/$periciaId/coleta.tsx`: Tela de Coleta.
- `src/routes/pericias/$periciaId/laudo.tsx`: Tela de Laudo.

## Arquivos Alterados
- `src/routes/pericias.tsx`: Adicionado link para a perícia de demonstração.
- `src/routes/index.tsx`: Adicionado link para a perícia de demonstração no dashboard.

## Validação
- Verificação manual das rotas `/pericias/demo` e sub-rotas.
- Verificação visual dos componentes e estados vazios.
- Confirmação de que nenhuma funcionalidade de backend ou IA foi ativada.
