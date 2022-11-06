function gameOfLife() {

    var grid

    function init(col, row, cells) {
        grid = []

        for (i of [...Array(col).keys()]) {
            grid.push([...Array(row).fill(0)])
        }

        for (cell of cells) {
            grid[cell[0] - 1][cell[1] - 1] = 1
        }
    }

    function checkRow(cell) {
        let row = grid[cell[0]]
        let counter = 0
        for (let i = cell[1] - 1; i <= cell[1] + 1; i++) {
            counter += i >= 0 && i < grid[0].length ? row[i] : 0;
        }
        return counter;
    }

    function checkColumns(cell) {
        let counter = 0
        for (let i = cell[0] - 1; i <= cell[0] + 1; i++) {
            counter += i >= 0 && i < grid.length ? checkRow([i, cell[1]]) : 0
        }
        return counter - grid[cell[0]][cell[1]]
    }

    function nextTick() {
        let new_g = grid
        for (let i = 0; i < grid.length; i++) {
            for (let j = 0; j < grid[i].length; j++) {
                let neighbours = checkColumns([i, j])
                new_g[i][j] = neighbours < 2 ? 0 : (neighbours == 3 && grid[i][j] == 0) || (neighbours <= 3 && grid[i][j] == 1) ? 1 : 0
            }
        }
        grid = new_g
        return grid
    }

    function getBoard() {
        return grid
    }

    return {
        createBoard: init,
        nextTick,
        getBoard,
    }
}
module.exports = gameOfLife()