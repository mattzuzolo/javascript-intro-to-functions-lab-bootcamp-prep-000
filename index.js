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

console.log("TEST LOG")

function sayHiToGrandma(string) {
  
  if (string === string.toLowerCase) {
    ///string.toLowerCase === string
    return "I can't hear you!"
  } 
  
  else if (string === string.toUpperCase) {
    //string.toUpperCase === string
    return "YES INDEED!"
  } 
  
  else if (string === "I love you, Grandma.") {
    //"I love you, Grandma." === string
    return "I love you, too."
  }
}