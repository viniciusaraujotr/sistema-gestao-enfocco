// ============================================================
// SISTEMA DE GESTAO DE ATENDIMENTOS MEDICOS DOMICILIARES
// Parceiro Digital - Code.gs v4.0 - Final
// ============================================================

function doGet(e) {
  return HtmlService
    .createTemplateFromFile('Index')
    .evaluate()
    .setTitle('Enfocco - Sistema de Gestao')
    .addMetaTag('viewport', 'width=device-width, initial-scale=1.0')
    .setXFrameOptionsMode(HtmlService.XFrameOptionsMode.ALLOWALL);
}

function getSheet(nome) {
  return SpreadsheetApp.getActiveSpreadsheet().getSheetByName(nome);
}

function gerarId(prefixo) {
  return prefixo + new Date().getTime();
}

// Converte qualquer valor de data para string segura
function dataParaTexto(valor) {
  if (!valor || valor === '') return '';
  if (valor instanceof Date) {
    var d = valor.getDate().toString().padStart(2,'0');
    var m = (valor.getMonth()+1).toString().padStart(2,'0');
    var a = valor.getFullYear().toString();
    return d+'/'+m+'/'+a;
  }
  return String(valor);
}

// Converte todos os campos de uma linha para string
function linhaParaTexto(row) {
  return row.map(function(cell) {
    if (cell instanceof Date) return dataParaTexto(cell);
    if (cell === null || cell === undefined) return '';
    return String(cell);
  });
}

// ── AUTENTICACAO ──────────────────────────────────────────
function autenticar(nome, senha) {
  try {
    var dados = getSheet('Usuarios').getDataRange().getValues();
    for (var i = 1; i < dados.length; i++) {
      var row = linhaParaTexto(dados[i]);
      if (row[1].toLowerCase().trim() === nome.toLowerCase().trim() &&
          row[3].trim() === senha && row[5].trim() === 'Ativo') {
        return { sucesso: true, perfil: row[4].trim(), nome: row[1] };
      }
    }
    return { sucesso: false, mensagem: 'Usuario ou senha incorretos.' };
  } catch(e) {
    return { sucesso: false, mensagem: 'Erro ao conectar. Tente novamente.' };
  }
}

// ── CONFIG ────────────────────────────────────────────────
function getConfig(chave) {
  try {
    var dados = getSheet('Config').getDataRange().getValues();
    for (var i = 1; i < dados.length; i++) {
      if (String(dados[i][0]) === chave) return String(dados[i][1]);
    }
  } catch(e) {}
  return '';
}

function getProcedimentos() {
  var v = getConfig('PROCEDIMENTOS');
  return v ? v.split('|') : [];
}

// ── CLIENTES ──────────────────────────────────────────────
function listarClientes() {
  try {
    var sheet = getSheet('Clientes');
    if (!sheet) return [];
    var lastRow = sheet.getLastRow();
    if (lastRow <= 1) return [];
    var dados = sheet.getRange(1, 1, lastRow, 9).getValues();
    var result = [];
    for (var i = 1; i < dados.length; i++) {
      var row = linhaParaTexto(dados[i]);
      if (row[0] !== '') {
        result.push({
          id: row[0], nome: row[1], telefone: row[2],
          endereco: row[3], cpf: row[4], dataNascimento: row[5],
          observacao: row[6], status: row[7] || 'Ativo', dataCadastro: row[8]
        });
      }
    }
    return result;
  } catch(e) { return []; }
}

function salvarCliente(d) {
  try {
    var sheet = getSheet('Clientes');
    var row = [
      d.id || gerarId('CLI'),
      d.nome, d.telefone, d.endereco,
      d.cpf || '', d.dataNascimento || '',
      d.observacao || '', d.status || 'Ativo',
      new Date().toLocaleDateString('pt-BR')
    ];
    if (d.id) {
      var dados = sheet.getDataRange().getValues();
      for (var i = 1; i < dados.length; i++) {
        if (String(dados[i][0]) === d.id) {
          row[8] = String(dados[i][8]); // manter data original
          sheet.getRange(i+1, 1, 1, 9).setValues([row]);
          return { sucesso: true, mensagem: 'Cliente atualizado!' };
        }
      }
    }
    row[0] = gerarId('CLI');
    sheet.appendRow(row);
    return { sucesso: true, mensagem: 'Cliente cadastrado com sucesso!' };
  } catch(e) { return { sucesso: false, mensagem: 'Erro ao salvar cliente.' }; }
}

