---
tags:
- objective
création: <% tp.file.creation_date() %>
piliers: []
années: []
categorie: 
début: 
fin: 
---

# Nouvelle Mission
Priorité:: 1
Pilliers:: 
Années:: 
Statut:: 
```dataviewjs
const {DvActions} = customJS
DvActions.getObjectiveStatusButtons({app, dv, luxon, that:this, objective:dv.current()})
```

## Pourquoi?
> ？

## Comment?
> ?

Challenges:: 

## Objectifs
```dataviewjs
const {Constants, ObsidianUtils} = customJS;
let objectiveOutcomes = this.current().file.inlinks
    .map(l => dv.page(l))
    .where(p => p.file.tags.includes("#outcome"));
let sortedOutcomes = ObsidianUtils.sortOutcomes(objectiveOutcomes);
dv.table(
    ["Outcome", "Priority", "Quarters", "Status"],
    sortedOutcomes.map(p => [p.file.link, p["priority"], p["quarters"], p["status"]])
);
```

## Notes
