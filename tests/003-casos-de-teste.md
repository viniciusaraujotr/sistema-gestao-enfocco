# 🧪 Casos de Teste
## Sistema de Gestão de Atendimentos Médicos Domiciliares

> **Artefato QA #003** — Baseado nos Critérios de Aceite levantados na entrevista  
> **Versão:** 1.0 | **Data:** Julho/2025 | **Total de casos:** 18

---

## Resumo

| Tipo | Quantidade |
|---|---|
| ✅ Cenários positivos | 8 |
| ❌ Cenários negativos | 6 |
| ⚠️ Casos de borda | 4 |
| **Total** | **18** |

---

## Legenda

- ✅ **Positivo** — fluxo esperado e correto
- ❌ **Negativo** — comportamento indesejado que o sistema deve bloquear
- ⚠️ **Borda** — situação limite ou incomum que precisa de tratamento especial
- 🔴 **P1** — Alta prioridade | 🟡 **P2** — Média prioridade | 🟢 **P3** — Baixa prioridade

---

## CT-01 — Agenda Compartilhada em Tempo Real
`CA-01 · 🔴 P1`

---

### CT-01.1 ✅ Sócia visualiza agenda atualizada por outra sócia

| Campo | Descrição |
|---|---|
| **Pré-condição** | Duas sócias logadas simultaneamente. Agenda com ao menos um atendimento cadastrado. |
| **Perfil testado** | Sócia A (edita) e Sócia B (visualiza) |

**Passos:**
1. Sócia A acessa a agenda e cadastra um novo atendimento
2. Sócia B, logada simultaneamente, acessa a agenda
3. Verificar se o atendimento cadastrado pela Sócia A aparece para a Sócia B

**Resultado esperado:** O atendimento cadastrado pela Sócia A aparece imediatamente na agenda da Sócia B, sem necessidade de atualizar manualmente a página.

---

### CT-01.2 ❌ Tentativa de editar atendimento sem permissão

| Campo | Descrição |
|---|---|
| **Pré-condição** | Sócia logada com perfil restrito. Atendimento já cadastrado na agenda. |
| **Perfil testado** | Sócia (perfil restrito) |

**Passos:**
1. Sócia acessa a agenda
2. Tenta excluir ou alterar um atendimento de outra sócia
3. Verificar se o sistema permite ou bloqueia a ação

**Resultado esperado:** O sistema bloqueia a ação e exibe mensagem informando que a sócia não tem permissão para alterar atendimentos de outras sócias.

---

### CT-01.3 ⚠️ Edição simultânea do mesmo atendimento por duas sócias

| Campo | Descrição |
|---|---|
| **Pré-condição** | Duas sócias logadas. Mesmo atendimento aberto para edição nas duas sessões ao mesmo tempo. |
| **Perfil testado** | Sócia A e Sócia B (simultâneo) |

**Passos:**
1. Sócia A abre o atendimento para edição
2. Sócia B abre o mesmo atendimento simultaneamente
3. Ambas fazem alterações diferentes e salvam
4. Verificar qual alteração prevalece e se há aviso de conflito

**Resultado esperado:** O sistema salva a última alteração e exibe aviso informando que o registro foi modificado por outra usuária, evitando perda silenciosa de dados.

---

## CT-02 — Controle de Pagamentos e Inadimplência
`CA-02 · 🔴 P1`

---

### CT-02.1 ✅ Registrar pagamento recebido de um cliente

| Campo | Descrição |
|---|---|
| **Pré-condição** | Atendimento cadastrado com valor definido. Pagamento ainda não registrado. |
| **Perfil testado** | Gestora |

**Passos:**
1. Gestora acessa o atendimento do cliente
2. Seleciona a forma de pagamento (Pix, cartão ou cheque)
3. Marca o pagamento como recebido
4. Salva a alteração

**Resultado esperado:** O atendimento aparece com status "Pago" e a data do recebimento registrada. O valor é somado ao faturamento do mês.

