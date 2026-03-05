# 🎯 Deine ersten 5 Minuten im Lern-Hub

Willkommen! Du bist hier, weil du entweder:
- **Lernkarten hinzufügen** willst (super!)
- **Das Projekt für deine Familie/Schule nutzen** möchtest
- **Lernen willst, wie man mit GitHub arbeitet**

Egal warum – hier ist dein Schnellstart:

---

## 🚀 Track 1: "Ich will nur eine Lernkarte beitragen"

**Zeit: ~3 Minuten**

### Schritt 1: Repository forken
1. Gehe zu https://github.com/benjamin-lam/lern-hub
2. Klicke oben rechts auf **"Fork"**
3. Warte 5 Sekunden → Du hast jetzt deine eigene Kopie!

### Schritt 2: Beispiel-Lernkarte anschauen
1. In deinem Fork: Gehe zu `/data/beispiele/beispiel-lernkarte.json`
2. Klicke auf die Datei und schau dir die Struktur an

### Schritt 3: Deine Karte erstellen
1. Gehe zum passenden Ordner (z.B. `/data/mathe/`)
2. Klicke auf **"Add file" → "Create new file"**
3. Dateiname: `dein-thema.json` (nur Kleinbuchstaben, Bindestriche statt Leerzeichen)
4. Kopiere die Struktur aus `/data/beispiele/beispiel-lernkarte.json`
5. Fülle deine Inhalte ein
6. Scrolle runter → **"Commit new file"**

### Schritt 4: Pull Request erstellen
1. Oben auf der Seite siehst du: **"This branch is 1 commit ahead"**
2. Klick auf **"Contribute" → "Open pull request"**
3. Titel: `[Fach] Neue Lernkarte: Dein Titel`
4. Beschreibe kurz, was die Karte vermittelt
5. **"Create pull request"** → Fertig! 🎉

**Was passiert jetzt?**
Ich schaue mir deine Karte an und füge sie dem Projekt hinzu. Du bekommst eine Benachrichtigung, wenn sie live ist!

---

## 🏠 Track 2: "Ich will meinen eigenen Lern-Hub"

**Zeit: ~5 Minuten**

### Schritt 1: Forken (wie oben)

### Schritt 2: GitHub Pages aktivieren
1. In deinem Fork: **Settings** (oben rechts)
2. Linke Sidebar: **Pages**
3. **Source**: Wähle `main` Branch
4. **Save**
5. Warte 1-2 Minuten

### Schritt 3: Deine Seite öffnen
Die URL ist: `https://dein-github-name.github.io/lern-hub/`

Wenn du eine 404-Seite siehst:
- Warte noch 2 Minuten (GitHub Pages braucht Zeit)
- Prüfe, ob du wirklich `main` Branch gewählt hast

### Schritt 4: Anpassen
1. Gehe zu `index.html` in deinem Fork
2. Klicke auf das **Stift-Symbol** (✏️)
3. Suche nach `:root {` (ca. Zeile 30)
4. Ändere die Farben:
   ```css
   :root {
     --primary: #FF1493;    /* Deine Lieblingsfarbe */
     --secondary: #00CED1;
     --bg: #FFF5EE;
   }
   ```
5. **Commit changes** → Fertig!

**Tipp:** Änderungen können 1-5 Minuten brauchen, bis sie auf deiner Seite sichtbar sind.

---

## 💻 Track 3: "Ich will richtig entwickeln lernen"

**Zeit: ~10 Minuten (einmalig)**

### Schritt 1: Lies die Dokumentation
- **[BEHIND-THE-SCENES.md](BEHIND-THE-SCENES.md)** → Wie funktioniert der Code?
- **[LLM-CONTEXT-SPEC.md](LLM-CONTEXT-SPEC.md)** → Wie arbeite ich mit KI zusammen?
- **[THIS-VIBE-CODING-SESSION.md](THIS-VIBE-CODING-SESSION.md)** → Die Philosophie

### Schritt 2: Lokale Entwicklung einrichten (optional)

**Variante A: Live Server (empfohlen für Anfänger)**
1. Installiere [Visual Studio Code](https://code.visualstudio.com/)
2. Installiere die Extension "Live Server"
3. Öffne den lern-hub Ordner in VS Code
4. Rechtsklick auf `index.html` → "Open with Live Server"

**Variante B: Python (wenn du schon Python hast)**
```bash
cd lern-hub
python3 -m http.server 8000
# Öffne im Browser: http://localhost:8000
```

**Variante C: Node.js (wenn du schon Node hast)**
```bash
cd lern-hub
npx http-server
```

### Schritt 3: Erste Änderung
1. Öffne `index.html` in einem Texteditor
2. Suche nach `🚀 Lern-Explorer` (Zeile ~15)
3. Ändere es zu: `🚀 Mein Lern-Hub`
4. Speichere die Datei
5. Refresh den Browser → Deine Änderung ist da!

### Schritt 4: Git-Workflow lernen
```bash
# Fork clonen (ersetze <dein-name> mit deinem GitHub-Namen)
git clone https://github.com/<dein-name>/lern-hub.git
cd lern-hub

# Neuen Branch erstellen
git checkout -b feature/meine-erste-aenderung

# Änderungen vornehmen (z.B. in index.html)

# Änderungen committen
git add .
git commit -m "Titel geändert"

# Zu GitHub pushen
git push origin feature/meine-erste-aenderung

# Auf GitHub: Pull Request erstellen
```

---

## 🤔 Häufige Fragen

### "Ich habe einen Fehler gemacht – wie mache ich das rückgängig?"
Im Web-Interface:
1. Gehe zur Datei
2. Klicke auf "History" (oben rechts)
3. Wähle die letzte funktionierende Version
4. Kopiere den Inhalt
5. Bearbeite die aktuelle Datei und ersetze den Inhalt

Mit Git:
```bash
git checkout -- dateiname.json  # Lokale Änderungen verwerfen
```

### "Meine Änderungen werden nicht angezeigt"
1. **Browser-Cache leeren**: `Strg+F5` (Windows/Linux) oder `Cmd+Shift+R` (Mac)
2. **Warten**: GitHub Pages braucht 1-5 Minuten
3. **Inkognito-Modus**: Öffne die Seite in einem privaten Fenster

### "JSON-Fehler: Unexpected token"
Deine JSON-Datei hat einen Syntax-Fehler. Häufigste Ursachen:
- Extra Komma am Ende: `"level": "sekundar",}` ❌ (Komma vor `}` entfernen)
- Fehlende Anführungszeichen: `id: test` ❌ (muss sein: `"id": "test"`)
- Falsche Klammern: `]` statt `}`

**Tool zum Prüfen:** Kopiere deine JSON zu https://jsonlint.com

### "Wo finde ich Hilfe?"
1. **[TROUBLESHOOTING.md](TROUBLESHOOTING.md)** → Häufige Probleme
2. **[Issues auf GitHub](https://github.com/benjamin-lam/lern-hub/issues)** → Frage stellen
3. **Browser-Konsole** (F12) → Zeigt Fehlermeldungen

---

## 🎉 Du hast es geschafft!

Jetzt bist du bereit:
- ✅ Lernkarten hinzuzufügen
- ✅ Deinen eigenen Hub zu betreiben
- ✅ Mit GitHub zu arbeiten

**Next Steps:**
- Erstelle deine erste Lernkarte
- Schau dir andere Lernkarten als Inspiration an
- Lies [CONTRIBUTING.md](CONTRIBUTING.md) für Best Practices

**Viel Spaß beim Bauen! 🛠️**
