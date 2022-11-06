

function init(col, row, cells) {
    let grid = [

    ]
    return [
        [0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 1, 1, 0, 0, 0],
        [0, 0, 0, 1, 0, 0, 0, 0],
    ]
}

function checkRow(grid, cell) {
    let row = grid[cell[0] - 1]
    let counter = 0
    for (let i = cell[1] - 1; i < cell[1] + 1; i++) {
        counter += row[i];
    }
    return counter;
}

function checkColumns(g, cell) {
    let counter = 0
    for (let i = cell[0] - 2; i < cell[0] + 1; i++) {
        counter += checkRow(g, [i, cell[1]])
    }
    return counter - g[cell[0]][cell[1]]
}

function nextTick(g) {
    let new_g = g
    for (let i = 0; i < g.length; i++) {
        for (let j = 0; j < g[i].length; j++) {
            new_g[i][j] = checkColumns(g, [i, j]) < 2 || checkColumns(g, [i, j]) > 3 ? 0 : 1
        }
    }
}

module.exports = { init, checkRow, checkColumns, nextTick }