---

### CT-02.2 ✅ Visualizar lista de clientes com pagamento em aberto

| Campo | Descrição |
|---|---|
| **Pré-condição** | Ao menos um atendimento com pagamento não registrado há mais de 1 dia. |
| **Perfil testado** | Gestora |

**Passos:**
1. Gestora acessa o painel de pagamentos
2. Filtra por status "Em aberto"
3. Verificar se todos os clientes inadimplentes aparecem na lista

**Resultado esperado:** Lista exibe todos os clientes com pagamento pendente, com nome do cliente, valor, data do atendimento e dias em aberto.

---

### CT-02.3 ❌ Registrar pagamento com valor incorreto

| Campo | Descrição |
|---|---|
| **Pré-condição** | Atendimento com valor R$ 150,00 cadastrado. |
| **Perfil testado** | Gestora |

**Passos:**
1. Gestora acessa o atendimento
2. Tenta registrar pagamento com valor R$ 0,00 ou valor negativo
3. Tenta salvar

**Resultado esperado:** O sistema bloqueia o salvamento e exibe mensagem: "Valor de pagamento inválido. Informe um valor maior que zero."

---

### CT-02.4 ⚠️ Link de cartão expirado sem pagamento registrado

| Campo | Descrição |
|---|---|
| **Pré-condição** | Atendimento com link de cartão gerado há mais de 24 horas. Pagamento não realizado. |
| **Perfil testado** | Gestora |

**Passos:**
1. Gestora acessa o painel de pagamentos
2. Verifica atendimentos com link de cartão gerado
3. Verificar se o sistema sinaliza links expirados sem pagamento

**Resultado esperado:** O sistema sinaliza o atendimento com alerta "Link expirado — pagamento não confirmado" e mantém o status como "Em aberto".

---

## CT-03 — Cadastro de Atendimento em Menos de 1 Minuto
`CA-03 · 🔴 P1`

---

### CT-03.1 ✅ Cadastrar novo atendimento com todos os campos obrigatórios

| Campo | Descrição |
|---|---|
| **Pré-condição** | Cliente já cadastrado. Sócia disponível na data desejada. |
| **Perfil testado** | Gestora (via celular) |

**Passos:**
1. Gestora acessa a agenda pelo celular
2. Seleciona a data do atendimento
3. Seleciona o cliente (busca por nome)
4. Seleciona o procedimento
5. Seleciona a sócia responsável
6. Confirma o valor
7. Salva o atendimento — cronometrar o tempo total

**Resultado esperado:** Atendimento cadastrado com sucesso em menos de 60 segundos. O registro aparece na agenda imediatamente após salvar.

---

### CT-03.2 ❌ Tentativa de salvar atendimento sem campo obrigatório

| Campo | Descrição |
|---|---|
| **Pré-condição** | Gestora na tela de cadastro de atendimento. |
| **Perfil testado** | Gestora |

**Passos:**
1. Gestora preenche nome do cliente mas deixa o procedimento em branco
2. Tenta salvar o atendimento

**Resultado esperado:** O sistema impede o salvamento e destaca o campo "Procedimento" com mensagem: "Campo obrigatório. Selecione o procedimento a ser realizado."

---

## CT-04 — Faturamento Mensal Calculado Automaticamente
`CA-04 · 🟡 P2`

---

### CT-04.1 ✅ Visualizar faturamento total do mês

| Campo | Descrição |
|---|---|
| **Pré-condição** | Ao menos 3 atendimentos com pagamento registrado no mês corrente. |
| **Perfil testado** | Gestora |

**Passos:**
1. Gestora acessa o painel financeiro
2. Seleciona o mês atual
3. Verifica o valor total de faturamento exibido
4. Soma manualmente os valores dos atendimentos e compara com o total do sistema

**Resultado esperado:** O valor exibido pelo sistema é igual à soma manual dos atendimentos pagos no mês.

---

### CT-04.2 ⚠️ Faturamento com mês sem atendimentos registrados

