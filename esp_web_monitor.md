# Szakdolgozati Témák - Szczuka Bendegúz

## 1. ESP32 Webes Változómonitorozó és -kezelő Könyvtár

**Valós idejű változókezelés webes felületen keresztül**

### Projekt Áttekintése

A projekt célja egy professzionális, könnyen integrálható C++ könyvtár fejlesztése ESP32 mikrokontrollerekhez, amely lehetővé teszi a programváltozók valós idejű webes monitorozását és módosítását. A könyvtár a **PlatformIO Registry**-ben és GitHub-on lesz elérhető, így bármely fejlesztő egyszerűen integrálhatja projektjeibe.

**⚠️ Fontos tisztázás:** A könyvtár csak meglévő változók értékének módosítására alkalmas, új logika vagy változó bevezetéséhez továbbra is újrafordítás szükséges.

### Gyakorlati Használati Példa

#### Mobilrobot PID Szabályozás Hangolása

Képzeljük el, hogy egy mobilrobotot programozunk, amely egy fal mentén haladva navigál. A robot ultrahangos szenzorral méri a távolságot a faltól, és **PID szabályozóval** korrigálja az irányát.

- **P érték:** Arányos tag - túl nagy érték esetén túllövés
- **I érték:** Integráló tag - maradó hiba kompenzálása
- **D érték:** Deriváló tag - rezgés csillapítása

Hagyományos módszerrel minden egyes paraméter módosításnál újra kellene fordítani és feltölteni a kódot. A könyvtárral ezek az értékek valós időben, webes felületen keresztül hangolhatók!

### Fő Komponensek és Feladatok

#### 1. Könyvtár Publikálás és Dokumentáció

**Célkitűzés:** A könyvtár széles körű elérhetőségének biztosítása

- **PlatformIO Registry integráció:** A könyvtár feltöltése és karbantartása a hivatalos könyvtártárban
- **Arduino Library Manager:** Kompatibilitás az Arduino IDE könyvtárkezelőjével
- **Átfogó dokumentáció:** API referencia, példakódok, telepítési útmutató
- **Verziókezelés:** Semantic versioning, changelog vezetése, CI/CD pipeline


#### 2. Backend Architektúra és API Design

**Célkitűzés:** Rugalmas és típusbiztos változókezelő rendszer fejlesztése

- **Típusbiztos kezelés:** Template-alapú rendszer különböző adattípusokhoz
- **Pointer referencia:** Közvetlen hivatkozás az eredeti változókra
- **Dual WiFi mód:** Meglévő hálózat vagy saját Access Point


##### API Használati Példák

- Könyvtár Include és Inicializálás
- Float Slider Változó
- Integer Number Input
- String Text Input
- Boolean Switch
- Button Trigger


#### 3. Frontend Fejlesztés és UI/UX Design

**Célkitűzés:** Intuitív és reszponzív webes kezelőfelület kialakítása

##### Változótípusok és UI elemek:

**Numerikus értékek:**

- Slider kontrolok konfigurálható tartománnyal
- Number input mezők step értékkel
- Exponenciális/logaritmikus skálázás (nagy értéktartományok kezelése)

**Szöveges értékek:**

- Text input mezők karakterlimit beállítással
- Dropdown menük előre definiált értékekhez

**Boolean értékek:**

- Toggle switch-ek állapot váltáshoz
- Push button-ok egyszeri műveletek triggereléshez

**Speciális kontrollok:**

- Color picker színértékekhez
- Time/date picker időpontokhoz


##### UI/UX jellemzők:

- 📱 Reszponzív design
- ⚡ Valós idejű frissítés (WebSocket vagy AJAX)
- 👁️ Vizuális visszajelzés
- 🔍 Keresés és szűrés
- 🌙 Dark/Light mód
- {} JSON protokoll


#### 4. Konfigurációs Profilok és Állapotkezelés

**Célkitűzés:** Komplex változóbeállítások gyors mentése és visszaállítása

##### Profil Management Rendszer:

