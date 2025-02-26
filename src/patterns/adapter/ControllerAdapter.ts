interface ControllerActions {
    jump(): void;
    attack(): void;
    interact(): void;
}

class KeyboardController implements ControllerActions {
    jump(): void {
        console.log('Keyboard: Jump = espace');
    }

    attack(): void {
        console.log('Keyboard: Attack = clic droit');
    }

    interact(): void {
        console.log('Keyboard: Interact = E');
    }
}

class XboxController implements ControllerActions {
    jump(): void {
        console.log('Xbox Controller: Jump = A');
    }

    attack(): void {
        console.log('Xbox Controller: Attack = B');
    }

    interact(): void {
        console.log('Xbox Controller: Interact = X');
    }
}

class PS5Controller implements ControllerActions {
    jump(): void {
        console.log('PS5 Controller: Jump = X');
    }

    attack(): void {
        console.log('PS5 Controller: Attack = O');
    }

    interact(): void {
        console.log('PS5 Controller: Interact = triangle');
    }
}

export { KeyboardController, XboxController, PS5Controller };
