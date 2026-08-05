# 🏥 Sistema de Gestão de Atendimentos Médicos Domiciliares

> Projeto real desenvolvido com metodologia QA aplicada (ISTQB Foundation) | **Parceiro Digital**

![Status](https://img.shields.io/badge/Status-Em%20Desenvolvimento-yellow)
![QA](https://img.shields.io/badge/Metodologia-QA%20First-green)
![Stack](https://img.shields.io/badge/Stack-Google%20Sheets%20%2B%20Apps%20Script-blue)
![Licença](https://img.shields.io/badge/Licença-MIT-lightgrey)

---

## 📌 Sobre o Projeto

Sistema de gestão operacional e financeira desenvolvido para uma empresa de atendimentos de enfermagem domiciliar (home care). O projeto substitui o controle manual via caderno e WhatsApp por uma solução digital acessível, mobile-first e multiusuário.

Desenvolvido como **caso real de uso**, este projeto serve simultaneamente como:
- ✅ Solução funcional para o cliente
- ✅ Portfólio de QA com artefatos reais e rastreáveis
- ✅ Prática aplicada da metodologia ISTQB Foundation
- ✅ Validação de produto para escala futura no segmento de home care

---

## 🎯 Problema Resolvido

A empresa operava 100% de forma manual — caderno, agenda física e WhatsApp — sem nenhuma visibilidade sobre agenda, pagamentos ou histórico de clientes. As principais dores identificadas:

- Agenda não compartilhada entre as 3 sócias em tempo real
- Sem controle de pagamentos recebidos e em aberto
- Sem suporte a pagamento parcial com saldo devedor
- Sem histórico centralizado de clientes e atendimentos
- Sem visibilidade de faturamento mensal

---

## 🛠️ Stack Tecnológica

| Camada | Tecnologia |
|---|---|
| Interface | Google Sheets (mobile + desktop) |
| Lógica e automação | Google Apps Script |
| Armazenamento | Google Drive |
| Documentação | Markdown + HTML + PDF |
| Controle de versão | GitHub |

---

## 👥 Perfis de Usuário

| Perfil | Acesso | Tela inicial |
|---|---|---|
| Gestora de Atendimento | Completo — agenda, clientes, financeiro, relatórios | Agenda semanal |
| Sócia / Enfermeira | Restrito — agenda e dados do atendimento | Agenda semanal |

---

## ✅ Funcionalidades Previstas

- [x] Levantamento de requisitos
- [x] Validação de requisitos com a cliente
- [ ] Agenda compartilhada em tempo real (P1)
- [ ] Controle de pagamentos e inadimplência (P1)
- [ ] Cadastro de atendimento em menos de 1 minuto (P1)
- [ ] Controle de acesso por perfil — Gestora e Sócia (P1)
- [ ] Pagamento parcial com saldo devedor (P1)
- [ ] Relatório financeiro mensal (P2)
- [ ] Status "aguardando disponibilidade" para procedimentos exclusivos (P2)
- [ ] Controle de disponibilidade semanal das sócias (P2)
- [ ] Histórico de atendimentos por cliente (P2)
- [ ] Controle de estoque básico (P3)

---

## 📁 Estrutura do Repositório

```
sistema-gestao-enfocco/
│
├── docs/                            # Artefatos de QA e documentação
│   ├── 001-roteiro-entrevista.md    # Artefato QA #001 — Roteiro de entrevista
│   ├── 002-requisitos.md            # Artefato QA #002 — Requisitos v1.0
│   ├── 002-requisitos-v2.md         # Artefato QA #002 — Requisitos v2.0
│   └── roteiro-validacao.md         # Roteiro da reunião de validação
│
├── tests/                           # Casos de teste e plano de testes
│   ├── 003-casos-de-teste.md        # Artefato QA #003 — Casos de teste v1.0 (18 casos)
│   ├── 003-casos-de-teste-v2.md     # Artefato QA #003 — Casos de teste v2.0 (24 casos)
│   └── 004-plano-de-testes.md       # Artefato QA #004 — Plano de testes
│
├── src/                             # Código-fonte (Apps Script)
│   └── README.md
│
└── README.md                        # Este arquivo
```

---

## 📋 Artefatos de QA

| # | Artefato | Versão | Status |
|---|---|---|---|
| 001 | Roteiro de Entrevista com Cliente | 1.0 | ✅ Concluído |
| 002 | Documento de Requisitos | 2.0 | ✅ Validado com cliente |
| 003 | Casos de Teste | 2.0 — 24 casos | ✅ Concluído |
| 004 | Plano de Testes | 1.0 | ✅ Concluído |
| 005 | Relatório de Bugs | — | ⏳ Aguarda desenvolvimento |

---

## 🔍 Critérios de Aceite

| # | Critério | Status |
|---|---|---|
| CA-01 | As 3 sócias visualizam e editam a agenda pelo celular com visão semanal | ⏳ Pendente |
| CA-02 | Gestora vê imediatamente os pendentes de pagamento ao abrir o sistema | ⏳ Pendente |
| CA-03 | Cadastro de novo atendimento feito em menos de 1 minuto pelo celular | ⏳ Pendente |
| CA-04 | Faturamento mensal calculado automaticamente | ⏳ Pendente |
| CA-05 | Sócias acessam apenas agenda e dados do atendimento — sem CPF e financeiro | ⏳ Pendente |
| CA-06 | Gestora usa o sistema sem treinamento formal | ⏳ Pendente |
| CA-07 | Sistema registra pagamento parcial e mantém saldo devedor em aberto | ⏳ Pendente |
| CA-08 | Atendimento com procedimento exclusivo pode ser salvo como "aguardando" | ⏳ Pendente |

---

## 🚀 Como Executar

> Instruções serão adicionadas após o desenvolvimento do sistema.

---

## 👨‍💻 Autor

**Vinícius** — Analista de Infraestrutura e Suporte TI em transição para QA Analyst

Estudando: ISTQB Foundation · Cypress · ITIL 4

[![GitHub](https://img.shields.io/badge/GitHub-viniciusaraujotr-black?logo=github)](https://github.com/viniciusaraujotr)

---

## 🏢 Sobre a Parceiro Digital

Projeto desenvolvido pela **Parceiro Digital** — especializada em digitalizar pequenos negócios que ainda operam de forma manual, entregando soluções simples, acessíveis e com excelência no atendimento.

---

*Projeto em desenvolvimento ativo — documentação atualizada continuamente.*


