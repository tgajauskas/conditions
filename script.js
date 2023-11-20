// Pirma užduotis
// Paklauskite prekės kainos ir atspausdinkite tokį rezultatą:

// Prekės kaina su PVM: xx.xx €
// PVM: xx.xx €
// Prekės kaina be PVM: xx.xx €

// Suapvalinkite iki 2 skaičių po kablelio.
// PVM = 21%

// Kad atspausdinti tekstą ir kintamąjį vienoje eilutėje naudokite console.log("Prekės kaina su PVM: " + kaina + "€")

// Papildomai:
// Jeigu įvestas ne skaičius, o tekstas, pakartotinai klausti kainos
// -------------------------------------------------------------------------------------------------------------------

// Kodas - sprendimas

var pvmProcentai = 0.21 
var bePVM = prompt("Įveskite prekės kainą be PVM: ")

if (isNaN(bePVM)) {
    bePVM = prompt("KLAIDA: Prašome įveskite skaičių.") 
} else {
    var bePVMskaicius = parseFloat(bePVM); 
    var PVM = bePVMskaicius * pvmProcentai; 
    var suPVM = bePVMskaicius + PVM;
}

console.log("Prekės kaina su PVM: " + suPVM.toFixed(2) + "€.");
console.log("PVM: " + PVM.toFixed(2) + "€.");
console.log("Prekės kaina be PVM " + bePVMskaicius.toFixed(2) + "€.");

// Antra užduotis
// Parašykite scriptą, kuris paprašytų įvesti: prekės kainą, paklaustų ar reikalingas pristatymas, jei reikalingas - paklaustų miesto į kurį reiks pristatyti;
// "Įveskite prekės kainą";
// "Ar reikalingas pristatymas į namus? (taip/ne)";
// "Į kurį miestą reiks pristatyti?"
// Jei prekės kaina daugiau arba lygu 50€ arba miestas yra "Vilnius"- pristatymas nemokamas. Pristatymas kitur Lietuvoje: 20€;
// Galiausiai atspausdintų tokią informaciją:
// ---------------------------
// 1 variantas (be pristatymo)
// Prekės kaina: xx.xx €
// Prekę galite atsiimti nemokamai Vilniuje adresu Gedimino pr. 1a
// ---------------------------
// 2 variantas (su pristatymu)
// Prekės kaina : xx.xx €
// Pristatymas: xx.xx €
// Iš viso: xx.xx €
// Prekę pristatysime į "įvestas miestas" per 1-3 dienas.
// ---------------------------
// 3 variantas (su nemokamu pristatymu)
// Prekės kaina : xx.xx €
// Prekę nemokamai pristatysime į "įvestas miestas" per 1-3 dienas.
// ---------------------------

var pristatymoKaina = 20
var prekesKaina = prompt("Įveskite prekės kainą: ")
var pristatymas = prompt("Ar Jums reikalingas pristatymas? Įrašykite 'TAIP' arba 'NE'")

if (pristatymas.toLowerCase() === "taip") {
    var miestas = prompt("Į kurį miestą Jums pristatyti prekes?")
    if (prekesKaina >= 50 || miestas.toLowerCase() === "Vilnius") {
    console.log("Prekės kaina: " + prekesKaina + "€." + "\nPrekę nemokamai pristatysime į " + miestas + " per 1-3 dienas.")
} else {
    var kainaSuPristatymu = parseFloat(prekesKaina) + pristatymoKaina
    console.log("Jūsų prekės kaina: " + prekesKaina + "€." + "\nPristatymas: 20€." + "\nIš viso: " + kainaSuPristatymu + "€." + "\nPrekę pristatysime į " + miestas + " per 1-3 dienas.")
} 
} else {
    console.log("Jūsų prekės kaina: " + prekesKaina + "€." + "\nPrekę galite atsiimti nemokamai Vilniuje adresu Gedimino pr. 1a")
}