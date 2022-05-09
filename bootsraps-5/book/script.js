// console.log('Connecté');
// let titre = document.getElementById('titre'); //.style.color = green;
// titre.style.color = "green";
// titre = 2;
// console.log(titre);
// let score = 0;
// console.log(score ,"initialisation");
// score = score + 1;
// console.log(score , "après initialisation" );

const btnRed = document.getElementById('btn-red');
// console.log(btnRed, "bouton rouge");
let compteur = 0;
console.log(compteur , "comteur au démarrage");



// Je soumets le cercle rouge à une action
btnRed.addEventListener('click', function(){
    // console.log('cliqué');
    // Ici l'action
    // Incrémenter le comteur de 1s
    compteur = compteur + 1;
    console.log(compteur, "comteur après incrémentation");
});