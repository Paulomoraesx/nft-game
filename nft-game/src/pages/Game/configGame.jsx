import Phaser from "phaser"

import TitleScreen from "./Scenes/TitleScreen"
import Game from "./Scenes/GameScene"

export const configGame = {
    width: 650,
    height: 650,
    type: Phaser.AUTO,
    physics: {
        default: 'arcade',
    }
}

export const game = new Phaser.Game(configGame)

game.scene.add('titlescreen', TitleScreen)
game.scene.add('game', Game)

/* game.scene.start('titlescreen') */
game.scene.start('game')