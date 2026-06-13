const fs = require('fs');
const path = require('path');
const PizZip = require('pizzip');
const Docxtemplater = require('docxtemplater');
const { execSync } = require('child_process');

/** Giorno di allenamento (lun/mer/ven) più vicino al 1° settembre */
function getAdultiStartDate(year) {
  const target = new Date(year, 8, 1); // 1 settembre
  let closestDate = null;
  let minDiff = Infinity;

  for (let offset = -3; offset <= 3; offset++) {
    const d = new Date(year, 8, 1 + offset);
    const day = d.getDay();
    // 1=lun, 3=mer, 5=ven
    if (day === 1 || day === 3 || day === 5) {
      const diff = Math.abs(offset);
      if (diff < minDiff || (diff === minDiff && offset > 0)) {
        minDiff = diff;
        closestDate = new Date(d);
      }
    }
  }
  return closestDate;
}

/** L'ultimo lunedì di settembre */
function getBambiniStartDate(year) {
  const d = new Date(year, 8, 30); // 30 settembre
  const day = d.getDay();
  const offset = day === 0 ? 6 : day - 1;
  d.setDate(30 - offset);
  return d;
}

function formatDate(d) {
  const giorni = ['Domenica', 'Lunedì', 'Martedì', 'Mercoledì', 'Giovedì', 'Venerdì', 'Sabato'];
  const mesi = [
    'Gennaio', 'Febbraio', 'Marzo', 'Aprile', 'Maggio', 'Giugno', 
    'Luglio', 'Agosto', 'Settembre', 'Ottobre', 'Novembre', 'Dicembre'
  ];
  return `${giorni[d.getDay()]} ${d.getDate()} ${mesi[d.getMonth()]} ${d.getFullYear()}`;
}

function fixTag(xml, tag) {
  const chars = Array.from('{{' + tag + '}}');
  const regexStr = chars.map(c => c.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&')).join('(<[^>]+>)*');
  const regex = new RegExp(regexStr, 'g');
  return xml.replace(regex, `{{${tag}}}`);
}

// 1. Calcola l'anno sportivo
const now = new Date();
const currentYear = now.getFullYear();
// Se siamo prima di giugno, l'anno sportivo è quello iniziato l'anno prima
const startYear = now.getMonth() < 5 ? currentYear - 1 : currentYear;
const stagione = `${startYear}-${startYear + 1}`;
const inizio_adulti = formatDate(getAdultiStartDate(startYear));
const inizio_bambini = formatDate(getBambiniStartDate(startYear));

console.log(`Generazione documenti per la stagione: ${stagione}`);
console.log(`- Inizio adulti: ${inizio_adulti}`);
console.log(`- Inizio bambini: ${inizio_bambini}`);

// 2. Percorsi
const templatesDir = path.resolve(__dirname, '../src/templates');
const tempDir = path.resolve(__dirname, '../.temp_docs');
const publicDir = path.resolve(__dirname, '../public');

// Assicurati che la cartella temp esista
if (!fs.existsSync(tempDir)) {
  fs.mkdirSync(tempDir, { recursive: true });
}

// 3. Elaborazione dei template
const templates = [
  { file: 'Domanda_di_ammissione_TEMPLATE.docx', outName: 'Domanda_di_ammissione.docx' },
  { file: 'Volantino_stagione_TEMPLATE.docx', outName: 'Volantino_stagione.docx' },
];

templates.forEach((t) => {
  const content = fs.readFileSync(path.join(templatesDir, t.file), 'binary');
  const zip = new PizZip(content);

  const doc = new Docxtemplater(zip, {
    paragraphLoop: true,
    linebreaks: true,
    delimiters: { start: '{{', end: '}}' }
  });

  // Sostituisci le variabili nel Word
  doc.render({ stagione, inizio_adulti, inizio_bambini });

  const buf = doc.getZip().generate({
    type: 'nodebuffer',
    compression: 'DEFLATE',
  });

  // Salva il file modificato nella cartella temporanea
  const tempPath = path.join(tempDir, t.outName);
  fs.writeFileSync(tempPath, buf);
  console.log(`Generato file Word temporaneo: ${t.outName}`);
});

// 4. Conversione in PDF usando LibreOffice
console.log('Conversione dei file Word in PDF tramite LibreOffice...');
try {
  // Esegui soffice (LibreOffice) per convertire tutti i docx temporanei in pdf e salvarli in public/
  execSync(
    `soffice --headless --convert-to pdf --outdir "${publicDir}" "${tempDir}"/*.docx`,
    { stdio: 'inherit' }
  );
  console.log('Conversione PDF completata con successo!');
} catch (error) {
  console.error('Errore durante la conversione in PDF. Assicurati che LibreOffice sia installato (soffice).');
  console.error(error);
  process.exit(1);
}

// Opzionale: Pulizia cartella temporanea
// fs.rmSync(tempDir, { recursive: true, force: true });
