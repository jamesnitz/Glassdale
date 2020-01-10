let criminals = []

export const useCriminals = () => {
    return criminals
}

export const getCriminals = () => {
    return fetch("http://criminals.glassdale.us/criminals")
        .then(response => response.json())
        .then(
            parsedCriminals => {
                // console.log("I have the data")
                criminals = parsedCriminals.slice()
            }
        )
}

export const getCriminalsByOfficer = officerName => {
    return criminals.filter(currentCriminal => {
        if (currentCriminal.arrestingOfficer.toLowerCase() === officerName.toLowerCase()) {
            return true
        }
        return false
    })
}

