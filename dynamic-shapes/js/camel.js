class Camel {

    constructor(ctx, posX, posY, width, speed, gameSize) {
        this.ctx = ctx
        this.camelPos = { x: posX, y: posY }
        this.camelSize = { w: width, h: width * .75 }
        this.camelSpeed = speed
        this.camelImage = 'camel.png'
        this.imageInstance = undefined
        this.gameSize = gameSize

        this.init()
    }

    init() {
        this.imageInstance = new Image()
        this.imageInstance.src = `img/${this.camelImage}`
    }

    draw() {
        this.ctx.drawImage(this.imageInstance, this.camelPos.x, this.camelPos.y, this.camelSize.w, this.camelSize.h)
    }

    move() {
        this.camelPos.x += this.camelSpeed
        this.checkCollision()
    }

    checkCollision() {
        if (this.camelPos.x >= this.gameSize.w - this.camelSize.w || this.camelPos.x <= 0) {
            this.turn()
        }
    }

    turn() {
        this.camelSpeed *= -1
    }
}