//use console.log(id); + console.log(rockData) to ensure the right id is being retrieved --> true 

const rockData ={ //note: this MUST remain at the top of the code in order for the entire code to work 
    i: ['Igneous rock'],
    ii: ['Sedimentary rock'],
}

const parameter = new URLSearchParams(window.location.search);
const id = parameter.get("id");
const classification = rockData[id];
const rockType = document.getElementById("class");
rockType.innerText = classification[0]; //within the 'class' ul, the information from rockData, classification is placed into the first element


document.getElementById("rock-image").src = "../images/" + id + ".jpg";
document.getElementById("rock-title").innerText = "Rock " + id;

