# 🧪 Casos de Teste
## Sistema de Gestão de Atendimentos Médicos Domiciliares

> **Artefato QA #003** — Baseado nos Critérios de Aceite e Requisitos Funcionais  
> **Versão:** 2.0 | **Data:** Julho/2025 | **Total de casos:** 24

---

## Histórico de Versões

| Versão | Data | Descrição |
|---|---|---|
| 1.0 | Julho/2025 | 18 casos de teste — levantamento inicial |
| 2.0 | Julho/2025 | +6 casos — RF-12 (pagamento parcial) e RF-13 (aguardando disponibilidade) |

---

## Resumo

| Tipo | Quantidade |
|---|---|
| ✅ Cenários positivos | 11 |
| ❌ Cenários negativos | 8 |
| ⚠️ Casos de borda | 5 |
| **Total** | **24** |

---

## Legenda

- ✅ **Positivo** — fluxo esperado e correto
- ❌ **Negativo** — comportamento indesejado que o sistema deve bloquear
- ⚠️ **Borda** — situação limite que precisa de tratamento especial
- 🔴 **P1** — Alta prioridade | 🟡 **P2** — Média prioridade
- 🆕 **Novo** — adicionado na v2.0

---

## CT-01 — Agenda Compartilhada em Tempo Real
`CA-01 · 🔴 P1`

### CT-01.1 ✅ Sócia visualiza agenda atualizada por outra sócia

| Campo | Descrição |
|---|---|
| **Pré-condição** | Duas sócias logadas simultaneamente. Agenda com ao menos um atendimento cadastrado. |
| **Perfil testado** | Sócia A (edita) e Sócia B (visualiza) |

**Passos:**
1. Sócia A acessa a agenda e cadastra um novo atendimento
2. Sócia B, logada simultaneamente, acessa a agenda
3. Verificar se o atendimento aparece para a Sócia B

**Resultado esperado:** O atendimento cadastrado pela Sócia A aparece na agenda da Sócia B sem necessidade de atualizar manualmente.

---

### CT-01.2 ❌ Tentativa de editar atendimento sem permissão

| Campo | Descrição |
|---|---|
| **Pré-condição** | Sócia logada com perfil restrito. Atendimento já cadastrado. |
| **Perfil testado** | Sócia (perfil restrito) |

**Passos:**
1. Sócia acessa a agenda
2. Tenta excluir ou alterar atendimento de outra sócia
3. Verificar se o sistema permite ou bloqueia

**Resultado esperado:** O sistema bloqueia a ação e exibe mensagem informando falta de permissão.

---

### CT-01.3 ⚠️ Edição simultânea do mesmo atendimento por duas sócias

| Campo | Descrição |
|---|---|
| **Pré-condição** | Duas sócias com o mesmo atendimento aberto para edição simultaneamente. |
| **Perfil testado** | Sócia A e Sócia B (simultâneo) |

**Passos:**
1. Sócia A abre o atendimento para edição
2. Sócia B abre o mesmo atendimento simultaneamente
3. Ambas fazem alterações diferentes e salvam
4. Verificar qual alteração prevalece e se há aviso de conflito

**Resultado esperado:** O sistema salva a última alteração e exibe aviso de que o registro foi modificado por outra usuária.

---

## CT-02 — Controle de Pagamentos e Inadimplência
`CA-02 · 🔴 P1`

### CT-02.1 ✅ Registrar pagamento recebido de um cliente

| Campo | Descrição |
|---|---|
| **Pré-condição** | Atendimento cadastrado com valor definido. Pagamento ainda não registrado. |
| **Perfil testado** | Gestora |

**Passos:**
1. Gestora acessa o atendimento do cliente
2. Seleciona a forma de pagamento (Pix, cartão ou cheque)
3. Marca o pagamento como recebido e salva

**Resultado esperado:** Atendimento aparece com status "Pago" e data do recebimento registrada. Valor somado ao faturamento do mês.

---

