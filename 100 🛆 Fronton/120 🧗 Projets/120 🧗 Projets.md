---
alias:
- 🧗 Projets
tags:
- dashboard
---

# 🧗 Projets
## Actif
```dataviewjs
const {DvActions} = customJS
DvActions.getNewFileButton({
    app,
    dv,
    luxon,
    that:this,
    buttonName:"🧗 Nouveau Projet",
    folder:"100 🛆 Fronton/120 🧗 Projets",
    split:true
})
```
```dataviewjs
const {Constants, ObsidianUtils} = customJS;
let projects = dv.pages("#project");
let activeProjects = projects
    .where(p => p["status"] == Constants.project.status.active)
    .sort(p => p["priority"], 'asc');
dv.table(
    ["Projet", "Priorité", "Trimestre", "Status"],
    activeProjects.map(p => [
        p.file.link,
        p["priority"],
        p["quarter"],
        p["status"]
    ])
);
```

### Prochainement
```dataviewjs
const {Constants, ObsidianUtils} = customJS;
let projects = dv.pages("#project");
let activeProjects = projects
    .where(p => (p["status"] == Constants.project.status.nextUp) || (p["status"] == Constants.project.status.onHold))
    .sort(p => p["priority"], 'desc');
dv.table(
    ["Project", "Priority", "Quarter", "Status"],
    activeProjects.map(p => [
        p.file.link,
        p["priority"],
        p["quarter"],
        p["status"]
    ])
);
```

### Plus tard
```dataviewjs
const {Constants, ObsidianUtils} = customJS;
let projects = dv.pages("#project");
let activeProjects = projects
    .where(p => p["status"] == Constants.project.status.future)
    .sort(p => p["priority"], 'desc');
dv.table(
    ["Project", "Priority", "Quarter", "Status"],
    activeProjects.map(p => [
        p.file.link,
        p["priority"],
        p["quarter"],
        p["status"]
    ])
);
```

## Complété
```dataviewjs
const {Constants, ObsidianUtils} = customJS;
let projects = dv.pages("#project");
let activeProjects = projects
    .where(p => p["status"] == Constants.project.status.completed)
    .sort(p => p["priority"], 'desc');
dv.table(
    ["Project", "Priority", "Quarter", "Status"],
    activeProjects.map(p => [
        p.file.link,
        p["priority"],
        p["quarter"],
        p["status"]
    ])
);
```
