import Cell from "../src/Cell.js"
import * as assert from "assert"
import LivenessState from "../src/LivenessState.js"
import Board from "../src/Board.js"

it("Celula viva", () => {
    const cell = new Cell()

    assert.deepEqual(cell.isAlive(), new LivenessState(false))
})

it("asignacion Vecinos", () => {
    const cell = new Cell()
    const neighbour = new Cell()
    cell.addNeighbour(neighbour)
    assert.deepEqual(cell.getNeighbours()[0], neighbour)
})

it("cell can die", () => {
    const cell = new Cell()

    cell.die()

    assert.deepEqual(cell.isAlive(), new LivenessState(false))
})

it("cell should die", () => {
    const cell = new Cell(), n1 = new Cell(), n2 = new Cell()
    cell.setState(LivenessState.ALIVE)
    cell.nextState()
    assert.deepEqual(cell.isAlive(), new LivenessState(false))
})

it("board should initialize", () => {
    const board = new Board(4, 8, [[2, 5], [3, 4], [3, 5]])
    assert.deepEqual(board.get(), [
        [0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 1, 0, 0, 0],
        [0, 0, 0, 1, 1, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0],
    ])
})

it("board should update to new tick", () => {
    const board = new Board(4, 8, [[2, 5], [3, 4], [3, 5]])
    board.nextTick()
    assert.deepEqual(board.get(), [
        [0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 1, 1, 0, 0, 0],
        [0, 0, 0, 1, 1, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0],
    ])
})