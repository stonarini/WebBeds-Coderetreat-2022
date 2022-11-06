import LivenessState from "./LivenessState.js"

export class Cell {
    #neighbours

    constructor() {
        this.alive = new LivenessState()
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
        this.alive = new LivenessState(false)
    }

    getNextState() {
        let ALIVE = new LivenessState()
        this.#neighbours.filter(n => n.isAlive() == ALIVE).length
    }
}