### CT-02.2 ✅ Visualizar lista de clientes com pagamento em aberto

| Campo | Descrição |
|---|---|
| **Pré-condição** | Ao menos um atendimento com pagamento não registrado há mais de 1 dia. |
| **Perfil testado** | Gestora |

**Passos:**
1. Gestora abre o sistema
2. Verifica o destaque visual de pendentes na tela inicial
3. Acessa a lista de pagamentos em aberto

**Resultado esperado:** Lista exibe todos os clientes com pagamento pendente com nome, valor e data do atendimento.

---

### CT-02.3 ❌ Registrar pagamento com valor incorreto

| Campo | Descrição |
|---|---|
| **Pré-condição** | Atendimento com valor R$ 150,00 cadastrado. |
| **Perfil testado** | Gestora |

**Passos:**
1. Gestora tenta registrar pagamento com valor R$ 0,00 ou negativo
2. Tenta salvar

**Resultado esperado:** Sistema bloqueia e exibe: "Valor de pagamento inválido. Informe um valor maior que zero."

---

### CT-02.4 ⚠️ Link de cartão expirado sem pagamento registrado

| Campo | Descrição |
|---|---|
| **Pré-condição** | Atendimento com link de cartão gerado há mais de 24 horas. Pagamento não realizado. |
| **Perfil testado** | Gestora |

**Passos:**
1. Gestora abre o sistema
2. Verifica atendimentos com link de cartão gerado
3. Verificar se o sistema sinaliza links expirados sem pagamento

**Resultado esperado:** Sistema sinaliza com alerta "Link expirado — pagamento não confirmado" e mantém status "Em aberto".

---

## CT-03 — Cadastro de Atendimento em Menos de 1 Minuto
`CA-03 · 🔴 P1`

### CT-03.1 ✅ Cadastrar novo atendimento com todos os campos obrigatórios

| Campo | Descrição |
|---|---|
| **Pré-condição** | Cliente já cadastrado. Sócia disponível na data desejada. |
| **Perfil testado** | Gestora (via celular) |

**Passos:**
1. Gestora acessa a agenda pelo celular
2. Seleciona data, cliente, procedimento, sócia responsável e confirma valor
3. Salva — cronometrar o tempo total

**Resultado esperado:** Atendimento cadastrado com sucesso em menos de 60 segundos.

---

### CT-03.2 ❌ Tentativa de salvar atendimento sem campo obrigatório

| Campo | Descrição |
|---|---|
| **Pré-condição** | Gestora na tela de cadastro de atendimento. |
| **Perfil testado** | Gestora |

**Passos:**
1. Gestora preenche nome do cliente mas deixa o procedimento em branco
2. Tenta salvar

**Resultado esperado:** Sistema impede o salvamento e destaca o campo com mensagem: "Campo obrigatório. Selecione o procedimento."

---

## CT-04 — Faturamento Mensal Calculado Automaticamente
`CA-04 · 🟡 P2`

### CT-04.1 ✅ Visualizar faturamento total do mês

| Campo | Descrição |
|---|---|
| **Pré-condição** | Ao menos 3 atendimentos com pagamento registrado no mês corrente. |
| **Perfil testado** | Gestora |

**Passos:**
1. Gestora acessa o painel financeiro e seleciona o mês atual
2. Verifica o valor total exibido
3. Soma manualmente e compara com o total do sistema

**Resultado esperado:** Valor exibido é igual à soma manual. Nenhum cálculo manual necessário.

---

### CT-04.2 ⚠️ Faturamento com mês sem atendimentos registrados

| Campo | Descrição |
|---|---|
| **Pré-condição** | Nenhum atendimento cadastrado no mês selecionado. |
| **Perfil testado** | Gestora |

**Passos:**
1. Gestora acessa o painel financeiro
2. Seleciona um mês sem atendimentos

**Resultado esperado:** Sistema exibe R$ 0,00 com mensagem "Nenhum atendimento registrado neste período." Sem erro ou tela em branco.

