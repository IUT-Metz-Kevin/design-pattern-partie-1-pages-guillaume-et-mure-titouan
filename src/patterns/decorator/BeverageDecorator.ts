interface Beverage {
    getDescription(): string;
    cost(): number;
}

class Coffee implements Beverage {
    getDescription(): string {
        return "Coffee";
    }

    cost(): number {
        return 4;
    }
}

class BeverageDecorator implements Beverage {
    protected beverage: Beverage;

    constructor(beverage: Beverage) {
        this.beverage = beverage;
    }

    getDescription(): string {
        return this.beverage.getDescription();
    }

    cost(): number {
        return this.beverage.cost();
    }
}

class Milk extends BeverageDecorator {
    getDescription(): string {
        return `${this.beverage.getDescription()}, Milk`;
    }

    cost(): number {
        return this.beverage.cost() + 1;
    }
}

class CoconutMilk extends BeverageDecorator {
    getDescription(): string {
        return `${this.beverage.getDescription()}, Coconut Milk`;
    }

    cost(): number {
        return this.beverage.cost() + 2;
    }
}

class WhippedCream extends BeverageDecorator {
    getDescription(): string {
        return `${this.beverage.getDescription()}, Whipped Cream`;
    }

    cost(): number {
        return this.beverage.cost() + 1;
    }
}

export { Coffee, Milk, CoconutMilk, WhippedCream, BeverageDecorator };
