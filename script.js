// Snack 1
// Creare un array di oggetti:
// Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso.
// Stampare a schermo la bici con peso minore.
const snack1 = document.getElementById('snack1')
const bike1 = {
    nome: 'mountain',
    peso: 13
}
const bike2 = {
    nome: 'run',
    peso: 9
}
const bike3 = {
    nome: 'hybrid',
    peso: 12
}
const bikes = [bike1,bike2,bike3]

const weightMin = (Math.min(bike1.peso,bike2.peso,bike3.peso))

for (let i = 0; i < bikes.length; i++) {
    if (bikes[i].peso === weightMin) {
        snack1.innerText =  `La bici con peso minore è ${bikes[i].nome}`
        
    }
    
}