---

## CT-05 — Controle de Acesso por Perfil
`CA-05 · 🔴 P1`

### CT-05.1 ❌ Sócia tenta acessar módulo financeiro

| Campo | Descrição |
|---|---|
| **Pré-condição** | Usuária logada com perfil Sócia (acesso restrito). |
| **Perfil testado** | Sócia (perfil restrito) |

**Passos:**
1. Sócia faz login no sistema
2. Tenta navegar para o módulo financeiro
3. Verificar se o acesso é bloqueado

**Resultado esperado:** Módulo financeiro não aparece no menu. Acesso direto pela URL redireciona com "Acesso não autorizado."

---

### CT-05.2 ✅ Gestora acessa todos os módulos do sistema

| Campo | Descrição |
|---|---|
| **Pré-condição** | Usuária logada com perfil Gestora (acesso completo). |
| **Perfil testado** | Gestora |

**Passos:**
1. Gestora faz login
2. Navega por agenda, clientes, financeiro e relatórios

**Resultado esperado:** Todos os módulos acessíveis e funcionando corretamente.

---

## CT-06 — Usabilidade — Sistema Sem Treinamento Formal
`CA-06 · 🟡 P2`

### CT-06.1 ✅ Primeiro acesso sem instrução prévia

| Campo | Descrição |
|---|---|
| **Pré-condição** | Cliente não técnica, sem contato prévio com o sistema. |
| **Perfil testado** | Gestora (usuária real) |

**Passos:**
1. Entregar o celular com o sistema aberto sem dar instrução
2. Pedir para cadastrar um atendimento fictício
3. Observar se ela encontra o caminho sem ajuda

**Resultado esperado:** Gestora cadastra o atendimento sem ajuda em menos de 2 minutos.

---

### CT-06.2 ✅ Navegação pelo celular — responsividade

| Campo | Descrição |
|---|---|
| **Pré-condição** | Sistema acessado via celular Android ou iOS. |
| **Perfil testado** | Gestora e Sócia |

**Passos:**
1. Acessar o sistema pelo celular
2. Navegar pelos módulos principais
3. Verificar legibilidade e clicabilidade sem zoom em telas de 5" e 6,5"

**Resultado esperado:** Todos os elementos legíveis e clicáveis sem zoom. Nenhum elemento sobreposto ou cortado.

---

### CT-06.3 ❌ Mensagens de erro compreensíveis para usuária não técnica

| Campo | Descrição |
|---|---|
| **Pré-condição** | Gestora na tela de cadastro de cliente. |
| **Perfil testado** | Gestora |

**Passos:**
1. Gestora tenta salvar cliente com CPF inválido (ex: 000.000.000-00)
2. Verificar a mensagem de erro exibida

**Resultado esperado:** Mensagem simples, sem jargões: "CPF inválido. Verifique o número digitado."

---

## CT-07 — Pagamento Parcial com Saldo Devedor 🆕
`CA-07 · 🔴 P1 · RF-12 · Novo na v2.0`

### CT-07.1 ✅ Registrar pagamento parcial e manter saldo devedor

| Campo | Descrição |
|---|---|
| **Pré-condição** | Atendimento com valor total de R$ 520,00. Nenhum pagamento registrado. |
| **Perfil testado** | Gestora |

**Passos:**
1. Gestora acessa o atendimento do cliente
2. Registra pagamento parcial de R$ 100,00 via Pix
3. Salva e verifica o status do atendimento

**Resultado esperado:** Sistema registra R$ 100,00 como recebido e exibe saldo devedor de R$ 420,00 em aberto. Status do atendimento: "Pago parcialmente".

---

### CT-07.2 ✅ Cliente quita o saldo restante — atendimento fechado como pago

| Campo | Descrição |
|---|---|
| **Pré-condição** | Atendimento com pagamento parcial registrado. Saldo devedor de R$ 420,00 em aberto. |
| **Perfil testado** | Gestora |

