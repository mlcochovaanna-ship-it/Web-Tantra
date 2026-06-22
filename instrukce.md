Text pro soubor instrukce.md
(zadání pro AI agenta k tvorbě webu)


**Situace**
Jsi zkušený webový vývojář a designér s expertízou v tvorbě moderních, responzivních, vícestránkových webových stránek. Tvým úkolem je vytvořit kompletní web pro projekt **Mysterijní škola ženství** podle specifikací níže.

Jde o web pro luxusní tantrickou školu pro ženy. Škola probíhá offline ve 4 modulech během 2 let. Každý modul je živá několikadenní akce. Každý rok probíhají 2 moduly. Cena celé školy je cca 40.000 Kč, proto musí web působit hodnotně, prémiově a důvěryhodně.

Doména webu je:
https://zenskamystika.cz/

**Cíl**
Dodej uživateli kompletní, profesionální mobile-first vícestránkový web, který je vizuálně atraktivní, funkční na všech zařízeních a připravený k okamžitému použití.

Cílem webu je získat zájem žen o Mysterijní školu ženství, srozumitelně předat základní informace o škole a zároveň vystihnout její atmosféru: luxusní, ženskou, jemnou, duchovní, prémiovou, vznešenou a spirituální.

Hlavní konverzí webu je vyplnění dotazníku zájmu. CTA tlačítka na webu mají návštěvnici vést k dotazníku, kde projeví zájem o školu. Další informace a podklady k platbě jí poté přijdou e-mailem.

**Úkol**
Vytvoř funkční vícestránkový web, který bude obsahovat:
- Strukturovaný komentovaný HTML5 kód s validní sémantikou
- Responzivní design (mobile-first přístup)
- CSS styly pro přizpůsobení všem obrazovkám (4K monitory, desktop, tablet, mobil)
- Moderní CSS vlastnosti (CSS variables, transitions, jemné animations)
- CSS jednotky velikosti: pro běžný text použij rem, pro nadpisy použij clamp
- Základní JavaScript pro interaktivitu a jemné oživení stránek
- Bezpečnostní prvky webu, včetně honeypot ochrany u formuláře

**Znalosti**
- Zajisti rychlé načítání a optimalizovaný výkon.
- Dodržuj best practices pro přístupnost (barevný kontrast, velikost písma, ARIA).
- Vlož favicon ve formátu SVG. Pokud nebude favicon dodaná, vytvoř jednoduchou elegantní SVG favicon ladící se značkou Mysterijní škola ženství.
- Vytvoř cookie lištu v barvách webu. Cookie lišta musí být vizuálně jemná, elegantní, responzivní a nesmí rušit prémiový dojem webu.
- Web vytvoř jako čisté HTML/CSS/JS bez frameworků a bez build nástrojů.
- Kód má být vhodný pro práci ve vibe coding workflow pomocí Google Antigravity a agenta Claude Code nebo OpenAI Codex.
- Všechny interní odkazy piš bez přípony .html, např. /moduly a ne /moduly.html.
- Do .htaccess přidej mod_rewrite pravidla: přesměrování *.html → * (301) a interní obsluhu čistých URL na příslušný .html soubor.
- Jiné pokyny k přesměrování do souboru .htaccess nedávej, to se řeší na úrovni hostingu.

**Základní SEO**
- Strukturuj nadpisy H1-H6 logicky a sémanticky.
- Každá stránka musí mít právě jeden hlavní nadpis H1.
- Přidej unikátní meta title a meta description na každé stránce.
- Vytvoř strukturovaná data podle reálného obsahu webu, zejména tam, kde jsou relevantní. Použij například LocalBusiness, FAQ nebo jiný vhodný typ podle finální struktury a obsahu webu.
- Blog na webu nebude, proto nevytvářej blogovou sekci ani Article strukturovaná data, pokud k tomu nebude dodán konkrétní článkový obsah.
- Přidej do adresáře soubory sitemap.xml, robots.txt a llms.txt.
- Kanonická doména webu je https://zenskamystika.cz/.
- Web cílí primárně na Českou republiku, sekundárně může oslovovat také ženy ze Slovenska.
- Obrázkům dej smysluplné alt popisky v češtině.
- Propoj stránky vnitřními odkazy.
- Vytvoř Open Graph meta tagy pro každou stránku.

**Vizuální styl, typografie a barvy**
Web má působit luxusně, žensky, spirituálně, jemně, vznešeně a prémiově. Dej si záležet na atmosféře, práci s fotografiemi, světlem, prostorem a jemnými detaily.
Nedělej web jako sérii těžkých barevných bloků. Používej hodně vzduchu, světlé a dobře čitelné sekce, a tmavé barvy používej hlavně jako atmosférické akcenty, hero sekce, modulové úvody, citace, CTA bloky nebo patičku.

**Fonty**
- Pro psací akcentový font použij Corinthia.
- Pro elegantní patkové nadpisy použij Playfair Display.
- Pro běžný text, navigaci, tlačítka a formuláře použij Montserrat.
- Fonty načítej lokálně ze složky /Fonty pomocí @font-face.
- Nepoužívej Google Fonts ani jiné externí načítání fontů ve finálním webu.
- Všechny použité fonty musí podporovat českou diakritiku.
- Běžný text musí mít minimální velikost 16px.

**Hlavní tmavé ladění webu**
- Hlavní tmavé ladění webu je tmavá teal / hluboká zelenomodrá - #1A2C2E.
- Používej ji pro globální tmavé sekce, patičku, overlaye fotografií a sjednocující tmavé prvky.

**Zlaté přechody**
Zlatá má působit jako tlumené antické / champagne zlato. Nepoužívej ostrou žlutou ani laciný metalický efekt.

Bohatý zlatý přechod pro tmavé pozadí, H1, hero a výrazné akcenty:
--gold-main: linear-gradient(
  90deg,
  #8A652A 0%,
  #B88A3A 24%,
  #F5E7B2 48%,
  #E7CD80 62%,
  #C69B45 78%,
  #8A652A 100%
);

Jemný zlatý přechod pro sekundární tlačítka, H2 na světlém pozadí a decentní akcenty:
--gold-outline: linear-gradient(
  90deg,
  #9A6D2B 0%,
  #D7B85F 52%,
  #9A6D2B 100%
);

Světlý zlatý přechod pro text na tmavém tlačítku:
--gold-text-light: linear-gradient(
  90deg,
  #D7B85F 0%,
  #F5E7B2 52%,
  #E2C46F 100%
);

Zlatý přechod pro primární CTA na tmavém pozadí:
--gold-cta: linear-gradient(
  90deg,
  #B88A3A 0%,
  #E7CD80 42%,
  #F5E7B2 55%,
  #C69B45 100%
);

**Modulová tmavá pozadí**
Pro tmavé sekce jednotlivých modulů můžeš používat jemná gradientní pozadí. Každý modul má vlastní barvu, ale zlaté akcenty, typografie, tlačítka a celkový vizuální systém zůstávají jednotné.

1. modul - Odhalení bohyně / tmavá teal:
--module-1-bg: linear-gradient(
  135deg,
  #081514 0%,
  #132826 54%,
  #1B3A36 100%
);

2. modul - Posvátná sexualita / tmavá bordó:
--module-2-bg: linear-gradient(
  135deg,
  #17090B 0%,
  #2B1116 54%,
  #481B24 100%
);

3. modul - Žena jako léčitelka / tmavá fialová:
--module-3-bg: linear-gradient(
  135deg,
  #120D17 0%,
  #22172B 54%,
  #34213C 100%
);

4. modul - Kosmické vědomí ženy / tmavě modrá:
--module-4-bg: linear-gradient(
  135deg,
  #080E16 0%,
  #10151D 54%,
  #172538 100%
);

**Designové mantinely**
- Nepoužívej zaoblené rohy.
- Nepoužívej ostrou žlutou.
- Nepoužívej příliš mnoho zlatých prvků najednou.
- Zlato má být akcent, ne základní barva všeho.
- Modulové barvy nepoužívej nahodile. Používej je hlavně v hero sekcích modulů, atmosférických blocích, overlayích fotografií, CTA blocích nebo jemných dekorativních plochách.
- Světlé sekce používej pro delší texty, praktické informace a přehlednost.
- Výsledný web musí působit vzdušně, prémiově a jemně, ne těžce nebo přeplácaně.

