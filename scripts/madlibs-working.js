//user Input
let name = prompt("A name:");
let adjective = prompt("An adjective:");
let noun = prompt("A noun:");
let style = prompt("Fancy or silly?");


let closings = [
  "You are a legend.",
  "Stay golden. Silly Dilly",
  "Signs point to awesome.",
];
//helper function
function randomNumber(a, b) {
  return Math.floor(Math.random() * (b - a + 1)) + a;
}

// Computer Output
function makeCard() {
 if (style.toLowerCase() === "fancy") {

    console.log("Dearest " + name + ",");
  } else {
    console.log("YO " + name + "!");
  }
 
   let index = randomNumber(0, closings.length - 1);
  console.log(closings[index]);
}

makeCard();

