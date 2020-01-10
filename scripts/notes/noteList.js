//importing the data along with the individual note component
import { useNotes, saveNote, getNotes, deleteNote, editNote } from "./noteDataProvider.js";
import noteComponent from "./note.js";

const eventHub = document.querySelector(".container")
const contentElement =  document.querySelector(".notes")

export const noteListComponent = () => {
  eventHub.addEventListener("noteHasBeenEdited", event => {
    const updatedNotes = useNotes()
    render(updatedNotes)
})

//this is waiting to hear the Event Dispatch "noteSaved". When heard(clicked) SaveNote is invoked with the new note values.
//then the collection is updated with the new/updated notes array
  eventHub.addEventListener("noteSaved", event => {
    let newCollection = []
    saveNote(event.detail)
    .then(() => newCollection= useNotes())
    .then(
      () => {
        let newNotes = useNotes()
        render(newNotes)
      }
    )
          
  })
//Using the eventHub this is listening when the showNote button is clicked.
//When clicked the document is queried and if the element with the class of notes' innerHTML is empty it GETSNotes
//Then invoke useNotes. This allows a rendering of the up-to-date array.
  eventHub.addEventListener("click", event => {
    if (event.target.id === "showNote") {
      if (document.querySelector(".notes").innerHTML === "") {
        document.querySelector("#showNote").innerHTML = "Hide Notes"
        getNotes().then(
          () => {
            let notes = useNotes()
            render(notes)
          }
          )}
          //If the notes are on the DOM, the click event will empty the inner HTML space they occupy
          else{
        document.querySelector("#showNote").innerHTML = "Show Notes"
        document.querySelector(".notes").innerHTML = ""
      }
    }
  })

  //deletes Notes on click
  eventHub.addEventListener("click", clickEvent => {
    if (clickEvent.target.id.startsWith("deleteNote--")) {
      console.log("delete has been clicked")
        const [prefix, id] = clickEvent.target.id.split("--")
      console.log(id)
        //nvoke the function that performs the delete operation. Then invokes useNotes and renders the list
       deleteNote(id).then( 
         () =>{
            const newNotes = useNotes()
            render(newNotes)
         } 
       )}

       //edit button
    if (clickEvent.target.id.startsWith("editNote--")) {
          const [prefix, id] = clickEvent.target.id.split("--")
          const editEvent = new CustomEvent("editButtonClicked", {
            detail: {
              noteId: id
            }
          })
         eventHub.dispatchEvent(editEvent)

        }
})



//This allows the notes to be rendered upon their click button.
  let render = (noteCollection) => {
    contentElement.innerHTML = `
    <section class="notes">
    ${noteCollection 
    .map(currentNote => {
      return noteComponent(currentNote);
    }).join(" ")}
    </section>
    `
  }
}

