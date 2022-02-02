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
}