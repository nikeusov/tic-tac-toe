class TicTacToe {
    constructor() {
        this.currentPlayerSymbol = 'x',
        this.gameField = [
        [null,null,null],
        [null,null,null],
        [null,null,null]
        ];
    };

    getCurrentPlayerSymbol() {
        return this.currentPlayerSymbol;
    };

    nextTurn(rowIndex, columnIndex) {
        if(this.getFieldValue(rowIndex, columnIndex) === null){
            this.gameField[rowIndex][columnIndex] = this.currentPlayerSymbol;
        if(this.currentPlayerSymbol === 'x'){
            this.currentPlayerSymbol = 'o';
        } else {
            this.currentPlayerSymbol = 'x';
        };
        };
    };

    isFinished() {
        return this.noMoreTurns() || this.getWinner() !== null;
    };

    getWinner() {
        for (let i = 0; i < this.gameField.length; i++) {
            if (this.gameField[i][0] === this.gameField[i][1] && this.gameField[i][0] === this.gameField[i][2] && this.gameField[i][0] !== null) {
            return this.gameField[i][0];
            };
        };

        if (this.gameField[0][0] === this.gameField[1][0] && this.gameField[1][0] === this.gameField[2][0] && this.gameField[2][0] !== null) return this.gameField[2][0];
        if (this.gameField[0][1] === this.gameField[1][1] && this.gameField[1][1] === this.gameField[2][1] && this.gameField[2][1] !== null) return this.gameField[2][1];
        if (this.gameField[0][2] === this.gameField[1][2] && this.gameField[1][2] === this.gameField[2][2] && this.gameField[2][2] !== null) return this.gameField[2][2];
        if (this.gameField[0][0] === this.gameField[1][1] && this.gameField[1][1] === this.gameField[2][2] && this.gameField[2][2] !== null) return this.gameField[2][2];
        if (this.gameField[0][2] === this.gameField[1][1] && this.gameField[1][1] === this.gameField[2][0] && this.gameField[2][0] !== null) return this.gameField[2][0];

        return null;
    };

    noMoreTurns() {
        for (let i = 0; i < this.gameField.length; i++){
            for (let j = 0; j < this.gameField[i].length; j++) {
                if (this.gameField[i][j] === null) {
                    return false;
                };
            };
        };
        return true;
    };

    isDraw() {
        return this.isFinished() && this.getWinner() === null;
    };

    getFieldValue(rowIndex, colIndex) {
        return this.gameField[rowIndex][colIndex];
    };
};

module.exports = TicTacToe;
