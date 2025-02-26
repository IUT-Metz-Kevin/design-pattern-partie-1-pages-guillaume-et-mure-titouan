class GameSettings {
    private static instance: GameSettings;
    private settings: Map<string, string | number | boolean> = new Map(); // Préciser les types

    private constructor() {}

    public static getInstance(): GameSettings {
        if (!GameSettings.instance) {
            GameSettings.instance = new GameSettings();
        }
        return GameSettings.instance;
    }

    public setSetting(key: string, value: string | number | boolean): void {
        this.settings.set(key, value);
    }

    public getSetting(key: string): string | number | boolean | undefined {
        return this.settings.get(key);
    }
}

export { GameSettings };
