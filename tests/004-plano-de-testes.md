# 📋 Plano de Testes
## Sistema de Gestão de Atendimentos Médicos Domiciliares

> **Artefato QA #004** — Plano de execução dos testes  
> **Versão:** 1.0 | **Data:** Julho/2025 | **Status:** ✅ Aprovado para execução

---

## 1. Identificação

| Campo | Informação |
|---|---|
| **Projeto** | Sistema de Gestão de Atendimentos Médicos Domiciliares |
| **Cliente** | Enfocco |
| **QA Analyst** | Vinícius — Parceiro Digital |
| **Referência** | Artefato QA #003 — Casos de Teste v2.0 (24 casos) |
| **Metodologia** | ISTQB Foundation |

---

## 2. Objetivo

Garantir que o sistema atenda a todos os critérios de aceite definidos com a cliente antes da entrega, executando os casos de teste na ordem correta e registrando os resultados.

---

## 3. Escopo dos Testes

### ✅ O que será testado

| Módulo | Casos de Teste | Prioridade |
|---|---|---|
| Agenda compartilhada | CT-01.1, CT-01.2, CT-01.3 | 🔴 P1 |
| Controle de pagamentos | CT-02.1, CT-02.2, CT-02.3, CT-02.4 | 🔴 P1 |
| Cadastro de atendimento | CT-03.1, CT-03.2 | 🔴 P1 |
| Controle de acesso por perfil | CT-05.1, CT-05.2 | 🔴 P1 |
| Pagamento parcial com saldo devedor | CT-07.1, CT-07.2, CT-07.3 | 🔴 P1 |
| Faturamento mensal automático | CT-04.1, CT-04.2 | 🟡 P2 |
| Status aguardando disponibilidade | CT-08.1, CT-08.2, CT-08.3 | 🟡 P2 |
| Usabilidade e responsividade | CT-06.1, CT-06.2, CT-06.3 | 🟡 P2 |

### ❌ O que não será testado nesta fase

- Integração com WhatsApp — fora do escopo do sistema
- Pagamento de sócias entre si — fora do escopo
- Performance sob alta carga — não aplicável para o porte atual
- Testes automatizados com Cypress — fase futura

---

## 4. Ordem de Execução

A ordem segue a dependência entre módulos — um módulo precisa funcionar antes do próximo ser testado.

```
Fase 1 — Base do sistema (P1)
│
├── 1.1 Controle de acesso por perfil (CT-05)
│     ↳ Precisa funcionar antes de qualquer outro teste
│
├── 1.2 Cadastro de atendimento (CT-03)
│     ↳ Precisa existir atendimento para testar pagamento e agenda
│
├── 1.3 Agenda compartilhada (CT-01)
│     ↳ Depende de atendimentos cadastrados
│
└── 1.4 Controle de pagamentos (CT-02) + Pagamento parcial (CT-07)
      ↳ Depende de atendimentos cadastrados

Fase 2 — Funcionalidades complementares (P2)
│
├── 2.1 Faturamento mensal (CT-04)
│     ↳ Depende de pagamentos registrados
│
├── 2.2 Status aguardando disponibilidade (CT-08)
│     ↳ Depende de cadastro de atendimento
│
└── 2.3 Usabilidade e responsividade (CT-06)
      ↳ Executado com a cliente real (gestora)
```

---

## 5. Ambiente de Teste

| Item | Descrição |
|---|---|
| **Plataforma** | Google Sheets + Apps Script |
| **Dispositivos** | Celular Android/iOS (principal) + Computador (secundário) |
| **Navegador** | Google Chrome (desktop) e navegador nativo do celular |
| **Perfis de acesso** | Gestora e Sócia — contas Google separadas |
| **Dados de teste** | Clientes e atendimentos fictícios criados para os testes |

---

## 6. Critérios de Entrada

Os testes só iniciam quando:

- [ ] O módulo a ser testado está desenvolvido e disponível
- [ ] Os dados de teste estão criados (clientes e atendimentos fictícios)
- [ ] Os dois perfis de acesso estão configurados (Gestora e Sócia)
- [ ] O sistema está acessível pelo celular

---

## 7. Critérios de Saída — Quando o Sistema Está Pronto para Entrega

O sistema será entregue ao cliente quando:

