# A.S.D. Judo Kihon Bovolone - Sito Ufficiale

Benvenuto nel repository ufficiale del sito web dell'**A.S.D. Judo Kihon Bovolone**.  
Questo sito è proprietario dell'associazione e tutto il materiale (codice, foto, documenti) è riservato all'uso esclusivo della stessa.

Il sito è sviluppato in **React** (utilizzando Vite) e si avvale di una pipeline di **Continuous Deployment (CI/CD)** gestita tramite GitHub Actions per pubblicare automaticamente le modifiche sugli ambienti di Test e Produzione.

---

## 🚀 Ambienti e Pipeline di Deploy

Il progetto usa una struttura multi-ambiente per garantire che le modifiche vengano prima testate e poi rilasciate in sicurezza:

- **Ambiente di Test** (`test.judokihon.it`):
  - È agganciato al branch **`env/test`**.
  - Ogni volta che del codice viene unito (merged) su questo branch, la GitHub Action compila il sito e lo pubblica automaticamente tramite GitHub Pages sul sottodominio `test.judokihon.it`.
  
- **Ambiente di Produzione** (`judokihon.it`):
  - È agganciato al branch **`master`** (o `main`).
  - Ogni volta che del codice viene unito (merged) su questo branch, la GitHub Action compila il sito e lo carica via FTP sulla radice del dominio principale.

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

---

## 📝 Come Modificare i Contenuti

I dati del sito sono estratti in comodi file di configurazione in formato JSON all'interno della cartella `src/data/`.

### 🥋 Aggiungere una Nuova Cintura Nera
1. Apri il file `src/data/blackBelts.json`.
2. Trova l'array `"blackBelts"`.
3. Aggiungi un nuovo oggetto rispettando questo formato (mantenendo l'ordine decrescente di grado):
   ```json
   { "name": "Nome Cognome", "dan": "1° Dan", "year": 2024, "role": "Atleta" }
   ```

### 📹 Aggiungere un Nuovo Video (Esami Dan)
1. Apri il file `src/data/blackBelts.json`.
2. Trova l'array `"allVideos"`.
3. Aggiungi l'ID del video di YouTube (la stringa dopo `v=`):
   ```json
   { "id": "CODICE_YOUTUBE", "title": "Nome: X° Dan - Anno" }
   ```

### 📸 Aggiungere una Nuova Foto alla Galleria
1. Inserisci il file originale dell'immagine all'interno della cartella `public/images/`.
2. Apri il file `src/data/gallery.json`.
3. Aggiungi la nuova foto all'array `"images"`:
   ```json
   { "src": "images/NOME_FOTO.jpg", "alt": "Descrizione della foto" }
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
- **Linter e Formattazione del Codice:**
  ```bash
  npm run format
  npm run lint
  ```
- **Testa la build compilata in locale:**
  ```bash
  npm run build
  npm run preview
  ```

---

*A.S.D. Judo Kihon Bovolone © Tutti i diritti riservati.*
