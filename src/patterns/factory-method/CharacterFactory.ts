abstract class Character {
    abstract attack(): void;
}

class Warrior extends Character {
    attack(): void {
        console.log('Warrior: Sword Attack');
    }
}

class Mage extends Character {
    attack(): void {
        console.log('Mage: Fireball');
    }
}

class Archer extends Character {
    attack(): void {
        console.log('Archer: Bow Attack');
    }
}

abstract class CharacterFactory {
    abstract createCharacter(): Character;
}

class WarriorFactory extends CharacterFactory {
    createCharacter(): Character {
        return new Warrior();
    }
}

class MageFactory extends CharacterFactory {
    createCharacter(): Character {
        return new Mage();
    }
}

class ArcherFactory extends CharacterFactory {
    createCharacter(): Character {
        return new Archer();
    }
}

export { WarriorFactory, MageFactory, ArcherFactory };