**Layout**
- Použij responzivní container, např. width: min(85%, 1200px); margin: 0 auto;, aby web působil dobře na mobilu, desktopu i velkých 4K obrazovkách.
- Layout má být vzdušný, elegantní a prémiový, ale stále přiměřený. Nepřeháněj velikost mezer ani výšku sekcí na úkor použitelnosti.
- Jasně odděl jednotlivé sekce a obsahové celky.
- Pokud jsou v sekci 4 karty/boxy, dej je na desktopu po dvou na řádek (ne 3+1).
- Pracuj s vyváženým použitím bílého prostoru (white space).
- Navigace má být intuitivní: logo vlevo, menu vpravo, na mobilu hamburger menu vpravo.
- Dej si záležet na patičce webu. Patička má působit plnohodnotně, elegantně a má obsahovat důležité odkazy, kontaktní údaje a další relevantní informace.
- U prvku accordion dávej ikonu klasické šipky dolů a nahoru. Pokud jsou více než 3 položky, rozděl je na desktopu do dvou sloupců.
- Bento grid, glass efekt, jemné gradienty a podobné moderní prvky používej pouze tam, kde přirozeně podporují obsah a prémiový dojem webu. Nepoužívej je samoúčelně.
- Jednopísmenné znaky (spojky, předložky) ošetři tak, aby nezůstávaly samostatně na konci řádku.
- Jednotky (Kč, m, kg, EUR atd.) spoj s číslem nedělitelnou mezerou.
- Datum piš ve formátu 1. 1. 2026 a mezery v datu ošetři jako nedělitelné.

**Obsah**
- Používej stručné, srozumitelné a dobře členěné texty.
- Texty pro jednotlivé stránky a sekce najdeš níže v textu. Drž se jejich významu, atmosféry a podstaty. Povoleny jsou jen jemné úpravy pro srozumitelnost, čitelnost a vhodné členění na webu.
- Výrazně pracuj s nadpisy, klíčovými informacemi a CTA tlačítky.
- Texty vhodně rozčleň do sekcí, odstavců, karet, zvýrazněných bloků, citací, FAQ nebo jiných komponent podle obsahu.
- Vizuální prvky, ikony, fotografie a grafika mají podporovat obsah a atmosféru webu, ne ho přehlušit.
- Informace uspořádej logicky: nejdůležitější informace a hlavní CTA umísti vysoko na stránce.
- Vytvoř elegantní chybovou stránku 404.html. Její vizuální styl odvoď od finálně odladěné hero sekce homepage, aby 404 stránka působila jako přirozená součást webu. Nepoužívej obyčejný technický vzhled ani náhodné emotikony.
- Do souboru .htaccess přidej pravidlo: ErrorDocument 404 /404.html.
- Povinné údaje na webu najdeš níže v textu. Připrav pro ně vhodné místo, například v patičce nebo na kontaktní stránce.

**Struktura**
Web bude vícestránkový.

Hlavní stránky webu:

* Úvod (/)
* O škole (/o-skole)
- Moduly (/moduly)
- O mně (/o-mne)
- Galerie (/galerie)
- Reference (/reference)
- Vstup do školy (/vstup)

Stránka Moduly bude obsahovat přehled všech 4 modulů školy a bude odkazovat na samostatné podstránky jednotlivých modulů:
- 1. modul: Odhalení bohyně (/moduly/odhaleni-bohyne)
- 2. modul: Posvátná sexualita (/moduly/posvatna-sexualita)
- 3. modul: Žena jako léčitelka (/moduly/zena-jako-lecitelka)
- 4. modul: Kosmické vědomí ženy (/moduly/kosmicke-vedomi-zeny)

V hlavní navigaci zobraz položky:

* Úvod
* O škole
- Moduly
- O mně
- Galerie
- Reference
- Vstup do školy - do navigace přidej výrazné CTA tlačítko Vstup do školy. Toto tlačítko povede na samostatnou stránku /vstup.

Stránka Vstup do školy bude obsahovat formulář pro ženy, které chtějí projevit zájem o Mysterijní školu ženství. Formulář má působit bezpečně, citlivě, elegantně a důvěryhodně. Nemá vyvolávat dojem běžné objednávky z e-shopu, ale vědomého prvního kroku ke škole. Musí obsahovat souhlas se zpracováním osobních údajů.

Finální obsah formuláře najdeš níže v textu. Pokud některý technický údaj chybí, například Formspree endpoint, jasně označ místo, kde ho má uživatel doplnit.

Všechny interní odkazy piš bez přípony .html, například /moduly a ne /moduly.html.

**Další prvky na webu**
- Na webu nebudou Google recenze.
- Na webu nebudou odkazy na sociální sítě ani vložený Instagram feed, pokud nebude níže v textu určeno jinak.
- Reference vytvoř ručně z dodaných textů od účastnic. Zobraz je elegantně, důvěryhodně a citlivě, bez přehnaných efektů.
- Google mapu vlož na stránku Organizace, kde bude uvedeno místo konání jednotlivých modulů.
- Informace k místu konání a případný embed mapy najdeš níže v textu.
- Vytvoř stránku Vstup do školy s formulářem.
- Formulář řeš přes službu Formspree: https://formspree.io/
- Pokud nebude dodán Formspree endpoint, jasně označ místo, kde ho má uživatel doplnit.
- Formulář musí obsahovat ochranu proti spamu pomocí honeypot pole.
- Formulář má mít citlivý, důvěryhodný a prémiový tón. Nemá působit jako obyčejná objednávka, ale jako vědomé projevení zájmu o školu.
- Před implementací finálního formuláře zkontroluj, že máš přesné znění polí, povinná pole, text souhlasu se zpracováním osobních údajů a Formspree endpoint.

**Design**
- Design hero sekce vytvoř podle vzoru, který bude dodán před začátkem tvorby ve formátu JPG.
- Pro hero sekci použij dodanou reálnou fotografii.
- Celkový design webu má působit spirituálně-luxusně, žensky, jemně, vznešeně, duchovně a prémiově.
- Web má kombinovat tmavší mystické sekce i světlejší jemné sekce podle obsahu, fotografií a celkové vizuální harmonie.
- Používej zlatý přechod jako prémiový akcent, zejména u vybraných detailů, tlačítek, linek, zvýraznění nebo dekorativních prvků.
- Fotografie na pozadí můžeš používat s jemným parallax efektem, pokud to podpoří atmosféru webu a nebude to rušit čitelnost ani výkon.
- Na webu použij dodané grafické ozdoby a dekorativní prvky. Zapracuj je citlivě, aby web působil propracovaně, ale ne přeplácaně.
- Výchozí vizuální směr je bez zaoblených rohů. Nepoužívej border-radius u karet, tlačítek, obrázků, formulářů ani dalších hlavních UI prvků, pokud nebude výslovně uvedeno jinak.
- Moderní efekty používej střídmě a elegantně. Prioritou je prémiový dojem, čitelnost, přehlednost a silná atmosféra.
- Nepoužívej náhodné stock prvky, emotikony ani generické ezoterické symboly, pokud nebudou výslovně dodané nebo schválené.

**Moderní design**
- Layout může využívat souměrný Bento grid tam, kde se hodí pro přehledné zobrazení obsahu, například u modulů, praktických informací nebo benefitů.
- Používej jemné gradienty a plynulé přechody, zejména v kombinaci se zlatým akcentem.
- Prvky navrhuj primárně bez zaoblených rohů. Výchozí hodnota border-radius je 0.
- Stíny používej velmi jemné a prémiové, bez tvrdých nebo levně působících efektů.
- Glass efekt můžeš použít u vybraných karet nebo panelů, zejména na tmavších nebo fotografických pozadích. Používej ho střídmě a bez zaoblených rohů.
- Přidej jemné mikrointerakce na hover, plynulé přechody a citlivé scroll animace.
- Animace musí být decentní, pomalé a elegantní. Nesmí působit rušivě ani odvádět pozornost od obsahu.
- Parallax efekt používej pouze u vybraných fotografií na pozadí a vždy s ohledem na výkon, responzivitu a přístupnost.
- U mobilních zařízení efekty zjednoduš nebo vypni, pokud by zhoršovaly výkon nebo použitelnost.

**Konzistence**
- Dodrž jednotný styl tlačítek, karet, odkazů, formulářů a dalších komponent napříč celým webem.
- Používej stejný padding/margin napříč podobnými elementy.
- Web navrhuj primárně bez zaoblených rohů. Border-radius nepoužívej u hlavních UI prvků, pokud nebude výslovně uvedeno jinak.
- Ikonografie musí být konzistentní. Používej Font Awesome nebo dodané vlastní ikony, nepoužívej emotikony.
- Stíny karet používej pouze velmi jemné. Web má působit luxusně a lehce, ne těžce ani přeplácaně.
- Dodrž jednotný projev značky (brand voice): ženský, jemný, vznešený, duchovní, spirituální, prémiový a důvěryhodný.
- Používej barvy konzistentně napříč celým webem.
- Dodrž jednotný spacing a odsazení, ideálně podle 8px grid systému.
- Interaktivní prvky, hover efekty a animace mají být jemné, plynulé a nerušivé.

**Práce s dodanými fotografiemi**

