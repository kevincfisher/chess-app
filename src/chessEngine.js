var chessboard = require('chessboardjs');
var Chess = require('chess.js').Chess;
var generator = new Chess();

var _calculateBestMove = function(game) {
    //get all moves for the given position
    var moves = game.ugly_moves();
    return moves[Math.floor(Math.random() * moves.length)];
};


export default {
    calculateBestMove: _calculateBestMove
}