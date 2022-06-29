class Constants {
    constructor() {
        // Action
        this.action = {};
        // Action Status
        this.action.status = {
            active: "🟢 Active",
            breakdown: "➗ En attente",
            delegate: "🎁 Deléguer",
            nextUp: "🔜 Prochainement",
            done: "☑️ Finie",
            removed: "❌ Supprimée",
        };
        this.action.status.orderedMap = new Map();
        this.action.status.orderedMap.set(this.action.status.active, 0);
        this.action.status.orderedMap.set(this.action.status.breakdown, 1);
        this.action.status.orderedMap.set(this.action.status.delegate, 2);
        this.action.status.orderedMap.set(this.action.status.nextUp, 3);
        this.action.status.orderedMap.set(this.action.status.done, 4);
        this.action.status.orderedMap.set(this.action.status.removed, 5);
        // Action Priority
        this.action.priority = {
            immediate: "🟧 👀",
            quick: "⬜️ 💨",
            scheduled: "🟪 ⌚️",
            one: "🟥 1ère",
            two: "🟩 2nde",
            three: "🟦 3ème",
            four: "🟧 4ème",
        };
        this.action.priority.orderedMap = new Map();
        this.action.priority.orderedMap.set(this.action.priority.immediate, 0);
        this.action.priority.orderedMap.set(this.action.priority.quick, 1);
        this.action.priority.orderedMap.set(this.action.priority.scheduled, 2);
        this.action.priority.orderedMap.set(this.action.priority.one, 3);
        this.action.priority.orderedMap.set(this.action.priority.two, 4);
        this.action.priority.orderedMap.set(this.action.priority.three, 5);
        this.action.priority.orderedMap.set(this.action.priority.four, 6);

        // Project
        this.project = {};
        // Project Status
        this.project.status = {
            active: "🟢 Actif",
            nextUp: "🔜 Prochainement",
            onHold: "⏸ Sur pause",
            future: "✨ Plus tard",
            completed: "☑️ Complété",
        };
        this.project.status.orderedMap = new Map();
        this.project.status.orderedMap.set(this.project.status.active, 0);
        this.project.status.orderedMap.set(this.project.status.nextUp, 1);
        this.project.status.orderedMap.set(this.project.status.onHold, 2);
        this.project.status.orderedMap.set(this.project.status.future, 3);
        this.project.status.orderedMap.set(this.project.status.completed, 4);

        // Outcome
        this.outcome = {};
        // Outcome Status
        this.outcome.status = {
            underway: "🟢 En cours",
            notStarted: "✨ Pas commencé",
            completed: "☑️ Complété",
        };
        this.outcome.status.orderedMap = new Map();
        this.outcome.status.orderedMap.set(this.outcome.status.underway, 0);
        this.outcome.status.orderedMap.set(this.outcome.status.notStarted, 1);
        this.outcome.status.orderedMap.set(this.outcome.status.completed, 2);

        // Objective
        this.objective = {};
        // Outcome Status
        this.objective.status = {
            offTrack: "🚨 Hors piste",
            underway: "🟢 En cours",
            paused: "⏸ À l'arrêt",
            waiting: "✨ En attente",
            completed: "☑️ Complété",
        };
        this.objective.status.orderedMap = new Map();
        this.objective.status.orderedMap.set(this.objective.status.offTrack, 0);
        this.objective.status.orderedMap.set(this.objective.status.underway, 1);
        this.objective.status.orderedMap.set(this.objective.status.paused, 2);
        this.objective.status.orderedMap.set(this.objective.status.waiting, 3);
        this.objective.status.orderedMap.set(this.objective.status.completed, 4);
    }
}