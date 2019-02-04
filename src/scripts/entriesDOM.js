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