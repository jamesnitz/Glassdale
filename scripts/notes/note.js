const noteComponent = (note) => {
  return `     
<div class= "note__card">
<div>Note: ${note.notes}</div>
<div>Date: ${note.date}</div>
<div>Suspect: ${note.suspect}</div>
<button class="deleteButton" id="deleteNote--${note.id}">Delete</button>
<button id="editNote--${note.id}">Edit</button>
</div>
`
}

export default noteComponent;
