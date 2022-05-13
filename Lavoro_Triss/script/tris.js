/*
const X_CLASS = 'x'
const CIRCLE_CLASS = 'circle'
const WINNING_COMBINATIONS = 
[
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6]
]
const cellElements = document.querySelectorAll('[data-cell]')
const board = document.getElementById('board')
const winningMessageElement = document.getElementById('winningMessage')
const restartButton = document.getElementById('restartButton')
const winningMessageTextElement = document.querySelector('[data-winning-message-text]')
let circleTurn

startGame()

restartButton.addEventListener('click', startGame)

function startGame() {
		circleTurn = false
		cellElements.forEach(cell => {
		cell.classList.remove(X_CLASS)
		cell.classList.remove(CIRCLE_CLASS)
		cell.removeEventListener('click', handleClick)
		cell.addEventListener('click', handleClick, { once: true })
	})
	setBoardHoverClass(classList)
	winningMessageElement.classList.remove('show')
}

function handleClick(e) {
	const cell = e.target
	const currentClass = circleTurn ? CIRCLE_CLASS : X_CLASS
	placeMark(cell, currentClass)
	if (checkWin(currentClass)) {
		endGame(false)
	} else if (isDraw()) {
		endGame(true)
	} else {
		swapTurns()
		setBoardHoverClass(classList)
	}
}

function endGame(draw) {
	if (draw) 	{
		winningMessageTextElement.innerText = 'Draw!'
	} else {
		winningMessageTextElement.innerText = `${circleTurn ? "O's" : "X's"} Wins!`
	}
		winningMessageElement.classList.add('show')
}

function isDraw() {
	return [...cellElements].every(cell => {
	return cell.classList.contains(X_CLASS) || cell.classList.contains(CIRCLE_CLASS)
})
}

function placeMark(cell, currentClass) {
	cell.classList.add(currentClass)
}

function swapTurns() {
	circleTurn = !circleTurn
}

function setBoardHoverClass() {
	//errore in questa funzione
	board.classList.remove(X_CLASS)
	board.classList.remove(CIRCLE_CLASS)
	if (circleTurn) {
	board.classList.add(CIRCLE_CLASS)
	} else {
	board.classList.add(X_CLASS)
	}
}


function checkWin(currentClass) {
	return WINNING_COMBINATIONS.some(combination => {
	return combination.every(index => {
		return cellElements[index].classList.contains(currentClass)
	})
	})
}
*/

var turno=0
const comGiuste = [
	[0, 1, 2],
	[3, 4, 5],
	[6, 7, 8],
	[0, 3, 6],
	[1, 4, 7],
	[2, 5, 8],
	[0, 4, 8],
	[2, 4, 6]
  ]
var arrayx = []
var arrayy = []
function assegna(posizione)
{
	if(turno%2==0)
	{
		document.images[posizione].src= "x.png"
		arrayx.push(posizione)
	}
	else
	{
		document.images[posizione].src="o.png"
		arrayy.push(posizione)
	}
	turno+=1

	if(turno>4){
		checkWin();
	}
}

function checkWin(){
	/*variabile per capire se c'è la casella esatta nella combinazione di vittoria*/
	var casellaEsatta = false
	//varibile per capire se raggiunge 3 caselle per "formare" la vittoria
	var caselleEsatte = 0
	//cicla le 8 combinazioni di vittoria del tris
	for(var c = 0; i<8; c++){
		//cicla le caselle dove c'è una x sopra
		for(var i = 0; i<arrayx.length; i++){
			//cicla una combinazione di vittoria 
			for(var a = 0; a<3; a++){
				//controlla se la casella selezionata in questo momento è uguale a una solo casella della combinazione corretta
				if(arrayx[i] == comGiuste[c][a]){
					var casellaEsatta = true
				}
			}
			// se la casella è stata trovata nella combinazione corretta aggiungo uno alla variabile caselle esatte (se raggiunge tre caselle corrette allora è vittoria)
			if(casellaEsatta == true){
				caselleEsatte++
				casellaEsatta = false
			}
		}
		if(caselleEsatte == 3){
			/*VITTORIA PER LE X*/
			getElementById("setText").innerText = "ciao";
		}
		caselleEsatte = 0
	}
}