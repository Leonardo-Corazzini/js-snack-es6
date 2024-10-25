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
// Snack 2
// Creare un array di oggetti di squadre di calcio.
//  Ogni squadra avrà diverse proprietà: nome, punti fatti, falli subiti.
// Nome sarà l’unica proprietà da compilare, le altre saranno tutte settate a 0.
// Generare numeri random al posto degli 0 nelle proprietà “punti” fatti e “falli subiti”.
// Infine, creiamo un nuovo array i cui elementi contengono solo nomi e falli subiti e stampiamo tutto in console.
console.log('snack 2')
const team1 = {
    nome: 'Juventus',
    'punti-fatti': 0,
    'falli-subiti': 0
}
const team2 = {
    nome: 'Inter',
    'punti-fatti': 0,
    'falli-subiti': 0
}
const team3 = {
    nome: 'Milan',
    'punti-fatti': 0,
    'falli-subiti': 0
}
const serieA = [team1,team2,team3]
const newSerieA = []
for (let j = 0; j < serieA.length; j++) {
   
    serieA[j]['punti-fatti'] = Math.floor(Math.random() * 100) + 1
    serieA[j]['falli-subiti'] = Math.floor(Math.random() * 100) + 1
    console.log(serieA[j])
    delete serieA[j]['punti-fatti']
    newSerieA.push(serieA[j])
    
}
console.log(newSerieA)
