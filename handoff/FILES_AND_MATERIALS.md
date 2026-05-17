# Soubory a materiály

Tento dokument vysvětluje logickou strukturu projektu a popisuje, k čemu slouží jednotlivé existující soubory.

## Seznam složek a jejich obsah
- **Kořenová složka (`/`)**
  - Obsahuje hlavní stránky a základní logiku webu.
- **`/images/`**
  - Obsahuje vizuální materiály potřebné pro web. Nachází se zde loga, hero obrázky, ukázky bazénů (`bazen-01-pred.jpeg`, `bazen-01-po.jpeg`), a různé ilustrační prvky. Zde je nutné zachovat strukturu.
- **`/visual/`** (příp. v pomocném disku)
  - Složka s původním dodaným "brand manuálem" (obvykle 5 dokumentů pdf nebo png). Obsahuje definice správných barev a vizuální logiky klienta. *Tuto složku není nutné modifikovat, slouží jen jako reference.*
- **`/handoff/`**
  - Složka s předávací a metodickou dokumentací pro vývoj (včetně tohoto souboru).

## Hlavní produkční soubory
Tyto soubory definují vzhled a funkčnost webu. Při jakékoliv práci zasahujte právě do nich:

- **`index.html`**
  - Hlavní soubor celého projektu (úvodní domovská stránka). Obsahuje úvod (Hero sekci), navigaci služeb (Taby Bazény a Servis a Péče), výpis prémiových karet (Slaná voda, Zastřešení) a kontaktní sekci dole. Zasahujte s opatrností, dodržujte rozvržení `glass-card`.
- **`bazeny.html`**
  - Rozšiřující podstránka k typům bazénů. Detailně rozepisuje laminátové, mozaikové a bazény z fólie. Obsahuje vlastní unikátní sekci srovnání "Jak vybrat" a procesní sekci "Jak bude výběr probíhat".
- **`style.css`**
  - Mozek designu. Na začátku najdete `:root` proměnné (barevná paleta `--color-deep-water`, stíny `--shadow-glow`, rohy `--radius-lg`). Ostatní kód je seskupen do logických bloků (Navigace, Skleněné karty, Typografie). *Doporučení:* Nevytvářejte nové ad-hoc CSS třídy tam, kde to není nutné. Využívejte primárně již existující třídy (`.glass-card`, `.grid-2`, `.grid-3`, `.btn-primary`).
- **`script.js`**
  - Pomocný soubor obsluhující interaktivní prvky jako je proklikávání záložek na hlavní stránce nebo slider posuvníky u sekce "Před a Po". Pokud budete přidávat nové javascriptové funkce, vložte je sem.

## Pomocné a externí zdroje (Důležité)
- **Google Fonts:** Jsou nasazovány přímo do `<head>` z externího zdroje (Fonty Fraunces, IBM Plex Mono, Manrope).
- **AOS (Animate on Scroll):** Animace najíždění zespodu jsou řešeny externí knihovnou AOS z CDN, její inicializace je na dně každého HTML souboru. Pro animaci jakéhokoli elementu stačí přidat atribut `data-aos="fade-up"`.
- **Phosphor Icons:** Vektory ikon pochází z Phosphor ikonek via script tag v `<head>`. (Příklad použití: `<i class="ph-fill ph-check-circle"></i>`).

## Chybějící informace a neznámé materiály
Zatím chybí reálné fotografie konkrétních realizací klienta v dostatečném rozlišení, pokud by se měla tvořit rozsáhlá sekce Fotogalerie. Web zatím využívá primárně ilustrační a zástupné snímky z předchozích kroků. Rovněž neznáme konkrétní platformu, kde bude web hostován (PHP podpora?).
