# Další kroky (Plán pokračování)

Tento dokument obsahuje prioritizovaný seznam doporučených dalších kroků pro pokračování na projektu. Krokům se věnujte přesně podle prioritní osy.

## Nutné kroky (Priority 1)

**Napojení formulářů na backend**
- **Co se má udělat:** Formuláře na obou stránkách (`index.html` a `bazeny.html`) momentálně fungují jen jako "na oko" JS mockup. Je třeba nastavit jejich atributy `action` a `method` tak, aby směřovaly na funkční PHP skript nebo third-party službu (např. Formspree / Web3Forms) schopnou data reálně zachytit a odeslat na e-mail klienta.
- **Proč je to důležité:** Bez tohoto kroku nepřijde žádná poptávka, což je hlavní konverzní cíl celého webu.
- **Kde pracovat:** `index.html` (sekce `#kontakt-cta`), `bazeny.html` (sekce `#kontakt-cta`), případný nový soubor `process_form.php`.
- **Jak poznáme, že je hotovo:** Uživatel vyplní testovací údaje, klikne na odeslat a firmě dorazí e-mail s údaji a prioritami klienta. Děkovací zpráva se i tak zobrazí.

## Doporučené kroky (Priority 2)

**Vytvoření / Revize dalších podstránek**
- **Co se má udělat:** Zjistit, zdali uživatel chce samostatnou podstránku pro "Servis" nebo "Čistá voda" obdobně, jako jsme vytvořili komplexní stránku `bazeny.html`. 
- **Proč je to důležité:** Aktuálně "Servis" tvoří dynamický Tab na `index.html`, což je fajn pro přehlednost úvodu, ale pro SEO a detailní prezentaci je lepší mít samostatné podstránky (stejně jako u typů bazénů).
- **Kde pracovat:** Nové soubory (např. `servis.html`, `voda.html`). Vycházet z layoutu `bazeny.html`!
- **Jak poznáme, že je hotovo:** Odkazy z hlavičky `index.html` vedou plynule na obsahově bohaté a stylově sladěné podstránky.

**Optimalizace SEO a meta tagů**
- **Co se má udělat:** Přidat odpovídající `<meta description>`, Open Graph tagy pro Facebook/LinkedIn a správnou hiearchii H1-H3 nadpisů na všechny hotové soubory.
- **Proč je to důležité:** Web je vizuálně nádherný, ale musí být vyhledatelný.
- **Kde pracovat:** Blok `<head>` v `index.html` a `bazeny.html`.
- **Jak poznáme, že je hotovo:** Všechny HTML hlavičky obsahují klíčová slova a správné metatagy.

## Volitelné kroky (Priority 3)

**Přidání reálné interaktivní mapy do kontaktů**
- **Co se má udělat:** Do `cta-section` (nebo pod ni) implementovat iFrame Google Maps nebo mapy.cz s přesnou lokací firmy v Praze.
- **Proč je to důležité:** Působí to transparentněji a klient lépe pochopí geografický dosah služby.
- **Kde pracovat:** `index.html` a `bazeny.html`, těsně před patičkou.
- **Jak poznáme, že je hotovo:** Uživatel na mapě vidí adresu a může interagovat (zoom).
