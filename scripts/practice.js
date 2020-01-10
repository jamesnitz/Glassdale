
export const textChange = () => {
const eventHub = document.querySelector(".container")

eventHub.addEventListener("click", event => {
  if (event.target.innerHTML === "Glassdale Police Dept.") {
    event.target.classList.add("copHighlights")
    event.target.innerHTML = "COPS"
  } else if (event.target.innerHTML === "COPS") {
    event.target.innerHTML = "Glassdale Police Dept."
    event.target.classList.remove("copHighlights")
  }
})
}