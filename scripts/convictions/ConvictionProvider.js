let convictions = []

export const useConvictions = () => convictions

export const getConvictions = () => {
  //requests the data from an API from the internet
  return fetch("http://criminals.glassdale.us/crimes")
  //When we get a response with a string, parse the string. YOU CAN ONLY SEND STRINGS OVER THE INTERNET
  .then(response => response.json())
  //Then do something with the data
  .then(
      parsedConvictions => {
          // console.log("I have the crime data")
          convictions = parsedConvictions.slice()
      }
  )
}


