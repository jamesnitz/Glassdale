let witnesses = []

export const useWitness = () => {
    return witnesses
}

export const getWitness = () => {
    return fetch("http://criminals.glassdale.us/witnesses")
        .then(response => response.json())
        .then(
            parsedWitnesses => {
                // console.log("I have the data")
                witnesses = parsedWitnesses.slice()
            }
        )
}

