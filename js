const myarry = ["luis", "valencia", "castro", "alexander"];
let final = myarry.pop();
console.log(final);

let numerosPares = [];
for (let i = 2; i < 10; i += 2) {
    numerosPares.push(i);

}
console.log("Array original:", numerosPares);

console.log("Cantidad de elementos:", numerosPares.length);

numerosPares.push(1, 3, 5, 7, 9);

console.log("Array con números impares añadidos:", numerosPares);

numerosPares[19] = 20;

console.log("Array con el valor 20 en el vigésimo elemento:", numerosPares);
