const dynamicApp = {
    appName: 'Canvas dynamic app',
    author: 'Germán Álvarez',
    version: '1.0.0',
    license: undefined,
    gameSize: { w: undefined, h: undefined },
    ctx: undefined,
    camels: [],
    framesIndex: 0,         // Extra!
    init() {
        this.setContext()
        this.setSize()
        this.createCamels()
        this.drawAll()
    },
    setContext() {
        this.ctx = document.querySelector('#myCanvas').getContext('2d')
        console.log(this.ctx)
    },
    setSize() {
        this.gameSize = {
            w: window.innerWidth,
            h: window.innerHeight
        }
        document.querySelector('#myCanvas').setAttribute('width', this.gameSize.w)
        document.querySelector('#myCanvas').setAttribute('height', this.gameSize.h)
    },
    createCamels() {
        this.camels.push(
            new Camel(this.ctx, 0, 100, 200, 10, this.gameSize),
            new Camel(this.ctx, 0, 300, 120, 20, this.gameSize),
            new Camel(this.ctx, 0, 500, 220, 8, this.gameSize)
        )
    },
    drawAll() {
        setInterval(() => {
            this.framesIndex++                                          // Extra
            this.framesIndex % 50 === 0 ? this.createObstacle() : null        // Extra
            this.clearScreen()
            this.camels.forEach(elm => {
                elm.move()
                elm.draw()
            })
        }, 40)
    },
    createObstacle() {
        console.log('Aquí crearía una instancia de obstáculo hehehe')
    },
    clearScreen() {
        this.ctx.clearRect(0, 0, this.gameSize.w, this.gameSize.h)
    }
}