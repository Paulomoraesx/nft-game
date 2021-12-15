import Phaser from "phaser"

export const configGame = {
    width: 800,
    height: 500,
    type: Phaser.AUTO,
    scene: {
        preload: preload,
        create: create,
        update: update
    }
}

export const game = new Phaser.Game(configGame)

function preload() {

}
function create() {

}
function update() {

}