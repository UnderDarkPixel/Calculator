const input = document.querySelector(".input")

var isType = false;


function append(values) {
    if(values === '+' || values === '-' || values === '/' || values === '*' || values === '%') {
        input.value += " "
        input.value += values
        input.value += " "
        isType = true;
    }
    else {
        input.value += values
        isType = true;
    }
}

function Allclear() {
    input.value = "";
}

function cls() {
    if(input.value < 0 && isType === false) {
        input.value = "";
    }
    else {
        input.value = input.value.slice(0, -1)
    }
}

function Values() {
    input.value = eval(input.value);
    isType = false;
}


