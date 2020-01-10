//Import the data to be used
import { useConvictions } from "./ConvictionProvider.js"
//always declare the eventHub and where on the DOM the content will render
const eventHub = document.querySelector(".container")
const contentTarget = document.querySelector(".filters__crime")
// declare Functions to be invoked on page load
const ConvictionSelect = () => {
    //maybe delete
    const convictions = useConvictions()
    //creating and dispatching a change event for the dropdown list
    eventHub.addEventListener("change", changeEvent => {
        if (changeEvent.target.classList.contains("crimeDropdown")) {
            //selectedCrime is ===  to the different options in the dropdown
            // use the detail object with the selectedCrime Value so the listener that hears this knows what to look for
            const selectedCrime = changeEvent.target.value
            const message = new CustomEvent("crimeSelected", {
                detail: {
                    crime: selectedCrime
                }
            })
            //actually broadcasting this custom event out to the eventHub
            eventHub.dispatchEvent(message)
        }
    })
        //render function to create the dropdown select and invokes it on page load
        // .maps over the full collection and passes each individual item to another <option> on the dropdown
    const render = convictionsCollection => {
        contentTarget.innerHTML = `
            <select class="crimeDropdown" id="crimeSelect">
                <option>Please Select</option>
                <option value="0">All Criminals</option>
              ${convictionsCollection.map(
                  crime => `<option class="conviction">${crime}</option>`
              )}
            </select>
        `
    }

    render(convictions)
}
export default ConvictionSelect