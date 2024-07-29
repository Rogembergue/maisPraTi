const prompt = require("prompt-sync")();
let num1 = Number(prompt(`Insira a primeira nota: `));
let num2 = Number(prompt(`Insira a segunda nota: `));
let num3 = Number(prompt(`Insira a terceira nota: `));
let media = ((num1+num2+num3)/3).toFixed(2);

if (media >= 9) {
    console.log(`${media} --> A`);
}
else if (media >= 8) {
    console.log(`${media} --> B`);
}
else if (media >= 7) {
    console.log(`${media} --> C`);
}else if (media >= 6) {
    console.log(`${media} --> D`);
}else {
    console.log(`${media} --> F`);
}