import { Cell } from "../src/cell.js"
import * as assert from "assert"
import LivenessState from "../src/LivenessState.js"

it("Celula viva", () => {
    const cell = new Cell()

    assert.deepEqual(cell.isAlive(), new LivenessState())
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
    n1.die()

    assert.deepEqual(cell.getNextState(), new LivenessState(false))
})