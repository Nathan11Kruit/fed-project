function getNumberFromImageSource(imageSource) {
  const regex = /(\d+)/; // regex to match one or more digits
    const match = regex.exec(imageSource);
    return match ? Number(match[0]) : null; // convert the matched string to a number
}

function shinySwitch() {
  let displayImage = document.getElementById('pokemon-img')
  const imageSource = displayImage.src;
  const numberFromImageSource = getNumberFromImageSource(imageSource);
  if(displayImage.src.match(`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${numberFromImageSource}` + `.png`)){
    displayImage.src = (`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/${numberFromImageSource}` + `.png`)
  } else {
    displayImage.src = (`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/${numberFromImageSource}` + `.png`)
  }    }

function normalSwitch() {
  let displayImage = document.getElementById('pokemon-img')
  const imageSource = displayImage.src;
  const numberFromImageSource = getNumberFromImageSource(imageSource);
  if(displayImage.src.match(`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/${numberFromImageSource}` + `.png`)){
    displayImage.src = (`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${numberFromImageSource}` + `.png`)
  } else {
    displayImage.src = (`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${numberFromImageSource}` + `.png`)
  }}
 

export { getNumberFromImageSource, shinySwitch, normalSwitch };
