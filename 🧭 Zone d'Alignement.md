---
tags:
- dashboard
icon: 🧭
---

# Zone d’Alignement

## 🧭 Ligne Directrice
![[003 🧭 Guiding Principles#🧭 Guiding Principles]]

## Missions


## Routines


## Cycles

Aperçu Journalier

### Aperçu Hebdomadaire

![[220 🗓 Semaines|🗓 Semaines]] 

### Aperçu Mensuel

![[550 📅 Months|📅 Months]]

### Aperçu Trimestriel

![[570 ⌛️ Quarters]]

### Programme de l'Année & Aperçu

```dataviewjs
const {Constants, ObsidianUtils} = customJS;
let years = dv.pages("#year");
let activeYears = years
    .where(p => p.file.name == luxon.DateTime.now().toFormat("yyyy"))
    .sort(p => p.file.name, 'asc');
activeYears.mutate(p => {
    p["objectives"] = p.file.inlinks
        .map(l => dv.page(l))
            .where(p => p.file.tags.includes("#objective"));
    p["outcomes"] = p.file.inlinks
            .map(l => dv.page(l))
            .where(p => p.file.tags.includes("#outcome"));
})
dv.table(
    ["Year", "⠀⠀⠀⠀⠀⠀⠀⠀⠀Objectives⠀⠀⠀⠀⠀⠀⠀⠀⠀", "⠀⠀⠀⠀⠀⠀⠀⠀⠀Outcomes⠀⠀⠀⠀⠀⠀⠀⠀⠀"],
    activeYears.map(p => [
        p.file.link,
        p["objectives"].map(p => p.file.link),
        p["outcomes"].map(p => p.file.link),
        p["status"]
    ])
);
```


