let passBox = document.getElementById('passBox')
let copyIcon = document.getElementById('copyIcon')
let inputSlider = document.getElementById('inputSlider')
let sliderValue = document.getElementById('sliderValue')
let lowerCase = document.getElementById('lowerCase')
let upperCase = document.getElementById('upperCase')
let numbers = document.getElementById('numbers')
let symbols = document.getElementById('symbols')
let btn = document.getElementById('btn')


sliderValue.textContent = inputSlider.value 
inputSlider.addEventListener('input', () => {
    sliderValue.textContent = inputSlider.value
})

btn.addEventListener('click', () => {
    passBox.value = generatePassword()
})

const upperAlphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
const lowerAlphabet = 'abcdefghijklmnopqrstuvwxyz'
const allNumbers = '0123456789'
const allSymbols = '!@#$%&?/'

function generatePassword(){
    let allChars = ""
    let genPass = ""

    allChars += lowerCase.checked ? lowerAlphabet : ""
    allChars += numbers.checked ? allNumbers : ""
    allChars += upperCase.checked ? upperAlphabet : ""
    allChars += symbols.checked ? allSymbols : ""

    let i = 1;
    while(i <= inputSlider.value){
        genPass += allChars.charAt(Math.floor(Math.random() * allChars.length))
        i++
    }

    return genPass
}

copyIcon.addEventListener('click', () => {
    if(passBox.value != "" && passBox.value.length >= 1){
        navigator.clipboard.writeText = passBox.value
        copyIcon.innerText = 'check'
        copyIcon.title = 'Password copied'

        setTimeout(() => {
            copyIcon.innerHTML = 'content_copy'
            copyIcon.title = ""
        }, 3000)
    }
})