const toss = () => Math.floor(Math.random() * 2);

const tossNum = 3; // トス回数

console.log("Tossing a coin...");

let tails = 0;
for (const i of Array(tossNum).keys()) {
    const n = toss();
    tails += n;
    console.log(`Round ${i + 1}: ${n === 0 ? "Heads" : "Tails"}`);
}

const heads = tossNum - tails;
console.log(`Heads: ${heads}, Tails: ${tails}`);
console.log(heads > tails ? "You won!" : "You lost.");
