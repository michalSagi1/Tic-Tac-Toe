
const board = document.getElementById("board")
let num = 3
let arr = []
let a = 0
for (let i = 0; i < num; i++) {
    arr[i] = []
    const element = createCard(i)
    board.appendChild(element)

    for (let j = 0; j < num; j++) {
        arr[i][j] = `${a}`
        const element = createCard1(a, i, j)
        board.appendChild(element)
        a++

    }
}


let cnt = 0

function createCard() {
    const cardEl = document.createElement("div")
    cardEl.className = `row`
    return cardEl
}

function createCard1(a, i, j) {
    const cardEl = document.createElement("div")
    cardEl.id = `${a}`
    cardEl.innerHTML = "❤️"
    cardEl.className = `cards col-1 col-md-${12 / num}`


    cardEl.addEventListener('click', cardEl.fn = function fn() {
        if (cnt == 0) {
            cardEl.innerHTML = "❌"
            cnt++
            cardEl.removeEventListener('click', cardEl.fn, false)
            arr[i][j] = 'x'
            let b = 0



        }
        else {
            cardEl.innerHTML = "⭕"
            cnt = 0
            cardEl.removeEventListener('click', cardEl.fn, false)
            arr[i][j] = 'o'

        }


    })




    return cardEl
}



