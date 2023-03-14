document.addEventListener("DOMContentLoaded",(e)=>{
    console.log(e.target)

  
//const reponse = prompt("Avez-vous des enfants ?");
//
//  if (reponse === "oui"){
//      const nb = prompt("Combien en avez vous ?");
//      if (nb == 1){
//          alert ("C'est pour quand le deuxieme ?");
//      } else if (nb <= 2){
//          alert ("Quels beaux enfants");
//      } else if (nb <= 3) {
//          alert ("C'est fini les enfants ?");
//      }
//
//  } else {
//      alert ("Eh bah alors ?");
//  }


/*
    let prix1,prix2,total,taxe,total_tva;
    prix1 = 0
    prix2 = 0
    taxe = 19.6
    total = 0
    total_tva = 0.196
    let reponse = prompt("Entrez le prix n°1")
    prix1 = reponse
    prix1 = parseFloat(prix1)
    console.log(prix1)
    reponse =prompt("Entrez le prix n°2")
    prix2 = reponse
    prix2 = parseFloat(prix2)
    console.log(prix2)
    total = prix1 + prix2;
    console.log(total)
    let ttc = total * total_tva
    console.log(ttc)
    let total_ttc = ttc + total
    alert("Le prix est de "+ total_ttc)
    console.log(total_ttc)
    */

/*const Bouton = document.querySelector('#Bouton');
const valeur = document.querySelector('#valeur');

// Initialisation de la valeur à 0
let compteur = 0;

// Ajout d'un écouteur d'événement sur le bouton
Bouton.addEventListener('click', () => {
  // Incrément de la valeur à chaque clic sur le bouton
  compteur++;
  // Mise à jour de l'élément contenant la valeur
  valeur.textContent = compteur;
  console.log(valeur)
  })*/


   
    
let boo= document.getElementById("Bouton")
      
    const bouton= document.getElementById("click")
    let bool = true;
    boo.innerHTML= bool

      bouton.addEventListener('click', event =>{
      
       if(bool === true ){
            bool = false
            console.log(bool)
            boo.innerHTML= bool
       }
       else{
            bool = true
            console.log(bool)
            boo.innerHTML=bool
        }
       

       })
})