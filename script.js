const prompt = require("prompt-sync")();
const name = prompt("What is your name? ");
console.log("Hello", name, "welcome to our game!");
const shouldWePlay = prompt("Do you want to play?");
if (shouldWePlay.toLocaleLowerCase() === "yes") {
  //Game logic
  const leftOrRight = prompt(
    "You enter a maze, do you want to go left or right?"
  );
  if (leftOrRight.toLocaleLowerCase ()=== "left") {
    console.log("you go left and see a bridge.....");
    const cross = prompt("Do you want to cross the bridge");
    if (cross.toLocaleLowerCase() === "yes" || cross.toLocaleLowerCase() === "y" || cross.toLocaleLowerCase() ==="ok") {
      console.log(
        "You cross the but bridge was week and broke and you fell.. you lost."
      );
    } else {
      console.log("Good chioce .. You win");
    }
  } else {
    console.log("You go right and fall of a cliff...");
  }
} else if (shouldWePlay.toLocaleLowerCase() === "yes") {
  console.log("Okay :(");
} else {
  console.log("Invalid input....");
}
