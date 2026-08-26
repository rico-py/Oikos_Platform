# Roadmap — Gelateria Sole

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
- [ ] 🏗️ Collegare Netlify o Vercel al repo per deploy automatico su push a `main` + preview link sulle PR
- [ ] Permessi admin su GitHub per Claudio (rimandato, non bloccante — write basta per il lavoro quotidiano)

## Fase 1 — Fondamenta struttura 🏗️

- [x] Meta tag: Open Graph, Twitter card, `canonical`, favicon segnaposto — PR #2, da mergiare
- [x] `robots.txt` e `sitemap.xml` — PR #2, da mergiare (dominio placeholder `esempio.it`, aggiornare quando reale)
- [x] Accessibilità JS: `aria-expanded`/`aria-controls` sul bottone `.burger`, focus trap sul menu mobile aperto, chiusura con Esc — PR #2, da mergiare
- [ ] Strategia di caricamento immagini (`<picture>`/`srcset`, `loading="lazy"`): **rimandata alla Fase 3**, non ha senso costruirla prima di avere foto reali su cui basare formati/dimensioni
- [ ] Verificare dati `schema.org/IceCreamShop` nel `<head>` di `index.html` — struttura già presente, va solo compilata quando arrivano i dati reali (Fase 3)
- [ ] Valutare self-hosting dei font (Fraunces + Plus Jakarta Sans) invece del link a Google Fonts, per ridurre richieste esterne e migliorare performance/SEO mobile

## Fase 2 — Fondamenta grafica 🎨

- [ ] Rifinire le "scoop" del cone in hero (`.scoop`, `.cone` in style.css) — attualmente forme CSS pure, valutare se bastano o serve un'illustrazione/foto
- [ ] Placeholder da sostituire visivamente quando arrivano asset reali: `.storia-photo` e `.gal-item` (box tratteggiati) → trattamento immagine reale con bordi/ombre coerenti
- [ ] Transizione di apertura del menu mobile (oggi è istantanea via `display:flex`, valutare una transizione morbida)
- [ ] Design favicon + immagine OG/social share (collegata ai meta tag della Fase 1)
- [ ] Rifinitura responsive sotto i 380px (verificare hero-art e badge flottanti su schermi molto piccoli)
- [ ] Eventuale galleria con lightbox/zoom per le foto reali (da valutare se serve o se la griglia semplice basta)

## Fase 3 — Integrazione contenuti reali 🏗️🎨 (insieme, dipende dal cliente)

Checklist contenuti già tracciata in [README.md](README.md). Ordine consigliato una volta ricevuti i dati dal gelataio:

1. Nome reale, logo, identità visiva → aggiorna title, meta, schema.org, footer
2. Indirizzo/telefono/WhatsApp reali → compaiono in nav, sezione "Dove siamo", CTA finale, footer, schema.org
3. Orari reali (anche stagionali) → oggetto `orari` in `main.js` + tabella in `index.html`
4. Testo "Chi siamo" e descrizioni gusti
5. Foto reali (vetrina, locale, gusti, laboratorio, team) → sostituiscono i placeholder tratteggiati
6. Embed Google Maps reale al posto del box segnaposto
7. 2-3 recensioni reali (con permesso del cliente)
8. Social aggiuntivi, P.IVA in footer

## Fase 4 — QA prelancio

- [ ] Test cross-browser/dispositivo (Safari iOS incluso, è una gelateria locale → traffico mobile alto)
- [ ] Audit Lighthouse (performance, SEO, accessibilità) dopo l'inserimento delle foto reali
- [ ] Validazione dati strutturati con Google Rich Results Test
- [ ] Verifica badge aperto/chiuso con orari reali su più fusi orari del giorno (bordi 12:00/23:00/00:00)
- [ ] Cross-review finale: ognuno rilegge il lavoro dell'altro prima della PR verso `main`

## Fase 5 — Deploy e consegna

- [ ] Setup Google Business Profile (se incluso nel pacchetto venduto)
- [ ] Deploy di produzione su dominio definitivo
- [ ] Handoff al cliente: chi mantiene il sito nel tempo, come si aggiornano gusti/orari

## Cose da decidere come team (riportate da PROJECT.md, ancora aperte)

- Cosa include esattamente il pacchetto venduto (solo sito? + Google Business Profile? + manutenzione a pagamento?)
- Prezzo finale
- Se il progetto resta singolo o diventa un servizio ripetibile per altre attività locali
