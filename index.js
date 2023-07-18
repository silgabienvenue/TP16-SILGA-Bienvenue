//les variables 
console.log('hello');
var unTexte= "Voici un texte";
unTexte= "Voici un texte";
console. log(unTexte)

const prenom="elle s'appelle Justine"
console. log(prenom)

let unChiffre = 24;
unChiffre = 12;
console. log(unChiffre)

let chaine ="je suis une chaine de caracteres"
let nouvelleChaine="chaine pecedente : " + chaine;
console. log(nouvelleChaine)

let chiffre =24;
let nouveauChiffre ='le chiffre attendu est : ${chiffre} degres';
console.log(nouveauChiffre)

let string="je suis une chaine"
let number=24
let boolean=true
let array=["je","suis", 24, false ]
let object= {
    prenom:"Audrey",
    age: "24",
    ville:"Mali"
}
console. log(typeof number)
console. log(4 - 5);
console. log(4 +5);
console. log(4 / 5);
console. log(4 *5);
console. log(4 ** 5);

let total = 2;
let a= 4;
a++;
total = a;
console. log(total);

   let x = 2;
let y = 5;
if(x <= y)
{console. log("x est inferieur a y");} else
{console. log("x est superieur a y");} 

let b= 5;
let c= 5;
if(b === c)
{console. log("true !");} else
{console. log("false !");} 

let d = 5;
let e = 5;
if(d !== e)
{console. log("true !");} else
{console. log("false !");} 

let f= 5;
let g = 5;
if(f == g && f > 3 && g < 10 )
{console. log("true !");} else
{console. log("false !");} 

let h= 4;
let i = 5;
if(h === i || h > 3)
{console. log("true !");} else
{console. log("false !");} 

let k= 6;
let l = 5;
if( k===l )
{console. log("true !");} 
else if( k==l )
{console. log("k et l egaux en valeur");} 
else
{console. log(k + "et" + l + "ne sont pas du tout egaux");} 
{console. log( '${k} et ${l}  ne sont pas du tout egaux');} 

let m=5;
let n = 5;
h == i?
console. log("true !") : console. log("false !")

// les fonctions
function faireQuelqueChose() {
    console. log("je fais un truc");
    console. log('trop cool');
}

const faireUneTache=(tache)=> {
    console. log("je fais: " + tache); 
}
function calc(x, y){
return x + y;
}
calc(4, 9);

function add2() {
    console. log(a)
    return a + 2;
}

(function () {
    console. log('je me joue toute seule');
})();
(()=> {
    console. log('je me joue aussi toute seule');
})(); 

// let totaux = 0;
// function addition(x, y) {
//     totaux = x + y;
//     return totaux
// }
let taux = 0;

function addition(x) {
    taux += x;
    return taux}

function soustraction(x) {
    taux -= x;
    return taux}

function division (x) {
    if(taux === 0) {return (taux= x);} else{
        taux /= x;
        return taux ;}
    }
function multiplication(x) {
    if(taux === 0) {return (taux= x);} else{
    taux *= x;
    return taux ;}
}

function reset() {
    total=0;
}





 