**Technický postup zpracování fotografií (proveď na začátku projektu)**

Před začátkem kódování webu si fotografie technicky zpracuj a roztřiď. Postupuj v tomto pořadí:

1. **Projdi rekurzivně složku `Obrazky/`** a vypiš všechny obrazové soubory (`.jpg`, `.jpeg`, `.png`, `.webp`, `.avif`). U každého si zaznamenej úplnou cestu.

2. **Zjisti u každého obrázku rozměry** (šířka × výška v px) a urči orientaci:
   - šířka (landscape) – pokud `w > h × 1.2`
   - výška (portrait) – pokud `h > w × 1.2`
   - čtverec – pokud je poměr mezi tím
   Použij k tomu Python s knihovnou Pillow, ImageMagick `identify`, nebo `ffprobe`. Nevynechej žádný soubor.

3. **Vizuálně zhodnoť obsah každé fotky** – otevři si ji a popiš si v rychlé poznámce, co je na ní (např. „portrét Anjali u oltáře", „ženy v kruhu se svíčkami", „detail rituálu", „venkovní pohled na centrum"). Pokud máš k dispozici nástroj pro čtení obrazu, použij ho. Pokud ne, vyžádej si od uživatele potvrzení.

4. **Vytvoř si interní katalog fotografií** ve formě markdown tabulky nebo JSON souboru s těmito poli:
   - `cesta` – relativní cesta od kořene webu (např. `/Obrazky/anjali/anjali-2.jpg`)
   - `rozměry` – `WxH`
   - `orientace` – šířka / výška / čtverec
   - `popis` – stručný popis obsahu (1 věta)
   - `atmosféra` – např. „kontemplativní", „rituální", „intimní", „mystické", „venkovní"
   - `vhodné pro` – seznam sekcí/typů použití (hero, modul-1 karta, O mně portrét, atmosférické pozadí, galerie, …)
   - `vhodné na pozadí celé sekce` – ano / ne (jen u fotek na šířku s dostatečným prostorem pro text a vhodným kontrastem)
   - `poznámka k optimalizaci` – pokud je fotka výrazně větší než potřeba (> 2500 px na delší straně) nebo nevhodně komprimovaná, označ k převodu do WebP/AVIF
   - `přejmenovat` – pokud má soubor velkou koncovku (`.JPG`) nebo mezery v názvu, navrhni přejmenování

5. **Roztřiď fotky do pracovních kategorií** podle nejlepšího využití:
   - hero fotografie (silné, široké, atmosférické)
   - O škole (autentické momenty ze setkání)
   - portréty Anjali (pro stránku O mně, About sekce)
   - místo konání (Centrum Buchov)
   - 1. modul / 2. modul / 3. modul / 4. modul (rozdělené podle modulových složek)
   - galerie (kurátorovaný mix)
   - atmosférické detaily a dekorativní vizuály (svíčky, oltáře, grafické prvky)
   - rituální obrazy / malby

6. **Přiřaď konkrétní fotky k jednotlivým sekcím webu** podle struktury z textové části zadání. U každé sekce musíš mít:
   - hlavní doporučení (1 fotka)
   - alternativu (1 fotka pro případ, že hlavní nepasuje k finálnímu layoutu)
   - zdůvodnění (1 věta proč)

7. **U fotek určených jako pozadí celé sekce** ověř kontrast s textem. Pokud je fotka místy příliš světlá nebo členitá, navrhni overlay (např. `--module-X-bg` gradient s opacity 0.6–0.8) tak, aby text zůstal dobře čitelný.

8. **Před zápisem do HTML** zkontroluj, že:
   - každá fotka má smysluplný `alt` v češtině podle skutečného obsahu
   - každá fotka kromě hero má `loading="lazy"`
   - velké fotografie jsou nabídnuté k převodu do WebP/AVIF s responzivními variantami (`srcset` pro 800w / 1200w / 2000w)
   - žádná fotka není použitá dvakrát na stejné stránce (kromě záměrných opakování)

9. **Pokud u některé sekce nemáš jistotu**, kterou fotku vybrat, **zeptej se uživatele**. Nepoužívej náhodný výběr a každé umístění zdůvodni.

Výstupem této fáze je interní katalog fotek + návrh přiřazení k sekcím, který si ponecháš pro celou dobu tvorby webu a aktualizuješ ho, pokud uživatel některý výběr změní.

**Obecná pravidla pro práci s fotografiemi**

- Všechny fotografie a grafické prvky používej výhradně ze složky `Obrazky/` a jejích podsložek. Nepoužívej externí stock fotografie, náhodné ilustrační obrázky ani obrázky z internetu, pokud k tomu nedostaneš výslovné svolení.
- Fotografie jsou rozdělené do podsložek podle témat, stránek, sekcí nebo typu obsahu. Před návrhem webu si projdi dostupnou strukturu složky `Obrazky/`, zmapuj si dostupné fotografie a zohledni jejich formát, atmosféru, světlo, kompozici i technickou kvalitu.
- Pro první návrh webu nejsou fotografie pevně přiřazené ke konkrétním sekcím. Fotografie vybírej samostatně podle toho, kam se nejlépe hodí:
  - fotografie na šířku používej zejména pro hero sekce, atmosférická pozadí, široké vizuální sekce a přechodové bloky,
  - fotografie na výšku používej zejména pro portréty, detailní obsahové sekce, medailonky, galerii a kompozice s textem vedle fotografie,
  - detailní, jemné nebo rituální fotografie používej jako atmosférické akcenty tam, kde podporují spirituálně-luxusní dojem webu.
- Před použitím každé fotografie ji vizuálně zhodnoť. Posuď, zda se hodí k dané stránce nebo sekci, zda nepůsobí rušivě, příliš tmavě, technicky slabě, nevhodně oříznutě nebo obsahově mimo kontext.
- Fotografie vybírej tak, aby podporovaly atmosféru webu: luxusní, ženskou, jemnou, spirituální, vznešenou, důvěryhodnou a prémiovou. Fotografie nemají obsah přehlušit, ale nést náladu, světlo a hloubku značky.
- Některé fotografie na šířku můžeš použít jako pozadí vybraných sekcí. V takovém případě vždy zajisti dobrou čitelnost textu pomocí jemného tmavého overlaye, gradientu nebo vhodného rozvržení. Nepoužívej fotografii na pozadí, pokud by text ztratil kontrast nebo působil neklidně.
- Pokud konkrétní fotografie není vhodná pro zamýšlené místo, vyber jinou. Neumisťuj fotografii jen proto, že je dostupná. Každý obrazový prvek musí mít jasnou funkci: atmosféra, důvěra, kontext místa, portrét, prožitek, detail nebo vizuální rytmus stránky.
- Fotografie citlivě roztřiď podle jejich nejlepšího využití na webu. Vytvoř si pracovní logiku, například:
  - hero fotografie,
  - fotografie pro stránku O škole,
  - fotografie pro moduly,
  - portrétní fotografie pro stránku O mně,
  - fotografie místa konání,
  - fotografie pro galerii,
  - atmosférické detaily a dekorativní vizuály.

- Pokud existuje více vhodných fotografií pro jednu sekci, vyber tu, která nejlépe podporuje obsah, kompozici a prémiový dojem. Ostatní můžeš použít v galerii nebo jako sekundární obrazový materiál.
- V galerii fotografie uspořádej esteticky a přehledně. Kombinuj horizontální, vertikální i detailní snímky tak, aby galerie působila jako citlivě kurátorovaný náhled do atmosféry školy, ne jako náhodný výpis souborů.
- Pokud se u některých fotografií bude zdát, že jsou příliš velké nebo nevhodně optimalizované, upozorni na to a doporuč převod do formátu WebP nebo AVIF. Zároveň zachovej původní fotografie jako zdrojové soubory.
- Všem použitým fotografiím dej smysluplné české `alt` popisky podle skutečného obsahu fotografie a její funkce na stránce.
- U všech fotografií mimo úvodní hero sekci použij `loading="lazy"`. U hero fotografie lazy loading nepoužívej, aby se úvodní obraz načetl co nejrychleji.
- Fotografie vkládej responzivně tak, aby dobře fungovaly na mobilu, tabletu, desktopu i velkých 4K obrazovkách. Dbej na správné ořezy, poměr stran, velikosti a čitelnost navazujícího textu.
- Pokud najdeš stejnou fotku ve více formátech (např. `.avif` i `.jpeg` se stejným základem názvu), zeptej se uživatele, který formát ponechat. Nepoužívej oba současně, aby se předešlo duplicitám.
- Pokud má soubor velkou koncovku (`.JPG`, `.JPEG`, `.PNG`) nebo mezery v názvu, navrhni přejmenování na lowercase bez mezer před implementací, aby se předešlo problémům na case-sensitive hostingu.
- Pokud si nebudeš jistý vhodností výběru fotografií, způsobem jejich roztřídění nebo tím, zda konkrétní fotografie odpovídá atmosféře školy, zeptej se uživatele před finálním rozhodnutím.

