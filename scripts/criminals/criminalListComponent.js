//Importing Data to be used in the function

import criminalComponent from "./criminalComponent.js";
import { useCriminals, getCriminalsByOfficer } from "./criminalDataProvider.js";
//Always declare the eventHub, and where on the Dom the content will render
const eventHub = document.querySelector(".container")
const contentElement = document.querySelector(".criminalsContainer")
//declaring encompassing function for invoking on the main JS
const criminalListComponent = () => {
    // Load the application state to be used by this component
    const criminalCollection = useCriminals()
    // What should happen when detective selects a crime? This event is coming from conviction select js page
    eventHub.addEventListener("filterClicked", event => {
      const crime = event.detail.crime
      const officer = event.detail.officer
      //This is filtering the criminals based on the conditional
      // If the current criminals.conviction is === to the crime selected on the dropdown return that criminal in a new array
      const matchingCriminals = criminalCollection.filter(
        (currentCriminal) => {
          if (currentCriminal.conviction === crime) {
            return currentCriminal
          }
        }
      ).filter(criminal => {
        if (criminal.arrestingOfficer === officer) {
          return criminal
        }
      })
      render(matchingCriminals)
  })
  //Click event waiting for a button that starts with "button--" to either open the button or close the button in the dialog element
  eventHub.addEventListener("click", theEvent => {
    if (theEvent.target.id.startsWith("button--")) {
      const dialogSiblingSelector = `#${theEvent.target.id}+dialog`
      const theDialog = document.querySelector(dialogSiblingSelector)
      theDialog.showModal()
    } else if (theEvent.target.classList.contains("button--close")) {
      const dialogElement = theEvent.target.parentNode
      dialogElement.close()
    } 
     
  }
)


//Renders the initial list of criminals on page load and renders the matching criminals on dropdown change
    let render = criminalCollection => {
      contentElement.innerHTML = `
      ${criminalCollection 
      .map(currentCriminal => {
        return criminalComponent(currentCriminal);
      }).join(" ")}
      `
    }
    render(criminalCollection)
}

export default criminalListComponent

