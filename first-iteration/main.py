def start_game(col_num, row_num, cells):
    matrix = []
    for col in range(col_num):
        matrix.append([0 for i in range(0, row_num)])

    for cell in cells:
        matrix[cell[0] - 1][cell[1] - 1] = 1

    return matrix


def next_cycle(matrix, cell):
    col_num = [cell[0] - 1, cell[0], cell[0] + 1]
    row_num = [cell[1] - 1, cell[1], cell[1] + 1]

    counter = 0
    for col in col_num:
        for row in row_num:
            if col >= 0 and row >= 0 and col < len(matrix) and row < len(matrix[0]):
                counter += matrix[col][row]

    current_cell = matrix[cell[0]][cell[1]]

    if (2 <= counter - current_cell <= 3 and current_cell == 1) or (
        current_cell == 0 and counter - current_cell == 3
    ):
        return 1
    else:
        return 0


def next_tik(matrix):
    new_mat = []
    for i, row in enumerate(matrix):
        new_row = []
        for j, cell in enumerate(row):
            new_row.append(next_cycle(matrix, (i, j)))
        new_mat.append(new_row)
    return new_mat
