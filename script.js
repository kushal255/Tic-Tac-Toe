let currentPlayer = "X";
let arr = Array(9).fill(null);

function showWinner(text) {
    // hide the board
    document.querySelector(".container").style.display = "none";

    // show golden winner text
    const winnerBox = document.getElementById("winnerBox");
    winnerBox.innerHTML = text;
    winnerBox.style.display = "block";
}

function checkWinner() {
    if (
        (arr[0] != null && arr[0] == arr[1] && arr[1] == arr[2]) ||
        (arr[3] != null && arr[3] == arr[4] && arr[4] == arr[5]) ||
        (arr[6] != null && arr[6] == arr[7] && arr[7] == arr[8]) ||
        (arr[0] != null && arr[0] == arr[3] && arr[3] == arr[6]) ||
        (arr[1] != null && arr[1] == arr[4] && arr[4] == arr[7]) ||
        (arr[2] != null && arr[2] == arr[5] && arr[5] == arr[8]) ||
        (arr[0] != null && arr[0] == arr[4] && arr[4] == arr[8]) ||
        (arr[2] != null && arr[2] == arr[4] && arr[4] == arr[6])
    ) {
        showWinner(`${currentPlayer} Wins!`);
        return;
    }

    if (!arr.some((e) => e === null)) {
        showWinner("It's a Draw!");
        return;
    }
}

function handleClick(el) {
    const id = Number(el.id);
    if (arr[id] != null) return;

    arr[id] = currentPlayer;
    el.innerHTML = currentPlayer;

    checkWinner();

    currentPlayer = currentPlayer === "X" ? "0" : "X";
}
