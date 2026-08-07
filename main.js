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
			this.player = new Player(this)
			this.input = new InputHandler()
		}

		update() {
			this.player.update(this.input.keys)
		}

		draw() {
			this.player.draw(ctx)
		}
	}

	let game = new Game(canvas.width, canvas.height)
	console.log(game);

	function animate() {
		ctx.clearRect(0, 0, canvas.width, canvas.height)
		game.update()
		game.draw(ctx)
		requestAnimationFrame(animate)
	}
	animate()

})