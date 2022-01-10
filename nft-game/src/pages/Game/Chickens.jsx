import Chicken from "./Chicken";
import Phaser from "phaser";

export default class Chickens extends Phaser.Physics.Arcade.Group {

    constructor(world, scene, children, spriteArray) {
        super(world, scene, children, {})
        this.scene = scene

        this.createChickens(scene, spriteArray)
    }
    createChickens(scene, spriteArray) {
        spriteArray.forEach(sprite => {
            const chicken = new Chicken(scene, sprite.x, sprite.y)
            this.add(chicken)
            sprite.destroy()
        })
    }
}
