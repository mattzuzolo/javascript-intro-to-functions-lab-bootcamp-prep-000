function shout(string) {
  return string.toUpperCase()
}

function whisper(string) {
  return string.toLowerCase()
}

function logShout(string) {
  console.log(string.toUpperCase())
}

function logWhisper(string) {
  console.log(string.toLowerCase())
}


function sayHiToGrandma(string) {
  
  if (string === string.toLowerCase) {
    ///string.toLowerCase === string
    return "lower response"
  } 
  
  else if (string === string.toUpperCase) {
    //string.toUpperCase === string
    return "upper response"
  } 
  
  else if (string === "I love you, Grandma.") {
    //"I love you, Grandma." === string
    return "I love you, too."
  }
}