**Texty**
- Texty pro jednotlivé stránky a sekce najdeš níže v textu.
- Vyjdi z dodaných textů a zachovej jejich podstatu, význam, atmosféru a duchovní hloubku.
- Texty můžeš upravit pouze jemně a citlivě, pokud je to potřeba pro lepší srozumitelnost, čitelnost na webu, členění nebo návaznost mezi sekcemi.
- Nedělej velké zásahy do textů.
- Nevymýšlej nové významy, sliby, tvrzení ani obsah, který v dodaných textech není.
- Zachovej spirituální, ženský, jemný, vznešený a prémiový vibe značky.
- Dbej na to, aby texty byly srozumitelné i pro ženu, která s tímto typem práce ještě nemá hlubokou zkušenost.
- Delší texty vhodně rozčleň do odstavců, podnadpisů, citací, zvýrazněných vět, karet nebo FAQ prvků podle typu obsahu.
- CTA texty, názvy sekcí a krátké doprovodné mikrotexty můžeš jemně doladit tak, aby byly jasné, přirozené a konverzní, ale stále v souladu s dodanými texty.
- Pokud si nejsi jistý významem duchovní pasáže, nepřepisuj ji výrazně. Raději zachovej původní formulaci.

Vložit texty níže:

Logo pro web použij toto: /Obrazky/logo-skola.png a udělej ho v tom zlatém přechodu
Stránka - HOMEPAGE
/* HERO SEKCE */
Pozadí: /Obrazky/o-skole/skola-1.jpg
/* Eyebrow text */
Tantrická škola pro ženy
/* H1 */
Mysterijní škola ženství
/* Hero text */
Vstup do prostoru, kde se ušlechtilá krása ženské duše setkává s posvátným tantrickým uměním lásky.
/* Tlačítko */
Vstoupit (smooth scroll na další obsah)
/* Text pod hero */
Existuje místo, kde se žena může znovu rozpomenout na svou podstatu.
Místo, kde se probouzí archetypální princip ženské duše, otevírá se Božskému vědomí a tělo se stává chrámem života.
Mysterijní škola ženství je hluboká dvouletá iniciační cesta pro ženy, které cítí volání vrátit se ke své podstatě, otevřít ženskou sílu, propojit tělo, duši i Ducha a znovu objevit krásu vědomého ženství.
Skrze prožitek, vědomou práci s tělem, dech, meditaci, tantrické umění lásky, ženské rituály a mystérium duše se postupně otevírá prostor pro vnitřní transformaci, léčení a návrat k autentické ženské esenci.
/* SEKCE - Jemné emocionální rozpoznání ženy */
/* Eyebrow */
Možná i ty cítíš…
/* H2 */
Že je čas vrátit se sama k sobě
/* Text */
Každá žena se podvědomě touží potkat se svou vnitřní ženou. Touží porozumět vnitřní alchymii emočního plynutí a v přijetí si užívat všech svých přirozených darů. Krásy, něhy, síly, sexuality, tvořivosti, vášně, smyslnosti, jemnosti i divokosti.
Možná i ty cítíš touhu znovu se spojit se svým tělem, srdcem a duší. Otevřít intimní hluboký vztah sama se sebou a začít naslouchat vnitřnímu hlasu intuice.
/* SEKCE - O škole */
/* Eyebrow */
O škole
/* H2 */
Hluboká iniciační cesta ženy
/* Text */
Mysterijní škola ženství je dvouletou cestou hluboké ženské transformace, návratu k přirozenosti a probuzení vědomého ženství skrze tantrickou cestu lásky, prožitku a vnitřního poznání.
Během čtyř navazujících modulů budeš postupně vstupovat hlouběji do svého těla, cítění, intuice, sexuality, životní energie i duchovního vědomí. Každé setkání otevírá další bránu ženské duše a vede k jemnějšímu vnímání sebe sama, života i posvátnosti bytí.
Celá cesta probíhá v intimním kruhu žen, v bezpečném prostoru hlubokého sdílení, prožitku, meditace, ženských rituálů a vědomé práce s tělem i energií.
/* SEKCE - Moduly školy */
/* Eyebrow */
Čtyři brány ženství
/* H2 */
Cesta do mystických vod ženské duše
Modul 1
Odhalení Bohyně
23.4. – 26.4. 2026
Společně vstoupíme do vibrace srdce, ze kterého se rodí skutečné ženství. Skrze hluboký kontakt se svým tělem, ženskou esencí a vnitřní krásou začneš znovu objevovat úctu sama k sobě i ke svému ženství.
Ženskost • tělo • jemnost • sebeláska • otevření
→ Více o modulu (tlačítko)
Modul 2
Posvátná sexualita
17.9. – 20.9. 2026
Otevřeme se emočnímu plynutí, smyslnosti a životní síle ženy. Skrze práci s energií lůna, emocemi a elementem vody se budeme navracet k přirozené vášni, extázi, citlivosti a hlubokému spojení se sebou samou.
Shakti • sexualita • emoce • vášeň • životní energie
→ Více o modulu (tlačítko)
Modul 3
Žena jako léčitelka
18.3. – 21.3. 2027
Společně se otevřeme intuici, jasnozřivosti a ženským darům, které v sobě každá žena přirozeně nese. Budeme probouzet hlubší důvěru ve vlastní vnitřní vedení, moudrost a schopnost vidět pod povrch věcí.
Intuice • jasnozřivost • ženské dary • vnitřní vedení
→ Více o modulu (tlačítko)
Modul 4
Kosmické vědomí ženy
27.5. – 30.5. 2027
Naše cesta bude završena hlubokým propojením těla, srdce, intuice a vědomí. Otevřeme se jednotě, vnitřnímu tichu a kosmickému vědomí, ve kterém se žena navrací do hlubokého souladu se životem i existencí samotnou.
Jednota • vědomí • transcendence • propojení • duchovní hloubka
→ Více o modulu (tlačítko)
/* SEKCE - O Anjali */
/* Eyebrow */
O mně
/* H2 */
Ma Prem Anjali
/* Text */
„Na své cestě životem jsem pochopila, že být ženou je nádherný dar. Abych mohla tento dar přinést do svého života, bylo potřeba projít mnoha výzvami a začít naslouchat své ženské duši."
Studium tantrické jógy pro ženy, učení tantrické mistryně Ma Ananda Sarity i vlastní cesta prožitku a transformace mě postupně přivedly k hlubšímu vnímání podstaty ženství a síly, kterou jako ženy přirozeně nosíme ve svém těle.
Tato cesta se pro mě stala hlubokým prostorem návratu k lásce, ženské přirozenosti a vědomému prožívání života, který dnes sdílím s dalšími ženami.
/* SEKCE - Reference žen */
/* Eyebrow */
Autentické sdílení žen
/* H2 */
Co ženy na této cestě nejčastěji prožívají
/* Text */
„Až nyní vidím, kolik napětí a strachu bylo uloženo v mém těle. V hloubce srdce cítím mír a mnohem více lásky k sobě i k ostatním ženám." - Jana
„Konečně chápu, že to nejdůležitější pro skutečnou transformaci je prožitek a práce s tělem, energií a myslí. A já to teď zažívám na vlastní kůži." - Ála
„Odnáším si totální pocit bezpečí v sobě. Že mohu být sama sebou. Že mohu být zranitelná a pravdivá k sobě." - Věrka
Další příběhy, prožitky a proměny žen, které prošly touto cestou, si můžeš přečíst tady.
→ Vstoupit do příběhů žen (tlačítko vede na stránku Reference)
/* SEKCE - Galerie */
/* Eyebrow */
Esence školy
/* H2 */
Nahlédni do prostoru posvátné cesty
/* Text */
Každý krok této cesty otevírá hlubší spojení se sebou, životem a posvátností ženského prožívání.
/* ZÁVĚREČNÁ SEKCE */
/* Eyebrow */
Stačí jen tvé vnitřní ANO
/* H2 */
Připoj se k ženám, které vyslyšely volání své duše
/* Text */
Pokud cítíš, že tě tato cesta volá, zvu tě vstoupit do posvátného prostoru školy a stát se součástí ženského kruhu této iniciační cesty.
→ Vstoupit do školy (tlačítko vede na stránku Vstup do školy)
MODUL 1 - ODHALENÍ BOHYNĚ
/* HERO SEKCE */
/* Eyebrow text */
I. iniciační modul
/* H1 */
Odhalení Bohyně
/* Datum a místo */
23.4. – 26.4. 2026 • Centrum Buchov
/* Hero text */
Vstupujeme do vibrace srdce, ze kterého se rodí skutečné ženství. Skrze hluboký kontakt se svým tělem, ženskou esencí a vnitřní krásou začneme znovu objevovat úctu sama k sobě i ke svému ženství.
/* Tlačítko */
→ Vstoupit do školy (tlačítko vede na stránku Vstup do školy)
/* SEKCE - O modulu */
/* Eyebrow */
Objevování esence krásy
/* H2 */
Návrat ženy k její přirozenosti
/* Text */
Brána srdce je prvotním portálem, ve kterém se otevírá skutečné ženství. V tomto modulu budeme rozvíjet schopnost vnímat svou krásu, jemnost a hlubší lásku k sobě samé.
Skrze vědomou práci s tělem, meditace, tantrické techniky a ženské rituály se začne postupně otevírat prostor pro hlubší propojení se svou ženskou podstatou.
Budeme uctívat a hýčkat své fyzické tělo, uvolňovat staré vrstvy nevědomí a znovu objevovat mnohdy ztracenou úctu ke svému tělu, cítění a ženské citlivosti.
/* SEKCE - Témata modulu */
/* Eyebrow */
Témata cesty
/* H2 */
Čeho se v tomto modulu dotkneme
/* Obsah */
otevření ušlechtilé krásy ženského těla a duše
návrat k ženské přirozenosti, citlivosti a vnitřní pravdě
probuzení principů Shakti skrze rituály a smyslný pohyb
hlubší spojení se srdcem, tělem a ženskou esencí
uvolnění starých vrstev ega a nevědomých vzorců
odpuštění, přijetí a odevzdání
aktivace životní síly Kundaliní
rozvíjení sebelásky, jemnosti a vnitřní otevřenosti
/* SEKCE - Prožitek modulu */
/* Eyebrow */
Prožitek ženské cesty
/* H2 */
Tělo jako chrám ženského vědomí
/* Text */
Každý den této cesty tě bude jemně vést hlouběji do prožívání vlastního těla, citlivosti, přítomnosti a ženského vnímání.
Skrze dech, pohyb, meditaci, tanec, tantrické techniky, sdílení i vědomou práci s tělem budeš postupně vstupovat do větší jemnosti, důvěry a hlubšího uvolnění do své přirozené ženské podstaty.
V bezpečném ženském kruhu vzniká prostor, ve kterém můžeš spočinout sama v sobě, uvolnit napětí a začít znovu vnímat krásu svého těla, emocí i vnitřního světa.
/* SEKCE - Citace */
„Krása je věčností, pozorující samu sebe v zrcadle.
Ale Ty jsi tou věčností, i tím zrcadlem."
— Khalil Gibran
/* SEKCE - Místo konání */
/* Eyebrow */
Místo konání
/* H2 */
Centrum Buchov
/* Text */
Celý program probíhá uprostřed přírody, v malebném a energií naplněném prostředí centra Buchov. Prostor podporuje hluboké zklidnění, otevření ženského vnímání i propojení s přírodními rytmy.
/* Tlačítko */
→ Nahlédnout do prostoru (tlačítko vede na externí stránku https://www.centrum-buchov.cz/)
/* ZÁVĚREČNÁ SEKCE */
/* Eyebrow */
Stačí jen tvé vnitřní ANO
/* H2 */
Dovol si vstoupit hlouběji do svého ženství
/* Text */
Pokud cítíš, že tě tato cesta volá, zvu tě vstoupit do prostoru prvního iniciačního modulu a otevřít novou kapitolu vztahu sama k sobě, ke svému tělu i ke své ženské podstatě.
/* Tlačítko */
→ Vstoupit do školy (tlačítko vede na stránku Vstup do školy)
MODUL 2 - POSVÁTNÁ SEXUALITA
/* HERO SEKCE */
/* Eyebrow text */
II. iniciační modul
/* H1 */
Posvátná sexualita
/* Datum a místo */
17.9. – 20.9. 2026 • Centrum Buchov
/* Hero text */
Otevřeme se emočnímu plynutí, smyslnosti a životní síle ženy. Skrze propojení s energií lůna, emocemi a elementem vody se budeme navracet k přirozené vášni, extázi, citlivosti a hlubokému spojení se sebou samou.
/* Tlačítko */
→ Vstoupit do školy (tlačítko vede na stránku Vstup do školy)
/* SEKCE - O modulu */
/* Eyebrow */
Posvátná síla ženy
/* H2 */
Návrat k přirozenému toku ženské energie
/* Text */
Otevíráme se emočnímu plynutí, smyslnosti a hlubšímu vnímání vlastní životní síly. Budeme vstupovat do prostoru podbřišku a lůna, ve kterém je uložená ženská tvořivost, citlivost, vášeň i schopnost hluboké transformace.
Skrze element vody budeme rozpouštět starou emoční zátěž, pocity studu, viny a oddělení od vlastního těla. Postupně se budeme navracet k jemnosti, extázi, přirozené orgasmicitě a vědomému prožívání sexuality jako posvátné součásti ženského bytí.
/* SEKCE - Témata modulu */
/* Eyebrow */
Témata cesty
/* H2 */
Čeho se v tomto modulu dotkneme
/* Obsah */
otevření posvátné erotické energie a smyslnosti
probuzení emoční tekutosti a přirozeného toku ženské energie
vědomá práce s energií lůna a druhé čakry
rozpuštění pocitů studu, viny a starých zranění
hlubší propojení sexuality, lásky a vědomí
objevování intimity, důvěry a pravdivosti v těle
práce s elementem vody a emoční transformací
probuzení životní síly Kundaliní a ženské vášně
/* SEKCE - Prožitek modulu */
/* Eyebrow */
Posvátný prostor ženy
/* H2 */
Návrat k citlivosti, důvěře a smyslnosti
/* Text */
Tento modul otevírá jemný a vědomý prostor, ve kterém můžeš postupně odložit napětí, vnitřní obrany i staré příběhy spojené s tělem, ženstvím a intimitou.
Skrze dech, vědomý pohyb, meditativní přítomnost, tantrické techniky, práci s emocemi i léčivou sílu ženského kruhu se budeš navracet k hlubší citlivosti, uvolnění a důvěře sama v sebe.
Vědomý dotek, ženské rituály a práce s energií jsou jemným návratem do těla jako chrámu vědomí, ve kterém se znovu probouzí láska, smyslnost a přirozený tok životní energie.
/* SEKCE - Citace */
„Prostřednictvím této cesty odhalení našeho sexuálního potenciálu přeměníme emoční tekutost, tvůrčí hojnost a extázi na nový způsob života."
— Ma Ananda Sarita
/* SEKCE - Místo konání */
/* Eyebrow */
Místo konání
/* H2 */
Centrum Buchov
/* Text */
Celý program probíhá uprostřed přírody, v malebném a energií naplněném prostředí centra Buchov. Prostor podporuje hluboké uvolnění, citlivost, propojení s tělem i přirozenými rytmy života.
/* Tlačítko */
→ Nahlédnout do prostoru (tlačítko vede na externí stránku https://www.centrum-buchov.cz/)
/* ZÁVĚREČNÁ SEKCE */
/* Eyebrow */
Stačí jen tvé vnitřní ANO
/* H2 */
Dovol si otevřít svou životní sílu
/* Text */
Pokud cítíš, že tě tato cesta volá, zvu tě vstoupit do prostoru druhého iniciačního modulu a otevřít hlubší spojení se svým tělem, emocemi, smyslností a ženskou energií.
/* Tlačítko */
→ Vstoupit do školy (tlačítko vede na stránku Vstup do školy)
MODUL 3 - ŽENA JAKO LÉČITELKA
/* HERO SEKCE */
/* Eyebrow text */
III. iniciační modul
/* H1 */
Žena jako léčitelka
/* Datum a místo */
18.3. – 21.3. 2027 • Centrum Buchov
/* Hero text */
Otevřeme se intuici, jasnozřivosti a ženským darům, které v sobě každá žena přirozeně nese. Budeme probouzet hlubší důvěru ve vlastní vnitřní vedení, moudrost a schopnost vidět pod povrch věcí.
/* Tlačítko */
→ Vstoupit do školy (tlačítko vede na stránku Vstup do školy)
/* SEKCE - O modulu */
/* Eyebrow */
Probuzení vnitřního vedení
/* H2 */
Návrat k ženské intuici a jasnozřivosti
/* Text */
Každá žena se rodí s přirozenou schopností hlubokého vnímání, intuice a vnitřního vedení. V tomto modulu budeme otevírat prostor třetího oka, jemného vnímání energií a schopnosti naslouchat hlasu duše.
Budeme probouzet důvěru ve své vnitřní dary, rozvíjet schopnost vnímat energie a otevírat se hlubšímu spojení se svým duchovním směřováním. Skrze meditaci, vědomou přítomnost a práci s vědomím začneš jemněji vnímat sebe samu, druhé i hlubší souvislosti života.
/* SEKCE - Témata modulu */
/* Eyebrow */
Témata cesty
/* H2 */
Čeho se v tomto modulu dotkneme
/* Obsah */
rozvoj intuice, jemné citlivosti a vnitřního vedení
otevření daru jasnozřivosti a channelingu
schopnost vnitřní komunikace s duší a vyšším vědomím
vnímání subtilních energií a energetických těl
léčivá síla doteku, přítomnosti a ženského pole
ukotvení vědomé přítomnosti a kvality vnitřního pozorovatele
propojení spirituality a každodenního života
schopnost nést sebe i druhé v lásce, vědomí a hlubokém soucitu
/* SEKCE - Prožitek modulu */
/* Eyebrow */
Mystérium ženské duše
/* H2 */
Otevření jemného vnímání a vědomé přítomnosti
/* Text */
Tento modul tě povede do větší vnitřní citlivosti, ztišení a schopnosti naslouchat jemnému hlasu duše, intuice a vnitřního vedení.
Skrze meditace, kontemplaci, dech, práci s energií, vědomý dotek i ženské sdílení se začne otevírat hlubší vnímání sebe sama i neviditelných vrstev života, které zůstávají běžnému pohledu skryté.
V bezpečném ženském kruhu budeš rozvíjet důvěru ve své vlastní vnímání, jasnozřivost a schopnost spočívat ve stavu přítomnosti, ve kterém se přirozeně probouzí vnitřní moudrost a klid.
/* SEKCE - Citace */
„Když přiměješ světlo, aby se pohybovalo v kruhu, všechny energie nebe a země, světla a tmy, se vytříbí."
— Lao-c'
/* SEKCE - Místo konání */
/* Eyebrow */
Místo konání
/* H2 */
Centrum Buchov
/* Text */
Celý program probíhá uprostřed přírody, v malebném a energií naplněném prostředí centra Buchov. Prostor podporuje hluboké ztišení, meditativní vnímání i jemné otevření intuice a vnitřního vedení.
/* Tlačítko */
→ Nahlédnout do prostoru (tlačítko vede na externí stránku https://www.centrum-buchov.cz/)
/* ZÁVĚREČNÁ SEKCE */
/* Eyebrow */
Stačí jen tvé vnitřní ANO
/* H2 */
Dovol si otevřít dary své duše
/* Text */
Pokud cítíš, že tě tato cesta volá, zvu tě vstoupit do prostoru třetího iniciačního modulu a otevřít hlubší spojení se svou intuicí, vnitřní moudrostí a duchovním vedením.
/* Tlačítko */
→ Vstoupit do školy (tlačítko vede na stránku Vstup do školy)
MODUL 4 - KOSMICKÉ VĚDOMÍ ŽENY
/* HERO SEKCE */
/* Eyebrow text */
IV. iniciační modul
/* H1 */
Kosmické vědomí ženy
/* Datum a místo */
27.5. – 30.5. 2027 • Centrum Buchov
/* Hero text */
Naše ženská cesta skrze lásku, oddanost a soucit je završena hlubokým splynutím těla, duše a vědomí. Otevřeme se jednotě, vnitřnímu tichu a kosmickému vědomí, ve kterém se navracíme do souladu s celou Existencí.
/* Tlačítko */
→ Vstoupit do školy (tlačítko vede na stránku Vstup do školy)
/* SEKCE - O modulu */
/* Eyebrow */
Návrat do Jednoty
/* H2 */
Splynutí s vnitřním vědomím
/* Text */
Tento modul je završením celé iniciační cesty ženy. Všechny předchozí vrstvy prožitku, otevření, léčení i vnitřní proměny se zde spojují do hlubšího stavu jednoty, vědomí a důvěry v samotný život.
Budeme vstupovat do prostoru za myslí, otevírat schopnost vnitřního pozorovatele a propojovat energie dělohy, srdce a intuice do jednoho harmonického celku. Skrze meditace, vědomou přítomnost a duchovní praxi se budeme otevírat kosmickému vědomí, hlubšímu souladu s Existencí i vědomému prožívání života v lásce, pravdě a jednotě.
/* SEKCE - Témata modulu */
/* Eyebrow */
Témata cesty
/* H2 */
Čeho se v tomto modulu dotkneme
/* Obsah */
duchovní cesta odevzdání a návratu do Jednoty
spojení s Božským tvořivým potenciálem a makrokosmickou podstatou bytí
cesta do hlubokého souladu těla, duše a Ducha
vnímání principů posvátné geometrie a harmonických zákonů života
umění meditace a otevírání se vytříbeným, povznášejícím božským energiím
rozvoj vnitřní jasnosti, důvěry a odevzdání proudu života
probuzení extatické božské energie a vědomá manifestace darů duše
integrace celé iniciační cesty ženy do každodenního života v lásce, vědomí a pravdě
/* SEKCE - Prožitek modulu */
/* Eyebrow */
Posvátné završení cesty
/* H2 */
Otevření jednotě života a vědomí
/* Text */
Tento modul tě povede do hlubšího ztišení, meditativní přítomnosti a otevření se vyšším úrovním vědomí.
Skrze dech, meditace, kontemplaci, vědomou práci s energií, posvátné rituály i ženské sdílení budeš postupně vstupovat do většího souladu sama se sebou, s přírodními zákony života i s jemným vedením své duše.
V bezpečném ženském kruhu se začne otevírat prostor pro hluboké odevzdání, vnitřní klid, jasnost a vědomí jednoty, ve kterém se navracíš do hlubšího souladu sama se sebou, životem i samotnou Existencí.
/* SEKCE - Citace */
„Každý senzorický zážitek nabízí s Tantrou dveře k vesmírnému vědomí."
— Ma Ananda Sarita
/* SEKCE - Místo konání */
/* Eyebrow */
Místo konání
/* H2 */
Centrum Buchov
/* Text */
Celý program probíhá uprostřed přírody, v malebném a energií naplněném prostředí centra Buchov. Prostor podporuje hluboké ztišení, meditativní ponoření i jemné otevření se vyšším úrovním vědomí.
/* Tlačítko */
→ Nahlédnout do prostoru (tlačítko vede na externí stránku https://www.centrum-buchov.cz/)
/* ZÁVĚREČNÁ SEKCE */
/* Eyebrow */
Stačí jen tvé vnitřní ANO
/* H2 */
Dovol si vstoupit do vědomí Jednoty
/* Text */
Pokud cítíš, že tě tato cesta volá, zvu tě vstoupit do prostoru závěrečného iniciačního modulu a otevřít se hlubšímu spojení se svou duší, vědomím a kosmickou podstatou života.
/* Tlačítko */
→ Vstoupit do školy (tlačítko vede na stránku Vstup do školy)
/* STRÁNKA - O ŠKOLE */
/* HERO SEKCE */
/* Eyebrow */
O škole
/* H1 */
Tantrická cesta probuzení vědomého ženství
/* Hero text */
Mysterijní škola ženství je dvouletou iniciační cestou pro ženy, které touží hlouběji poznat svou ženskou podstatu skrze tantrické umění lásky, spojení s tělem, srdcem a ženskou duší.
/* SEKCE - Filosofie školy */
/* Eyebrow */
Filosofie školy
/* H2 */
Mysterijní škola jako návrat k sobě
/* Text */
Mysterijní škola ženství je prostorem návratu k ženské podstatě skrze tantrické umění lásky, vědomí a vnitřního poznání.
Tantra je učením skutečné lásky a svobody. Posvátným spojením těla, duše a Božského vědomí, které vede skrze prožitek, vnitřní transformaci a návrat k duchovním principům ženství.
Tato cesta tě vede k otevření intimního hlubokého vztahu sama k sobě. Ke vstupu do prostoru srdce, spojení se svým lůnem a naslouchání vnitřnímu hlasu intuice. Postupně můžeš probudit svou životní energii, otevřít se větší harmonii, lásce a stát se vědomou tvůrkyní vlastního života.
/* SEKCE - Jak to probíhá */
/* Eyebrow */
Jak probíhá dvouletá cesta
/* H2 */
Postupné otevírání jednotlivých vrstev ženství
/* Text */
Každý ze čtyř modulů školy je prostoupen vědomě vytvořenou praxí, která je jemně naladěna na téma daného modulu. Jednotlivé techniky na sebe navazují v harmonickém toku tak, aby ses mohla postupně otevírat hlubšímu vnímání svého těla, emocí, vědomí i duchovní podstaty.
Skrze meditaci, dech, vědomý pohyb, tantrické techniky, ženské rituály, sdílení i práci s energií se učíš spočívat ve větší přítomnosti, citlivosti a důvěře sama v sebe.
Každý modul obsahuje pětidenní osobní setkání a navazující online podporu, která umožňuje integraci celé zkušenosti do každodenního života.
/* SEKCE - Důvěra a bezpečí */
/* Eyebrow */
Bezpečí a ženský kruh
/* H2 */
Prostor důvěry, citlivosti a respektu
Jemný a vědomý prostor
V Mysterijní škole ženství vstupuješ do jemného a posvátného prostoru, ve kterém můžeš postupně odložit napětí, stud, vnitřní obrany i staré příběhy spojené s tělem, ženstvím a intimitou. Celá cesta je vedena s hlubokou úctou k ženské citlivosti, přirozenosti a jedinečnosti každé ženy.
Návrat do těla a důvěry
Tantrické a vědomé praxe jsou pozváním k návratu do těla jako chrámu vědomí, k hlubšímu vnímání sebe, své energie, emocí i schopnosti otevřít se důvěře, jemnosti a pravdivosti.
Respekt k hranicím a vnitřnímu tempu
Každá žena si sama volí, do čeho chce vstoupit, a její hranice jsou plně respektovány. Vědomá komunikace a možnost kdykoliv říci „ano", „ne" či „teď ještě ne" je přirozenou součástí všech praxí. Celý prostor školy je nesen energií bezpečí, ženské podpory, laskavosti a vzájemného respektu.
/* SEKCE - Místo konání */
/* Eyebrow */
Místo konání
/* H2 */
Centrum Buchov
/* Text */
Škola probíhá v centru Buchov, v prostoru obklopeném romantickou přírodou středočeské krajiny na dohled od bájné hory Blaník. Okolní louky, lesy a hluboký klid přírody přirozeně podporují ztišení, vnitřní ponoření i jemné otevření ženského vnímání.
Atmosféra Buchova podporuje hlubší propojení se sebou samou, s rytmy přírody i s přirozeným plynutím celé iniciační cesty. Součástí prostoru jsou sály pro společnou praxi, ubytování, zahrady, venkovní místa pro odpočinek i možnost spočinout v tichu a jednoduchosti okolní krajiny.
/* Tlačítko */
→ Nahlédnout do prostoru (tlačítko vede na externí stránku https://www.centrum-buchov.cz/)
/* SEKCE - Praktické informace */
/* Eyebrow */
Praktické informace
/* H2 */
Co je dobré vědět o průběhu školy
/* Obsah */
Iniciační cesta
Mysterijní škola ženství je dvouletá iniciační cesta. Tvoří ji čtyři navazující pětidenní moduly. Každý rok se konají dva moduly.
Transformace
Jednotlivé moduly na sebe navazují a společně vytváří postupnou cestu ženské transformace.
Vědomá praxe
Součástí každého modulu jsou meditace, ženské rituály, vědomá práce s tělem, dech, tantrické techniky, sdílení i prostor pro integraci celé zkušenosti.
Online podpora
Mezi jednotlivými moduly probíhá navazující online podpora a prohlubování celé cesty.
Ženský kruh
Škola probíhá v uzavřeném ženském kruhu v komorním počtu 20 účastnic.
Přesné organizační informace obdržíš po přihlášení do školy.
/* SEKCE - Cena */
/* Eyebrow */
Cena a platby
/* H2 */
Jak probíhá úhrada školy
/* Text */
Jeden modul školy stojí 9 990 Kč + 5 500 Kč za ubytování a stravu.
Mysterijní škola ženství zahrnuje celkem čtyři navazující moduly. Celková cena školy za celou dvouletou cestu je 39 960 Kč + náklady na ubytování a stravu.
Jednotlivé moduly se hradí postupně před každým modulem zvlášť. Po potvrzení účasti se hradí první modul, kterým je rezervováno tvé místo ve škole.
Vstupem do školy se zároveň zavazuješ k účasti na celé dvouleté škole a úhradě všech čtyř modulů.
/* SEKCE - FAQ */
/* Eyebrow */
Otázky a odpovědi
/* H2 */
Na co se ženy nejčastěji ptají?
Musím mít zkušenost s tantrou, meditací nebo ženskými kruhy?
Ne. Škola je otevřená ženám začátečnicím i pokročilým. Důležitá je otevřenost, citlivost k sobě samé a vnitřní volání vydat se hlouběji na cestu sebepoznání.
Je tato cesta vhodná i pro citlivé nebo introvertní ženy?
Ano. Celá škola je vedena velmi jemně, citlivě a s respektem k individuálnímu tempu každé ženy. Není zde tlak na výkon, sdílení ani překračování vlastních hranic. Můžeš si postupně dovolit otevřít se přesně tak, jak sama cítíš.
Pracuje se ve škole s nahotou a intimitou?
Nahota je v Mysterijní škole ženství vnímána jako přirozený návrat k čistotě bytí, svobodě a hlubokému přijetí sebe sama. Celý prostor je veden s hlubokou úctou, citlivostí a respektem k ženské jedinečnosti. Není zde prostor pro tlak, hodnocení ani překračování vlastních hranic.
Veškeré intimní a tantrické praxe jsou dobrovolné a každá žena si sama volí, do čeho chce vstoupit. Vědomá komunikace a možnost kdykoliv říci „ano", „ne" či „teď ještě ne" je přirozenou součástí celé cesty. Hranice každé ženy jsou plně respektovány.
Jsou součástí školy vědomý dotek a masáže?
Ano. Vědomý dotek a masáže probíhají v energii laskavosti, jemnosti a posvátnosti. Dotek se stává prostorem důvěry, uvolnění a hlubšího propojení se sebou samou. Nic není vynucováno a každá žena může kdykoliv vyjádřit své hranice a říci „ne".
Jak vypadá běžný den během modulu?
Každý modul je veden jako vědomě vytvořený celek, ve kterém na sebe jednotlivé praxe přirozeně navazují. Součástí cesty jsou meditace, dechová cvičení, vědomý pohyb, tantrické techniky, ženské rituály, sdílení, práce s energií, relaxace i prostor pro integraci a odpočinek.
Co ženy po této cestě nejčastěji prožívají?
Ženy často mluví o hlubším pocitu bezpečí samy v sobě, větší lásce k vlastnímu tělu, otevření intuice, uvolnění starých strachů, větší citlivosti, důvěře a návratu k vlastní ženské podstatě. Mnohé ženy popisují, že poprvé skutečně prožily hlubší pocit přijetí, vnitřního klidu a spojení samy se sebou.
Je tantra pouze o sexualitě?
Ne. Tantra je uměním vědomého života, které propojuje tělo, lásku, krásu, vědomí a spiritualitu. Sexualita je její přirozenou součástí, zároveň je však mnohem širší cestou hluboké přítomnosti, meditace, vnitřní transformace a otevření se životu v jeho celistvosti.
Mohu se školy zúčastnit, pokud procházím psychicky náročnějším obdobím nebo mám zdravotní problémy?
Mysterijní škola ženství je zaměřena na osobní a duchovní rozvoj skrze vědomou ženskou praxi. Nenahrazuje psychoterapii, psychiatrickou péči ani odbornou léčbu. Pokud procházíš náročnějším obdobím nebo máš psychická či zdravotní omezení, je možné vše předem citlivě probrat během individuálního online rozhovoru, kde společně posoudíme, zda je pro tebe tato cesta v tuto chvíli vhodná.
Kolik žen bývá ve skupině?
Škola probíhá v intimní skupině přibližně 20 žen. Díky tomu vzniká bezpečný prostor pro hlubší sdílení, důvěru i individuálnější vedení celé cesty.
Mohu se zúčastnit pouze jednoho modulu?
Mysterijní škola ženství je vytvořena jako ucelená dvouletá iniciační cesta, ve které jednotlivé moduly na sebe navazují a společně tvoří hlubší proces ženské transformace. Z tohoto důvodu je podmínkou účast na všech čtyřech modulech. Platba za jednotlivé moduly probíhá postupně před každým modulem.
Mohu se školy zúčastnit i s dcerou?
Mysterijní škola ženství je určena ženám od 18 let. Pokud cítíš volání sdílet tuto cestu se svou dcerou, může do školy vstoupit po dosažení plnoletosti.
/* ZÁVĚREČNÁ SEKCE */
/* Eyebrow */
Stačí jen tvé vnitřní ANO
/* H2 */
Dovol si vstoupit na cestu hlubšího poznání sebe sama
/* Text */
Pokud cítíš, že tě tato cesta volá, můžeš vstoupit do prostoru Mysterijní školy ženství a otevřít se hlubší proměně svého ženství, vědomí i vztahu sama k sobě.
Čtyři navazující moduly tě provedou cestou těla, srdce, intuice i vědomého prožívání života v lásce, pravdě a větší vnitřní harmonii.
/* Tlačítko */
→ Vstoupit do školy (tlačítko vede na stránku Vstup do školy)
/* STRÁNKA – Reference */
/* HERO SEKCE */
/* Eyebrow */
Autentické sdílení
/* H1 */
Příběhy žen z Mysterijní školy ženství
/* Hero text */
Tato sdílení vznikla z osobních zkušeností žen, které vstoupily do Mysterijní školy ženství a dovolily si otevřít novou kapitolu svého života.
/* REFERENCE 1 */
/* Eyebrow */
Bezpečí • uvolnění • sebeláska
/* Text */
„Až nyní vidím, kolik napětí a strachu bylo uloženo v mém těle. Celý život jsem byla ve zvláštním stažení a nevěřila si. A jsem nesmírně vděčná, že jsem se uvolnila do takové hloubky sebe, kterou jsem nikdy nezažila. Neumím to úplné popsat slovy, ale v hloubce srdce cítím mír a mnohem více lásky k sobě, ale i k ostatním ženám. Cítím vůli žít v lehkosti bytí a tvořit podle svých představ. MILUJU TO TADY, MILUJU TUHLE ŠKOLU.
A tobě Anjali děkuji za hloubku, laskavé vedení a moudrost, která mi pomohla se otevřít a také za nádherný posvátný prostor, který mi pomohl se tu cítit opravdu v bezpečí."
— Jana
/* REFERENCE 2 */
/* Eyebrow */
Transformace • prožitek • vědomí
/* Text */
„Když jsem nastoupila do této školy, neměla jsem ani nejmenší tušení, jak práce "na sobě" vlastně může vypadat. Lépe řečeno by to mělo být "v sobě". Konečně chápu všechny ty knihy a praxe o kterých jsem četla. To, že vše je uvnitř nás samotných. Že všechno co zažívám je mou vlastní reflexí a postojem, který odráží mou vlastní realitu.
Na každém modulu jsem si uvědomovala, že je jedno kolik toho vím v hlavě, ale že to nejdůležitější pro skutečnou transformaci je prožitek a práce s tělem, energií a myslí. A já to teď zažívám na vlastní kůži. A žiju.
Ne jenom tento moment, ale věřím, že s technikami, které mám ze školy si tuto vůli udržím. Děkuji za Tantru. Děkuji za vás lásky, které se nebojíte toto prastaré učení vnášet do nevědomí světa."
— Ála
/* REFERENCE 3 */
/* Eyebrow */
Přijetí • pravdivost • ženský kruh
/* Text */
„Odnáším si totální pocit bezpečí v sobě, pocit rodiny, která mě přijímá takovou jakou jsem právě teď. Kde mohu být totálně sama sebou. Že mohu být zranitelná a pravdivá k sobě. Uviděla jsem mnoho bloků se kterými jsem dříve bojovala.
Nejúžasnější uvědomění a prožitek jsem si odnesla z Posvátného tantrického rituálu smyslů, kde jsem vnímala jak krásné je dávat i přijímat. A jak moc mě obohatila praxe "umění doteku". Kolik předsudků jsem si nesla z rodiny ohledně sexuality.
Určitě se chci dál v životě věnovat channelování a rozvíjet svou intuici a schopnost meditace. Děkuji za krásu chrámu a lásku s ženami, nová přátelství. Těším se na pokračování mé cesty duše s vámi milované ženy."
— Věrka
/* REFERENCE 4 */
/* Eyebrow */
Vědomí • spiritualita • duše
/* Text */
„Děkuji Anjali a ženám týmu za úžasnou péči, přípravu prostoru, energii, kterou do všech setkání vnášíte. Cítím se celistvější a vnímám, že jsem se posunula na své cestě o další úroveň.
Moc děkuji za posvátnou intimitu a také Rituál Posvátné geometrie, kde jsem získala zkušenost setkání s mou duší a Božskou energií Ducha. Objevila jsem, že v jednoduchosti je síla Božství. Nelpět, nesnažit se příliš a umět odpouštět v pokoře a odevzdání.
Dostala jsem se do vnitřních světů duše, kam jsem se v minulosti chtěla dostat a nešlo to. Odnáším si uvědomění, že Tantra není jen o sexualitě, ale umění rozšiřovat své vědomí v meditaci, józe a vnímání sebe jako Božské bytosti v ženském těle.
Velká Vděčnost ženy milované. Děkuji za tuto úžasnou zkušenost a přesah, který stále integruji."
— Lucie
/* REFERENCE 5 */
/* Eyebrow */
Srdce • smyslnost • autenticita
/* Text */
„Hluboce se mě dotklo téma spojení ženské orgasmicity, posvátnosti jóni a Božské lásky v ženském srdci. Uvědomila jsem si kolikrát jsem dovolila svému partnerovi pouhý sex namísto skutečného milování ze srdce a z lásky.
Konečně nejen chápu rozdíl, ale cítím v těle, jak mi tantrický přístup k milování otevřel oči. Zažila jsem tolik posvátnosti a úcty ke svému tělu, dokonce obdivu od ostatních žen, že mě to velmi dojelo.
Vím, že potřebuji zjemnit a uvolnit se z kontroly a vstupovat do milování z prostoru klidu a lásky a ne z touhy po uvolnění.
Odnáším si velmi silný celotělový prožitek, kdy mi Anjali pomohla v jógové Kundaliní praxi otevřít srdce a mé srdce se zalilo proudy světla. Otevřelo se mi vědomí toho, jak sebe samu umenšuju a kde ztrácím autenticitu.
Cítím hlubokou vděčnost, že ženy předáváte tantrickou cestu tímto způsobem, do hloubky, která mi dává smysl."
— Marie
/* Tlačítko */
→ Vstoupit do školy (tlačítko vede na stránku Vstup do školy)
/* STRÁNKA – Galerie */
/* HERO SEKCE */
/* Eyebrow */
Atmosféra školy
/* H1 */
Nahlédni do prostoru Mysterijní školy ženství
/* Hero text */
Naciť si atmosféru ženského kruhu, meditací, rituálů, sdílení i hlubokých okamžiků celé iniciační cesty.
/* STRÁNKA – Vstup do školy */
/* HERO SEKCE */
/* Eyebrow */
Nezávazná přihláška
/* H1 */
Vstup do Mysterijní školy ženství
/* Hero text */
Pokud cítíš, že tě tato cesta volá, můžeš nezávazně odeslat svou přihlášku nebo se zeptat na vše, co potřebuješ vědět před vstupem do školy.
/* SEKCE - Formulář */
Jméno a příjmení *
E-mail *
Telefon *
/* Checkboxy:
☐ Mám zájem vstoupit do Mysterijní školy ženství a získat podrobnější informace. */
☐ Chci se jen na něco zeptat.
Zpráva *
………………
/* Checkbox:
☐ Souhlasím se zpracováním osobních údajů. */
/* Tlačítko:
→ Odeslat */
Po odeslání formuláře ti zašlu podrobnější informace o škole nebo odpovím na tvůj dotaz. Součástí e-mailu budou také informace k platbám.
Po potvrzení účasti obdržíš všechny organizační informace, podmínky školy i pokyny k rezervaci místa.
/* SEKCE - Důležité informace */
Důležité informace
Mysterijní škola ženství je dvouletá iniciační škola tvořená čtyřmi navazujícími moduly. Účast ve škole probíhá v uzavřeném ženském kruhu a vstupem do školy se zavazuješ k účasti na celé škole.
Jednotlivé moduly se hradí postupně před každým modulem zvlášť. Cena jednoho modulu je 9 990 Kč + 5 500 Kč za ubytování a stravu.
Pokud sis ještě nepřečetla podrobné informace o průběhu školy, organizaci nebo nejčastější otázky, můžeš se vrátit na stránku O škole.
→ O škole (tlačítko vede na stránku O škole)
/* STRÁNKA – Děkuji */
/* Eyebrow */
Tvoje zpráva byla odeslána
/* H1 */
Děkuji za tvou důvěru
/* Text */
Pokud jsi vyplnila nezávaznou přihlášku do školy, brzy ti zašlu podrobnější informace o Mysterijní škole ženství i další kroky k případnému vstupu do školy.
Pokud jsi položila dotaz, odpovím ti co nejdříve osobně e-mailem.
Děkuji za tvou otevřenost a důvěru.
/* Tlačítko */
→ Zpět na hlavní stránku
PATIČKA – na každé stránce
/* Logo / název */
Logo:
Mysterijní škola ženství
Martina „Anjali" Výborná
/* Kontaktní informace */
Martina Výborná
anjali@martinavyborna.cz
+420 603 529 357
IČO: 68427212
Křižíkova 1873/16
430 01 Chomutov
Fyzická osoba podnikající dle živnostenského zákona.
/* Odkazy */
→ O škole
→ Zpracování osobních údajů
/* Tlačítko */
→ Vstup do školy
