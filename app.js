let userPoint = 0
let compPoint = 0

function play(userChoise) {
    const choices = ["rock", "paper", "scissors"]
    const randomIndex = Math.floor(Math.random() * 3)
    const computerChoice = choices[randomIndex]
    
    if(userChoise == "rock"){
        document.getElementById("bko").style.border = "red solid 3px"
        document.getElementById("bpapir").style.border = "red solid 0px"
        document.getElementById("bollo").style.border = "red solid 0px"

    } else if(userChoise == "paper") {
        document.getElementById("bpapir").style.border = "red solid 3px"
        document.getElementById("bollo").style.border = "red solid 0px"
        document.getElementById("bko").style.border = "red solid 0px"

    } else {
        document.getElementById("bollo").style.border = "red solid 3px"
        document.getElementById("bko").style.border = "red solid 0px"
        document.getElementById("bpapir").style.border = "red solid 0px"

    }
    
    const result = getResult(userChoise, computerChoice)
    document.getElementById("result").innerText = result

    if(computerChoice == "rock"){
        document.getElementById("gepvalasztkep").src = "./img/ko.png"
    } else if(computerChoice == "paper"){
        document.getElementById("gepvalasztkep").src = "./img/papir.png"
        
    } else {
        document.getElementById("gepvalasztkep").src = "./img/ollo.png"
    }


    document.getElementById("tePontod").innerHTML = userPoint
    document.getElementById("gepPont").innerHTML = compPoint
}

function getResult(user, computer){
    if (user === computer) {
        return "Döntetlen!"
    } else if(
        (user === "rock" && computer === "scissors") ||
        (user === "paper" && computer === "rock") ||
        (user === "scissors" && computer === "paper")
    ) {
        userPoint++
        return "Te nyertél!"
    } else {
        compPoint++
        return "Gép nyert!"
    }
}