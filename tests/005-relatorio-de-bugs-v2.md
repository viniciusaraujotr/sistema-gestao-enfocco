# 🐛 Relatório de Bugs — v2.0
## Sistema de Gestão de Atendimentos Médicos Domiciliares

> **Artefato QA #005** — Fase 1 de testes concluída  
> **Versão:** 2.0 | **Data:** Agosto/2025 | **Resultado: 12/12 casos aprovados ✅**

---

## Histórico de Versões

| Versão | Data | Descrição |
|---|---|---|
| 1.0 | Agosto/2025 | Registro inicial — 1 bug e 3 melhorias identificados |
| 2.0 | Agosto/2025 | Fase 1 concluída — correções aplicadas, 12 casos testados |

---

## Resumo v2.0

| Item | Quantidade |
|---|---|
| Bugs corrigidos | 1 |
| Melhorias aplicadas | 3 |
| Melhoria pendente | 1 (MEL-004) |
| Casos testados | 12 |
| ✅ Casos aprovados | 12 |

---

## Bugs Corrigidos

### BUG-001 ✅ RESOLVIDO — Cadastro duplicado de sócia permitido
`🟠 Alto · Módulo: Sócias · CT-05`

**Como reproduzir:**
1. Cadastrar uma sócia (ex: Bruna)
2. Tentar cadastrar outra sócia com o mesmo nome
3. Verificar se sistema bloqueia

**Resultado obtido (v1.0):** Sistema permitia cadastros duplicados sem nenhum aviso.

**Correção aplicada:** Validação de duplicidade por nome antes de salvar. Sistema exibe mensagem: *"Ja existe uma socia cadastrada com este nome."*

---

## Melhorias

### MEL-001 ✅ RESOLVIDO — Campo nome orientando preenchimento completo
`🟢 Melhoria · Módulo: Sócias e Clientes`

**Aplicado:** Label atualizado para "Nome completo *" e placeholder para "Nome e sobrenome da socia".

---

### MEL-002 ✅ RESOLVIDO — Especialidades com autocomplete
`🟢 Melhoria · Módulo: Sócias`

**Aplicado:** Campo agora sugere especialidades cadastradas na Config conforme o usuário digita.

---

### MEL-003 ✅ RESOLVIDO — Disponibilidade com checkboxes de dias
`🟢 Melhoria · Módulo: Sócias`

**Aplicado:** Substituído por checkboxes clicáveis: Seg / Ter / Qua / Qui / Sex / Sab / Dom.

---

### MEL-004 🔴 ABERTO — Campo data com seletor de calendário
`🟢 Melhoria · Módulo: Atendimentos · CT-03`

**Situação:** Campo data aceita texto livre, inclusive sem barras separadoras.

**Proposta:** Substituir por input tipo `date` com calendário nativo do navegador.

---

## Registro de Execução — Fase 1

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
| CT-07.1 | Pagamento parcial registrado | ✅ Passou | Ago/2025 | Saldo devedor calculado corretamente |
| CT-07.2 | Quitação do saldo restante | ✅ Passou | Ago/2025 | Status atualizado para Pago |
| CT-07.3 | Pagamento maior bloqueado | ✅ Passou | Ago/2025 | Bloqueio com valor do atendimento |
| CT-08.2 | Converter aguardando para agendado | ⏳ Pendente | — | Edição de atendimento pendente |
| CT-04.1 | Faturamento automático correto | ⏳ Pendente | — | Validado indiretamente |
| CT-06.1 | Primeiro acesso sem instrução | ⏳ Pendente | — | Aguarda teste com cliente real |
| CT-06.2 | Responsividade no celular | ⏳ Pendente | — | Testado informalmente — OK |
| CT-01.1 | Agenda em tempo real | ⏳ Pendente | — | Aguarda múltiplos acessos simultâneos |
| CT-01.2 | Edição sem permissão bloqueada | ⏳ Pendente | — | — |
| CT-01.3 | Edição simultânea | ⏳ Pendente | — | — |

---

## Próximos Passos

- [x] Fase 1 de testes — 12/12 casos aprovados
- [ ] Corrigir MEL-004 — campo data com calendário
- [ ] Limpar dados de teste da planilha
- [ ] CT-06.1 — teste de usabilidade com a cliente real
- [ ] CT-01 — teste de agenda simultânea com múltiplos acessos
- [ ] Entrega ao cliente

---

*Artefato gerado com metodologia ISTQB Foundation · Parceiro Digital*
