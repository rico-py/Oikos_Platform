# Gelateria Sole (nome provvisorio)

Sito vetrina one-page per una gelateria locale. HTML + CSS + JS vanilla, nessun framework, nessun build step — vedi [PROJECT.md](PROJECT.md) per il brief completo (obiettivo, decisioni di design, workflow di squadra).

## Struttura

```
index.html
assets/
├── css/style.css
├── js/main.js
└── img/
```

## Sviluppo locale

Apri `index.html` con l'estensione **Live Server** di VS Code (tasto destro → "Open with Live Server") per vedere le modifiche in tempo reale. Nessuna installazione o build richiesta.

## Checklist contenuti da sostituire

Il sito è compilato con contenuti segnaposto, chiaramente marcati nel codice. Prima della pubblicazione va sostituito tutto quanto segue:

- [ ] Nome reale della gelateria, logo, identità visiva
- [ ] Dati strutturati `schema.org/IceCreamShop` nel `<head>` di `index.html` (nome, indirizzo, telefono, orari)
- [ ] Indirizzo, telefono, WhatsApp reali (compaiono in più punti: nav, sezione "Dove siamo", CTA finale, footer)
- [ ] Orari di apertura reali, anche stagionali se cambiano (tabella orari + oggetto `orari` in `assets/js/main.js`)
- [ ] Embed Google Maps reale al posto del box segnaposto
- [ ] Testo della sezione "Chi siamo"
- [ ] Elenco gusti reali con descrizioni (sezione "Gusti")
- [ ] Foto reali: vetrina, locale, gusti, laboratorio, team (sezione "Galleria" + foto "Chi siamo")
- [ ] 2-3 recensioni reali (con permesso del cliente)
- [ ] Social/contatti aggiuntivi, se presenti (Instagram, Facebook, ecc.)
- [ ] P.IVA in footer
- [ ] Dominio reale al posto di `https://esempio.it/` in `index.html` (canonical, Open Graph, Twitter card), `robots.txt` e `sitemap.xml`
- [ ] Immagine social `assets/img/og-image.jpg` (1200x630) e favicon definitivo (ora un segnaposto minimo in `assets/img/favicon.svg`)

## Deploy

Consigliato Netlify o Vercel collegato alla repo: ogni push su `main` pubblica il sito, ogni Pull Request genera un link di anteprima.