- **💾 Állapot mentés:** Az összes módosítható változó aktuális értékének elmentése egyedi profil névvel
- **📥 Profil visszaállítás:** Korábban mentett konfigurációk gyors betöltése egy kattintással


##### Tárolási architektúra:

- **🌐 LocalStorage:** Böngésző alapú, gyors elérés, felhasználó-specifikus profilok
- **💾 EEPROM/SPIFFS:** ESP32 memória, perzisztens tárolás, újraindítás után is elérhető
- **🔄 Szinkronizálás:** Intelligens összehasonlítás, konfliktuskezelés és választható felülírás


##### Profil Kezelő UI/UX funkciók:

**💾 Mentési Workflow:**

- **Quick Save:** Gyors mentés automatikusan generált névvel (timestamp)
- **Custom Save:** Felhasználó által megadott név és opcionális leírás
- **Preview Summary:** Mentés előtt megjelenő összefoglaló az aktuális beállításokról

**🔄 Visszaállítási Interface:**

- **Visual Diff:** Összehasonlító nézet aktuális és mentett értékek között
- **Selective Restore:** Részleges visszaállítás - csak kiválasztott változók
- **Confirmation Dialog:** Biztonsági megerősítés nagyobb változtatások előtt
- **Undo/Redo:** Visszavonási lehetőség a legutóbbi műveletre

**📱 Mobil Optimalizálás:**

- **Touch-friendly UI:** Nagy érintési területek, könnyen elérhető kontrollok
- **Collapsible Sections:** Összecsukható szekciók kisebb képernyőkön


### Technikai Kihívások

- **⚠️ Template programozás:** C++ template rendszer komplex használata különböző adattípusokhoz
- **⚠️ WebSocket/AJAX implementáció:** Valós idejű protokoll megvalósítása ESP32 platformon
- **ℹ️ Dinamikus HTML generálás:** Beágyazott rendszereken történő weblap létrehozás
- **✅ Memóriamenedzsment:** Korlátozott erőforrások hatékony kihasználása


### Teljesítményoptimalizálás

- **⚡ Változás detektálás:** Csak szükség esetén történő adatátvitel
- **🗜️ JSON tömörítés:** Hatékony adatprotokoll
- **💾 Memóriahatékonyság:** Optimalizált változótárolás
- **🔄 Differenciális sync:** Profil adatok hatékony szinkronizálása


### Várható Eredmény

**🏆 Professzionális minőségű könyvtár**

Egy újrahasznosítható könyvtár, amely jelentősen egyszerűsíti az ESP32-alapú projektek fejlesztését és karbantartását, miközben széles körű közösségi felhasználásra alkalmas. A profil management funkció különösen értékessé teszi komplex robotikai és IoT projektekben, ahol gyakran szükséges különböző működési módok között váltani.

***

## 2. iPhone Face ID szenzor távolságmérési lehetőségeinek kutatása

**Hobbi és edukációs robotfejlesztési projektekben**

Az oktatási és hobbi robotfejlesztések világában az egyik legnagyobb kihívást a pontos és megbízható távolságmérés jelentené alacsony költségvetésű környezetben. Az iPhone Face ID szenzorai egy eddig kevéssé hasznosított lehetőséget képviselhetnének: az infravörös pontmátrix alapú mélységérzékelés elvileg pontosabb és megbízhatóbb eredményt adhatna, mint a legtöbb olcsón elérhető szenzor.

**Technológiák:** Swift, ARKit, C++, ESP32

### A probléma

A jelenlegi piacon elérhető megoldások az alábbi korlátokkal bírnak:

- Az infravörös érzékelők rövid hatótávval rendelkeznek, és erősen függnek a környezeti fényviszonyoktól.
- Az ultrahangos távolságmérők gyakran zajos adatokat adnának, ami pontatlanságot eredményezne.
- A Time-of-Flight (ToF) szenzorok általában drágábbak, és nem lennének alkalmasak szűk mérési mezőkben.
- A LiDAR szenzorok ugyan pontosak, de áruk miatt nem jelentenének reális alternatívát hobbi és oktatási projektekben.

