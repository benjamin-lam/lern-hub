# 🔧 Behind the Scenes: Wie der Lern-Explorer funktioniert

Dieses Dokument erklärt die technische Architektur des Projekts – ideal für Jugendliche, die Webentwicklung lernen, oder Eltern, die verstehen wollen, wie alles zusammenpasst.

---

## 📋 Inhaltsverzeichnis

1. [Überblick: Die 3 Hauptkomponenten](#überblick)
2. [Datenstruktur: JSON-Dateien](#datenstruktur)
3. [HTML-Struktur: Das Grundgerüst](#html-struktur)
4. [CSS: Styling mit Variablen](#css-styling)
5. [JavaScript: Die Logik](#javascript-logik)
6. [Routing: URLs ohne Server](#routing)
7. [Fehlerbehandlung](#fehlerbehandlung)
8. [Erweitern: Eigene Features hinzufügen](#erweitern)

---

## 1. Überblick: Die 3 Hauptkomponenten <a name="überblick"></a>

Der Lern-Explorer ist eine **Single-Page Application (SPA)** – das bedeutet:
- Es gibt nur **eine HTML-Datei** (`index.html`)
- Alle Ansichten werden **dynamisch mit JavaScript** erzeugt
- **Keine Server-Logik** nötig – funktioniert direkt im Browser

### Die Architektur auf einen Blick:

```
┌─────────────────────────────────────┐
│      index.html (Hauptdatei)        │
│  ┌──────────┐ ┌──────┐ ┌──────────┐ │
│  │   HTML   │ │ CSS  │ │JavaScript│ │
│  │ Struktur │ │Style │ │  Logik   │ │
│  └──────────┘ └──────┘ └──────────┘ │
└─────────────────────────────────────┘
                  ↓
         ┌────────────────┐
         │  JSON-Dateien  │
         │  (themen.json, │
         │   data/*.json) │
         └────────────────┘
```

---

## 2. Datenstruktur: JSON-Dateien <a name="datenstruktur"></a>

### themen.json – Die Fächer-Übersicht

```json
[
  {
    "name": "Mathe",
    "slug": "mathe",
    "icon": "📐",
    "beschreibung": "Zahlen und Dreiecke"
  }
]
```

**Erklärung:**
- `name`: Wird auf der Karte angezeigt
- `slug`: Wird in der URL verwendet (`?view=thema&path=mathe`)
- `icon`: Emoji für visuelle Orientierung
- `beschreibung`: Kurzer Teaser-Text

### data/[fach]/index.json – Karten-Übersicht pro Fach

```json
[
  {
    "id": "pythagoras",
    "titel": "Satz des Pythagoras",
    "level": "sekundar"
  }
]
```

**Erklärung:**
- `id`: Dateiname der Lernkarte (ohne `.json`)
- `titel`: Titel auf der Übersichtskarte
- `level`: `grundschule` oder `sekundar` (für Filter)

### data/[fach]/[id].json – Die eigentliche Lernkarte

```json
{
  "id": "pythagoras",
  "titel": "Satz des Pythagoras",
  "level": "sekundar",
  "kategorie": "Mathe",
  "icon": "📐",
  "intro": "Warum a² + b² = c² der coolste Trick für Dreiecke ist.",
  "steps": [
    {
      "t": "Der Rechte Winkel",
      "d": "Suche die 90 Grad Ecke im Dreieck.",
      "info": "Tipp: Die längste Seite liegt immer gegenüber!"
    }
  ]
}
```

**Erklärung:**
- `steps`: Array von Lernschritten
  - `t` (title): Überschrift des Schritts
  - `d` (description): Hauptinhalt
  - `info` (optional): Zusatzinfo, die per Klick eingeblendet wird

---

## 3. HTML-Struktur: Das Grundgerüst <a name="html-struktur"></a>

Die gesamte Seite besteht aus **zwei Container-Bereichen**:

```html
<header id="main-header">
  <!-- Navigation, Suchfeld, Level-Filter -->
</header>

<div id="content-grid" class="grid"></div>   <!-- Für Listen-Ansicht -->
<div id="detail-view" class="hidden"></div>  <!-- Für Detail-Ansicht -->
```

### Dynamisches Umschalten:

```javascript
// Listen-Ansicht zeigen
document.getElementById('content-grid').classList.remove('hidden');
document.getElementById('detail-view').classList.add('hidden');

// Detail-Ansicht zeigen (umgekehrt)
document.getElementById('content-grid').classList.add('hidden');
document.getElementById('detail-view').classList.remove('hidden');
```

---

## 4. CSS: Styling mit Variablen <a name="css-styling"></a>

### CSS Custom Properties (Variablen)

```css
:root {
  --primary: #FFD700;    /* Hauptfarbe */
  --secondary: #FF4500;  /* Akzentfarbe */
  --bg: #F0F8FF;         /* Hintergrund */
}
```

**Warum das clever ist:**
- Farben zentral definiert → leicht zu ändern
- Modi für verschiedene Altersgruppen:

```css
body.mode-grundschule {
  --primary: #FFD700;        /* Gelb = verspielt */
  --bg: #F0F8FF;             /* Hellblau */
  font-family: 'Comic Sans MS';
}

body.mode-sekundar {
  --primary: #2c3e50;        /* Dunkelblau = seriös */
  --bg: #ffffff;
  font-family: 'Segoe UI';
}
```

### Grid-Layout für Responsive Design

```css
.grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 20px;
}
```

**Bedeutung:**
- `auto-fit`: Automatisch so viele Spalten wie möglich
- `minmax(280px, 1fr)`: Mindestens 280px breit, sonst gleichmäßig verteilt
- `gap: 20px`: Abstand zwischen Karten

---

## 5. JavaScript: Die Logik <a name="javascript-logik"></a>

### Die init()-Funktion (Startpunkt)

```javascript
async function init() {
  const savedLevel = localStorage.getItem('userLevel') || 'all';
  setLevel(savedLevel);
  
  if (!view) await renderHome();
  else if (view === 'thema') await renderThema(path);
  else if (view === 'karte') await renderKarte(path);
}
```

**Was passiert hier?**
1. Liest gespeicherte Einstellung aus `localStorage`
2. Prüft URL-Parameter (`?view=...&path=...`)
3. Ruft die passende Render-Funktion auf

### Daten laden mit safeFetch()

```javascript
async function safeFetch(url) {
  try {
    const res = await fetch(url);
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    return await res.json();
  } catch (e) {
    throw new Error(`Pfad: ${url} | Grund: ${e.message}`);
  }
}
```

**Warum "safe"?**
- Fehlerbehandlung eingebaut
- Gibt hilfreiche Fehlermeldungen aus

### Dynamisches HTML mit Template Strings

```javascript
grid.innerHTML = data.map(t => `
  <div class="card" onclick="location.href='?view=thema&path=${t.slug}'">
    <h2>${t.icon} ${t.name}</h2>
    <p>${t.beschreibung}</p>
  </div>
`).join('');
```

**Erklärung:**
- `data.map()`: Durchläuft alle Einträge
- Template Strings (`` ` ``): HTML mit Variablen (`${...}`)
- `.join('')`: Verbindet Array zu einem String

---

## 6. Routing: URLs ohne Server <a name="routing"></a>

### Query-Parameter statt echter Seiten

```javascript
const urlParams = new URLSearchParams(window.location.search);
const view = urlParams.get('view');  // z.B. "thema"
const path = urlParams.get('path');  // z.B. "mathe"
```

**Beispiel-URLs:**
- Startseite: `index.html`
- Fach-Übersicht: `index.html?view=thema&path=mathe`
- Lernkarte: `index.html?view=karte&path=mathe/pythagoras`

**Vorteil:**
- Funktioniert ohne Server
- Kann bookmarked werden
- Browser-Zurück-Button funktioniert

---

## 7. Fehlerbehandlung <a name="fehlerbehandlung"></a>

### Zentrale Fehler-Anzeige

```javascript
function showError(message, code) {
  target.innerHTML = `
    <div class="card error-card">
      <h2>⚠️ ACHTUNG: FEHLER</h2>
      <p>${message}</p>
      <code class="error-code">${code}</code>
    </div>
  `;
}
```

**Häufige Fehler:**
- Datei nicht gefunden (404)
- JSON-Syntax-Fehler
- Fehlende Felder in JSON

**Debug-Tipps:**
1. Browser-Konsole öffnen (F12)
2. Auf "Console" klicken
3. Fehlermeldungen lesen (rot markiert)

---

## 8. Erweitern: Eigene Features hinzufügen <a name="erweitern"></a>

### Beispiel 1: Neues Level hinzufügen (z.B. "Oberstufe")

**Schritt 1: CSS erweitern**
```css
.level-oberstufe { border-color: #8B0000; }
body.mode-oberstufe {
  --primary: #8B0000;
  font-family: 'Times New Roman';
}
```

**Schritt 2: Filter-Button hinzufügen**
```html
<button onclick="setLevel('oberstufe')" id="btn-oberstufe" class="filter-btn">
  🎓 Oberstufe
</button>
```

**Schritt 3: Lernkarten markieren**
```json
{ "level": "oberstufe" }
```

### Beispiel 2: Quiz-Funktion hinzufügen

**JSON erweitern:**
```json
{
  "steps": [...],
  "quiz": {
    "frage": "Was ist a² + b² = ?",
    "antworten": ["c", "c²", "2c"],
    "richtig": 1
  }
}
```

**JavaScript hinzufügen:**
```javascript
function renderQuiz(quiz) {
  return `
    <div class="quiz">
      <h3>${quiz.frage}</h3>
      ${quiz.antworten.map((a, i) => `
        <button onclick="checkAnswer(${i}, ${quiz.richtig})">
          ${a}
        </button>
      `).join('')}
    </div>
  `;
}

function checkAnswer(selected, correct) {
  if (selected === correct) {
    alert("Richtig! 🎉");
  } else {
    alert("Nochmal probieren!");
  }
}
```

---

## 🧪 Entwickler-Tools

### Lokalen Server starten (optional)

Für komplexere Entwicklung kann ein lokaler Server helfen:

```bash
# Python 3
python -m http.server 8000

# Node.js (npx)
npx http-server
```

Dann öffne: `http://localhost:8000`

### Browser-Cache leeren

Änderungen werden nicht angezeigt? Cache leeren:
- Chrome/Edge: `Ctrl+Shift+Delete`
- Firefox: `Ctrl+Shift+Delete`
- Oder Hard-Reload: `Ctrl+F5`

---

## 🤝 Weitere Ideen

- **Fortschrittsanzeige**: Welche Karten wurden schon angeschaut?
- **Favoriten**: Karten bookmarken
- **Druckversion**: CSS für `@media print`
- **Offline-Modus**: Service Worker für PWA
- **Mehrsprachigkeit**: `lang`-Parameter in JSON

---

## 💡 Lernressourcen

- **HTML/CSS**: [MDN Web Docs](https://developer.mozilla.org)
- **JavaScript**: [javascript.info](https://javascript.info)
- **JSON**: [json.org](https://www.json.org)
- **Git/GitHub**: [GitHub Skills](https://skills.github.com)

---

**Fragen? Öffne ein Issue auf GitHub!**