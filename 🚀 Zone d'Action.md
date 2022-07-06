---
tags:
- tableau_de_bord
title: 🚀 Zone d'Action
---


```dataviewjs
const {DvActions} = customJS
//DvActions.getNewActionButton({app, dv, luxon, that:this})
DvActions.getNewFileButton({
    app,
    dv,
    luxon,
    that:this,
    buttonName:"🛠 Nouvelle Action",
    folder:"100 🛆 Processus/110 🛠 Actions",
    split:true
})
```

## Aujourd'hui

 ```dataviewjs
const {DvActions, ObsidianUtils} = customJS;
// TODO: Split this out and debug priorty ordering.
//DvActions.getTodayActionTable({app, dv, luxon, that:this})

let today = luxon.DateTime.now();

let todayActions = DvActions.getDoToday({luxon, dv});
dv.table(
   ["Item", "Priorité", "Date Cible", "Statut", "Projets", ""],
   todayActions.map(action => [
       ObsidianUtils.getDisplayLink(action.file.name, action.alias[0]),
       action["priority"],
       action["do-date"],
       action["status"],
       action["projects"],
       DvActions.getActionDoneButton({that:this, action, app, luxon})
   ])
);
```

## Demain

```dataviewjs
const {DvActions, ObsidianUtils} = customJS;
// TODO: Split this out and debug priorty ordering.
//DvActions.getTodayActionTable({app, dv, luxon, that:this})
let tomorrow = luxon.DateTime.now().plus(luxon.Duration.fromMillis(86400000)); // 1 day in milliseconds
dv.el("p", "🌄 " + dv.fileLink(tomorrow.toFormat("yyyy-MM-dd")));
let tomorrowActions = DvActions.getActiveActions({luxon, dv, start: tomorrow.startOf('day'), end: tomorrow.endOf('day')});
dv.table(
    ["Item", "Priorité", "Date Cible", "Statut", "Projets", ""],
    tomorrowActions.map(action => [
        ObsidianUtils.getDisplayLink(action.file.name, action.alias[0]),
        action["priority"],
        action["do-date"],
        action["status"],
        action["projects"],
        DvActions.getActionDoneButton({that:this, action, app, luxon})
    ])
);
// Planning Headings from days notes
for (let action of tomorrowActions) {
    dv.el("p", action.file.link);
    dv.el("p", `[[${action.file.path}#${tomorrow.toFormat("yyyy-MM-dd")}]]`)
}
```

## Semaine à venir

```dataviewjs
const {DvActions, ObsidianUtils} = customJS;
let tomorrow = luxon.DateTime.now().plus(luxon.Duration.fromMillis(86400000)); // 1 day in milliseconds
let sevenDays = luxon.DateTime.now().plus(luxon.Duration.fromMillis(86400000 * 7)); // 7 days in milliseconds
let sevenDaysActions = DvActions.getActiveActions({luxon, dv, start: tomorrow.startOf('day'), end: sevenDays.endOf('day')});
let groupedNext7Days = sevenDaysActions.groupBy(action => action["do-date"]);

for (let day of groupedNext7Days) {
    dv.header(3, day.key);
    dv.table(
        ["Item", "Priorité", "Status", "Projets"],
        day.rows
            .map(action => [
                ObsidianUtils.getDisplayLink(action.file.name, action.alias[0]),
                action["priority"],
                action["status"],
                action["projects"]
            ])
    );
}
```

## Calendrier - Dates Cibles

```dataviewjs
/*
const { DvActions } = customJS;
const { renderCalendar } = app.plugins.plugins["obsidian-full-calendar"];
let now = luxon.DateTime.now();
let nextDays = luxon.Duration.fromISO("P1W");
let actions = DvActions.getActions({
    luxon,
    dv,
    start: now,
    end: now.plus(nextDays).endOf('day')
}).where(a => a["startTime"] != null && a["endTime"] != null);
actions = actions.map(a => {
        return {
            startDate: a["date"],
            startTime: a["startTime"],
            endTime: a["endTime"],
            id: `${a.file.name}`,
            title: a["title"]
        }
    }).array();

dv.el("p", actions)

let calendar = renderCalendar(
    this.container,
    actions
);
calendar.render();
*/
```