// ── SOCIAS ────────────────────────────────────────────────
function listarSocias() {
  try {
    var sheet = getSheet('Socias');
    if (!sheet) return [];
    var lastRow = sheet.getLastRow();
    if (lastRow <= 1) return [];
    var dados = sheet.getRange(1, 1, lastRow, 6).getValues();
    var result = [];
    for (var i = 1; i < dados.length; i++) {
      var row = linhaParaTexto(dados[i]);
      if (row[0] !== '') {
        result.push({
          id: row[0], nome: row[1], telefone: row[2],
          especialidades: row[3], disponibilidadeSemanal: row[4], status: row[5]
        });
      }
    }
    return result;
  } catch(e) { return []; }
}

function salvarSocia(d) {
  try {
    var sheet = getSheet('Socias');
    var dados = sheet.getDataRange().getValues();
    if (d.id) {
      for (var i = 1; i < dados.length; i++) {
        if (String(dados[i][0]) === d.id) {
          sheet.getRange(i+1, 1, 1, 6).setValues([[
            d.id, d.nome, d.telefone,
            d.especialidades||'', d.disponibilidadeSemanal||'', d.status||'Ativo'
          ]]);
          return { sucesso: true, mensagem: 'Socia atualizada!' };
        }
      }
    }
    for (var j = 1; j < dados.length; j++) {
      if (String(dados[j][0]) !== '' && String(dados[j][1]).toLowerCase().trim() === d.nome.toLowerCase().trim()) {
        return { sucesso: false, mensagem: 'Ja existe uma socia com este nome.' };
      }
    }
    sheet.appendRow([gerarId('SOC'), d.nome, d.telefone, d.especialidades||'', d.disponibilidadeSemanal||'', 'Ativo']);
    return { sucesso: true, mensagem: 'Socia cadastrada com sucesso!' };
  } catch(e) { return { sucesso: false, mensagem: 'Erro ao salvar socia.' }; }
}

// ── ATENDIMENTOS ──────────────────────────────────────────
function listarAtendimentos() {
  try {
    var sheet = getSheet('Atendimentos');
    if (!sheet) return [];
    var lastRow = sheet.getLastRow();
    if (lastRow <= 1) return [];
    var dados = sheet.getRange(1, 1, lastRow, 11).getValues();
    var result = [];
    for (var i = 1; i < dados.length; i++) {
      var row = linhaParaTexto(dados[i]);
      if (row[0] !== '') {
        result.push({
          id: row[0], dataAtendimento: row[1],
          clienteId: row[2], clienteNome: row[3],
          procedimento: row[4], sociaId: row[5],
          sociaNome: row[6], valor: row[7],
          status: row[8], observacao: row[9], dataCadastro: row[10]
        });
      }
    }
    return result;
  } catch(e) { return []; }
}

function salvarAtendimento(d) {
  try {
    var procEx = getConfig('PROC_EXCLUSIVOS');
    var sociaEx = getConfig('SOCIA_EXCLUSIVA');
    if (procEx && sociaEx) {
      var lista = procEx.split('|');
      for (var j = 0; j < lista.length; j++) {
        if (d.procedimento === lista[j] && d.sociaNome !== sociaEx) {
          return { sucesso: false, mensagem: 'Este procedimento e realizado exclusivamente pela ' + sociaEx + '. Selecione a socia correta ou registre como Aguardando Disponibilidade.' };
        }
      }
    }
    var sheet = getSheet('Atendimentos');
    if (d.id) {
      var dados = sheet.getDataRange().getValues();
      for (var i = 1; i < dados.length; i++) {
        if (String(dados[i][0]) === d.id) {
          sheet.getRange(i+1, 1, 1, 11).setValues([[
            d.id, d.dataAtendimento, d.clienteId, d.clienteNome,
            d.procedimento, d.sociaId, d.sociaNome, d.valor,
            d.status, d.observacao||'', String(dados[i][10])
          ]]);
          return { sucesso: true, mensagem: 'Atendimento atualizado!' };
        }
      }
    }
    var novoId = gerarId('ATE');
    var dataHoje = new Date().toLocaleDateString('pt-BR');
    sheet.appendRow([novoId, d.dataAtendimento, d.clienteId, d.clienteNome,
      d.procedimento, d.sociaId, d.sociaNome, d.valor,
      d.status||'Agendado', d.observacao||'', dataHoje]);
    getSheet('Pagamentos').appendRow([
      gerarId('PAG'), novoId, d.clienteNome, d.valor, 0, d.valor, '', 'Pendente', '', ''
    ]);
    return { sucesso: true, mensagem: 'Atendimento cadastrado com sucesso!' };
  } catch(e) { return { sucesso: false, mensagem: 'Erro ao salvar atendimento.' }; }
}

