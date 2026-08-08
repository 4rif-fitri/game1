import { Background } from "./background.js"
import { InputHandler } from "./input.js"
import { Player } from "./player.js"

window.addEventListener("load", function () {

	let canvas = document.getElementById("canvas")
	let ctx = canvas.getContext("2d")
	canvas.width = 500
	canvas.height = 500

	class Game {
		constructor(width, height) {
			this.width = width
			this.height = height
			this.groundMargin = 50
			this.speed = 0
			this.maxSpped = 3
			this.background = new Background(this)
			this.player = new Player(this)
			this.input = new InputHandler()
		}

		update(deltaTime) {
			this.background.update()
			this.player.update(this.input.keys, deltaTime)
		}

		draw() {
			this.background.draw(ctx)
			this.player.draw(ctx)
		}
	}

	let game = new Game(canvas.width, canvas.height)
	// console.log(game);
	let lastTime = 0

	function animate(timeStamp) {
		let deltaTime = timeStamp - lastTime
		lastTime = timeStamp

		ctx.clearRect(0, 0, canvas.width, canvas.height)
		game.update(deltaTime)
		game.draw(ctx)
		requestAnimationFrame(animate)
	}
	animate(0)

})