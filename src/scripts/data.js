// Journal Entries Array

const objectsJournalEntry = [
    {
        date: "02/01/2019",
        concept: "JSON",
        entry: "It snowed.",
        mood: "Sad"
    },
]

// API Access Module

const API = {
    getJournalEntries: function () {
        return fetch("http://localhost:3000/entries")
            .then(response => response.json())
    }
}

