# 🐛 Relatório de Bugs
## Sistema de Gestão de Atendimentos Médicos Domiciliares

> **Artefato QA #005** — Registro de bugs e melhorias identificados durante os testes  
> **Versão:** 1.0 | **Data:** Agosto/2025 | **QA Analyst:** Vinícius — Parceiro Digital

---

## Resumo

| Tipo | Quantidade |
|---|---|
| 🔴 Crítico | 0 |
| 🟠 Alto | 1 |
| 🟡 Médio | 0 |
| 🟢 Baixo (melhorias) | 3 |
| **Total** | **4** |

---

## Legenda de Status

- 🔴 **Aberto** — aguardando correção
- 🔄 **Em correção** — sendo corrigido
- ✅ **Resolvido** — corrigido e verificado

---

## BUG-001 — Cadastro duplicado de sócia permitido
`🟠 Alto · 🔴 Aberto`

| Campo | Descrição |
|---|---|
| **Módulo** | Sócias |
| **Caso de teste relacionado** | CT-05 — Controle de cadastros |
| **Severidade** | 🟠 Alto |
| **Data** | Agosto/2025 |

**Como reproduzir:**
1. Acessar o módulo Sócias como Gestora
2. Cadastrar uma sócia (ex: Bruna)
3. Clicar em "Salvar" duas vezes seguidas
4. Verificar que dois registros idênticos são criados

**Resultado obtido:** Sistema permite cadastrar a mesma sócia múltiplas vezes sem nenhum aviso ou bloqueio.

**Resultado esperado:** Sistema deve validar se já existe uma sócia com o mesmo nome e bloquear o duplicado com mensagem: "Já existe uma sócia cadastrada com este nome."

**Correção prevista:** Validar duplicidade por nome antes de salvar.

---

## MEL-001 — Campo nome deve suportar nome completo
`🟢 Melhoria · 🔴 Aberto`

| Campo | Descrição |
|---|---|
| **Módulo** | Sócias e Clientes |
| **Tipo** | Melhoria de usabilidade |
| **Data** | Agosto/2025 |

**Situação atual:** Campo "Nome" aceita qualquer texto mas não orienta sobre incluir sobrenome, podendo gerar cadastros ambíguos como "Bruna" sem identificação completa.

**Melhoria proposta:** Placeholder e label devem orientar o usuário a inserir nome completo. Ex: placeholder "Nome e sobrenome".

---

## MEL-002 — Especialidades sem sugestão automática
`🟢 Melhoria · 🔴 Aberto`

| Campo | Descrição |
|---|---|
| **Módulo** | Sócias |
| **Tipo** | Melhoria de usabilidade |
| **Data** | Agosto/2025 |

**Situação atual:** Campo especialidades é texto livre — permite variações como "laser terapia", "Laser Terapia", "Laserterapia", gerando inconsistência nos dados.

**Melhoria proposta:** Campo deve sugerir as especialidades já cadastradas na Config conforme o usuário digita (autocomplete), garantindo padronização dos dados.

---

## MEL-003 — Disponibilidade semanal sem padronização
`🟢 Melhoria · 🔴 Aberto`

| Campo | Descrição |
|---|---|
| **Módulo** | Sócias |
| **Tipo** | Melhoria de usabilidade |
| **Data** | Agosto/2025 |

**Situação atual:** Campo disponibilidade é texto livre — permite "Segunda a Sexta", "Seg, Qua, Sex", "segunda-feira" etc., gerando inconsistência.

**Melhoria proposta:** Substituir por checkboxes com os dias da semana:
```
☐ Seg  ☐ Ter  ☐ Qua  ☐ Qui  ☐ Sex  ☐ Sab  ☐ Dom
```
Facilita o preenchimento e padroniza o formato salvo no sistema.

---

## Histórico de Execução de Testes

| Caso | Descrição | Resultado | Data | Observação |
|---|---|---|---|---|
| CT-05.1 | Sócia tenta acessar módulo financeiro | ✅ Passou | Ago/2025 | Menu restrito funcionando corretamente |
| CT-05.2 | Gestora acessa todos os módulos | ✅ Passou | Ago/2025 | Todos os módulos acessíveis |
| CT-03.1 | Cadastro de atendimento em menos de 1 minuto | ⏳ Pendente | — | Aguarda dados cadastrados |
| CT-03.2 | Campo obrigatório bloqueado | ⏳ Pendente | — | — |
| CT-01.1 | Agenda atualizada em tempo real | ⏳ Pendente | — | — |
| CT-01.2 | Edição sem permissão bloqueada | ⏳ Pendente | — | — |
| CT-01.3 | Edição simultânea | ⏳ Pendente | — | — |
| CT-02.1 | Registrar pagamento recebido | ⏳ Pendente | — | — |
| CT-02.2 | Lista de pendentes ao abrir | ⏳ Pendente | — | — |
| CT-02.3 | Valor incorreto bloqueado | ⏳ Pendente | — | — |
| CT-02.4 | Link expirado sinalizado | ⏳ Pendente | — | — |
| CT-07.1 | Pagamento parcial registrado | ⏳ Pendente | — | — |
| CT-07.2 | Quitação do saldo restante | ⏳ Pendente | — | — |
| CT-07.3 | Pagamento maior bloqueado | ⏳ Pendente | — | — |

---

*Artefato gerado com metodologia ISTQB Foundation · Parceiro Digital*
