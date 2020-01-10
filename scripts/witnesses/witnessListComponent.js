//Import data needed 
import { useWitness } from "./witnessDataProvider.js";
//Always declare the eventHub and where on the DOM you want your data to render
const eventHub = document.querySelector(".container")
const contentElement = document.querySelector(".criminalsContainer")

//encompassing function to export and invoke on page load
export const witnessListComponent = () => {
  //When the witness button is clicked invokes the render function and passes the witnessCollection array as an argument
  eventHub.addEventListener("click", clickEvent => {
    if (clickEvent.target.id === "witness") {
      const witnessCollection = useWitness()
      //.maps over the whole array and creates HTML representation of each witness and joins them on a space
      const witnessHTML = witnessCollection.map(
        (witness) => {
            return `
                <div class="witness_card">
                     <h4>${witness.name}</h4> <br>
                    <strong>Statement</strong>: ${witness.statements}
                </div>
            `
        }
    ).join("")
    
    render(witnessHTML)
            
    }
  })
// render function that will accept the witness HTML and render it on the DOM
  const render = (htmlString) => {
          contentElement.innerHTML = `
                  <div class="witness_text">
                  ${htmlString}
                  </div>              
          `
      }
}


