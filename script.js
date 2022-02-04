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
    class Personnages {
        constructor(nom, vie, force) {
            this.nom = nom
            this.vie = vie;
            this.force = force;
        }
    }

    class Elfe extends Personnages {
        constructor(vie, force, mana) {
            super(vie, force)
            this.mana = mana;
        }
        attaque(personne) {
            if (!Orc) {
                console.log("allié");
            }
            else {
                personne.vie = personne.vie - 180;
            }
        }
        poison(personne){
               setInterval(function() {
                   if (personne.vie > 0) {
                       personne.vie-=10;
                    console.log("la vie de " + personne.nom + " baisse");
                    console.log(personne.vie);
                   }else{
                       console.log("t'es mort sale noob");
                   }
               }, 3000);
        }
    }

    class Orc extends Personnages {
        constructor(vie, force, shield) {
            super(vie, force)
            this.shield = shield;
        }
        hurlement() {
            if (this.vie < 30) {
                this.vie = this.vie + 50;
            }
        }
    }
    
    class Magicien extends Personnages {
        constructor(vie, force, magie) {
            super(vie, force)
            this.magie = magie;
        }
        Boomerang(){
            if (hurt.hurlement) {
                hurt.vie = hurt.vie - 30
            }
        }
    }

let karma = new Elfe("karma",100, 15, 150);
let hurt = new Orc("hurt", 200, 100, 150);
let gandalf = new Magicien("gandalf", 100, 20, 150);

console.log("Hurt avant attaque de " + karma.nom);
console.log(hurt.vie);
karma.attaque(hurt);
console.log("Hurt après attaque de " + karma.nom);
console.log(hurt.vie);
console.log("Hurt utilise hurlement");
hurt.hurlement();
console.log(hurt.vie);
console.log("Gandalf utilise boomerang");
gandalf.Boomerang();
console.log(hurt.vie);
console.log("Karma utilise poison sur Hurt");
karma.poison(hurt);
