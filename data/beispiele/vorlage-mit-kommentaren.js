// HINWEIS: Dies ist eine JavaScript-Datei mit Kommentaren zur Erklärung.
// Für die echte JSON-Datei musst du ALLE Kommentare (// ...) entfernen!
// JSON erlaubt keine Kommentare.

{
  // PFLICHTFELD: Eindeutige ID (nur Kleinbuchstaben, Zahlen, Bindestriche)
  // Diese ID wird als Dateiname verwendet
  "id": "meine-lernkarte",
  
  // PFLICHTFELD: Titel der Karte (wird als Überschrift angezeigt)
  "titel": "Mein Titel",
  
  // PFLICHTFELD: Kurze Einleitung (1-3 Sätze)
  // Soll neugierig machen und erklären, worum es geht
  "intro": "Hier steht eine kurze, spannende Einleitung.",
  
  // PFLICHTFELD: "grundschule" oder "sekundar"
  // Bestimmt das Design und welcher Filter die Karte anzeigt
  "level": "grundschule",
  
  // PFLICHTFELD: Name des Fachs (z.B. "Mathe", "Naturwissenschaften")
  // Sollte mit dem Ordnernamen übereinstimmen
  "kategorie": "Mathe",
  
  // PFLICHTFELD: Ein Emoji, das zur Karte passt
  // Finde Emojis auf https://emojipedia.org
  "icon": "🎯",
  
  // PFLICHTFELD: Liste der Lernschritte (mindestens 2, maximal 5)
  "steps": [
    {
      // PFLICHTFELD: Titel des Schritts (kurz und prägnant)
      "t": "Schritt 1: Titel",
      
      // PFLICHTFELD: Hauptinhalt des Schritts (1-3 Sätze)
      // Verwende einfache Sprache!
      "d": "Hier steht die Erklärung des Schritts.",
      
      // OPTIONAL: Zusatzinfo für Fortgeschrittene
      // Wird nur angezeigt, wenn man draufklickt
      "info": "Das ist ein Profi-Tipp oder eine Vertiefung."
    },
    {
      "t": "Schritt 2: Titel",
      "d": "Beschreibung des zweiten Schritts."
      // "info" kann weggelassen werden, wenn es nichts hinzuzufügen gibt
    }
  ]
}

// CHECKLISTE NACH DEM ERSTELLEN:
// [ ] Alle Kommentare entfernt?
// [ ] JSON-Syntax mit https://jsonlint.com geprüft?
// [ ] Dateiname entspricht der "id"? (z.B. meine-lernkarte.json)
// [ ] Karte in der index.json des Fachs registriert?
// [ ] Im Browser getestet?
