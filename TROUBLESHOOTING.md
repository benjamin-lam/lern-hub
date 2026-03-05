# 🔧 Troubleshooting Guide

## Problem: "Meine Änderungen werden nicht angezeigt"

**Ursachen:**
1. Browser-Cache zeigt alte Version
2. GitHub Pages braucht ein paar Minuten zum Aktualisieren

**Lösungen:**
1. **Hard Reload**: `Strg+F5` (Windows/Linux) oder `Cmd+Shift+R` (Mac)
2. **Cache leeren**: Browser-Einstellungen → Daten löschen
3. **Inkognito-Modus**: Neues privates Fenster öffnen
4. **Warten**: GitHub Pages kann bis zu 5 Minuten brauchen

---

## Problem: "JSON-Fehler: Unexpected token"

**Ursache:** Syntax-Fehler in der JSON-Datei

**Häufige Fehler:**
```json
// ❌ FALSCH: Extra Komma am Ende
{
  "id": "test",
  "titel": "Test",  ← Dieses Komma ist zu viel
}

// ✅ RICHTIG:
{
  "id": "test",
  "titel": "Test"
}
```

**So findest du den Fehler:**
1. Browser-Konsole öffnen (F12)
2. Fehlermeldung lesen (z.B. "Line 5, Column 12")
3. In der JSON-Datei zur angegebenen Zeile gehen
4. Prüfen: Komma, Anführungszeichen, geschweifte Klammern

**Tool zum Validieren:** https://jsonlint.com

---

## Problem: "GitHub Pages zeigt 404"

**Ursachen:**
1. GitHub Pages nicht aktiviert
2. Falscher Branch ausgewählt
3. Datei heißt nicht `index.html`

**Lösungen:**
1. **Settings → Pages**: Prüfe, ob "main branch" ausgewählt ist
2. **Dateiname**: Muss exakt `index.html` sein (Groß-/Kleinschreibung!)
3. **URL prüfen**: `https://username.github.io/lern-hub/` (mit Trailing Slash)

---

## Problem: "Lernkarte wird nicht angezeigt"

**Checkliste:**
1. ✅ JSON-Datei im richtigen Ordner? (`/data/[thema]/[id].json`)
2. ✅ Dateiname entspricht der ID in der JSON? (`"id": "meine-karte"` → `meine-karte.json`)
3. ✅ Karte in `index.json` des Themas registriert?
4. ✅ `level`-Filter passt? (grundschule/sekundar/all)

**Test:**
Öffne die JSON-Datei direkt im Browser:
```
https://username.github.io/lern-hub/data/thema/id.json
```

Wenn du einen Fehler siehst → JSON ist kaputt
Wenn du JSON siehst → Routing-Problem (index.json prüfen)

---

## Problem: "Ich kann nicht pushen / Pull Request erstellen"

**Ursache:** Du versuchst, direkt ins Original-Repo zu pushen

**Lösung: Fork-Workflow**
1. **Fork erstellen** (Button oben rechts auf GitHub)
2. **In DEINEM Fork arbeiten** (https://github.com/DeinName/lern-hub)
3. **Änderungen committen**
4. **Pull Request** vom Fork zum Original erstellen

---

## Problem: "Lokaler Server startet nicht"

**Python-Variante:**
```bash
# Prüfen, ob Python installiert ist:
python --version
# oder
python3 --version

# Server starten:
python3 -m http.server 8000
```

**Node-Variante:**
```bash
# Node installiert?
node --version

# Wenn ja:
npx http-server
```

**VS Code:**
Extension "Live Server" installieren → Rechtsklick auf index.html → "Open with Live Server"

---

## Noch nicht gelöst?

1. **Browser-Konsole checken** (F12 → Console)
2. **Issue auf GitHub erstellen** mit:
   - Was du gemacht hast
   - Was passiert ist
   - Screenshot der Fehlermeldung
   - Welcher Browser? (Chrome/Firefox/Safari)