Mindezek miatt a hallgatói és hobbi robotok fejlesztésekor a csapatok a távolságmérés kapcsán komoly korlátokba ütközhetnének, különösen versenyhelyzetben.

### Fontosság

A probléma jelentősége több szinten volna megfogható. Az oktatásban a diákok számára ösztönzőbb lehetne olyan robotprojekteket kivitelezni, amelyek valóban precíz érzékelőrendszerekkel rendelkeznek. Ha a távolságmérő komponens megbízhatatlan, az gyakran csökkentheti a motivációt és ronthatná a projekt sikerességét.

A széles körben, alacsony áron elérhető hatékony érzékelők hiánya tehát akadályt jelenthetne az innovatív robotikai megoldások fejlesztésében is. Ez az egyetemi versenyekben is tapasztalható lenne, ahol a pontatlan távolságmérés sokszor a robotok teljesítményének rovására menne.

Az iPhone Face ID szenzorai viszont egy eddig kevéssé hasznosított lehetőséget képviselhetnének: az infravörös pontmátrix alapú mélységérzékelés elvileg pontosabb és megbízhatóbb eredményt adhatna, mint a legtöbb olcsón elérhető szenzor. Ráadásul az iPhone-ok széles körű elterjedtsége miatt a fejlesztők könnyebben hozzáférhetnének egy ilyen eszközhöz.

### Megoldás

A tervezett megoldás egy iOS alkalmazás lehetne, amely a Face ID szenzort használná távolságmérési adatok kinyerésére, majd azok továbbítására egy külső beágyazott rendszer felé.

- Az alkalmazás egy olyan API-végpontot biztosíthatna, amely folyamatosan közzétenné az aktuális mélységadatokat.
- Az adatokat Wi-Fi kapcsolaton keresztül olvashatná be például egy ESP32 mikrokontroller.
- Ez lehetővé tehetné a robot számára az akadályok pontosabb érzékelését és kikerülését valós időben.

Ez a koncepció tehát ötvözhetné a már meglévő, széles körben elterjedt hardver (iPhone) képességeit a költséghatékony fejlesztői környezetek rugalmasságával.

### Fejlesztési eszközök

**Programozási nyelvek:**

- Swift (az iOS alkalmazáshoz)
- C++ vagy MicroPython (az ESP32 programozásához)

**Könyvtárak és keretrendszerek:**

- ARKit / Vision Framework a mélységadatok kinyerésére
- URLSession vagy Alamofire az API kommunikációhoz
- MQTT vagy HTTP könyvtárak az ESP32 kommunikációhoz

**Fejlesztői környezet:**

- Xcode (iOS oldali fejlesztéshez)
- PlatformIO vagy Arduino IDE (ESP32 programozásához)


### Összegzés

Ez a szakdolgozat egy olyan alkalmazás lehetőségeit kutathatná, amely az iPhone Face ID szenzoraira építve kínálna olcsó és pontos távolságmérést hobbi és edukációs robotfejlesztési környezetben. A megoldás új, hozzáférhető alternatívát jelenthetne, amely a jelenlegi piac által hagyott űrt tölthetné ki.

***

## 3. Mountain bike felfüggesztés beállításokat támogató webalkalmazás

**Testreszabási javaslatokat nyújtó intelligens rendszer**

A modern mountain bike-ok felfüggesztése rendkívül sok paraméterrel rendelkezik, amelyek precíz hangolásával nagymértékben javítható a komfort, a stabilitás és a teljesítmény. A felhasználók többsége azonban nem tudja kihasználni ezeket a lehetőségeket, mert hiányzik a szakmai tudás a beállítások hatásairól.

**Technológiák:** C\#, Angular, ASP.NET Core, Entity Framework, SQL Server

### A probléma

A modern mountain bike-ok felfüggesztése rendkívül sok paraméterrel rendelkezik (pl. levegőnyomás, visszaút- és kompressziócsillapítás), amelyek precíz hangolásával nagymértékben javítható a komfort, a stabilitás és a teljesítmény. A felhasználók többsége azonban nem tudja kihasználni ezeket a lehetőségeket, mert:

