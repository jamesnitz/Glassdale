import { useOfficers } from "./OfficerProvider.js"

const eventHub = document.querySelector(".container")
const contentTarget = document.querySelector(".filters__officer")

const OfficerSelect = () => {
    const officers = useOfficers()

    eventHub.addEventListener(
        "change",
        changeEvent => {
            if (changeEvent.target.id === "officerSelect") {
                eventHub.dispatchEvent(new CustomEvent("officerSelected", {
                    detail: {
                        officerName: changeEvent.target.value
                    }
                }))
            }
        }
    )
    const render = officerCollection => {
        contentTarget.innerHTML = `
            <select class="dropdown" id="officerSelect">
                <option value="0">Please select an officer...</option>
                ${officerCollection.map(currentOfficer => {
                return `<option value="${currentOfficer}">${currentOfficer}</option>`
            })}
            </select>
        `
    }

    render(officers)
}

export default OfficerSelect