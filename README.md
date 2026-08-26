# Oikos 2

Sito vetrina one-page per la gelateria Oikos 2 (Via Franco Lucchini 12, Palermo). HTML + CSS + JS vanilla, nessun framework, nessun build step — vedi [PROJECT.md](PROJECT.md) per il brief completo (obiettivo, decisioni di design, workflow di squadra).

## Struttura

```
index.html
netlify.toml
_headers
assets/
├── css/style.css
├── css/fonts.css
├── js/main.js
├── fonts/
└── img/
```

## Sviluppo locale

Apri `index.html` con l'estensione **Live Server** di VS Code (tasto destro → "Open with Live Server") per vedere le modifiche in tempo reale. Nessuna installazione o build richiesta.

## Checklist contenuti da sostituire

Il sito è compilato con contenuti segnaposto, chiaramente marcati nel codice. Prima della pubblicazione va sostituito tutto quanto segue:

- [x] Nome reale: **Oikos 2** (verificato su Google/RestaurantGuru/JustEat)
- [x] Logo reale in `assets/img/logo.png` (versione master, usata per `og:image`/schema.org); `assets/img/logo-nav.png` è un ritaglio senza il margine bianco, usato in nav (il file originale schiacciato a 34px era illeggibile); favicon ritagliato in `assets/img/logo-icon.png` → rifinitura del crop e versione per sfondi scuri (footer) a cura della grafica (Fase 2)
- [x] Indirizzo reale: Via Franco Lucchini 12, 90128 Palermo
- [x] Telefono reale: +39 091 595646 (fisso — **non funziona con WhatsApp**, chiedere al cliente se hanno un numero mobile dedicato)
- [x] Dati strutturati `schema.org/IceCreamShop`: nome/indirizzo/telefono aggiornati; orari e foto ancora segnaposto
- [ ] **Orari di apertura reali**: le fonti online sono in conflitto (chiuso lunedì + 9:30-01:00 il resto della settimana secondo RestaurantGuru/Google; 9:00-01:30 tutti i giorni secondo un altro aggregatore; 15:00-01:00 secondo un altro ancora) — da confermare direttamente col gestore prima di pubblicare, un badge "aperti ora" sbagliato è peggio di nessun badge
- [ ] WhatsApp: confermare se esiste un numero mobile dedicato (quello fisso trovato online non funziona)
- [x] Embed Google Maps reale al posto del box segnaposto
- [ ] Testo della sezione "Chi siamo"
- [ ] Descrizioni reali per le categorie del "Menu" e per i gusti gelato del momento
- [ ] Foto reali: vetrina, locale, gusti, laboratorio, team (sezione "Galleria" + foto "Chi siamo"). La foto nell'hero (`assets/img/hero-gelato.jpg`) è un segnaposto da Unsplash (licenza libera, uso commerciale consentito — credit: Kyle Hinkson), da sostituire con una foto reale di Oikos 2 appena disponibile
- [ ] Recensioni reali: trovate alcune vere su Google (4/5, 312 recensioni) ma troppo scarne da citare così come sono e da pubblicare solo col permesso del cliente — chiedere direttamente 2-3 recensioni che il gestore vuole mostrare
- [ ] Social/contatti aggiuntivi: esiste una pagina Facebook, verificare se è quella ufficiale e se va linkata; sono anche su Glovo e JustEat, valutare se aggiungere CTA di ordinazione
- [ ] P.IVA in footer
- [ ] Dominio reale al posto di `https://esempio.it/` in `index.html` (canonical, Open Graph, Twitter card), `robots.txt` e `sitemap.xml`
- [ ] Immagine social dedicata 1200x630 (ora uso temporaneamente il logo intero come `og:image`)

## SEO locale

Il sito copre solo una parte della local SEO. L'altra parte, spesso più pesante, è la coerenza tra piattaforme (Google decide chi mostrare per "gelateria Palermo" incrociando rilevanza, prossimità e autorevolezza/coerenza):

- [x] Dati strutturati arricchiti in `index.html`: `geo` (coordinate reali), `servesCuisine` (categorie menu), `hasMap`, `sameAs` (per ora solo JustEat)
- [ ] **NAP coerente ovunque** (Nome-Indirizzo-Telefono): verificare che Google Business Profile, Facebook, JustEat e Glovo riportino esattamente lo stesso nome, indirizzo e telefono del sito. Le fonti trovate online usano varianti diverse del nome ("Gelateria Oikos 2", "Oikos 2 (Ice Cream)", "Oikos 2") — è il fattore che pesa di più per comparire nelle ricerche locali, va sistemato a monte sulle piattaforme, non solo sul sito
- [ ] Aggiungere Facebook e Glovo a `sameAs` nello schema.org quando si conferma quale pagina/profilo è quello attivo (trovate due URL Facebook diversi per la stessa attività, serve conferma)
- [ ] Il dominio è ancora placeholder (`esempio.it`, in `url`/`image`/canonical/OG/robots/sitemap): finché il sito non è online su un dominio reale e indicizzabile, questo lavoro SEO non ha alcun effetto su Google

## Sicurezza

Sito statico senza backend/form/dati utente: i rischi "classici" (SQL injection, breach, auth) non si applicano. Fatto comunque:

- [x] Font self-hosted (`assets/fonts/`) invece di Google Fonts CDN: niente più richieste esterne, l'IP dei visitatori non viene esposto a Google ad ogni caricamento pagina
- [x] `rel="noopener noreferrer"` su tutti i link `target="_blank"` (WhatsApp, Google Maps)
- [x] Security header via `_headers` (attivi solo su Netlify, non su un server statico locale): `X-Frame-Options`, `X-Content-Type-Options`, `Referrer-Policy`, `Permissions-Policy`, `Content-Security-Policy`
- [ ] Dopo il primo deploy su Netlify: aprire la console del browser e verificare che non ci siano violazioni CSP (l'unica origine esterna consentita è `https://www.google.com` per l'embed della mappa)
- HTTPS: automatico e gratuito su Netlify, nessuna configurazione richiesta

## Deploy

Netlify da collegare alla repo (config già pronta in `netlify.toml`, publish directory `.`, nessun build command — sito statico): una volta collegato, ogni push su `main` pubblica il sito, ogni Pull Request genera un link di anteprima automatico nei commenti.
