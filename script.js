'use strict';

const sketchContainer = document.querySelector('.sketch');
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

function disableGridSizeBtns(tog) {
	const btnsSizeContainer = document.querySelector('.btns--size');

	for (const child of btnsSizeContainer.children) {
		child.disabled = tog;
		child.tagName;
	}
}

btn16.addEventListener('click', function () {
	disableGridSizeBtns(true);

	sketchContainer.insertAdjacentHTML('beforeend', renderSquares(16));
	squares = document.querySelectorAll('.sq');

	paintColours();
});

btn32.addEventListener('click', function () {
	disableGridSizeBtns(true);

	sketchContainer.insertAdjacentHTML('beforeend', renderSquares(32));
	squares = document.querySelectorAll('.sq');

	paintColours();
});

btn64.addEventListener('click', function () {
	disableGridSizeBtns(true);

	sketchContainer.insertAdjacentHTML('beforeend', renderSquares(64));

	squares = document.querySelectorAll('.sq');
	paintColours();
});

btnReset.addEventListener('click', function () {
	disableGridSizeBtns(false);
	// ? is there better way to reset grid?
	sketchContainer.innerHTML = '';
});

const randomRGB = function () {
	const randomNumber = () => Math.floor(Math.random() * 265);
	return `rgb(${randomNumber()},${randomNumber()},${randomNumber()})`;
};

const paintColours = function () {
	squares.forEach((square) => {
		square.addEventListener('mouseover', function (e) {
			e.target.style.backgroundColor = randomRGB();
		});
	});
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
	}
}

changeColour();
 */
