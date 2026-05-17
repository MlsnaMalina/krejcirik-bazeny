# Projektový kontext: Krejčiřík Bazény

## Název projektu
Krejčiřík Bazény – Moderní prezentační web a poptávkový systém

## Stručný popis projektu
Tvorba prémiové, plynulé a vizuálně moderní webové prezentace pro firmu zajišťující výstavbu a servis bazénů v ČR. Cílem je poskytnout zákazníkům hladký průchod nabídkou (tzv. "flow") a jednoduchou cestu k odeslání nezávazné poptávky.

## Cíl projektu
Přeměnit statickou a těžkopádnou prezentaci na dynamický zážitek, který reprezentuje kvalitu a prémiovost dodávaných bazénů (laminátové, těžká fólie, mozaikové). Vylepšit UX, odstranit generické texty ("Více info") a zvýšit konverze přes promyšlený poptávkový formulář.

## Cílová skupina / uživatelé
Majitelé rodinných domů a komerčních nemovitostí, kteří hledají bezstarostnou realizaci nového bazénu, případně odborný servis stávajících technologií. Očekávají profesionalitu, spolehlivost a prémiový přístup.

## Celkový směr a záměr
Web staví na estetice **"Glassmorphism"** a **"Vibe coding"**. Design nesmí působit jako strohý dokument, ale jako plynoucí voda – bloky textů a služeb "plavou" nad jemnými, pohybujícími se nebo statickými bublinami. Rozhraní využívá měkké stíny, zaoblené rohy a rozostřené poloprůhledné karty. Žádné ostré přechody (předěly tvoří SVG vlny).

## Důležité preference uživatele
- **Tlačítka a mikrocopy:** Vždy přesně říkají, co se stane (např. "Nezávazně probrat vhodný typ bazénu" namísto "Kontakt").
- **Konzistence:** Jakýkoli nový vizuální prvek (formulář, tlačítko, odrážka) musí bezpodmínečně respektovat designový jazyk hlavní stránky.
- **Plynulost:** Absolutní zákaz rovných, tvrdých dělících čar mezi sekcemi. Oddělení se řeší buď vlnami, bílým/prostorovým prostorem (whitespace), nebo plovoucími kartami (`.glass-card`).

## Styl, tón, vizuální a technické požadavky
- **Technologie:** Čisté HTML, CSS (bez Tailwindu, využívá vlastní systém CSS proměnných v `style.css`), čistý JavaScript. Animace zajišťuje knihovna AOS (`fade-up`).
- **Barvy:** 
  - `--color-deep-water` (Tmavá modř) pro nadpisy a dominantní prvky.
  - `--color-pool` (Světlejší modrá) pro ikony a akcenty.
  - `--color-fog` (Světlá mlha) pro jemná podbarvení.
  - Pozadí je dominantně čistě bílé, hloubku tvoří bubliny.
- **Typografie:** Fraunces (nadpisy), Manrope (běžný text), IBM Plex Mono (technické detaily/štítky).
- **Ikony:** Výhradně Phosphor Icons (např. `<i class="ph ph-check-circle"></i>`).

## Co je pro projekt zásadní zachovat
- Systém `.glass-card` (včetně `backdrop-filter` a jemných borderů).
- Efekt prolínajících se vln u `cta-section`.
- Interaktivní hover efekty (karty se při najetí lehce vznesou a získají glow efekt).
- Plovoucí bubliny v pozadí (třída `.static-bubble`).

## Co už bylo výslovně odmítnuto / zakázáno
- Nudné, šedé "dokumentové" bloky narvané na sobě bez odsazení.
- Obyčejné odrážkové seznamy (vždy používáme ikony, např. bílou fajfku).
- Slaná voda jako "Typ bazénu" (je vnímána jako technologie, proto byla z typů bazénů na podstránce i v menu odstraněna).
- Tlačítka typu: "Více info", "Kontaktovat", "Mám zájem".

## Případné limity, omezení a rizika
- Absolutní pozicování `.static-bubble` bublin může při přidání nového obsahu způsobit, že bubliny "skončí" příliš brzy nebo se překrývají s textem nesprávně. Při přidávání sekcí je nutné distribuci bublin zkontrolovat.
- Formuláře momentálně fungují pouze na straně frontendu (JavaScriptový mock potvrzení). Je nutné je napojit na reálný backend (PHP, Formspree apod.).
