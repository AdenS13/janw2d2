var count = 0
var number = 0
var numericValue = 0
var likes1 = document.querySelector('#likes1')
var likes2 = document.querySelector('#likes2')
var likes3 = document.querySelector('#likes3')


function displayLikes1() {
    count++;
    likes1.innerText = count + " like(s)"
}

function displayLikes2() {
    number++;
    likes2.innerText = number + " like(s)"
}

function displayLikes3() {
    numericValue++;
    likes3.innerText = numericValue + " like(s)"
}