#!/bin/bash

# Interrompe lo script in caso di errori
set -e

echo "====================================="
echo "  Compilazione Sito Web Judo Kihon  "
echo "====================================="

echo "[1/3] Installazione delle dipendenze..."
npm install

echo "[2/3] Compilazione della build di produzione..."
npm run build

echo "[3/3] Compilazione completata con successo!"
echo "Tutti i file statici si trovano all'interno della cartella 'dist/'."
echo "====================================="
