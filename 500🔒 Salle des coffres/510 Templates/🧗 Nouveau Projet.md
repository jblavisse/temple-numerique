---
tags:
- projet
création: <% tp.file.creation_date() %>
piliers: []
objectifs: []
année: []
trimestre: []
début:
fin: 
---

# Nouveau Projet

Priorité:: 1
Piliers:: 
Objectifs:: 
Annnée:: 
Trimestre:: 
Statut:: 
```dataviewjs
const {DvActions} = customJS
DvActions.getProjectStatusButtons({app, dv, luxon, that:this, project:dv.current()})
```

## Pourquoi?
> ？

## Actions
```dataviewjs
const {DvActions} = customJS
DvActions.getNewActionButtonContextAware({
    app,
    dv,
    luxon,
    that:this,
    project:dv.current(),
    split:true
})
```

### A faire
```dataviewjs
const {Constants, ObsidianUtils} = customJS;
let projActions = this.current().file.inlinks
    .map(l => dv.page(l))
    .where(p => p.file.tags.includes("#action"))
    .where(p => p["projects"].map(p => p.path).includes(this.current().file.name));
let activeActions = ObsidianUtils.activeActions(projActions);
let sortedActions = ObsidianUtils.sortActions(activeActions);
//dv.el("b", activeActions);
dv.table(
	["Action", "Priority", "Do Date", "Status"],
    sortedActions.map(p => ["[["+p.file.name+ "|"+p.alias[0].substring(0, 60)+"]]" , p["Priority"], p["Do Date"], p["Status"]]));
```

### Terminé
```dataviewjs
const {Constants, ObsidianUtils} = customJS;
let projActions = this.current().file.inlinks
    .map(l => dv.page(l))
    .where(p => p.file.tags.includes("#action"))
    .where(p => p["projects"].map(p => p.path).includes(this.current().file.name))
    .where(p => p["status"] == Constants.action.status.done);
let sortedActions = ObsidianUtils.sortActions(projActions);
dv.table(
	["Action", "Priority", "Do Date", "Status"],
    sortedActions.map(p => ["[["+p.file.name+ "|"+p.alias[0].substring(0, 60)+"]]" , p["Priority"], p["Do Date"], p["Status"]]));
```

## Notes
