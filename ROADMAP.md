# Roadmap — Oikos 2

Roadmap operativa per portare il sito da bozza segnaposto a consegna cliente. Vedi [PROJECT.md](PROJECT.md) per il brief e le decisioni di design/stack.

## Divisione ruoli

- 🏗️ **Struttura** (Claudio) — HTML semantico, `main.js`, SEO tecnica, dati/schema.org, deploy, workflow Git
- 🎨 **Grafica** (collega) — `style.css`, palette/tipografia, layout visivo, micro-interazioni, asset immagine

File di competenza già separati bene per questo split: `index.html` + `assets/js/main.js` → struttura, `assets/css/style.css` → grafica. Evitate di toccare il file dell'altro senza avvisare, per non generare conflitti di merge continui.

## Fase 0 — Setup repo (in corso)

- [x] Split bozza monolitica in `index.html` + `assets/css` + `assets/js`
- [x] README.md + PROJECT.md scritti
- [x] Collaboratore aggiunto su GitHub con permessi write
- [x] 🏗️ Push del branch `main` su origin e impostazione come branch di default su GitHub (fatto: `main` pushato, default cambiato da rico-py)
- [x] 🏗️ Decidere su `gelateria-sole.html`: eliminato (PR #1, mergiata)
- [ ] 🏗️ Collegare Netlify al repo per deploy automatico su push a `main` + preview link sulle PR — `netlify.toml` già pronto in repo, manca solo il collegamento dall'interfaccia Netlify (serve login/autorizzazione GitHub, vedi istruzioni in chat)
- [ ] Permessi admin su GitHub per Claudio (rimandato, non bloccante — write basta per il lavoro quotidiano)

## Fase 1 — Fondamenta struttura 🏗️

- [x] Meta tag: Open Graph, Twitter card, `canonical`, favicon segnaposto — PR #2, da mergiare
- [x] `robots.txt` e `sitemap.xml` — PR #2, da mergiare (dominio placeholder `esempio.it`, aggiornare quando reale)
- [x] Accessibilità JS: `aria-expanded`/`aria-controls` sul bottone `.burger`, focus trap sul menu mobile aperto, chiusura con Esc — PR #2, da mergiare
- [ ] Strategia di caricamento immagini (`<picture>`/`srcset`, `loading="lazy"`): **rimandata alla Fase 3**, non ha senso costruirla prima di avere foto reali su cui basare formati/dimensioni
- [ ] Verificare dati `schema.org/IceCreamShop` nel `<head>` di `index.html` — struttura già presente, va solo compilata quando arrivano i dati reali (Fase 3)
- [x] Self-hosting dei font (Fraunces + Plus Jakarta Sans) in `assets/fonts/` + `assets/css/fonts.css`, rimosso il link a Google Fonts CDN — PR #2
- [x] Security header via `_headers` (Netlify) + `rel="noopener noreferrer"` sui link esterni + font self-hosted per non esporre l'IP dei visitatori a Google — PR #2
- [x] SEO locale arricchita: `geo` (coordinate reali), `servesCuisine` (categorie menu), `hasMap`, `sameAs` (JustEat) — PR #2. NAP coerente tra Google/Facebook/JustEat/Glovo resta da verificare (fuori dal codice, vedi README)
- [x] Sezione Menu ristrutturata: la griglia principale mostra le 6 categorie confermate da un menu reale trovato online (gelato, granite, brioche, crêpes e waffle, dolci a peso, frappè e bevande) invece dei soli gusti gelato; rinominato "Gusti"→"Menu" ovunque — PR #2
- [x] Fix logo navbar quasi invisibile: `logo.png` ha enorme margine bianco, schiacciato a 34px il disegno spariva — creato `assets/img/logo-nav.png` ritagliato sul contenuto reale, altezza nav portata a 40px — PR #2

## Fase 2 — Fondamenta grafica 🎨

- [x] ~~Rifinire le "scoop" del cone in hero~~ → sostituite le forme CSS piatte con una foto reale (segnaposto Unsplash, licenza libera) trattata a card con bordo/ombra, vedi `.hero-photo`
- [ ] Placeholder da sostituire visivamente quando arrivano asset reali: `.storia-photo` e `.gal-item` (box tratteggiati) → trattamento immagine reale con bordi/ombre coerenti
- [x] ~~Design favicon~~ → fatto un ritaglio provvisorio del logo reale (`assets/img/logo-icon.png`, `favicon-32x32.png`/`favicon-16x16.png`), da rifinire: il crop cattura ancora un pezzo dello swoosh decorativo dietro la scritta
- [ ] Logo su sfondo scuro (footer): `logo.png` ha sfondo bianco pieno, sul footer (`--choco` scuro) farebbe un riquadro bianco — serve una versione con sfondo trasparente o invertita per quel contesto
- [ ] Immagine social dedicata 1200x630 (ora `og:image`/`twitter:image` puntano temporaneamente al logo intero, non è il formato ideale)
- [ ] Rifinitura responsive sotto i 380px (verificare hero-art e badge flottanti su schermi molto piccoli)
- [ ] Eventuale galleria con lightbox/zoom per le foto reali (da valutare se serve o se la griglia semplice basta)

### Polish/animazioni (revisione con skill `emil-design-eng`, filosofia Emil Kowalski)

- [ ] **Menu mobile**: apertura/chiusura istantanea via `display:none/flex`, nessuna transizione. Tenere sempre `display:flex` e animare `opacity`/`transform` (parte da `translateY(-8px) scale(0.97); opacity:0`, non da `scale(0)`) con `visibility`+`pointer-events:none` da chiuso, `ease-out` ~200-250ms
- [ ] **Bottoni**: `.btn:hover` esiste ma manca `:active` — aggiungere `transform:scale(0.97)` su `:active` per il feedback di pressione, specie su mobile dove l'hover non esiste
- [ ] **Icona burger**: le 3 righe restano identiche quando il menu è aperto (`aria-expanded="true"` già disponibile in JS) — animarla in una X per indicare lo stato
- [ ] **`.reveal` on-scroll**: usa `transition: ... ease` invece di `ease-out` — le entrate dovrebbero usare `ease-out` (parte veloce, feedback immediato)
- [ ] **`.nav-inner{transition:padding .2s ease}`**: dichiarata ma nessuno script la attiva (nessuno shrink-on-scroll in main.js) — implementare l'effetto o rimuovere la regola morta

## Fase 3 — Integrazione contenuti reali 🏗️🎨 (insieme, dipende dal cliente)

Checklist contenuti già tracciata in [README.md](README.md). Ordine consigliato una volta ricevuti i dati dal gelataio:

1. [x] Nome reale (Oikos 2) e logo → fatto, verificato via web (Google/RestaurantGuru/JustEat) + logo fornito dal collega
2. [x] Indirizzo/telefono reali (Via Franco Lucchini 12, Palermo — +39 091 595646) → fatto in nav, "Dove siamo", CTA finale, footer, schema.org. WhatsApp ancora da chiarire (il numero trovato è un fisso)
3. Orari reali (anche stagionali) → **da confermare col gestore**, fonti online in conflitto tra loro, non affidabile scrivere un orario a caso
4. Testo "Chi siamo" e descrizioni reali per le categorie del Menu e per i gusti gelato (struttura già pronta, mancano solo i testi specifici)
5. Foto reali (vetrina, locale, gusti, laboratorio, team) → sostituiscono i placeholder tratteggiati
6. [x] Embed Google Maps reale al posto del box segnaposto → fatto (PR #2), verificare in produzione che non mostri il consenso cookie di Google al posto della mappa
7. 2-3 recensioni reali scelte dal cliente (trovate recensioni Google reali ma troppo scarne/da usare solo con permesso esplicito)
8. Social aggiuntivi (pagina Facebook trovata, da confermare se ufficiale; presenti anche su Glovo/JustEat), P.IVA in footer

## Fase 4 — QA prelancio

- [ ] Test cross-browser/dispositivo (Safari iOS incluso, è una gelateria locale → traffico mobile alto)
- [ ] Audit Lighthouse (performance, SEO, accessibilità) dopo l'inserimento delle foto reali
- [ ] Validazione dati strutturati con Google Rich Results Test
- [ ] Verifica badge aperto/chiuso con orari reali su più fusi orari del giorno (bordi 12:00/23:00/00:00)
- [ ] Dopo il primo deploy Netlify: controllare la console del browser per violazioni CSP (l'unica origine esterna consentita è google.com per la mappa)
- [ ] Cross-review finale: ognuno rilegge il lavoro dell'altro prima della PR verso `main`

## Fase 5 — Deploy e consegna

- [ ] Setup Google Business Profile (se incluso nel pacchetto venduto)
- [ ] Deploy di produzione su dominio definitivo
- [ ] Handoff al cliente: chi mantiene il sito nel tempo, come si aggiornano gusti/orari

## Cose da decidere come team (riportate da PROJECT.md, ancora aperte)

- Cosa include esattamente il pacchetto venduto (solo sito? + Google Business Profile? + manutenzione a pagamento?)
- Prezzo finale
- Se il progetto resta singolo o diventa un servizio ripetibile per altre attività locali
