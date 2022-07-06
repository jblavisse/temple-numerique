---
alias:
- <% tp.date.now("YYYY-MM-DD") %>
- <% tp.date.now(format="dddd D MMMM") %>
- 🌄 <% tp.date.now(format="dddd D MMMM") %>
tags:
- iso<% tp.date.now("YYYY-MM-DD") %>
- jour
création: <% tp.file.creation_date() %>
---
[[<% tp.date.now("YYYY-MM-DD", -1) %>]] <=> [[<% tp.date.now("YYYY-MM-DD", 1) %>]]

# 🌄 <% tp.date(format="dddd D MMMM") %>
Semaine:: [[<% tp.date.now("YYYY") %>-W<% tp.date.now("WW") %>]]
Mois:: [[<% tp.date.now("YYYY-MM") %>|<% tp.date.now("MMMM") %>]]
Trimestre:: [[<% tp.date.now("YYYY") %>Q<% tp.date.now("Q") %>]]
Année:: [[<% tp.date.now("YYYY") %>]]

## Routine matinale

### Instant gratitude
> ?

### Ce qui rendrait ma journée géniale
- 

## Actions du jour
 ```dataviewjs
const {DvActions} = customJS
DvActions.getTodayActionTable({app, dv, luxon, that:this})
```



# Fin de journée
### Actions complétées

```dataviewjs
const {Constants, ObsidianUtils} = customJS;
let todayActions = this.current().file.inlinks
    .map(l => dv.page(l))
    .where(p => p.file.tags.includes("#action"))
    .where(p => p["status"] == Constants.action.status.done);
let sortedActions = ObsidianUtils.sortActions(todayActions);
dv.table(
	["Action", "Priority", "Do Date", "Status"],
    sortedActions.map(p => ["[["+p.file.name+ "|"+p.alias[0].substring(0, 60)+"]]" , p["Priority"], p["Do Date"], p["Status"]]));
```

### Victoires du Jour
-
-

### Pistes d'Amélioration