// ── PAGAMENTOS ────────────────────────────────────────────
function listarPagamentos() {
  try {
    var sheet = getSheet('Pagamentos');
    if (!sheet) return [];
    var lastRow = sheet.getLastRow();
    if (lastRow <= 1) return [];
    var dados = sheet.getRange(1, 1, lastRow, 10).getValues();
    var result = [];
    for (var i = 1; i < dados.length; i++) {
      var row = linhaParaTexto(dados[i]);
      if (row[0] !== '') {
        result.push({
          id: row[0], atendimentoId: row[1], clienteNome: row[2],
          valorTotal: row[3], valorPago: row[4], saldoDevedor: row[5],
          formaPagamento: row[6], statusPagamento: row[7],
          dataPagamento: row[8], observacao: row[9]
        });
      }
    }
    return result;
  } catch(e) { return []; }
}

function registrarPagamento(d) {
  try {
    var sheet = getSheet('Pagamentos');
    var dados = sheet.getDataRange().getValues();
    for (var i = 1; i < dados.length; i++) {
      if (String(dados[i][0]) === d.id) {
        var total = parseFloat(dados[i][3]) || 0;
        var pago  = (parseFloat(dados[i][4]) || 0) + parseFloat(d.valorPago);
        if (pago > total) return { sucesso: false, mensagem: 'Valor informado ultrapassa o total do atendimento (R$ ' + total.toFixed(2) + '). Verifique antes de salvar.' };
        var saldo = total - pago;
        sheet.getRange(i+1, 1, 1, 10).setValues([[
          String(dados[i][0]), String(dados[i][1]), String(dados[i][2]),
          total, pago, saldo, d.formaPagamento,
          saldo === 0 ? 'Pago' : 'Pago Parcialmente',
          new Date().toLocaleDateString('pt-BR'), d.observacao||''
        ]]);
        return { sucesso: true, mensagem: 'Pagamento registrado com sucesso!' };
      }
    }
    return { sucesso: false, mensagem: 'Pagamento nao encontrado.' };
  } catch(e) { return { sucesso: false, mensagem: 'Erro ao registrar pagamento.' }; }
}

function getPagamentosComFaturamento() {
  var todos = listarPagamentos();
  var hoje = new Date();
  var mes = hoje.getMonth();
  var ano = hoje.getFullYear();
  var pendentes = todos.filter(function(p) {
    return p.statusPagamento === 'Pendente' || p.statusPagamento === 'Pago Parcialmente';
  });
  var fat = 0;
  todos.forEach(function(p) {
    if (p.dataPagamento && p.statusPagamento !== 'Cancelado') {
      var pt = p.dataPagamento.toString().split('/');
      if (pt.length === 3 && parseInt(pt[1])-1 === mes && parseInt(pt[2]) === ano) {
        fat += parseFloat(p.valorPago) || 0;
      }
    }
  });
  return { pendentes: pendentes, faturamento: fat };
}

function getDadosParaAtendimento() {
  return {
    clientes: listarClientes().filter(function(c) { return c.status === 'Ativo'; }),
    socias: listarSocias().filter(function(s) { return s.status === 'Ativo'; }),
    procedimentos: getProcedimentos()
  };
}

// ── USUARIOS ──────────────────────────────────────────────
function listarUsuarios() {
  try {
    var sheet = getSheet('Usuarios');
    if (!sheet) return [];
    var lastRow = sheet.getLastRow();
    if (lastRow <= 1) return [];
    var dados = sheet.getRange(1, 1, lastRow, 6).getValues();
    var result = [];
    for (var i = 1; i < dados.length; i++) {
      var row = linhaParaTexto(dados[i]);
      if (row[0] !== '') {
        result.push({
          id: row[0], nome: row[1], email: row[2],
          perfil: row[4], status: row[5]
        });
      }
    }
    return result;
  } catch(e) { return []; }
}

function alterarSenhaUsuario(id, novaSenha) {
  try {
    var sheet = getSheet('Usuarios');
    var dados = sheet.getDataRange().getValues();
    for (var i = 1; i < dados.length; i++) {
      if (String(dados[i][0]) === id) {
        sheet.getRange(i+1, 4, 1, 1).setValue(novaSenha);
        return { sucesso: true, mensagem: 'Senha alterada com sucesso!' };
      }
    }
    return { sucesso: false, mensagem: 'Usuário não encontrado.' };
  } catch(e) { return { sucesso: false, mensagem: 'Erro ao alterar senha.' }; }
}

function alterarStatusUsuario(id, novoStatus) {
  try {
    var sheet = getSheet('Usuarios');
    var dados = sheet.getDataRange().getValues();
    for (var i = 1; i < dados.length; i++) {
      if (String(dados[i][0]) === id) {
        sheet.getRange(i+1, 6, 1, 1).setValue(novoStatus);
        var msg = novoStatus === 'Ativo' ? 'Acesso reativado!' : 'Acesso desativado!';
        return { sucesso: true, mensagem: msg };
      }
    }
    return { sucesso: false, mensagem: 'Usuário não encontrado.' };
  } catch(e) { return { sucesso: false, mensagem: 'Erro ao alterar status.' }; }
}
