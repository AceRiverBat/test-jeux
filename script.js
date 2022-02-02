/*
class Personnage {
    constructor(Niveau, Force, pointDeVie, pointDemagie){

        this.Niveau = Niveau;
        this.Force = Force;
        this.pointDeVie = pointDeVie;
        this.pointDemagie = pointDemagie;

    }
    attaqueG(){
        this.Niveau = this.Niveau + 1;
       this.pointDemagie = this.pointDemagie - 5;
    }
    attaqueT(){
        this.Niveau = this.Niveau + 2;
        this.Force = this.Force - 5;
     }
    degatsG(){
        this.pointDeVie = this.pointDeVie - 20;
    }
    degatsT(){
        this.pointDeVie = this.pointDeVie - 30;
    }
}

let Gandalf = new Personnage(1, 60, 50, 200);
let Thor = new Personnage(1, 120, 50, 20);

console.log("Avant", Gandalf);
Gandalf.attaqueG();
Thor.degatsG();
console.log("Apres", Gandalf, "Utilise PassePas", Thor);
console.log("Avant", Thor);
Thor.attaqueT();
Gandalf.degatsT();
console.log("Apres", Thor, "Utilise Marteau", Gandalf);
*//*
class Proprio {
    constructor(prenom, ville, numero) {
        this.prenom = prenom;
        this.ville = ville;
        this.numero = numero;
    }

}

class Animal {
    constructor(nom, race, proprietaire) {
        this.nom = nom;
        this.race = race;
        this.proprietaire = proprietaire;
    }

    getInfo() {
        document.write("Je suis " + this.nom + ", je suis un " + this.race +
            " et mon maître est " + this.proprietaire.prenom + 
            " qui vit à " + this.proprietaire.ville + " et son numero de telephone est "
             + this.proprietaire.numero + ".");
    }
}
const Marc = new Proprio("Marc", "Lyon", "09656789");
const Caramel = new Animal("Caramel", "chat", Marc);
Caramel.getInfo();

var img = document.createElement("img");
    img.src = "chat.jpeg";

    var div = document.getElementById("chat");
    div.appendChild(img);
    */

import Personnages from './Personnage'
import Elfe  from './Guerrier';
import Orc from './Orc';

class Magicien extends Personnages {
    constructor(vie, force, magie) {
        super(vie, force)
        this.magie = magie;
    }
}

let karma = new Elfe(100, 15, 150);
let hurt = new Orc(200, 100, 150);
let gandalf = new Magicien(100, 20, 150);
console.log(hurt);
karma.attaque(gandalf);
console.log(hurt);
hurt.hurlement();
console.log(hurt);