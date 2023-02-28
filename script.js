'use strict';

const sketchContainer = document.querySelector('.container--sketch');
const btn16 = document.querySelector('.btn--16');
const btn32 = document.querySelector('.btn--32');
const btn64 = document.querySelector('.btn--64');
const btnReset = document.querySelector('.btn--reset');

const renderSquares = function (num) {
	sketchContainer.style.gridTemplateColumns = `repeat(${num}, 1fr)`;

	let code = '';

	for (let i = 1; i <= num * num; i++) {
		code += `<div class="sq sq--${i}"></div>`;
	}
	return code;
};

let squares;

// todo: work on this
function disableGridSizeBtns() {
	const questionContainer = document.querySelector('.container--question');

	for (const child of questionContainer.children) {
		console.log((child.disabled = true));
	}
}

btn16.addEventListener('click', function () {
	disableGridSizeBtns();
	sketchContainer.insertAdjacentHTML('beforeend', renderSquares(10));
	squares = document.querySelectorAll('.sq');

	squareColourRandomizer();
});

btn32.addEventListener('click', function () {
	sketchContainer.insertAdjacentHTML('beforeend', renderSquares(32));
	squares = document.querySelectorAll('.sq');

	squareColourRandomizer();
});

btn64.addEventListener('click', function () {
	sketchContainer.insertAdjacentHTML('beforeend', renderSquares(64));
	squares = document.querySelectorAll('.sq');

	squareColourRandomizer();
});

btnReset.addEventListener('click', function () {
	// ? is there better way to reset grid?
	sketchContainer.innerHTML = '';
});

const squareColourRandomizer = function () {
	squares.forEach((square) => {
		square.addEventListener('mouseover', function (e) {
			const randomColor = `rgb(${randomNumber()},${randomNumber()},${randomNumber()})`;

			// console.log(`User hovered over ${square.classList}`);
			// const clickedSquare = document.querySelector(`.sq--${square.innerText}`);
			// clickedSquare.style.backgroundColor = randomColor;
			e.target.style.backgroundColor = randomColor;
		});
	});
};

// For generating random color
const randomNumber = function () {
	return Math.floor(Math.random() * 265);
};

//todo: click and hover
/* 

let isMouseDown;

document.addEventListener('mousedown', function () {
  isMouseDown = true;
});

document.addEventListener('mouseup', function () {
  isMouseDown = false;
});

function changeColour(e) {
  if (isMouseDown) {
    console.log(e.target);
	}
}
changeColour();

*/

// Event listener hovering over square
/* 
squares.forEach((square) => {
	square.addEventListener('mouseover', function (e) {
		const randomColor = `rgb(${randomNumber()},${randomNumber()},${randomNumber()})`;

		// console.log(`User hovered over ${square.classList}`);
		// const clickedSquare = document.querySelector(`.sq--${square.innerText}`);
		// clickedSquare.style.backgroundColor = randomColor;
		e.target.style.backgroundColor = randomColor;
	});
});
 */
////////////
