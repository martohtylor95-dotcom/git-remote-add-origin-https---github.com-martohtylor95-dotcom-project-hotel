let count = 0;

for (let i = 1; i <= 30; i++) {

    if (i % 3 === 0 && i % 5 === 0) {
        console.log("Chai & Mandazi");
        count++;
    }

    else if (i % 3 === 0) {
        console.log("Chai");
    }

    else if (i % 5 === 0) {
        console.log("Mandazi");
    }

    else {
        console.log(i);
    }
}

console.log("Chai & Mandazi shouted: " + count + " times");


// CHALLENGE 2: SAVINGS CHALLENGE

let goal = 5000;
let month = 1;
let saving = 100;
let total = 0;

while (total < goal) {

    total += saving;

    if (saving >= 500) {
        console.log(
            "Month " + month +
            ": saved KES " + saving +
            ", total KES " + total +
            " - Big month!"
        );
    }

    else {
        console.log(
            "Month " + month +
            ": saved KES " + saving +
            ", total KES " + total
        );
    }

    month++;
    saving += 50;
}

console.log("Goal reached in month " + (month - 1));