**Passos:**
1. Gestora acessa o atendimento com saldo devedor
2. Registra o pagamento restante de R$ 420,00
3. Salva e verifica o status

**Resultado esperado:** Sistema registra a quitação e atualiza o status para "Pago". Saldo devedor zerado. Valor total somado ao faturamento do mês.

---

### CT-07.3 ❌ Tentativa de registrar pagamento maior que o valor devido

| Campo | Descrição |
|---|---|
| **Pré-condição** | Atendimento com valor total de R$ 150,00. Nenhum pagamento registrado. |
| **Perfil testado** | Gestora |

**Passos:**
1. Gestora tenta registrar pagamento de R$ 200,00 — valor superior ao total do atendimento
2. Tenta salvar

**Resultado esperado:** Sistema bloqueia e exibe: "Valor informado é maior que o total do atendimento (R$ 150,00). Verifique o valor antes de salvar."

---

## CT-08 — Status "Aguardando Disponibilidade" 🆕
`CA-08 · 🟡 P2 · RF-13 · Novo na v2.0`

### CT-08.1 ✅ Registrar atendimento como "aguardando disponibilidade"

| Campo | Descrição |
|---|---|
| **Pré-condição** | Cliente solicita furo humanizado. Renata não tem disponibilidade na semana. |
| **Perfil testado** | Gestora |

**Passos:**
1. Gestora inicia cadastro do atendimento
2. Seleciona procedimento "Furo humanizado" e sócia "Renata"
3. Marca o status como "Aguardando disponibilidade"
4. Salva sem definir data

**Resultado esperado:** Atendimento salvo com status "Aguardando disponibilidade". Aparece em lista separada de pendentes de agendamento.

---

### CT-08.2 ✅ Converter atendimento de "aguardando" para agendado

| Campo | Descrição |
|---|---|
| **Pré-condição** | Atendimento com status "Aguardando disponibilidade" já registrado. Renata liberou agenda para a semana seguinte. |
| **Perfil testado** | Gestora |

**Passos:**
1. Gestora acessa a lista de atendimentos aguardando disponibilidade
2. Seleciona o atendimento pendente
3. Define a data confirmada com a Renata
4. Altera o status para "Agendado" e salva

**Resultado esperado:** Atendimento migra para a agenda com a data definida e status "Agendado". Some da lista de pendentes.

---

### CT-08.3 ❌ Tentativa de agendar procedimento exclusivo da Renata para outra sócia

| Campo | Descrição |
|---|---|
| **Pré-condição** | Gestora na tela de cadastro de atendimento. |
| **Perfil testado** | Gestora |

**Passos:**
1. Gestora seleciona procedimento "Otoplastia"
2. Tenta selecionar a Bruna ou a Thaís como sócia responsável
3. Tenta salvar

**Resultado esperado:** Sistema bloqueia e exibe: "Este procedimento é realizado exclusivamente pela Renata. Selecione a sócia correta ou registre como aguardando disponibilidade."

---

## Rastreabilidade

| Caso de Teste | Critério de Aceite | Requisito |
|---|---|---|
| CT-01.1, CT-01.2, CT-01.3 | CA-01 | RF-01, RNF-04 |
| CT-02.1, CT-02.2, CT-02.3, CT-02.4 | CA-02 | RF-02 |
| CT-03.1, CT-03.2 | CA-03 | RF-04, RNF-01, RNF-03 |
| CT-04.1, CT-04.2 | CA-04 | RF-09 |
| CT-05.1, CT-05.2 | CA-05 | RNF-02 |
| CT-06.1, CT-06.2, CT-06.3 | CA-06 | RNF-03, RNF-01 |
| CT-07.1, CT-07.2, CT-07.3 | CA-07 | RF-12 |
| CT-08.1, CT-08.2, CT-08.3 | CA-08 | RF-13 |

---

*Artefato gerado com metodologia ISTQB Foundation · Parceiro Digital*
