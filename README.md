# A.S.D. Judo Kihon Bovolone - Sito Ufficiale

Benvenuto nel repository ufficiale del sito web dell'**A.S.D. Judo Kihon Bovolone**.  
Questo sito è proprietario dell'associazione e tutto il materiale (codice, foto, documenti) è riservato all'uso esclusivo della stessa.

Il sito è sviluppato in **React** (utilizzando Vite) e si avvale di una pipeline di **Continuous Deployment (CI/CD)** gestita tramite GitHub Actions per generare automaticamente i PDF e pubblicare le modifiche sugli ambienti di Test e Produzione.

---

## 🚀 Ambienti e Pipeline di Deploy

Il progetto usa un'architettura multi-ambiente (con doppio repository) per garantire che le modifiche vengano prima testate e poi rilasciate in sicurezza:

- **Ambiente di Test** (`test.judokihon.it`):
  - È agganciato al branch **`env/test`** di *questo* repository.
  - Ogni volta che del codice viene unito (merged) su questo branch, la GitHub Action compila il sito e lo pubblica automaticamente tramite GitHub Pages.
  
- **Ambiente di Produzione** (`www.judokihon.it`):
  - È agganciato al branch **`main`** di *questo* repository.
  - Ogni volta che del codice viene approvato e rilasciato su questo branch, la GitHub Action compila il sito e invia i file statici al **repository figlio** `judokihon-production`. 
  - Il sito di produzione viene servito direttamente dal branch `gh-pages` del nuovo repository tramite GitHub Pages.

### 📄 Automazione Documenti PDF
Sia in Test che in Produzione, il server di build (Ubuntu) scarica automaticamente **LibreOffice** e utilizza un nostro script personalizzato (`scripts/generate-docs.js`) per:
1. Inserire le date dinamiche (es. anni accademici "2024-2025") nei template Word (situati in `src/templates/`).
2. Generare i PDF ufficiali di ammissione a socio e i volantini orari.
3. Posizionare i PDF pronti per il download nella cartella pubblica.

*(Nota: c'è anche un trigger mensile automatico impostato per il 1° giugno di ogni anno che rigenera tutti i PDF da solo).*

---

## 🤝 Regole di Contribuzione (Pull Requests)

L'aggiornamento diretto dei branch protetti è disabilitato. Qualsiasi modifica (nuovi testi, nuove foto, aggiunta di una nuova cintura nera) deve passare attraverso il sistema delle **Pull Request (PR)**.

### Flusso di lavoro obbligatorio
1. Crea un nuovo branch a partire da `main` (es. `feature/nuova-cintura-nera`).
2. Apporta le modifiche in locale e fai i commit.
3. Esegui un Push del tuo branch su GitHub.
4. Apri una **Pull Request** dal tuo branch verso `env/test`.
5. **Validazione:** Nelle impostazioni di GitHub è richiesto che la PR venga **revisionata e approvata esplicitamente da @vladbragoi**.
6. Una volta approvata, esegui il Merge su `env/test`. Attendi qualche minuto per visualizzare i risultati su `test.judokihon.it`.
7. Se tutto è corretto, apri una nuova Pull Request da `env/test` verso `main` per la messa in produzione.

---

## 📝 Come Modificare i Contenuti

I dati del sito sono estratti in file JSON all'interno della cartella `src/data/`.

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
1. Metti il file originale dell'immagine all'interno della cartella `public/gallery/images/`.
2. Apri il file `src/data/gallery.json`.
3. Aggiungi la nuova foto all'array `"images"`:
   ```json
   { "src": "gallery/images/NOME_FOTO.jpg", "alt": "Descrizione della foto" }
   ```

---

## 🛠️ Comandi Utili per lo Sviluppo Locale

Se desideri clonare il sito e lavorarci sul tuo computer:

- **Installa le dipendenze:**
  ```bash
  npm install
  ```
- **Genera i documenti e Avvia il server locale:**
  ```bash
  npm run prebuild
  npm run dev
  ```
- **Linter e Formattazione del Codice:**
  ```bash
  npm run format
  npm run lint
  ```
- **Testa la build finale in locale:**
  ```bash
  npm run build
  npm run preview
  ```

---

*A.S.D. Judo Kihon Bovolone © Tutti i diritti riservati.*
