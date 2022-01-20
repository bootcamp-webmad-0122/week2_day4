const drawingApp = {
    appName: 'Canvas drawing app',
    author: 'Germán Álvarez',
    version: '1.0.0',
    license: undefined,
    gameSize: { w: undefined, h: undefined },
    ctx: undefined,
    init() {
        this.setContext()
        this.setSize()
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
    drawFilledRectangle() {
        this.ctx.fillStyle = 'red'
        this.ctx.fillRect(this.gameSize.w / 2 - 50, this.gameSize.h / 2 - 50, 100, 100)
        this.ctx.fillStyle = 'green'
        this.ctx.fillRect(this.gameSize.w / 2 - 100, this.gameSize.h / 2 - 25, 200, 50)
    },
    drawLinearRectangle() {
        this.ctx.lineWidth = 20
        this.ctx.strokeStyle = 'green'
        this.ctx.strokeRect(100, 100, 200, 200)
    },
    drawRegularLines() {
        this.ctx.beginPath()
        this.ctx.moveTo(100, 100)
        this.ctx.lineTo(this.gameSize.w - 100, 100)
        this.ctx.stroke()
        this.ctx.closePath()

        this.ctx.lineWidth = 10
        this.ctx.strokeStyle = 'red'

        this.ctx.beginPath()
        this.ctx.moveTo(100, 200)
        this.ctx.lineTo(this.gameSize.w - 100, 200)
        this.ctx.stroke()
        this.ctx.closePath()
    },
    drawDashedLines() {
        this.ctx.lineWidth = 10
        this.ctx.strokeStyle = 'red'
        this.ctx.beginPath()
        this.ctx.moveTo(100, 200)
        this.ctx.setLineDash([60, 20])
        this.ctx.lineTo(this.gameSize.w - 100, 200)
        this.ctx.stroke()
        this.ctx.closePath()
    },
    drawArc() {
        this.ctx.beginPath()
        this.ctx.arc(200, 200, 100, 0, Math.PI * 2)
        this.ctx.fill()
        this.ctx.stroke()
        this.ctx.closePath()

        this.ctx.lineWidth = 10
        this.ctx.strokeStyle = 'green'
        this.ctx.fillStyle = 'red'

        this.ctx.beginPath()
        this.ctx.arc(400, 400, 100, 0, Math.PI)
        this.ctx.fill()
        this.ctx.stroke()
        this.ctx.closePath()
    },
    drawText(text) {
        this.ctx.font = '50px arial'
        this.ctx.fillText(text, 100, 100)
    },
    insertImage(name) {
        const imageInstance = new Image()
        imageInstance.src = `img/${name}`
        imageInstance.onload = () => this.ctx.drawImage(imageInstance, 100, 100, 200, 200)
    }
}