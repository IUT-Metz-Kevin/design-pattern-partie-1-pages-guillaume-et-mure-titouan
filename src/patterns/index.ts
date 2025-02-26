import { GameSettings } from './singleton/GameSettings';
import { Department, Employee } from './composite/OrganizationStructure';
import { KeyboardController, XboxController, PS5Controller } from './adapter/ControllerAdapter';
import { Coffee, Milk, CoconutMilk, WhippedCream } from './decorator/BeverageDecorator';
import { WarriorFactory, MageFactory, ArcherFactory } from './factory-method/CharacterFactory';

const settings = GameSettings.getInstance();
settings.setSetting('difficulty', 'hard');
settings.setSetting('language', 'fr');
settings.setSetting('volume', 80);
settings.setSetting('isMuted', false);

console.log(settings.getSetting('difficulty')); // Affiche "hard"
console.log(settings.getSetting('language'));  // Affiche "fr"
console.log(settings.getSetting('volume'));    // Affiche 80
console.log(settings.getSetting('isMuted'));   // Affiche false

const generalManagement = new Department('Direction Générale');
const itDepartment = new Department('Département Technique');
const webTeam = new Department('Web');

itDepartment.addSubDepartment(webTeam);
generalManagement.addSubDepartment(itDepartment);

const employee1 = new Employee('Alice');
const employee2 = new Employee('Bob');
webTeam.addEmployee(employee1);
itDepartment.addEmployee(employee2);

generalManagement.show(); // Affiche l'organigramme de l'entreprise

const keyboard = new KeyboardController();
keyboard.jump();  // Affiche "Keyboard: Jump"
keyboard.attack();  // Affiche "Keyboard: Attack"
keyboard.interact();  // Keyboard: Interact

const xbox = new XboxController();
xbox.jump();  // Affiche "Xbox Controller: Jump"
xbox.attack();  // Affiche "Xbox Controller: Attack"
xbox.interact();  // Affiche "Xbox Controller: Interact"

const ps5 = new PS5Controller();
ps5.jump();  //PS5 Controller: Jump
ps5.attack();  //PS5 Controller: Attack
ps5.interact();  //PS5 Controller: Interact

let myCoffee = new Coffee();
myCoffee = new Milk(myCoffee);
myCoffee = new CoconutMilk(myCoffee);
myCoffee = new WhippedCream(myCoffee);


console.log(myCoffee.getDescription());  
console.log(myCoffee.cost());  // 8

const warriorFactory = new WarriorFactory();
const warrior = warriorFactory.createCharacter();
warrior.attack();  // Affiche "Warrior: Sword Attack"

const mageFactory = new MageFactory();
const mage = mageFactory.createCharacter();
mage.attack();  // Affiche "Mage: Fireball"

const archerFactory = new ArcherFactory();
const archer = archerFactory.createCharacter();
archer.attack();  // Affiche "Archer: Bow Attack"
