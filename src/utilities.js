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
  function getColorFromType(type) {
    switch (type) {
      case "normal":
        return "#A8A878";
      case "fire":
        return "#F08030";
      case "water":
        return "#6890F0";
      case "grass":
        return "#78C850";
      case "electric":
        return "#F8D030";
      case "ice":
        return "#98D8D8";
      case "fighting":
        return "#C03028";
      case "poison":
        return "#A040A0";
      case "ground":
        return "#E0C068";
      case "flying":
        return "#A890F0";
      case "psychic":
        return "#F85888";
      case "bug":
        return "#A8B820";
      case "rock":
        return "#B8A038";
      case "ghost":
        return "#705898";
      case "dragon":
        return "#7038F8";
      case "dark":
        return "#705848";
      case "steel":
        return "#B8B8D0";
      case "fairy":
        return "#EE99AC";
      default:
        return "#68A090";
    }
  }

export { getNumberFromImageSource, shinySwitch, normalSwitch, getColorFromType };
