---
alias:
- 🗓 Semaines
tags:
- dashboard
---

# 🗓 Semaines

```dataviewjs
const {DvActions} = customJS
DvActions.getNewFileButton({
    app,
    dv,
    luxon,
    that:this,
    buttonName:"🗓 Nouvelle Semaine",
    folder:"200 ♻️ Cycles/520 🗓 Semaines",
    nameFormat:"yyyy'-W'WW",
    split:true
})
```

## Les 4 Dernières Semaines

```dataviewjs
const {Constants, ObsidianUtils} = customJS;
let weeks = dv.pages("#week");
let fourWeeks = luxon.Duration.fromISO('P3W');
let currentWeek = luxon.DateTime.now().toFormat("yyyy'-W'WW");
let fourWeeksAgo = luxon.DateTime.now().minus(fourWeeks).toFormat("yyyy'-W'WW");
let activeWeeks = weeks
    .where(p => p.file.name >= fourWeeksAgo && p.file.name <= currentWeek)
    .sort(p => p.file.name, 'desc');

dv.table(
    ["Week", "Wins", "Challenges", "Improvements", "Reviewed"],
    activeWeeks.map(p => [
        p.file.link,
        p["wins"],
        p["challenges"],
        p["improvements"],
        p["Reviewed"]
    ])
);


for (let week of activeWeeks) {
    dv.header("3", week.file.link);
    dv.header("4", "Wins");
    dv.el("p", week["wins"]);
    dv.header("4", "Challenges");
    dv.el("p", week["challenges"]);
    dv.header("4", "Improvements");
    dv.el("p", week["improvements"]);
    dv.header("4", `Reviewed: ${week["reviewed"]}`);
}
```
