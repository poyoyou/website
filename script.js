//const body = document.getElementById("body")
//const btn = document.getElementById("btn1")

function random(x) {
    return Math.floor(Math.random()*x+1)
}

//let rgb= ("rgb(" + random(255) + ", " + random(255) + ", " + random(255) + ")")

//console.log(rgb)
function changeColor() {
    let rgb= ("rgb(" + random(255) + ", " + random(255) + ", " + random(255) + ")")

    const body = document.getElementById("bodyy")
    const btn = document.getElementById("btn1")
    body.style.backgroundColor= rgb;
}