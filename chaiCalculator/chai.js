const prompt = require("prompt-sync")();
function calculateChaiIngredients(numberOfCups) {
    const water = 200 * numberOfCups;
    const milk = 50 * numberOfCups;
    const teaLeaves = 1 * numberOfCups;
    const sugar = 2 * numberOfCups;

    console.log(`To make ${numberOfCups} cups of Kenyan Chai, you will need:`);
    console.log(`Water: ${water} ml`);
    console.log(`Milk: ${milk} ml`);
    console.log(`Tea Leaves (Majani): ${teaLeaves} tablespoons`);
    console.log(`Sugar (Sukari): ${sugar} teaspoons\n`);
    console.log("Enjoy your Chai Bora!");
}

const cups = Number(prompt("Karibu! How many cups of Chai Bora would you like to make?"));
calculateChaiIngredients(cups);