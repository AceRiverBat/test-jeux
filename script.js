class Personnage {
    constructor(Niveau, Force, pointDeVie, pointDemagie, PassePas, marteau){
        
        this.Niveau = Niveau;
        this.Force = Force;
        this.pointDeVie = pointDeVie;
        this.pointDemagie = pointDemagie;
        this.marteau = marteau;
        this.PassePas = PassePas;
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

let Gandalf = new Personnage(1, 60, 50, 200, 100);
let Thor = new Personnage(1, 120, 50, 20, 100);

console.log("Avant", Gandalf);
Gandalf.attaqueG();
Thor.degatsG();
console.log("Apres", Gandalf, Thor);
console.log("Avant", Thor);
Thor.attaqueT();
Gandalf.degatsT();
console.log("Apres", Thor, Gandalf);
