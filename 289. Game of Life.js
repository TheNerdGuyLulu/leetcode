var checkNeighbors = function(board, i, k) {
    let liveCounter = 0;
    for (let z = -1; z <= 1; ++z) {
        for (let y = -1; y <= 1; ++y) {
            if (z === 0 && y === 0) continue;
            const row = i + z;
            const column = k + y;
            if (row < 0 || 
                column < 0 || 
                row >= board.length ||
                column >= board[0].length)
                    continue;
            if (board[row][column] >= 1)
                ++liveCounter;
        }
    }

    return liveCounter;
}

/**
 * @param {number[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var gameOfLife = function(board) {
    for (let i = 0; i < board.length; ++i) {
        for (let k = 0; k < board[i].length; ++k) {
            const liveCounter = checkNeighbors(board, i, k);
            
            if (board[i][k] == 1 && (liveCounter < 2 || liveCounter > 3))
                board[i][k] = 2;
            else if (board[i][k] == 0 && liveCounter === 3)
                board[i][k] = -1;
        }
    }

     for (let i = 0; i < board.length; ++i) {
        for (let k = 0; k < board[i].length; ++k) {
            if (board[i][k] === 2) 
                board[i][k] = 0;
              else if (board[i][k] === -1)
                board[i][k] = 1
        }
     }
};