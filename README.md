# A.S.D. Judo Kihon Bovolone - Sito Ufficiale

Benvenuto nel repository ufficiale del sito web dell'**A.S.D. Judo Kihon Bovolone**.  
Questo sito è proprietario dell'associazione e tutto il materiale (codice, foto, documenti) è riservato all'uso esclusivo della stessa.

Il sito è sviluppato in **React** (utilizzando Vite) e si avvale di una pipeline di **Continuous Deployment (CI/CD)** gestita tramite GitHub Actions per pubblicare automaticamente le modifiche sugli ambienti di Test e Produzione.

---

## 🚀 Ambienti e Pipeline di Deploy

Il progetto usa una struttura multi-ambiente per garantire che le modifiche vengano prima testate e poi rilasciate in sicurezza:

- **Ambiente di Test** (`judokihon.it/test`):
  - È agganciato al branch **`env/test`**.
  - Ogni volta che del codice viene unito (merged) su questo branch, la GitHub Action `Deploy Test` compila il sito e lo carica via FTP sulla cartella `/test/`.
  
- **Ambiente di Produzione** (`judokihon.it`):
  - È agganciato al branch **`master`** (o `main`).
  - Ogni volta che del codice viene unito (merged) su questo branch, la GitHub Action `Deploy Prod` compila il sito e lo carica via FTP sulla radice (root) del sito.

---

## 🤝 Regole di Contribuzione (Pull Requests)

L'aggiornamento diretto dei branch protetti è disabilitato. Qualsiasi modifica (nuovi testi, nuove foto, aggiunta di una nuova cintura nera) deve passare attraverso il sistema delle **Pull Request (PR)**.

### Flusso di lavoro obbligatorio
1. Crea un nuovo branch a partire da `master` (es. `feature/nuova-cintura-nera`).
2. Apporta le modifiche in locale e fai i commit.
3. Esegui un Push del tuo branch su GitHub.
4. Apri una **Pull Request** dal tuo branch verso `env/test`.
5. **Validazione:** Nelle impostazioni di GitHub è richiesto che la PR venga **revisionata e approvata esplicitamente da @vladbragoi**. Assicurati di richiederne la review!
6. Una volta approvata, esegui il Merge su `env/test`. Attendi qualche minuto per visualizzare i risultati su `judokihon.it/test`.
7. Se tutto è corretto, apri una nuova Pull Request da `env/test` verso `master` e richiedi nuovamente l'approvazione a @vladbragoi per la messa in produzione.

> **Nota per gli Amministratori di GitHub:** Assicuratevi che nelle *Branch Protection Rules* del repository siano attivate le restrizioni che impongono almeno 1 Approvazione da parte dei Code Owners per i branch `env/test` e `master/main`.

---

## 📝 Come Modificare i Contenuti

### 🥋 Aggiungere una Nuova Cintura Nera
1. Apri il file `src/pages/CintureNere.jsx`.
2. Trova l'array `cintureNere` all'inizio del file.
3. Aggiungi un nuovo oggetto rispettando questo formato:
   ```javascript
   { nome: 'Nome Cognome', dan: '1° Dan', anno: 2024, ruolo: 'Atleta' }
   ```
   *I gradi superiori vanno aggiunti mantenendo l'ordinamento decrescente, tenendo lo storico per ogni individuo (una card per ogni Dan).*

### 📹 Aggiungere un Nuovo Video (Esami Dan)
1. Apri il file `src/pages/CintureNere.jsx`.
2. Trova l'array `allVideos`.
3. Aggiungi un nuovo oggetto contenente l'ID del video di YouTube (la stringa dopo `v=`) e il titolo:
   ```javascript
   { id: 'CODICE_YOUTUBE', title: 'Nome: X° Dan - Anno' }
   ```

### 📸 Aggiungere una Nuova Foto alla Galleria
1. Inserisci il file originale dell'immagine all'interno della cartella `public/images/` (oppure `public/fotogalleria/images/`).
2. Apri il file `src/pages/Galleria.jsx`.
3. Aggiungi la nuova foto all'array `images` usando questa sintassi (la macro `import.meta.env.BASE_URL` garantisce che il link non si rompa passando da Test a Produzione):
   ```javascript
   { src: `${import.meta.env.BASE_URL}images/NOME_FOTO.jpg`, alt: 'Descrizione della foto' }
   ```

---

## 🛠️ Comandi Utili per lo Sviluppo Locale

Se desideri clonare il sito e lavorarci sul tuo computer:

- **Installa le dipendenze:**
  ```bash
  npm install
  ```
- **Avvia il server di sviluppo in locale:**
  ```bash
  npm run dev
  ```
- **Testa la build compilata in locale:**
  ```bash
  VITE_BASE_URL=/test/ npm run build
  npm run preview
  ```

---

*A.S.D. Judo Kihon Bovolone © Tutti i diritti riservati.*
