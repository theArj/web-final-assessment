// The headline element
const display = document.querySelector('#display')

// The input field for size
const inputSize = document.querySelector('#input-size')
// The element that displays the value 
const showSize = document.querySelector('#show-size')
// Repeat this for the input and "show" elements

const inputColor = document.querySelector('#input-color')

const inputBackgroundColor = document.querySelector('#input-bg-color')

inputSize.addEventListener('input', handleInput)

function handleInput() {
	// get the font size:
	const fontSize = inputSize.value
	// Set the style 
	display.style.fontSize = fontSize
    // Show the size
    showSize.innerHTML = fontSize

    // get the font family:
    const fontFamily = inputFamily.value
	// Set the family 
	display.style.fontFamily = fontFamily
    // Show the family
    showFamily.innerHTML = fontFamily

    // get the font color:
    const fontColor = inputColor.value
	// Set the color 
	display.style.fontColor = fontColor
    // Show the color
    showColor.innerHTML = fontColor

    // get the background color:
    const bgColor = inputColor.value
	// Set the color 
	display.style.bgColor = bgColor
    // Show the color
    showBgColor.innerHTML = bgColor
}