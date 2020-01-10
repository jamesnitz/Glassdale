
const eventHub = document.querySelector(".container")
const contentTarget =  document.querySelector(".filter__button")

let crime = null
let officer = null

export const filterButton = () => {

  eventHub.addEventListener("crimeSelected", event => {
     crime = event.detail.crime
  })

  eventHub.addEventListener("officerSelected", event => {
    officer = event.detail.officerName
  })

  eventHub.addEventListener("click", clickEvent => {
    if (clickEvent.target.id === "filterButton") {
      const message = new CustomEvent("filterClicked", {
        detail: {
          officer: officer,
          crime: crime
        }
      })
      eventHub.dispatchEvent(message)
    }
  })
  
  
  
  const render = () => {
    contentTarget.innerHTML = `<button id="filterButton">Filter</filter>`
  }
  render()
}