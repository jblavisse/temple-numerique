---
tags:
- objectif
création: <% tp.file.creation_date() %>
piliers: []
missions: []
projets: []
trimestres: []
années: []
début:
fin_visée: 
fin_réelle: 
---

# Nouvel Objectif
## Pourquoi?
> ？

Priorité:: 1
Piliers: 
Missions:: 
Projets:: 
Trimestres:: 
Années:: 
Statut:: 
```dataviewjs
const {DvActions} = customJS
DvActions.getOutcomeStatusButtons({app, dv, luxon, that:this, outcome:dv.current()})
```
## Projets
```dataview
TABLE WITHOUT ID
    file.link AS "Project",
    Priority,
    Quarter,
    Status
FROM #project
WHERE contains(file.outlinks, this.file.link)
```
## Notes
