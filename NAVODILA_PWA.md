# 📱 NAVODILA ZA NAMESTITEV PWA APLIKACIJE

## Finančni Kalkulator - PWA verzija

Vaša aplikacija je zdaj **Progressive Web App (PWA)** - kar pomeni, da jo lahko namestite na telefon kot pravo aplikacijo!

---

## ✨ PREDNOSTI PWA APLIKACIJE

✅ **Deluje brez interneta** - Service Worker omogoča offline uporabo  
✅ **Hitreje se naloži** - Podatki so shranjeni v cache  
✅ **Ikona na domačem zaslonu** - Kot prava aplikacija  
✅ **Polnozaslonski način** - Brez brskalniške vrstice  
✅ **Avtomatsko shranjevanje** - Vsi podatki ostanejo  

---

## 📲 KAKO NAMESTITI - ANDROID

### Metoda 1: Preko gumba v aplikaciji
1. Odprite `financni_kalkulator.html` v Chrome brskalniku
2. Počakajte, da se prikaže gumb **"📱 NAMESTI NA TELEFON"**
3. Kliknite na gumb
4. Potrdite namestitev
5. Ikona se bo pojavila na domačem zaslonu!

### Metoda 2: Ročno
1. Odprite aplikacijo v Chrome
2. Pritisnite na tri pike (⋮) v zgornjem desnem kotu
3. Izberite **"Dodaj na začetni zaslon"** ali **"Install app"**
4. Potrdite ime aplikacije
5. Aplikacija je nameščena!

---

## 🍎 KAKO NAMESTITI - iOS (iPhone/iPad)

1. Odprite `financni_kalkulator.html` v Safari brskalniku
2. Pritisnite na gumb za deljenje (kvadrat s puščico ↑)
3. Pomaknite se dol in izberite **"Add to Home Screen"**
4. Potrdite ime aplikacije: "Finančni Plan"
5. Kliknite **"Add"**
6. Ikona se bo pojavila na domačem zaslonu!

**OPOMBA:** Na iOS **morate** uporabiti Safari brskalnik!

---

## 💻 KAKO NAMESTITI - DESKTOP (Chrome, Edge)

1. Odprite `financni_kalkulator.html` v brskalniku
2. Kliknite na ikono za namestitev v naslovni vrstici (➕ ali ⬇)
3. Potrdite namestitev
4. Aplikacija se bo odprla v ločenem oknu

---

## 🚀 UPORABA APLIKACIJE

Po namestitvi lahko:
- Odprete aplikacijo s klikom na ikono
- Uporabljate brez internetne povezave
- Vsi podatki se avtomatsko shranjujejo
- Aplicirka deluje hitreje kot v brskalniku

---

## 🗂️ DATOTEKE

Vaš PWA paket vsebuje:
- `financni_kalkulator.html` - Glavna aplikacija
- `manifest.json` - Konfiguracija PWA
- `service-worker.js` - Za offline funkcionalnost
- `NAVODILA_PWA.md` - Ta dokument

---

## 🌐 KAKO HOSTIRATE (opcijsko)

Če želite aplikacijo hostiati online:

1. **GitHub Pages** (brezplačno):
   - Naložite vse datoteke v GitHub repository
   - Omogočite GitHub Pages
   - Delite povezavo

2. **Netlify** (brezplačno):
   - Povlecite mape na netlify.com/drop
   - Dobite javno URL povezavo

3. **Vaš lastni server**:
   - Naložite vse datoteke v isto mapo
   - Dostopajte preko HTTPS (obvezno za PWA!)

**POMEMBNO:** PWA zahteva HTTPS (razen na localhost)

---

## 🔧 ODPRAVLJANJE TEŽAV

**Gumb "NAMESTI NA TELEFON" se ne prikaže:**
- Preverite, da uporabljate HTTPS (ali localhost)
- Aplikacija morda že je nameščena
- Preverite, da ste v Chrome/Safari
- Počistite cache brskalnika

**Aplikacija ne deluje offline:**
- Osvežite aplikacijo (potegnite navzdol)
- Počakajte, da se service worker registrira
- Preverite console za napake

**Ikona ne prikazuje emojija:**
- Nekatere naprave ne podpirajo emoji ikon
- To je normalno in ne vpliva na funkcionalnost

---

## 📊 TEHNIČNE INFORMACIJE

- **Framework:** Vanilla JavaScript (brez odvisnosti)
- **Storage:** LocalStorage + Service Worker Cache
- **Offline:** Da (Service Worker)
- **Velikost:** ~50KB (zelo majhna!)
- **Podprto:** Chrome, Safari, Edge, Firefox

---

## ✅ KONČNO

Vaša aplikacija je zdaj pripravljena! 

Namestite jo na telefon in vodite svoje finance kjer koli!

**Vprašanja ali problemi?**
Preprosto odprite aplikacijo in začnite uporabljati vse funkcije:
- Dve-fazno načrtovanje
- Sledenje napredku
- Avtomatsko shranjevanje
- Matematična analiza

Srečno s finančnim načrtovanjem! 💰✈️