| Campo | Descrição |
|---|---|
| **Pré-condição** | Nenhum atendimento cadastrado no mês selecionado. |
| **Perfil testado** | Gestora |

**Passos:**
1. Gestora acessa o painel financeiro
2. Seleciona um mês sem atendimentos cadastrados
3. Verificar o que o sistema exibe

**Resultado esperado:** O sistema exibe faturamento R$ 0,00 com mensagem "Nenhum atendimento registrado neste período." Sem erro ou tela em branco.

---

## CT-05 — Controle de Acesso por Perfil
`CA-05 · 🔴 P1`

---

### CT-05.1 ❌ Sócia tenta acessar módulo financeiro

| Campo | Descrição |
|---|---|
| **Pré-condição** | Usuária logada com perfil Sócia (acesso restrito). |
| **Perfil testado** | Sócia (perfil restrito) |

**Passos:**
1. Sócia faz login no sistema
2. Tenta navegar para o módulo financeiro
3. Verificar se o acesso é bloqueado

**Resultado esperado:** O módulo financeiro não aparece no menu da sócia. Caso acesse diretamente pela URL, o sistema redireciona com mensagem "Acesso não autorizado."

---

### CT-05.2 ✅ Gestora acessa todos os módulos do sistema

| Campo | Descrição |
|---|---|
| **Pré-condição** | Usuária logada com perfil Gestora (acesso completo). |
| **Perfil testado** | Gestora |

**Passos:**
1. Gestora faz login no sistema
2. Navega para o módulo de agenda
3. Navega para o módulo de clientes
4. Navega para o módulo financeiro
5. Navega para os relatórios

**Resultado esperado:** Todos os módulos estão acessíveis e funcionando corretamente para o perfil Gestora.

---

## CT-06 — Usabilidade — Sistema Sem Treinamento Formal
`CA-06 · 🟡 P2`

---

### CT-06.1 ✅ Primeiro acesso sem instrução prévia — cadastrar atendimento

| Campo | Descrição |
|---|---|
| **Pré-condição** | Cliente não técnica, sem contato prévio com o sistema. |
| **Perfil testado** | Gestora (usuária real) |

**Passos:**
1. Entregar o celular com o sistema aberto para a gestora sem dar nenhuma instrução
2. Pedir para ela cadastrar um atendimento fictício
3. Observar se ela encontra o caminho sem ajuda
4. Registrar dúvidas e pontos de confusão

**Resultado esperado:** A gestora consegue cadastrar o atendimento sem ajuda em menos de 2 minutos. Nenhum campo ou ação causa confusão grave.

---

### CT-06.2 ✅ Navegação pelo celular — responsividade

| Campo | Descrição |
|---|---|
| **Pré-condição** | Sistema acessado via celular Android ou iOS. |
| **Perfil testado** | Gestora e Sócia |

**Passos:**
1. Acessar o sistema pelo celular
2. Navegar pelos módulos principais: agenda, clientes, pagamentos
3. Verificar se botões, campos e textos estão legíveis e clicáveis sem zoom
4. Testar em tela de 5" e 6,5"

**Resultado esperado:** Todos os elementos são legíveis e clicáveis sem zoom em qualquer tamanho de tela. Nenhum elemento sobreposto ou cortado.

---

### CT-06.3 ❌ Mensagens de erro compreensíveis para usuária não técnica

| Campo | Descrição |
|---|---|
| **Pré-condição** | Gestora na tela de cadastro de cliente. |
| **Perfil testado** | Gestora |

**Passos:**
1. Gestora tenta salvar um cliente com CPF inválido (ex: 000.000.000-00)
2. Verificar a mensagem de erro exibida

**Resultado esperado:** Mensagem de erro em linguagem simples, sem jargões técnicos. Ex: "CPF inválido. Verifique o número digitado."

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

---

*Artefato gerado com metodologia ISTQB Foundation · Parceiro Digital*
