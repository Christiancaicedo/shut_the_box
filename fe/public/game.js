const boardNumbers = {
    one: {
        num: 1,
        up: true,
        down: false
    },
    two: {
        num: 2,
        up: true,
        down: false
    },
    three: {
        num: 3,
        up: true,
        down: false
    },
    four: {
        num: 4,
        up: true,
        down: false
    },
    five: {
        num: 5,
        up: true,
        down: false
    },
    six: {
        num: 6,
        up: true,
        down: false
    },
    seven: {
        num: 7,
        up: true,
        down: false
    },
    eight: {
        num: 8,
        up: true,
        down: false
    },
    nine: {
        num: 9,
        up: true,
        down: false
    },
    ten: {
        num: 10,
        up: true,
        down: false
    },
    eleven: {
        num: 11,
        up: true,
        down: false
    },
    twelve: {
        num: 12,
        up: true,
        down: false
    },
}

const roll1 = Math.floor(Math.random() * 6 + 1);
const roll2 = Math.floor(Math.random() * 6 + 1);
let diceTotal = roll1 + roll2;

const diceButton = document.getElementById('rollDice')
const resetButton = document.getElementById('reset')
const dRoll1 = document.getElementById('dRoll1')
const dRoll2 = document.getElementById('dRoll2')
const rollTotal = document.getElementById('dTotal')
let diceReset = false

// need to have a game loop that resets with button press

diceButton.addEventListener('click', () => {
    if (!diceReset) {
        dRoll1.innerHTML = `Dice Roll 1: ${roll1}`;
        dRoll2.innerHTML = `Dice Roll 2: ${roll2}`;
        rollTotal.innerHTML = `Dice Total: ${diceTotal}`;
        if (diceTotal !== 0) {
            diceButton.disabled = true;
        }
    }
})

resetButton.addEventListener('click', reset)

function reset() {
    diceReset = false
    diceButton.disabled = false;
    dRoll1.innerHTML = `Dice Roll 1: `;
    dRoll2.innerHTML = `Dice Roll 2: `;
    rollTotal.innerHTML = `Dice Total: `;
}





// Grab number id from html and check it again total & boardNumbers object
// if total - id >= 0, disable or enable number for game

function numClick(numClicked) {
    let storeId = numClicked
    console.log(storeId)
    if (storeId - diceTotal <= 0) {
        console.log(storeId)
        for (number in boardNumbers) {
            console.log(number)
            if (storeId = number.num) {
                console.log(number)
            }
        }
    }
}

// boardNumbers.numClicked.up = false;
//                 console.log(boardNumbers.numClicked.up)
//                 boardNumbers.numClicked.down = true;
//                 console.log(boardNumbers.numClicked.down)
//                 boardNumbers.numClicked.disabled = true;
//                 let updateTotal = diceTotal - numClicked;
//                 rollTotal.innerHTML = `Dice Total: ${updateTotal}`
//                 console.log(numClicked)

// function boardDown(){
//     for(let i = 0; i < boardNumbers.length(); i++) {
//         if (i == )
//     }
// }

// const getId = document.getElementById('').onclick;
// console.log(getId)