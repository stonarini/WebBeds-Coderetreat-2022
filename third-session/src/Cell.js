import LivenessState from "./LivenessState.js"

export default class Cell {
    #neighbours

    constructor() {
        this.alive = LivenessState.DEAD
        this.#neighbours = []
    }

    isAlive() {
        return this.alive
    }

    addNeighbour(cell) {
        this.#neighbours.push(cell)
    }

    getNeighbours() {
        return this.#neighbours
    }

    die() {
        this.alive = LivenessState.DEAD
    }

    setState(livenessState) {
        this.alive = livenessState
    }

    nextState() {
        let aliveNeighbours = this.#neighbours.filter(n => n.isAlive() == LivenessState.ALIVE).length
        if ((this.isAlive() == LivenessState.ALIVE && (2 <= aliveNeighbours && aliveNeighbours <= 3))
            || (this.isAlive() == LivenessState.DEAD && aliveNeighbours == 3)) {
            this.alive = LivenessState.ALIVE
        }
    }

    visualize() {
        return this.isAlive() == LivenessState.ALIVE ? 1 : 0
    }
}