let notes = []

export const useNotes = () => {
  return notes
}

export const getNotes = () => {
  //requests the data from an API from the internet
  return fetch("http://localhost:3000/notes")
  //When we get a response with a string, parse the string. YOU CAN ONLY SEND STRINGS OVER THE INTERNET
  .then(response => response.json())
  //Then do something with the data
  .then(
      parsedNotes => {
          // console.log("I have the note data")
         notes =  parsedNotes.slice()
      }
  )
}

export const saveNote = note => {
 return fetch("http://localhost:3000/notes", {
      method: "POST",
      headers: {
          "Content-Type": "application/json"
      },
      body: JSON.stringify(note)
  })
  .then(getNotes)
}

export const deleteNote = noteId => {
  return fetch(`http://localhost:3000/notes/${noteId}`, {
      method: "DELETE"
  })
      .then(getNotes)
}

export const editNote = (noteObject) => {
  return fetch(`http://localhost:3000/notes/${noteObject.id}`, {
      method: "PUT",
      headers: {
          "Content-Type": "application/json",
      },
      body: JSON.stringify(noteObject)
  })
  .then(getNotes)
}