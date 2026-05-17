# Aktuální stav projektu

## Co aktuálně funguje a je hotové
- **Domovská stránka (`index.html`):** Plynulá, moderní, využívá AOS animace. Sekce služeb a tabbed navigace fungují perfektně. Tlačítka jsou aktualizovaná s promyšleným mikrocopy. Obsahuje funkční (vizuálně) poptávkový formulář na konci stránky.
- **Podstránka Bazény (`bazeny.html`):** Kompletně modernizovaná. Představuje 3 hlavní typy bazénů prostřednictvím skleněných karet (glassmorphism), srovnávací a průvodní sekcí výběrem a rovněž s ukotveným formulářem v patě stránky.
- **Design Systém (`style.css`):** Definované CSS proměnné pro barvy, rohy a stíny podle vizuálního manuálu a dohod. Globální i komponentové stylování je funkční napříč podstránkami.
- **Responzivita:** Layouts jsou plně responzivní (Grid-2 a Grid-3 se skládají do jednoho sloupce na menších zařízeních, definováno ve `style.css`).

## Co je rozpracované nebo simulované (Očekává se vývoj)
- **Odesílání formulářů:** V `index.html` i `bazeny.html` probíhá po kliknutí na "Odeslat" pouze schování polí a zobrazení hlášky "Děkujeme" (pomocí atributu `onsubmit`). Backend schází.
- **Slider před a po (v `index.html`):** Vizuálně funkční, reálná manipulace pomocí posuvníku funguje přes `script.js`.
- **Galerie (Ukázky realizací):** V `index.html` existuje sekce, která naznačuje obrázky (`images/tech-01.jpeg`), ale mohla by teoreticky vyžadovat vlastní podstránku, pokud bude realizací více.

## Co je potřeba zkontrolovat
- Zda se správně renderují Phosphor Ikony (občas vyžadují síťové připojení k CDN, které je definováno v hlavičce).
- Chování dynamických "bublin" (`.static-bubble`) na extrémně velkých nebo extrémně malých monitorech, jelikož jsou pozicovány absolutně v procentech.

## Pravidla: Co nesmí být změněno bez výslovného souhlasu uživatele
- Zaoblení rohů (`border-radius: var(--radius-lg)` atd.).
- Paleta barev specifikovaná ve `style.css` v selektoru `:root`.
- Použití bílých fajfek `<i class="ph-fill ph-check-circle"></i>` v blocích výhod.
- Layout podstránky s bazény, specificky sekce "Jak vybrat správný typ bazénu" (má čistě bílé pozadí bez karet).
- Ostré předěly v obsahu. Vše musí probíhat plynule (waves, whitespace).

## Technická struktura složek a důležité soubory
- `index.html` - Hlavní prezenční a navigační rozcestník s dynamickými taby (Bazény, Servis).
- `bazeny.html` - Nová, komplexní podstránka specializovaná na prodej/vysvětlení 3 hlavních stavebních technologií bazénů.
- `style.css` - Centrální definice vzhledu a design tokenů (barvy, stíny). Obsahuje i nově vytříděné styly pro formuláře (`.form-control`) a pro speciální boxy.
- `script.js` - Zajišťuje funkčnost tab-navigace (mezi Bazény a Servisem) a obsluhu "Před a Po" obrázkových porovnání.
- `images/` - Složka obsahující všechny vizuální assety. (Poznámka: Ikony jsou tahány z CDN, obrázky lokálně).
- `visual/` - Původní brand manuál a zdrojové materiály pro design (slouží primárně jako reference pro tón a paletu).
