// Journal Entry Variables ("Date, Concept, Entry, and Mood"), journalEntriesSection Function / Parameters

let date = renderJournalEntries ("Date:", objectsJournalEntry[0].date);
let concept = renderJournalEntries ("Concept:", objectsJournalEntry[0].concept);
let entry = renderJournalEntries ("Entry:", objectsJournalEntry[0].entry);
let mood = renderJournalEntries ("Mood:", objectsJournalEntry[0].mood);
let journalEntry = `${date} ${concept} ${entry} ${mood}`

// Build HTMLString
let journalHTMLString = heading + journalEntry;
// Print HTMLString to DOM (within "Journal Entries" section)
console.log(journalHTMLString);
document.querySelector("#entryLog").innerHTML = journalHTMLString;