- hiányzik a szakmai tudás a beállítások hatásairól,
- bizonytalanok abban, hogy a módosítás javít vagy ront a helyzeten,
- nem jegyzik fel és nem követik nyomon korábbi beállításaikat,
- sokszor egy „fix" alapkonfigurációval használják a kerékpárt minden terepen.

Ennek eredményeképp a kerékpár képességeit nem használják ki teljes mértékben, az élmény csökken, sőt helytelen beállítás esetén a biztonság is veszélybe kerülhet.

### Fontosság

A felfüggesztés helyes beállítása alapvetően meghatározza a mountain bike élményt és teljesítményt. Egy rosszul hangolt rendszer:

- kényelmetlen és rázós menetet eredményez,
- technikás terepen instabilitást és sérülésveszélyt is hordoz,
- a drágább, prémium kerékpárok esetében különösen kihasználatlan potenciált jelent.

Egy felhasználóbarát, adatbázis-alapú és visszajelzésekből tanuló alkalmazás lehetőséget adna a bringásoknak arra, hogy könnyebben megértsék a beállításokat, és tudatosan optimalizálják kerékpárjukat különböző terepviszonyokhoz.

### Megoldás

A tervezett webalkalmazás célja, hogy egyszerűen használható felületet biztosítson a felfüggesztés konfigurálásához és nyomon követéséhez. Fő funkciói:

- **Adatbázis alapú kiválasztás:** a felhasználó kiválaszthatja a kerékpárjához tartozó felfüggesztést a rendszer adatbázisából, az alapbeállításokkal együtt.
- **Beállítási útmutató:** lépésről-lépésre magyarázatot ad arról, hogy az egyes paraméterek milyen hatással vannak a kerékpár viselkedésére.
- **Konfigurációk mentése és összehasonlítása:** a beállítások elmenthetők, így a felhasználó több különböző konfigurációt tud tárolni és gyorsan visszaállítani.
- **Felhasználói visszajelzés → javaslat:**
    - Menet után a felhasználó egyszerű, hétköznapi nyelven ad visszajelzést (pl. „túl rázós volt a köves lejtőn", „nagyon mélyen ült a bringa az ugrásoknál").
    - A rendszer egy szabályrendszer alapján alakítja át ezt konkrét paramétermódosításokra (pl. levegőnyomás 5 PSI csökkentése, kompresszió puhítása, rebound gyorsítása).

**Fejlesztési potenciál:** későbbi bővítésként a rendszer képes lehet nyelvi modellek (pl. Gemini API) bevonására, amelyek a beszélt nyelven megadott visszajelzést automatikusan fordítanák konkrét beállítási paraméterekké, így még intuitívabbá téve a használatot.

### Fejlesztési eszközök

**Programozási nyelvek:**

- C\# (.NET backend)
- TypeScript (Angular frontend)

**Könyvtárak és keretrendszerek:**

- Angular (frontend egyoldalas alkalmazás)
- ASP.NET Core (REST API backend)
- Entity Framework Core (adatbáziskezelés és ORM)

**Adatbázis:**

- Microsoft SQL Server

**Fejlesztői környezet:**

- Visual Studio és Visual Studio Code
- Git verziókezelés
- Docker (opcionális konténerizáció)


### Összegzés

A szakdolgozat egy olyan webalkalmazás fejlesztését célozza, amely egyszerűsíti a mountain bike felfüggesztések beállítását, és a felhasználói visszajelzések alapján konkrét javaslatokat ad paraméterek módosítására. A megoldás hozzájárul a komfort, a teljesítmény és a biztonság növeléséhez, valamint lehetőséget ad az innovatív nyelvi modellek későbbi integrációjára is.

***

## Kapcsolat

Érdekel valamelyik téma? Vedd fel velem a kapcsolatot!

- [GitHub](https://github.com/asimoq/)
- [LinkedIn](https://www.linkedin.com/in/szczuka-bende/)

***

© 2025 Szczuka Bendegúz | Szakdolgozati Témák Showcase