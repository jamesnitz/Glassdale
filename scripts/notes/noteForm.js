import { useNotes, editNote } from "./noteDataProvider.js"

//always will need a target to render everything
//always will need the eventHub targeting the main container for events to bubble up to
//will need a main function to wrap it all in
const contentTarget = document.querySelector(".noteFormContainer") 
const eventHub = document.querySelector(".container")
export const NoteFormComponent = () => {

    //listening for when the edit button is clicked
    eventHub.addEventListener("editButtonClicked", event => {
        const noteToBeEdited = event.detail.noteId
        const allNotesArray = useNotes()
        const foundNote = allNotesArray.find(
           (currentNote) => {
               return currentNote.id === parseInt(noteToBeEdited, 10)
           }      
       )

       //explain this part
       document.querySelector("#note-id").value = foundNote.id
       document.querySelector("#note-text").value = foundNote.notes
       document.querySelector("#note-suspect").value = foundNote.suspect
       document.querySelector("#note-date").value = foundNote.date
    })

    // The eventHub is listening for a "click" event.
    //If that click event's target's id is "save note" then it dispatches.
  eventHub.addEventListener("click", clickEvent => {
    if (clickEvent.target.id === "saveNote") {
        debugger
        const hiddenInputValue = document.querySelector("#note-id").value
        console.log("hiddenval",hiddenInputValue)
        if (hiddenInputValue !== "") {
            const editedNote = {
                id: parseInt(document.querySelector("#note-id").value, 10),
                notes: document.querySelector("#note-text").value,
                suspect: document.querySelector("#note-suspect").value,
                date: document.querySelector("#note-date").value
            }
            editNote(editedNote)
            .then(() => {
                eventHub.dispatchEvent(new CustomEvent("noteHasBeenEdited"))
            })
            .then(() => {
                document.querySelector("#note-id").value = "";
                document.querySelector("#note-text").value = "";
                document.querySelector("#note-suspect").value = "";
                document.querySelector("#note-date").value = "";
            })
        } else {
 // Make a new object representation of a note.
 //These id values are coming from the render function which is invoked on page load.
        let noteText = document.querySelector("#note-text").value 
        let noteSuspect = document.querySelector("#note-suspect").value 
        let noteDate = document.querySelector("#note-date").value
        
        //Creating a new CustomEvent named "noteSaved" to dispatch to the noteList page.
      const newNote = new CustomEvent("noteSaved", {
          detail: { 

              // Key/value pairs here
              notes: noteText,
              date: noteDate,
              suspect: noteSuspect
              // Change API state and application state
          }
            })
            eventHub.dispatchEvent(newNote)
        }
    }
    })




 
    // This ONLY RENDERS THE BUTTONS to the DOM targeting the noteFormContainer
    const render = () => {
        contentTarget.innerHTML = ` 
        <input type="hidden" class="hiddenId" id="note-id" />
        <input type="text" id="note-text">
        <input type="text" id="note-suspect">
        <input type="date" id="note-date">
        <button id="saveNote">Save Note</button>
        <button id="showNote">Show Notes</button>
        <button id="witness">Witness Statements</button>
        `
    }

    render()
}
