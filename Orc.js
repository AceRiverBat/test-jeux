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