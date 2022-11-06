from main import start_game


def test_grid():
    matrix = start_game(4, 8, [(2, 5), (3, 4), (3, 5), (4, 6)])
    assert len(matrix) == 4
    assert matrix == [
        [0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 1, 0, 0, 0],
        [0, 0, 0, 1, 1, 0, 0, 0],
        [0, 0, 0, 0, 0, 1, 0, 0],
    ]


def test_should_die():
    matrix = start_game(4, 8, [(2, 5), (3, 4), (3, 5), (4, 6)])
    assert should_die(matrix, (4, 6)) == True
