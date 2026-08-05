🔍 Roteiro de Validação de Requisitos
Sistema de Gestão de Atendimentos Médicos Domiciliares
> **Artefato QA #002-B** — Segunda reunião com cliente · Validação antes do desenvolvimento  
> **Versão:** 1.0 | **Data:** Julho/2025 | **Duração:** ~30 minutos
---
Objetivo
Confirmar que tudo levantado na primeira entrevista foi entendido corretamente antes de iniciar o desenvolvimento. Não é apresentação de tecnologia — é fechamento de entendimento.
> **Postura:** chegar como consultor, não como desenvolvedor. Validar, não vender.
---
Bloco 1 — Abertura
Fala sugerida:
> "Na nossa primeira conversa anotei tudo que você me contou sobre como a empresa funciona. Antes de começar a construir o sistema, quero confirmar se entendi tudo certo — porque se eu entender errado agora, vou construir a coisa errada. São poucas perguntas, rápidas."
---
Bloco 2 — Validação da Agenda
2.1
Contexto: você disse que a maior dor é a agenda — todas precisam ver e editar ao mesmo tempo.
Pergunta: Quando a Bruna marca um atendimento, você quer que a Thaís e a Renata vejam na hora, sem precisar avisar pelo WhatsApp?
↳ Confirma se o acesso em tempo real é o esperado ou se o WhatsApp ainda faz parte do fluxo.
---
2.2
Contexto: cancelamentos e remarcos acontecem direto entre o cliente e a enfermeira.
Pergunta: Quando um atendimento é cancelado diretamente com a enfermeira, você quer ser avisada pelo sistema ou só vê quando abrir a agenda?
↳ Define se o sistema precisa de notificação ou só registro.
---
2.3
Contexto: a Thaís e a Renata têm disponibilidade limitada por trabalharem em hospital.
Pergunta: Elas te passam a disponibilidade com quanto tempo de antecedência — semanal, quinzenal, mensal?
↳ Define como o sistema vai lidar com o calendário de disponibilidade.
---
Bloco 3 — Validação de Pagamentos
3.1
Contexto: você usa link de cartão que expira em 24 horas.
Pergunta: Quando o link expira e o cliente não pagou, você quer que o sistema te avise automaticamente ou prefere verificar você mesma na lista de pendentes?
↳ Define se o sistema precisa de alerta automático ou só listagem. ★ Resposta define RF-02.
---
3.2
Contexto: hoje você anota no caderno quem pagou e quem está devendo.
Pergunta: Quando você olhar a lista de pagamentos em aberto, o que precisa aparecer sobre cada cliente? Nome, valor, data — tem mais alguma coisa?
↳ Define os campos exatos da tela de inadimplência.
---
3.3
Contexto: você mencionou que às vezes o cliente paga só uma parte.
Pergunta: Isso acontece com frequência? O sistema precisa registrar pagamento parcial ou é sempre tudo de uma vez?
↳ Define se o módulo financeiro precisa suportar pagamento em partes. ★ Originou RF-12.
---
Bloco 4 — Validação de Cadastros
4.1
Contexto: o CPF é importante para nota fiscal.
Pergunta: Vocês emitem nota fiscal para todos os clientes ou só quando o cliente pede?
↳ Define se CPF é campo obrigatório ou opcional no cadastro.
---
4.2
Contexto: laser e furo humanizado atendem bastante criança e bebê.
Pergunta: Quando o cliente é uma criança, você cadastra a criança, o responsável ou os dois?
↳ Define se o cadastro precisa de campo para responsável além do paciente.
---
4.3
Contexto: alguns procedimentos são exclusivos da Renata.
Pergunta: Se um cliente pedir um procedimento que só a Renata faz e ela não tiver disponibilidade, o que acontece — vocês recusam ou aguardam ela ter disponibilidade?
↳ Define como o sistema deve reagir nessa exceção. ★ Originou RF-13.
---
Bloco 5 — Validação de Acesso das Sócias
5.1
Contexto: as sócias acessam a agenda mas não o financeiro.
Pergunta: As sócias podem ver os dados completos do cliente — CPF, histórico — ou só o necessário para o atendimento, como nome, endereço e procedimento?
↳ Define o nível de detalhe do perfil sócia. ★ Resposta define RNF-02.
---
5.2
Contexto: pensando no dia a dia das sócias no celular.
Pergunta: Quando a Bruna ou a Renata abrirem o sistema, o que você quer que apareça primeiro — os atendimentos do dia, da semana ou um resumo geral?
↳ Define a tela inicial para o perfil sócia.
---
Bloco 6 — Encerramento
6.1
Pergunta: Tem alguma coisa que eu entendi errado ou que ficou diferente do que você esperava?
↳ Sempre fazer esta pergunta — abre espaço para correção antes do desenvolvimento. ★
---
Fala de encerramento sugerida:
> "Ótimo, com essas respostas já consigo começar a construir. Vou te mostrar uma primeira versão antes de finalizar tudo — para você ver se está do jeito que imaginou. Qualquer dúvida me chama."
---
Resultados desta Reunião
Pergunta	Descoberta	Impacto
2.1	WhatsApp continua como canal de aviso — sistema só registra	Remove notificação em tempo real
2.2	Cancelamentos também só registrados	Confirma: sistema é registro
2.3	Disponibilidade passada semanalmente	Campo de disponibilidade semanal
3.1	Pendentes aparecem ao abrir o sistema — sem push externo	Destaque visual na tela inicial
3.2	Lista de pendentes: nome, valor e data apenas	Campos definidos
3.3	Pagamento parcial acontece e precisa ser suportado	Novo: RF-12
4.1	CPF opcional — nota fiscal só quando cliente pede	Campo opcional no cadastro
4.2	Cadastra responsável + nome da criança em observação	Campo de observação no cadastro
4.3	Procedimento exclusivo fica em espera — não recusa	Novo: RF-13
5.1	Sócias não veem CPF nem financeiro	Confirma RNF-02
5.2	Tela inicial: agenda semanal para todos os perfis	Define tela inicial
---
Instruções de Condução
Duração esperada: 20 a 30 minutos
Anotar respostas com as palavras exatas da cliente
Se a resposta mudar o planejado, anotar e ajustar depois — não discutir na hora
Não mencionar tecnologia, planilha ou código em nenhum momento
Após a reunião, atualizar o documento de requisitos com as mudanças
Esta reunião é o aval para iniciar o desenvolvimento
---
Artefato gerado com metodologia ISTQB Foundation · Parceiro Digital
