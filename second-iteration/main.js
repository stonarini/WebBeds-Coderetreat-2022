

function init(col, row, cells) {
    let grid = []

    for (i of [...Array(col).keys()]) {
        grid.push([...Array(row).fill(0)])
    }

    for (cell of cells) {
        grid[cell[0] - 1][cell[1] - 1] = 1
    }

    return grid
}

function checkRow(grid, cell) {
    let row = grid[cell[0]]
    let counter = 0
    for (let i = cell[1] - 1; i <= cell[1] + 1; i++) {
        counter += i >= 0 && i < grid[0].length ? row[i] : 0;
    }
    return counter;
}

function checkColumns(g, cell) {
    let counter = 0
    for (let i = cell[0] - 1; i <= cell[0] + 1; i++) {
        counter += i >= 0 && i < g.length ? checkRow(g, [i, cell[1]]) : 0
    }
    return counter - g[cell[0]][cell[1]]
}

function nextTick(g) {
    let new_g = g
    for (let i = 0; i < g.length; i++) {
        for (let j = 0; j < g[i].length; j++) {
            let neighbours = checkColumns(g, [i, j])
            new_g[i][j] = neighbours < 2 ? 0 : (neighbours == 3 && g[i][j] == 0) || (neighbours < 3 && g[i][j] == 1) ? 1 : 0
        }
    }
    return new_g
}

module.exports = { init, checkRow, checkColumns, nextTick }