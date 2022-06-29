---
alias:
- 🌄 Jours
tags:
- dashboard
---

# 🌄 Jours

```dataviewjs
const {DvActions} = customJS
DvActions.getNewFileButton({
    app,
    dv,
    luxon,
    that:this,
    buttonName:"🌄 Nouveau Jour",
    folder:"200 ♻️ Cycles/210 🌄 Jours",
    nameFormat:"yyyy-MM-dd",
    split:true
})
```

## Les 7 Derniers Jours

```dataviewjs
const {Constants, ObsidianUtils} = customJS;
let days = dv.pages("#day");
let oneWeek = luxon.Duration.fromISO('P1W');
let currentDay = luxon.DateTime.now().toFormat("yyyy-MM-dd");
let oneWeekAgo = luxon.DateTime.now().minus(oneWeek).toFormat("yyyy-MM-dd");
let activeDays = days
    .where(p => p.file.name >= oneWeekAgo && p.file.name <= currentDay)
    .sort(p => p.file.name, 'desc');

dv.table(
    ["Day", "Sleep Time", "Awake Time", "Total Sleep", "Improvements", "Weight"],
    activeDays.map(p => [
        p.file.link,
        p["sleep-start-time"],
        p["awake-time"],
        p["total-sleep"],
        p["improvements"],
        p["weight"]
    ])
);
```
