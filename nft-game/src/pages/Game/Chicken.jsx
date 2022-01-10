import Phaser from "phaser";

export default class Chicken extends Phaser.Physics.Arcade.Sprite {

    constructor(scene, x, y) {
        super(scene, x, y, 'chicken', 0)
        this.scene = scene

        this.scene.physics.world.enable(this)

        this.scene.add.existing(this)
    }
}
