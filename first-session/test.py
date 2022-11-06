from main import start_game, next_cycle, next_tik


def test_grid():
    matrix = start_game(4, 8, [(2, 5), (3, 4), (3, 5)])
    assert len(matrix) == 4
    assert matrix == [
        [0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 1, 0, 0, 0],
        [0, 0, 0, 1, 1, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0],
    ]


def test_next_cycle():
    matrix = start_game(4, 8, [(2, 5), (3, 4), (3, 5)])
    assert next_cycle(matrix, (3, 5)) == 0
    assert next_cycle(matrix, (1, 3)) == 1


def test_next_tik():
    matrix = start_game(4, 8, [(2, 5), (3, 4), (3, 5)])
    matrix = next_tik(matrix)
    assert matrix == [
        [0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 1, 1, 0, 0, 0],
        [0, 0, 0, 1, 1, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0],
    ]
