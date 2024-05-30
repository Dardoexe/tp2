start_row = (row // self.subgrid_size) * self.subgrid_size
    start_col = (col // self.subgrid_size) * self.subgrid_size
    for r in range(start_row, start_row + self.subgrid_size):
            for c in range(start_col, start_col + self.subgrid_size):
                if self.grid[r][c] == num:
                    return False3