- [ ] **Todos os casos P1 passarem** — CT-01, CT-02, CT-03, CT-05, CT-07
- [ ] **Pelo menos 80% dos casos P2 passarem** — CT-04, CT-06, CT-08
- [ ] **Nenhum bug crítico em aberto** — bugs que impedem uso do sistema
- [ ] **Teste de usabilidade aprovado pela cliente** — CT-06.1 executado com a gestora real

---

## 8. Classificação de Bugs

Quando um caso de teste falhar, o bug será classificado assim:

| Severidade | Descrição | Exemplo |
|---|---|---|
| 🔴 **Crítico** | Impede o uso do sistema | Agenda não carrega, pagamento não salva |
| 🟠 **Alto** | Funcionalidade incorreta mas tem contorno | Saldo devedor calculado errado |
| 🟡 **Médio** | Comportamento inesperado sem impacto grave | Mensagem de erro confusa |
| 🟢 **Baixo** | Problema visual ou de conforto | Botão levemente desalinhado |

---

## 9. Processo de Registro de Bug

Quando um caso de teste falhar:

1. Anotar qual caso de teste falhou (ex: CT-02.3)
2. Descrever o que aconteceu vs o que era esperado
3. Classificar a severidade
4. Registrar no Artefato QA #005 — Relatório de Bugs
5. Corrigir e re-executar o caso de teste
6. Confirmar que passou antes de avançar

---

## 10. Registro de Execução

A cada sessão de testes, preencher a tabela abaixo:

| Caso de Teste | Descrição | Resultado | Data | Observação |
|---|---|---|---|---|
| CT-01.1 | Agenda atualizada em tempo real | ⏳ Pendente | — | — |
| CT-01.2 | Edição sem permissão bloqueada | ⏳ Pendente | — | — |
| CT-01.3 | Edição simultânea | ⏳ Pendente | — | — |
| CT-02.1 | Registrar pagamento recebido | ⏳ Pendente | — | — |
| CT-02.2 | Lista de pendentes ao abrir | ⏳ Pendente | — | — |
| CT-02.3 | Valor incorreto bloqueado | ⏳ Pendente | — | — |
| CT-02.4 | Link expirado sinalizado | ⏳ Pendente | — | — |
| CT-03.1 | Cadastro em menos de 1 minuto | ⏳ Pendente | — | — |
| CT-03.2 | Campo obrigatório bloqueado | ⏳ Pendente | — | — |
| CT-04.1 | Faturamento automático correto | ⏳ Pendente | — | — |
| CT-04.2 | Mês vazio sem erro | ⏳ Pendente | — | — |
| CT-05.1 | Sócia sem acesso ao financeiro | ⏳ Pendente | — | — |
| CT-05.2 | Gestora acessa tudo | ⏳ Pendente | — | — |
| CT-06.1 | Primeiro acesso sem instrução | ⏳ Pendente | — | — |
| CT-06.2 | Responsividade no celular | ⏳ Pendente | — | — |
| CT-06.3 | Mensagem de erro compreensível | ⏳ Pendente | — | — |
| CT-07.1 | Pagamento parcial registrado | ⏳ Pendente | — | — |
| CT-07.2 | Quitação do saldo restante | ⏳ Pendente | — | — |
| CT-07.3 | Pagamento maior bloqueado | ⏳ Pendente | — | — |
| CT-08.1 | Registrar aguardando disponibilidade | ⏳ Pendente | — | — |
| CT-08.2 | Converter para agendado | ⏳ Pendente | — | — |
| CT-08.3 | Procedimento exclusivo bloqueado | ⏳ Pendente | — | — |

**Legenda:** ⏳ Pendente · ✅ Passou · ❌ Falhou · 🔄 Re-testando

---

## 11. Próximos Passos

- [x] Artefato QA #001 — Roteiro de entrevista
- [x] Artefato QA #002 — Documento de requisitos v1.0 e v2.0
- [x] Artefato QA #003 — Casos de teste v1.0 e v2.0
- [x] Artefato QA #004 — Plano de testes
- [ ] Desenvolvimento — Módulo de Agenda (P1)
- [ ] Desenvolvimento — Módulo de Pagamentos (P1)
- [ ] Desenvolvimento — Módulo de Cadastros (P1)
- [ ] Execução dos testes — Fase 1
- [ ] Artefato QA #005 — Relatório de bugs
- [ ] Execução dos testes — Fase 2
- [ ] Entrega ao cliente

---

*Artefato gerado com metodologia ISTQB Foundation · Parceiro Digital*
