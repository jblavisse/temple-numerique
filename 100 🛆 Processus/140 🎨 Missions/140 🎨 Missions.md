---
alias:
- 🎨 Missions
tags:
- tableau_de_bord
---
# 🎨 Missions

- Bien gérer mes comptes et ma paperasse
- Etre passionné par de nouveaux sujets

## Active
```dataviewjs
const {DvActions} = customJS
DvActions.getNewFileButton({
    app,
    dv,
    luxon,
    that:this,
    buttonName:"🎨 New Objective",
    folder:"300 🚰 Pipelines/370 🎨 Objectives",
    split:true
})
```
### Underway
```dataviewjs
const {Constants, ObsidianUtils} = customJS;
let objectives = dv.pages("#objective");
let underwayObjectives = objectives
    .where(p => (p["status"] == Constants.objective.status.underway) || (p["status"] == Constants.objective.status.offTrack)|| (p["status"] == Constants.objective.status.paused))
    .sort(p => p["priority"], 'desc');
dv.table(
    ["Objective", "Priority", "Outcomes", "Years", "Status"],
    underwayObjectives.map(p => [
        p.file.link,
        p["priority"],
        p.file.inlinks
            .map(l => dv.page(l))
            .where(p => p.file.tags.includes("#outcome"))
            .map(p => p.file.link),
        p["years"],
        p["status"]
    ])
);
```
### Not Started
```dataviewjs
const {Constants, ObsidianUtils} = customJS;
let objectives = dv.pages("#objective");
let underwayObjectives = objectives
    .where(p => p["status"] == Constants.objective.status.waiting)
    .sort(p => p["priority"], 'desc');
dv.table(
    ["Objective", "Priority", "Outcomes", "Years", "Status"],
    underwayObjectives.map(p => [
        p.file.link,
        p["priority"],
        p.file.inlinks
            .map(l => dv.page(l))
            .where(p => p.file.tags.includes("#outcome"))
            .map(p => p.file.link),
        p["years"],
        p["status"]
    ])
);
```

## Completed
```dataviewjs
const {Constants, ObsidianUtils} = customJS;
let objectives = dv.pages("#objective");
let underwayObjectives = objectives
    .where(p => p["status"] == Constants.objective.status.completed)
    .sort(p => p["priority"], 'desc');
dv.table(
    ["Objective", "Priority", "Outcomes", "Years", "Status"],
    underwayObjectives.map(p => [
        p.file.link,
        p["priority"],
        p.file.inlinks
            .map(l => dv.page(l))
            .where(p => p.file.tags.includes("#outcome"))
            .map(p => p.file.link),
        p["years"],
        p["status"]
    ])
);
```