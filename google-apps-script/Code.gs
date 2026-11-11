/**
 * HortaLink Digital - recebe as respostas do site e grava em uma planilha do Google.
 * Instruções completas no README.md (seção "Opção B").
 */

var SHEET_NAME = "Respostas";

var HEADERS = [
  "Data/hora",
  "Nome (opcional)",
  "Já cultivava antes?",
  "Aprendeu algo novo?",
  "Conteúdo mais interessante",
  "Pretende aplicar as práticas?",
  "Preparo para iniciar horta (1-5)",
  "Qualidade das informações (1-5)",
  "Recomendaria?",
  "Sugestões/comentários"
];

var ALLOWED = {
  had_garden: ["sim_regularmente", "ja_tentei", "nunca"],
  learned_new: ["sim_muito", "sim_um_pouco", "nao"],
  most_interesting: ["horta_em_casa", "sustentabilidade", "economia_de_agua", "preservacao_ambiental"],
  will_apply: ["sim_varias", "sim_uma", "talvez", "nao"],
  would_recommend: ["sim", "talvez", "nao"]
};

function jsonResponse(obj) {
  return ContentService.createTextOutput(JSON.stringify(obj)).setMimeType(ContentService.MimeType.JSON);
}

function isScale(n) {
  return typeof n === "number" && n >= 1 && n <= 5 && Math.floor(n) === n;
}

function doPost(e) {
  try {
    var data = JSON.parse(e.postData.contents);

    // Validação no servidor (não confie apenas no navegador).
    for (var key in ALLOWED) {
      if (ALLOWED[key].indexOf(data[key]) === -1) throw new Error("Campo inválido: " + key);
    }
    if (!isScale(data.feels_prepared) || !isScale(data.info_quality)) throw new Error("Escala inválida");

    var name = data.name ? String(data.name).slice(0, 80) : "";
    var comments = data.comments ? String(data.comments).slice(0, 1000) : "";

    // Evita que o Google Sheets interprete texto como fórmula (=, +, -, @).
    function safe(text) {
      return /^[=+\-@]/.test(text) ? "'" + text : text;
    }

    var lock = LockService.getScriptLock();
    lock.waitLock(10000);
    try {
      var ss = SpreadsheetApp.getActiveSpreadsheet();
      var sheet = ss.getSheetByName(SHEET_NAME);
      if (!sheet) {
        sheet = ss.insertSheet(SHEET_NAME);
        sheet.appendRow(HEADERS);
        sheet.setFrozenRows(1);
      }
      sheet.appendRow([
        new Date(),
        safe(name),
        data.had_garden,
        data.learned_new,
        data.most_interesting,
        data.will_apply,
        data.feels_prepared,
        data.info_quality,
        data.would_recommend,
        safe(comments)
      ]);
    } finally {
      lock.releaseLock();
    }

    return jsonResponse({ ok: true });
  } catch (err) {
    return jsonResponse({ ok: false, error: String(err) });
  }
}

// Permite abrir a URL no navegador só para testar se a implantação está ativa.
function doGet() {
  return jsonResponse({ ok: true, service: "HortaLink Digital" });
}
