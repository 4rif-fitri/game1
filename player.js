export class Player {
	constructor(game) {
		this.game = game
		this.width = 100
		this.height = 91.3
		this.x = 0
		this.y = this.game.height - this.height

		this.vy = 0
		this.wight = 1
		this.image = document.getElementById("player")
		this.spped = 0
		this.maxspped = 10
	}
	update(input) {
		this.x += this.spped
		if (input.includes("ArrowRight")) this.spped = this.maxspped
		else if (input.includes("ArrowLeft")) this.spped = -this.maxspped
		// else if (input.includes("ArrowUp")) this.y--
		// else if (input.includes("ArrowDown")) this.y++
		else this.spped = 0
		if (this.x < 0) this.x = 0
		if (this.x > this.game.width - this.width) this.x = this.game.width - this.width
		// 

		if(input.includes("ArrowUp") && this.onGround()) this.vy -= 20
		this.y += this.vy
		if (!this.onGround()) this.vy += this.wight
		else this.vy = 0
	}
	draw(context) {
		context.fillStyle = "white"
		context.fillRect(this.x, this.y, this.width, this.height)
		context.drawImage(this.image, 0, 0, this.width, this.height, this.x, this.y, this.width, this.height)
	}
	onGround(){
		return this.y >= this.game.height - this.height
	}
}