const dynamicApp = {
    appName: 'Canvas dynamic app',
    author: 'Germán Álvarez',
    version: '1.0.0',
    license: undefined,
    gameSize: { w: undefined, h: undefined },
    ctx: undefined,
    ball: undefined,
    init() {
        this.setContext()
        this.setSize()
        this.createBall()
        this.drawAll()
        this.setEventHandlers()
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
    createBall() {
        this.ball = new Ball(this.ctx, 100, 100, 100, 100)
    },
    drawAll() {
        setInterval(() => {
            this.clearAll()
            this.ball.draw()
        }, 40)
    },
    clearAll() {
        this.ctx.clearRect(0, 0, this.gameSize.w, this.gameSize.h)
    },
    setEventHandlers() {
        document.addEventListener('keydown', event => {
            const { key } = event
            key === 'ArrowRight' ? this.ball.moveRight() : null
            key === 'ArrowLeft' ? this.ball.moveLeft() : null
        })
    }

}