# Prvky podléhající přísnému zákazu změn (DO NOT CHANGE)

Tento dokument obsahuje taxativní výčet funkcí, stylových prvků a logiky, která byla dříve explicitně schválena nebo odladěna a **NESMÍ BÝT MĚNĚNA** bez přímého a výslovného souhlasu uživatele.

## Vizuální a stylové preference (Zákazy a nařízení)
- **Glassmorphism (Karty):** Karty s třídou `.glass-card` si musí zachovat poloprůhlednost (`rgba`), `backdrop-filter: blur`, jemný border a lehký stín. Zákaz nahrazovat klasickým plochým šedým pozadím!
- **Zaoblení rohů a stíny:** Web nesmí mít hrany. Border radius (`var(--radius-lg)` apod.) je striktní požadavek klienta na celém webu. Taktéž tlačítka jsou pilulkovitá nebo plně zaoblená.
- **Plynulost sekcí:** Zákaz rovných barevných dělících čar mezi bloky obsahu. Přechody se řeší pomocí `.wave-divider` (SVG vlny) nebo prázdným prostorem.
- **Pozadí sekce "Jak vybrat správný typ bazénu":** Musí zůstat plně čistě bílé, žádné další podbarvení! Texty pod touto sekcí (upozornění před realizací) visí volně ve vzduchu, nedávají se do boxu.

## Názvy a formulace
- **UX Copywriting:** Všechna CTA tlačítka byla pracně přepsána na tzv. akční copywriting ("Nezávazně poptat vhodný typ bazénu", "Zobrazit jednotlivé typy", "Chci poradit s výběrem"). **Zákaz používat formulace: "Více informací", "Kontaktujte nás" nebo "Více info".**
- **Typy bazénů:** Na webu existují pouze Laminátové bazény, Bazény z těžké fólie a Mozaikové bazény. "Bazény se slanou vodou" byly jako typ zrušeny a odstraněny (jsou vnímány jen jako technologie úpravy vody, nikoliv stavební typ).

## Komponenty a logika
- **Formulář s vlnami:** Blok formuláře na obou stránkách využívá vlnový přechod z horní bílé do tmavě modré barvy a spodní modrou vlnu přelévající se do patičky. Zákaz ničit SVG křivky nebo měnit barvu této sekce.
- **Odrážkové seznamy u výhod:** Vždy používají na míru stylovanou odrážku skrze ikonku `<i class="ph-fill ph-check-circle"></i>` z knihovny Phosphor. Tuto logiku nenahrazovat standardními HTML odrážkami s puntíky.
- **Číslování sekcí:** V krocích procesu a službách je schválen vizuální formát textu s nulou a lomítkem. Příklad: `01 / První krok`, nikoliv `1. První krok`. (Zastoupeno většinou třídou `.card-number-heading`).

## Vyžaduje potvrzení před změnou
- **Dynamické bubliny na pozadí:** `.static-bubble`. Pokud budete přidávat rozsáhlé nové divy s obsahem a stránka se protáhne, bubliny možná nebudou zasahovat dostatečně dolů. Přidání nebo změna pozice bublin vyžaduje opatrnost a následné schválení.
- **Typografie:** Základní rodiny fontů (`Fraunces` pro nadpisy, `Manrope` pro texty). Neměnit a nepoužívat jiné rodiny.
