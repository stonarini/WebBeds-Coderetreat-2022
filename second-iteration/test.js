const main = require("./main");


test('initialize grid', () => {
    expect(main.init(4, 8, [(3, 4), (3, 5), (4, 4)])).toStrictEqual(
        [
            [0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 1, 1, 0, 0, 0],
            [0, 0, 0, 1, 0, 0, 0, 0],
        ]
    );
});

test('check row', () => {
    let grid = main.init(4, 8, [[3, 4], [3, 5], [4, 4]])
    expect(main.checkRow(grid, [2, 4])).toBe(0);
});


test('check columns', () => {
    let grid = main.init(4, 8, [[3, 4], [3, 5], [4, 4]])
    expect(main.checkColumns(grid, [3, 4])).toBe(2);
});


test('next tick', () => {
    let grid = main.init(4, 8, [[3, 4], [3, 5], [4, 4]])
    expect(main.nextTick(grid)).toBe(
        [
            [0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 1, 1, 0, 0, 0],
            [0, 0, 0, 1, 1, 0, 0, 0],
        ]
    );
});