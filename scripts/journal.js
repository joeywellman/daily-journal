// Journal Entries Array

const objectsJournalEntry = [
        {
            date: "02/01/2019",
            concept: "JSON",
            entry: "It snowed.",
            mood: "Sad"
        },
    ]

//  Function to create "Journal Entries" Section Header
let h1journalEntry = function(text, style) {
    return `<h3 class="${style}">${text}</h3>`
}  
let heading = h1journalEntry("Journal Entry", "h3");

//  Function and Parameters / Arguments to Create "Date, Concept, Entry, and Mood" Sections
let renderJournalEntries = function(title, text) {
  return `<section class = "entrySect"><h4>${title}</h4>
  <p section class = "entryPara">${text}</p></section>`
}
// Journal Entry Variables ("Date, Concept, Entry, and Mood"), journalEntriesSection Function / Parameters
let date = renderJournalEntries ("Date:", objectsJournalEntry[0].date);
let concept = renderJournalEntries ("Concept:", objectsJournalEntry[0].concept);
let entry = renderJournalEntries ("Entry:", objectsJournalEntry[0].entry);
let mood = renderJournalEntries ("Mood:", objectsJournalEntry[0].mood);
let journalEntry = `${date} ${concept} ${entry} ${mood}`; 

// Build HTMLString
let journalHTMLString = heading + journalEntry;
// Print HTMLString to DOM (within "Journal Entries" section)
console.log(journalHTMLString);
document.querySelector("#entryLog").innerHTML = journalHTMLString;

//End of Journal Entry article