// Séléctionner les aiguilles de montre
const AIGUILLEHR = document.querySelector("#hour");
const AIGUILLEMIN = document.querySelector("#minute");
const AIGUILLESEC = document.querySelector("#second");

//Extraire l'heure actuel à l'aide de l'objet Date()



//Ajouter l'heure , minite , seconde  dans des varaiables



// Calculer de degré de mouvement de l'aiguille heure, de l'aiguille minute, de l'aiguille seconde
// Hint : Tous les aiguilles doivent se déplacer chaque second selon un degré


// Déplacer les aiguilles 
function demarrerLaMontre() {
    let Datte = new Date();
    let hh = Datte.getDate() * 30;
    let mn = Datte.getMinutes() * 6;
    let sc = Datte.getSeconds() * 6;
    AIGUILLEHR.style.transform =  `rotateZ(${(hh) + (mn / 12)}deg)`;
    AIGUILLEMIN.style.transform = `rotateZ(${(mn)}deg)`;
    AIGUILLESEC.style.transform = `rotateZ(${(sc)}deg)`;




}
// Exercuter la fonction chaque second
var interval = setInterval(demarrerLaMontre);