---
alias:
- 🗓 <% tp.date.now("YYYY") %>-S<% tp.date.now("WW") %>
- <% tp.date.now("YYYY") %>-S<% tp.date.now("WW") %>
tags:
- semaine
---

# 🗓 <% tp.date.now("YYYY") %>-S<% tp.date.now("WW") %>
[[<% tp.date.weekday("YYYY-MM-DD", 1) %>]] => [[<% tp.date.weekday("YYYY-MM-DD", 7) %>]]
Année:: [[<% tp.date.now("YYYY") %>]]
Trimestre:: [[<% tp.date.now("YYYY") %>Q<% tp.date.now("Q") %>]]
Mois: [[<% tp.date.now("YYYY-MM") %>|<% tp.date.now("MMMM") %>]]

Focus:: 

## Actions Effectuées

```dataviewjs
const {DvActions, ObsidianUtils} = customJS;
let week = luxon.DateTime.fromISO(this.current().file.name);
let weekActions = DvActions.getDoneActions({luxon, dv, start: week.startOf('week'), end: week.endOf('week')});
let groupedWeekActions = weekActions.groupBy(action => action["done-date"]);

for (let day of groupedWeekActions) {
    dv.header(3, day.key);
    dv.table(
        ["Item", "Priority", "Do Date", "Projects"],
        day.rows
            .map(action => [
                ObsidianUtils.getDisplayLink(action.file.name, action.alias[0]),
                action["priority"],
                action["do-date"],
                action["projects"]
            ])
    );
    dv.taskList(day.rows.file.tasks.where(t => !t.completed), true)
}
```
```toggl
SUMMARY FROM <% tp.date.weekday("YYYY-MM-DD", 1) %> TO <% tp.date.weekday("YYYY-MM-DD", 7) %>
SORT DESC
```

## I. Piliers

### Ma ligne directrice
- [ ] Passer en revue ma [[003 🧭 Guiding Principles|🧭 Guiding Principles]]


### Réflexion de la semaine
- [ ] Ajouter des [[710 🏆 Accomplishments]]
Wins:: 
- [ ] Ajouter des [[😫 Disappointments]]
Challenges:: 

```dataviewjs
let weekImprovements = dv.pages("#day")
    .where(p => p["week"] && p["week"].path == this.current().file.path)
    .where(p => p["improvement"])
    .array();
dv.table(
    ["Improvement", "Day"],
    weekImprovements.map(p => [
        p["Improvement"],
        p.file.link
    ])
);
```

Improvements:: 

### People
```dataviewjs
let week = luxon.DateTime.fromISO(this.current().file.name);
let people = dv.pages("#day")
    .where(p => {
        let day = luxon.DateTime.fromISO(p.file.name);
        return day >= week.startOf('week') && day <= week.endOf('week')
    })
    .flatMap(d => d.file.inlinks
        .map(l => dv.page(l))
        .where(l => l.file.tags.includes("#person"))
        .map(p => [d, p])
    )
    .groupBy(i => i[1].file.name);


for (let person of people) {
    dv.header("3", `[[${person.key}]]`);
    for (let day of person.rows) {
        let d = day[0];
        dv.el("p", `![[${person.key}#`+d.file.name+`]]`);
    }
}
if (people.length == 0) {
    dv.el("p", "No interactions with people this week...")
}
```

#### Intriguing Interactions



### Information
```dataviewjs
let week = luxon.DateTime.fromISO(this.current().file.name);
let infos = dv.pages("#day")
    .where(p => {
        let day = luxon.DateTime.fromISO(p.file.name);
        return day >= week.startOf('week') && day <= week.endOf('week')
    })
    .flatMap(d => d.file.inlinks
        .map(l => dv.page(l))
        .where(l => l.file.tags.includes("#information"))
        .map(p => [d, p])
    )
    .groupBy(i => i[1].file.name);


for (let info of infos) {
    dv.header("3", `[[${info.key}]]`);
    for (let day of info.rows) {
        let i = day[0];
        dv.el("p", `[[${info.key}#`+i.file.name+`]]`);
    }
}
if (infos.length == 0) {
    dv.el("p", "No information came in this week...")
}
```

## II. Pipelines

### Cleanup

- [ ] Review Flagged Emails, clear out.
- [ ] Desktop & Download Folder (Re-Locate or Delete)
- [ ] Process Physical Inbox

### Calendar

- [ ] Review last two weeks
- [ ] Review upcoming 3 weeks

### Tracking

- [ ] Review Active [[120 🧗 Projets|🧗 Projects]]
```dataviewjs
const {Constants, ObsidianUtils, DvActions} = customJS;

let activeProjects = dv.pages("#project")
    .where(p => p["status"] == Constants.project.status.active)
    .sort(p => p["priority"], 'asc');

for (let project of activeProjects) {
    dv.header(3, project.file.link);
    let projActions = project.file.inlinks
        .map(l => dv.page(l))
        .where(p => p.file.tags.includes("#action"))
        .where(p => p["projects"].map(p => p.path).includes(project.file.name));
    let activeActions = ObsidianUtils.activeActions(projActions);
    if (activeActions.length > 0) {
        let sortedActions = ObsidianUtils.sortActions(activeActions);
        dv.table(
            ["Item", "Priority", "Status", "Do Date"],
            sortedActions
                .map(action => [
                    ObsidianUtils.getDisplayLink(action.file.name, action.alias[0]),
                    action["priority"],
                    action["status"],
                    action["do-date"]
                ])
        );
    } else {
        dv.el("b", "Project has no active actions!")
    }
    dv.el("p", `![[${project.file.path}#Notes]]`);
}
```

- [ ] Review & Update [Azure DevOps](https://msdata.visualstudio.com/Vienna/_queries/query/127dcf1b-6e50-4bf1-bcbc-75a2dd71ea86/)
- [ ] Review "Waiting" Actions

## III. Review Finished!
Reviewed::