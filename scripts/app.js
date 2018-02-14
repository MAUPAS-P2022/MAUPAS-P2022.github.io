/*let array = new Array

for (let i = 0; i < 7; i++) {
array[i] = 0
}
document.write(array)*/

let valeur = parseInt(window.prompt("Quelle est la taille de votre pénis ?"))
let tab = [valeur]
let positif = 0
let negatif = 0

for(i = 0; i < valeur; i++){
  tab[i] = parseInt(window.prompt("De combien voulez-vous l'agrandir ?"))
}
for(i = 0; i < valeur; i++){
  if(tab[i] < 0){
    negatif++
  }
  else if(tab[i] > 0){
    positif++
  }
}
document.write("il y a " + positif + " nombres positifs"+'<br>')
document.write("il y a " + negatif + " nombres négatifs")
