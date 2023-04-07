function getNumberFromImageSource(imageSource) {
  const regex = /(\d+)/; // regex to match one or more digits
    const match = regex.exec(imageSource);
    return match ? Number(match[0]) : null; // convert the matched string to a number
}

function shinySwitch() {
  let displayImage = document.getElementById('pokemon-img') // find image with ID pokemon-img
  const imageSource = displayImage.src; // get image src
  const numberFromImageSource = getNumberFromImageSource(imageSource); // check if image source is shiny or not and change it based on the result.
  if(displayImage.src.match(`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${numberFromImageSource}` + `.png`)){
    displayImage.src = (`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/${numberFromImageSource}` + `.png`)
  } else {
    displayImage.src = (`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/${numberFromImageSource}` + `.png`)
  }    }

function normalSwitch() {
  let displayImage = document.getElementById('pokemon-img') // find image with ID pokemon-img
  const imageSource = displayImage.src; // get image src
  const numberFromImageSource = getNumberFromImageSource(imageSource); // check if image source is shiny or not and change it based on the result.
  if(displayImage.src.match(`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/${numberFromImageSource}` + `.png`)){
    displayImage.src = (`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${numberFromImageSource}` + `.png`)
  } else {
    displayImage.src = (`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${numberFromImageSource}` + `.png`)
  }}
  function getColorFromType(type) { // check for type, change cardbackground based on type.
    switch (type) {
      case "normal":
        return "#95afc0";
      case "fire":
        return "#f0932b";
      case "water":
        return "#0190FF";
      case "grass":
        return "#00b894";
      case "electric":
        return "#fed330";
      case "ice":
        return "#74b9ff";
      case "fighting":
        return "#30336b";
      case "poison":
        return "#6c5ce7";
      case "ground":
        return "#EFB549";
      case "flying":
        return "#81ecec";
      case "psychic":
        return "#a29bfe";
      case "bug":
        return "#26de81";
      case "rock":
        return "#2d3436";
      case "ghost":
        return "#a55eea";
      case "dragon":
        return "#ffeaa7";
      case "dark":
        return "#705848";
      case "steel":
        return "#B8B8D0";
      case "fairy":
        return "#FF0069";
      default:
        return "#68A090";
    }
  }

export { getNumberFromImageSource, shinySwitch, normalSwitch, getColorFromType };
