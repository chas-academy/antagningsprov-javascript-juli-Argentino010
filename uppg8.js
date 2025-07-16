

function uppg8(personerna){

// skapa en array med fem person obkjet
// varje person objekt ska ha två properties, name och age

// skapa en fuktion som tar in en array som argument
// skapa ett konditionsvillkor som gör att det bara är namnet på personerna som är
//  över 30 år som skrivs ut i konsolen

// anropa funktionen och skicka med arrayen som argument
for (let person of personerna) {
    if (person.age > 30) {
        console.log(person.name);
    };
};

};

const personerna = [
    {name : "Fausto", age : 31},
    {name : "Catriel", age : 22},
    {name : "Tadeo", age : 29},
    {name : "Spalvieri", age : 32},
    {name : "Leirtac", age : 25},

];

uppg8(personerna);
module.exports = { uppg8 };