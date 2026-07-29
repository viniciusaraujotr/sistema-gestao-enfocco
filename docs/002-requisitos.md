📋 Documento de Requisitos
Sistema de Gestão de Atendimentos Médicos Domiciliares
> **Artefato QA #002** — Levantamento de Requisitos via Entrevista com Cliente  
> **Versão:** 1.0 | **Data:** Julho/2025 | **Status:** ✅ Concluído
---
1. Identificação do Projeto
Campo	Informação
Projeto	Sistema de Gestão de Atendimentos Médicos Domiciliares
Cliente piloto	Empresa de home care (gestora: cliente real)
Desenvolvedor / QA	Vinícius — Analista em transição para QA
Método de levantamento	Entrevista por áudio (telefone)
Data da entrevista	Julho / 2025
Stack definida	Google Sheets + Apps Script
Repositório	GitHub (portfólio + documentação QA)
---
2. Contexto do Negócio
A empresa realiza atendimentos de enfermagem domiciliar (home care), com 2 anos de atuação. É composta por 3 sócias que também são as enfermeiras executoras. Toda a operação atual é gerenciada manualmente via caderno, agenda física e WhatsApp.
Procedimentos realizados
Aplicação de laser terapia
Furo humanizado (exclusivo da Renata)
Otoplastia (exclusivo da Renata)
Administração de ferro e medicamentos diluídos via soro
Curativos
Retirada de pontos
Administração de medicamentos em geral
Dados operacionais
Profissionais: 3 sócias (Bruna — comercial/atendimento | Thaís — financeiro/atendimento | Renata — atendimento/procedimentos exclusivos)
Base de clientes: ~100 (ativos e inativos)
Perfil de atendimento: majoritariamente pontual; recorrência existe em ferro, laser e curativos
Canal de comunicação: 100% WhatsApp
Pagamento: 100% particular — Pix, link de cartão (validade 24h), raramente cheque
Controle atual: caderno e agenda física — nenhum sistema ou planilha em uso
---
3. Perfis de Usuário
👩‍💼 Gestora de Atendimento — Acesso completo (administrador)
Recebe e registra novos pedidos de atendimento
Gerencia agenda e distribui atendimentos entre as sócias
Controla cadastro de clientes
Acompanha pagamentos e inadimplência
Visualiza relatórios financeiros e operacionais
Dispositivo principal: celular
👩‍⚕️ Sócia / Enfermeira — Acesso restrito (agenda e atendimento)
Visualiza os atendimentos do dia e da semana
Confirma ou atualiza status do atendimento
Acessa dados do cliente necessários para o atendimento
Não acessa: módulo financeiro nem cadastro completo de clientes
> ⚠️ **Descoberta importante:** as "enfermeiras" são as próprias sócias. Não há profissionais externos contratados no momento.
---
4. Requisitos Funcionais
Legenda de prioridade
🔴 P1 — Alta prioridade (MVP)
🟡 P2 — Média prioridade (segunda entrega)
🟢 P3 — Baixa prioridade (futuro)
---
ID	Requisito	Descrição	Prioridade
RF-01	Agenda compartilhada	Todas as sócias visualizam e editam a agenda em tempo real pelo celular, sem conflito de dados	🔴 P1
RF-02	Controle de pagamentos	Registrar pagamentos recebidos e em aberto, forma de pagamento e alertar sobre inadimplência. Controlar validade de links de cartão (24h)	🔴 P1
RF-03	Cadastro de clientes	Nome completo, telefone, endereço, CPF (nota fiscal), data de nascimento. Diferenciar ativos e inativos	🔴 P1
RF-04	Registro de atendimento	Registrar: cliente, endereço, telefone, procedimento, sócia responsável, valor. Permitir anexar foto de receita médica	🔴 P1
RF-05	Disponibilidade das sócias	Registrar dias e horários disponíveis de cada sócia. Thaís e Renata têm disponibilidade limitada por trabalharem em hospital	🔴 P1
RF-06	Cadastro de sócias com especialidades	Dados de cada sócia e quais procedimentos cada uma realiza (ex: otoplastia e furo humanizado são exclusivos da Renata)	🟡 P2
RF-07	Histórico de atendimentos por cliente	Listar todos os atendimentos de um cliente: datas, procedimentos e sócia responsável	🟡 P2
RF-08	Relatório de atendimentos do mês	Listar atendimentos por período, com filtro por sócia, procedimento e status de pagamento	🟡 P2
RF-09	Relatório financeiro mensal	Totalizar faturamento, pagamentos recebidos e valores em aberto no mês	🟡 P2
RF-10	Controle de estoque básico	Controlar estoque de ferro (único insumo mantido pela empresa)	🟢 P3
RF-11	Controle de cancelamentos e remarcos	Registrar cancelamentos e remarcos. Hoje esse controle é inexistente após repasse do contato da sócia ao cliente	🟢 P3
---
5. Requisitos Não Funcionais
ID	Requisito	Descrição	Prioridade
RNF-01	Mobile-first	Sistema deve funcionar muito bem no celular. Computador é uso secundário e esporádico	🔴 P1
RNF-02	Dois níveis de acesso	Perfil Gestora (acesso completo) e Perfil Sócia (acesso restrito à agenda e atendimento)	🔴 P1
RNF-03	Interface simples e intuitiva	Cliente não técnica. Fluxos curtos, sem jargões. Nenhum treinamento longo necessário	🔴 P1
RNF-04	Acesso simultâneo	As 3 sócias devem acessar e editar a agenda ao mesmo tempo sem conflito de dados	🟡 P2
RNF-05	Generalizável	Sistema configurável para outros negócios de home care — não engessado para esta empresa	🟡 P2
---
6. Fora do Escopo
Os itens abaixo foram explicitamente descartados na entrevista:
❌ Gestão de pagamento entre as sócias — resolvido por elas com contador próprio
❌ Integração com convênios — empresa opera 100% particular
❌ Cadastro bancário das sócias no sistema
❌ Controle de gastos operacionais da empresa
❌ Estoque de materiais dos clientes — cada cliente é responsável pelo próprio material
❌ Integração com WhatsApp — comunicação continua por fora do sistema
---
7. Critérios de Aceite
O sistema será considerado bem-sucedido quando:
#	Critério	Origem
CA-01	As 3 sócias conseguem visualizar e editar a agenda simultaneamente pelo celular, sem conflito	Respostas 1.4 e 5.1 — prioridade máxima da cliente
CA-02	A gestora consegue saber, em qualquer momento, quais clientes têm pagamento em aberto e há quanto tempo	Respostas 4.2 e 5.1
CA-03	O cadastro de um novo atendimento pode ser feito em menos de 1 minuto pelo celular	RNF-01 e RNF-03
CA-04	A gestora consegue ver o total faturado no mês sem precisar somar manualmente	Resposta 4.4
CA-05	As sócias acessam apenas agenda e dados do atendimento — sem acesso a financeiro ou cadastro completo	Resposta 5.3
CA-06	A cliente (gestora) consegue usar o sistema sem treinamento formal	Perfil não técnico confirmado na entrevista
---
8. Insights Estratégicos
> Seção relevante para o produto como serviço vendável
⚠️ Riscos identificados
Perda de vínculo com o cliente: após o primeiro atendimento, o cliente recebe o contato direto da sócia. Cancelamentos e remarcos ocorrem sem passar pela gestora. O sistema precisa manter o vínculo com a empresa.
Fidelização por fora da empresa: sócias já captam clientes por conta própria. Histórico centralizado protege o ativo de clientes da empresa.
✅ Oportunidades
Mercado com baixíssima maturidade digital: empresa não conhece concorrentes com sistema e opera há 2 anos no caderno. Alta oportunidade de venda.
Validação de NPS antecipado: quando perguntada se recomendaria o sistema para outras empresas, a resposta foi imediata — "claro".
Modelo de precificação flexível: suportar atendimento avulso e pacotes de procedimentos é diferencial para venda a outros clientes do segmento.
---
9. Próximos Passos
[x] Artefato QA #001 — Roteiro de entrevista
[x] Artefato QA #002 — Documento de requisitos
[ ] Definir stack tecnológica ✅ (Google Sheets + Apps Script — definido)
[ ] Criar repositório GitHub com estrutura de pastas e README
[ ] Artefato QA #003 — Casos de teste
[ ] Artefato QA #004 — Plano de testes
[ ] Validar requisitos com a cliente antes do desenvolvimento
[ ] Iniciar desenvolvimento — Módulo de Agenda (P1)
---
Documento gerado como artefato de portfólio QA. Projeto desenvolvido com metodologia ISTQB Foundation.
