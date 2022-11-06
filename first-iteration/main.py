def start_game(col_num, row_num, cells):
    matrix = []
    for col in range(col_num):
        matrix.append([0 for i in range(0, row_num)])

    for cell in cells:
        matrix[cell[0] - 1][cell[1] - 1] = 1

    return matrix

def should_die(matrix, cell):
    col_num = [cell[0] - 1, cell[0], cell[0] + 1]
    row_num = [cell[1] - 1, cell[1], cell[1] + 1]

    counter = 1
    for col in col_num:
        for row in row_num:
            if matrix[col][row] == 1:
                counter += 1
    
    if counter >= 2 
