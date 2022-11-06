const gameOfLife = require("./main");


// test('initialize grid', () => {
//     expect(main.init(4, 8, [[3, 4], [3, 5], [4, 4]])).toStrictEqual(
//         [
//             [0, 0, 0, 0, 0, 0, 0, 0],
//             [0, 0, 0, 0, 0, 0, 0, 0],
//             [0, 0, 0, 1, 1, 0, 0, 0],
//             [0, 0, 0, 1, 0, 0, 0, 0],
//         ]
//     );
// });

// test('check row', () => {
//     let grid = main.init(4, 8, [[3, 4], [3, 5], [4, 4]])
//     expect(main.checkRow(grid, [1, 3])).toBe(0);
// });


// test('check columns', () => {
//     let grid = main.init(4, 8, [[3, 4], [3, 5], [4, 4]])
//     expect(main.checkColumns(grid, [2, 3])).toBe(2);
// });


// test('next tick', () => {
//     let grid = main.init(4, 8, [[3, 4], [3, 5], [4, 4]])
//     expect(main.nextTick(grid)).toStrictEqual(
//         [
//             [0, 0, 0, 0, 0, 0, 0, 0],
//             [0, 0, 0, 0, 0, 0, 0, 0],
//             [0, 0, 0, 1, 1, 0, 0, 0],
//             [0, 0, 0, 1, 1, 0, 0, 0],
//         ]
//     );
// });

test("init board", () => {
    gameOfLife.createBoard(4, 8, [[2, 5], [3, 4], [3, 5]])
    expect(gameOfLife.getBoard()).toStrictEqual(
        [
            [0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 1, 0, 0, 0],
            [0, 0, 0, 1, 1, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0],
        ]
    )
})

test("next tick", () => {
    gameOfLife.createBoard(4, 8, [[2, 5], [3, 4], [3, 5]])
    expect(gameOfLife.nextTick()).toStrictEqual(
        [
            [0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 1, 1, 0, 0, 0],
            [0, 0, 0, 1, 1, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0],
        ]
    )
})