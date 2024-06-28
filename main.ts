const toss = () => Math.floor(Math.random() * 2);

const toss_n = 3; // トス回数

const userName = prompt("Who are you?\n> ");
console.log(`Hello, ${userName}!`);

console.log("Tossing a coin...");

let sum = 0;
for (const i of Array(toss_n).keys()) {
    const n = toss();
    sum += n;
    console.log(`Round ${i + 1}: ${n === 0 ? "Heads" : "Tails"}`);
}

console.log(`Heads: ${toss_n - sum}, Tails: ${sum}`);
