interface GameplaySettings {
    difficulty: string;
    language: string;
}

interface AudioSettings {
    musicVolume: number;
    sfxVolume: number;
}

interface GraphicsSettings {
    resolution: string;
    quality: string;
}

class GameSettings {
    private static instance: GameSettings;

    // Paramètres du jeu
    public gameplay: GameplaySettings;
    public audio: AudioSettings;
    public graphics: GraphicsSettings;

    // Le constructeur est privé pour garantir qu'il ne peut pas être instancié directement.
    private constructor() {
        this.gameplay = {
            difficulty: 'normal',  // Valeur par défaut
            language: 'en'         // Valeur par défaut
        };

        this.audio = {
            musicVolume: 80,       // Valeur par défaut
            sfxVolume: 70          // Valeur par défaut
        };

        this.graphics = {
            resolution: '1920x1080', // Valeur par défaut
            quality: 'high'          // Valeur par défaut
        };
    }

    // Méthode pour récupérer l'instance unique
    public static getInstance(): GameSettings {
        if (!GameSettings.instance) {
            GameSettings.instance = new GameSettings();
        }
        return GameSettings.instance;
    }

    // Méthodes pour mettre à jour les paramètres (facultatif, selon l'usage)
    public setGameplaySettings(difficulty: string, language: string): void {
        this.gameplay.difficulty = difficulty;
        this.gameplay.language = language;
    }

    public setAudioSettings(musicVolume: number, sfxVolume: number): void {
        this.audio.musicVolume = musicVolume;
        this.audio.sfxVolume = sfxVolume;
    }

    public setGraphicsSettings(resolution: string, quality: string): void {
        this.graphics.resolution = resolution;
        this.graphics.quality = quality;
    }
}

export { GameSettings };
