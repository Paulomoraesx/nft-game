import Phaser from 'phaser'
import mapPng from '../Assets/Tileset.png'
import mapJson from '../Assets/map.json'
import Chickens from '../Chickens'
import chickenImg from '../Assets/chickenImg.png'

export default class TitleScreen extends Phaser.Scene {


    preload() {
        this.load.image("tiles", mapPng)
        this.textures.addBase64("chicken", chickenImg)
        this.load.tilemapTiledJSON("map", mapJson)


    }

    create() {
        const map = this.make.tilemap({ key: "map" })
        const tileset = map.addTilesetImage("assets", "tiles")

        const ground = map.createStaticLayer("ground", tileset, 0, 0)
        const objectCollider = map.createStaticLayer("objectCollider", tileset, 0, 0)
        const objectAbove = map.createStaticLayer("objectAbove", tileset, 0, 0)

        this.chickens = map.createFromObjects("chicken", "chicken", {})
        this.chickensGroup = new Chickens(this.physics.world, this, [], this.chickens)


        /* 
                const spawPoint = map.findObject(
                    objects => objects.name === 'spawning point1'
                ) */
    }
    update() {

    }

}
