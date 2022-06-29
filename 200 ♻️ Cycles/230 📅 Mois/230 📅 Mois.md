---
alias:
- 📅 Mois
tags:
- dashboard
---

# 📅 Mois

```dataviewjs
const {DvActions} = customJS
DvActions.getNewFileButton({
    app,
    dv,
    luxon,
    that:this,
    buttonName:"📅 Nouveau Mois",
    folder:"200 ♻️ Cycles/230 📅 Mois",
    nameFormat:"yyyy-MM",
    split:true
})
```

## Les 3 derniers mois

```dataviewjs
const {Constants, ObsidianUtils} = customJS;
let months = dv.pages("#month");
let threeMonths = luxon.Duration.fromISO('P3M');
let currentMonth = luxon.DateTime.now().toFormat("yyyy-MM");
let threeMonthsAgo = luxon.DateTime.now().minus(threeMonths).toFormat("yyyy-MM");
let recentMonths = months
    .where(p => p.file.name >= threeMonthsAgo && p.file.name <= currentMonth)
    .sort(p => p.file.name, 'desc');

dv.table(
    ["Mois", "Victoires", "Challenges", "Améliorations", "Revu"],
    recentMonths.map(p => [
        p.file.link,
        p["wins"],
        p["challenges"],
        p["improvements"],
        p["Reviewed"]
    ])
);
```
