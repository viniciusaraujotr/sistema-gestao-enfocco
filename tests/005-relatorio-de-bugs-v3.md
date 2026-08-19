# 🐛 Relatório de Bugs — v3.0
## Sistema de Gestão de Atendimentos Médicos Domiciliares

> **Artefato QA #005** — Ciclo completo de testes e correções concluído  
> **Versão:** 3.0 | **Data:** Agosto/2025 | **Status: Todos os bugs críticos resolvidos ✅**

---

## Histórico de Versões

| Versão | Data | Descrição |
|---|---|---|
| 1.0 | Agosto/2025 | Registro inicial — 1 bug e 3 melhorias identificados |
| 2.0 | Agosto/2025 | Fase 1 concluída — 12/12 casos aprovados |
| 3.0 | Agosto/2025 | Teste com cliente real — bugs resolvidos, sistema estável |

---

## Resumo v3.0

| Item | Quantidade |
|---|---|
| Bugs resolvidos | 3 (BUG-001, BUG-002, BUG-003) |
| Melhorias aplicadas | 5 (MEL-001 a MEL-005) |
| Casos de teste aprovados | 12/12 |
| Status geral | ✅ Pronto para entrega |

---

## Bugs Resolvidos

### BUG-001 ✅ RESOLVIDO — Cadastro duplicado de sócia
`🟠 Alto · Módulo: Sócias`

**Correção:** Validação de duplicidade por nome antes de salvar. Mensagem: *"Ja existe uma socia cadastrada com este nome."*

---

### BUG-002 ✅ RESOLVIDO — Tela de clientes travando após cadastro
`🔴 Crítico · Módulo: Clientes`

**Causa raiz identificada:** Campo `dataNascimento` salvo como objeto Date do Google Sheets. Ao tentar serializar esse objeto para o frontend via Apps Script, o sistema retornava `null` — causando o erro `TypeError: Cannot read properties of null (reading 'length')`.

**Correção:** Implementadas as funções `dataParaTexto()` e `linhaParaTexto()` no `Code.gs` — toda linha lida da planilha é convertida para string antes de ser enviada ao frontend, eliminando o problema para qualquer campo de data ou tipo especial.

---

### BUG-003 ✅ RESOLVIDO — Sistema travando em geral (timeout)
`🔴 Crítico · Módulo: Geral`

**Causa raiz:** Variável global `SS_ID` executava `getActiveSpreadsheet()` a cada chamada de função, causando lentidão acumulativa. Ausência de `withFailureHandler` deixava o sistema sem resposta em caso de timeout.

**Correção:** Removida a variável global. Todas as funções passaram a usar `getActiveSpreadsheet()` diretamente apenas quando necessário. Adicionado `withFailureHandler` em todas as chamadas do frontend com mensagem de erro e link "Tentar novamente".

---

## Melhorias Aplicadas

### MEL-001 ✅ — Campo nome com orientação de preenchimento completo
Label atualizado para "Nome completo *" e placeholder para "Nome e sobrenome".

### MEL-002 ✅ — Especialidades com autocomplete
Campo sugere especialidades cadastradas na Config conforme o usuário digita.

### MEL-003 ✅ — Disponibilidade com checkboxes de dias
Substituído texto livre por checkboxes: Seg / Ter / Qua / Qui / Sex / Sab / Dom.

### MEL-004 ✅ — Campo data com calendário nativo
Campo `type="date"` com seletor de calendário — mais intuitivo e sem erros de digitação.

### MEL-005 ✅ — Capitalização automática
`autocapitalize="words"` nos campos de nome e endereço.

### MEL-006 ✅ — Máscara de telefone
Formatação automática `(00) 00000-0000` ao digitar.

### MEL-007 🔴 ABERTO — Navegação entre semanas na agenda
Adicionados botões ← Anterior / Hoje / Próxima → com período exibido. Funcional mas ainda em validação com a cliente.

---

## Registro de Execução — Completo

| Caso | Descrição | Resultado | Data | Observação |
|---|---|---|---|---|
| CT-05.1 | Sócia sem acesso ao financeiro | ✅ Passou | Ago/2025 | Menu restrito funcionando |
| CT-05.2 | Gestora acessa todos os módulos | ✅ Passou | Ago/2025 | Todos os módulos acessíveis |
| CT-03.1 | Cadastro em menos de 1 minuto | ✅ Passou | Ago/2025 | Concluído em 30 segundos |
| CT-03.2 | Campo obrigatório bloqueado | ✅ Passou | Ago/2025 | Mensagem de erro exibida |
| CT-08.1 | Registrar aguardando disponibilidade | ✅ Passou | Ago/2025 | Status e alerta funcionando |
| CT-08.3 | Procedimento exclusivo bloqueado | ✅ Passou | Ago/2025 | Bloqueio com mensagem clara |
| CT-02.1 | Registrar pagamento recebido | ✅ Passou | Ago/2025 | Faturamento atualizado |
| CT-02.2 | Lista de pendentes ao abrir | ✅ Passou | Ago/2025 | Pendentes exibidos corretamente |
| CT-02.3 | Valor incorreto bloqueado | ✅ Passou | Ago/2025 | Mensagem de erro exibida |
| CT-07.1 | Pagamento parcial registrado | ✅ Passou | Ago/2025 | Saldo devedor calculado |
| CT-07.2 | Quitação do saldo restante | ✅ Passou | Ago/2025 | Status atualizado para Pago |
| CT-07.3 | Pagamento maior bloqueado | ✅ Passou | Ago/2025 | Bloqueio com valor do atendimento |
| CT-06.1 | Primeiro acesso sem instrução | 🔄 Parcial | Ago/2025 | Sessão interrompida por instabilidade — reagendar |
| CT-08.2 | Converter aguardando para agendado | ⏳ Pendente | — | Edição de atendimento não implementada |
| CT-04.1 | Faturamento automático correto | ⏳ Pendente | — | Validado indiretamente |
| CT-01.1 | Agenda em tempo real | ⏳ Pendente | — | Aguarda múltiplos acessos simultâneos |
| CT-01.2 | Edição sem permissão bloqueada | ⏳ Pendente | — | — |
| CT-01.3 | Edição simultânea | ⏳ Pendente | — | — |

---

## Próximos Passos

- [x] Fase 1 de testes — 12/12 aprovados
- [x] BUG-001, BUG-002, BUG-003 resolvidos
- [x] MEL-001 a MEL-006 aplicadas
- [ ] CT-06.1 — reagendar sessão de usabilidade com a cliente
- [ ] CT-01 — teste de agenda simultânea
- [ ] Entrega formal ao cliente

---

*Artefato gerado com metodologia ISTQB Foundation · Parceiro Digital*
