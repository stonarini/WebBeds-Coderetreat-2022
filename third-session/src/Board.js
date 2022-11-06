import Cell from "./Cell.js"
import LivenessState from "./LivenessState.js"

export default class Board {
    #grid = []

    constructor(colNum, rowNum, aliveCells) {
        for (let i of [...Array(colNum).keys()]) {
            this.#grid.push([...Array(rowNum).keys()].map(i => new Cell()))
        }

        for (let i of [...Array(colNum).keys()]) {
            for (let j of [...Array(rowNum).keys()]) {
                for (let ik = i - 1; ik <= i + 1; ik++) {
                    if (ik >= 0 && ik < colNum) {
                        for (let jk = j - 1; jk <= j + 1; jk++) {
                            if (jk >= 0 && jk < rowNum) {
                                this.#grid[i][j].addNeighbour(this.#grid[ik][jk])
                            }
                        }
                    }
                }
            }
        }

        for (let cell of aliveCells) {
            this.#grid[cell[0] - 1][cell[1] - 1].setState(LivenessState.ALIVE)
        }

    }

    nextTick() {
        this.#grid.forEach(row => row.forEach(cell => cell.nextState()))
    }

    get() {
        return this.#grid.map(row => row.map(cell => cell.visualize()))
    }
}
