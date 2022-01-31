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
