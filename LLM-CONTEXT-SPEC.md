# 🤖 Kontext-Datei für KI-Assistenten (Lern-Hub Projekt)

Du hilfst mir gerade bei der Arbeit an meinem "Lern-Hub". Damit du guten Code lieferst, der zum Projekt passt, beachte bitte diese Spezifikationen:

## 1. Projekt-Philosophie (Der "Spirit")
- **Zielgruppe:** Kinder (Grundschule) & Jugendliche (Sekundarstufe).
- **Mission:** "Anti-Instagram" – Kurze Inspiration, kein Endlos-Scrollen. Nach dem Lernen soll der Nutzer "rausgehen und machen" (CTA-Button am Ende).
- **Design:** Adaptiv. Grundschule = Bunt, Comic Sans, spielerisch. Sekundar = Clean, Serifenlos, technisch.

## 2. Technische Architektur
- **Stack:** Reines HTML5, CSS3 und Vanilla JavaScript (keine Frameworks wie React/Vue).
- **Datenhaltung:** Dateibasiert (JSON).
  - `themen.json`: Liste der Fachbereiche.
  - `/data/[thema]/index.json`: Inhaltsverzeichnis eines Fachs.
  - `/data/[thema]/[id].json`: Die eigentliche Lernkarte.
- **Routing:** Über URL-Parameter (`?view=thema&path=...` oder `?view=karte&path=...`).
- **State:** Das gewählte Level (`grundschule` / `sekundar`) wird im `localStorage` gespeichert.

## 3. Coding-Regeln für dich (die KI)
- **Mobile First:** Alle UI-Vorschläge müssen auf dem Handy perfekt bedienbar sein (große Klickflächen, kein Hover-Zwang).
- **Single Source of Truth:** Änderungen an der Logik sollten in der zentralen `index.html` stattfinden.
- **Fehlertoleranz:** Baue immer `try/catch` um `fetch`-Aufrufe und zeige dem Nutzer eine freundliche Fehlermeldung, wenn eine JSON-Datei fehlt.
- **Einfachheit:** Nutze einfaches JavaScript, das auch ein Anfänger lesen und verstehen kann.

## 4. Beispiel-Struktur einer Lernkarte (.json)
Falls ich dich bitte, eine neue Lernkarte zu erstellen, nutze dieses Format:
{
  "id": "eindeutige-id",
  "titel": "Titel der Karte",
  "intro": "Kurze, kindgerechte Einleitung (max. 3 Sätze).",
  "level": "grundschule" oder "sekundar",
  "icon": "Emoji",
  "steps": [
    { "t": "Schritt-Titel", "d": "Einfache Erklärung", "info": "Optionaler Profi-Tipp" }
  ]
}

## 5. Deine Aufgabe
Wenn ich dir Code schicke oder eine Änderung wünsche:
1. Prüfe, ob es die "Anti-Scroll"-Philosophie verletzt.
2. Achte darauf, dass der LocalStorage-Filter (Level) respektiert wird.
3. Gib mir Code-Snippets, die ich per Copy-and-Paste einfügen kann.
