const eventHub = document.querySelector(".container")

const criminalComponent = (criminal) => {
  // console.log("I am the single Criminal component")
  return `     
<div class= "criminal__card">
  <h4>Name: ${criminal.name}</h4>
  <div>Age: ${criminal.age}</div>
  <div>Crime: ${criminal.conviction}</div>
  <div> Term Start: ${new Date(criminal.incarceration.start).toLocaleDateString('en-US')} </div>
  <div> Term End: ${new Date(criminal.incarceration.end).toLocaleDateString('en-US')} </div>

  <button class="associate_button" id="button--${criminal.id}">Associate Alibis</button>
   <dialog class="dialogcriminals" id="details--">

  <!-- Below is mapping over the known associates in the criminal array --> 

   ${criminal.known_associates.map(
     assoc =>`
       <div><strong>Name</strong>: ${assoc.name}</div>
       <div><strong>Alibi</strong>: ${assoc.alibi}</div><br>
     `
   ).join("")}
    <button class="button--close">Close</button>
  </dialog>
</div>
`
}

export default criminalComponent;