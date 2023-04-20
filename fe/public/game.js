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
        down:false
    },
    seven: {
        num: 7,
        up: true,
        down:false
    },
    eight: {
        num: 8,
        up: true,
        down:false
    },
    nine: {
        num: 9,
        up: true,
        down:false
    },
    ten: {
        num: 10,
        up: true,
        down:false
    },
    eleven: {
        num: 11,
        up: true,
        down:false
    },
    twelve: {
        num: 12,
        up: true,
        down:false
    },
}


document.getElementById('rollDice').addEventListener('click', () => {
    const roll1 = Math.floor(Math.random()* 6 + 1);
    const roll2 = Math.floor(Math.random()* 6 + 1);
    const diceTotal = roll1 + roll2;

    document.getElementById('dRoll1').innerHTML = `Dice Roll 1: ${roll1}`;
    document.getElementById('dRoll2').innerHTML = `Dice Roll 2: ${roll2}`;
    document.getElementById('dTotal').innerHTML = `Dice Total: ${diceTotal}`;
    if (diceTotal !== 0) {
        document.getElementById('rollDice').disabled = true;

    } else {
        document.getElementById('rollDice').disabled = false;
    }
})

// get element id when element clicks i.e. '1', '2' ,'3'
// once id is found, reference in board object to change up to false, down to true
// logic check that disables clicking the id that up is false
const id = document.getElementsByTagName('p');
for (let i = 0; i < id.length; i++) {
    console.log(i.id)
}

// function boardDown(){
//     for(let i = 0; i < boardNumbers.length(); i++) {
//         if (i == )
//     }
// }

// const getId = document.getElementById('').onclick;
// console.log(getId)