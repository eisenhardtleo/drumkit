// function add(num1, num2){
//     return num1 + num2;
// }


// function multiply(num1, num2){
//     return num1 * num2;
// }


// function subtract(num1, num2){
//     return num1 - num2;
// }


// function divide(num1, num2){
//     return num1 / num2;
// }

// function calculator(num1, num2, operator){
//     return operator(num1, num2);
// }

// console.log(calculator(2,3,add)); 
// console.log(calculator(2,3,multiply)); 
// console.log(calculator(7,3,subtract)); 
// console.log(calculator(12,3,divide)); 
//_____________________________________________________

let drumButtons = document.querySelectorAll(".drum");

drumButtons.forEach(b => {
    b.addEventListener("click", handleClick);
});

function handleClick(){
    alert("I got clicked!");
}

//_____________________or_____________________________

// for (let i = 0; i < drumButtons.length; i++) {
//     drumButtons[i].addEventListener("click", handleClick);    
// };
function handleClick(e){
    if (this.innerHTML === "w") {
        this.style.color = "white";
        var audio1 = new Audio("sounds/tom-1.mp3");
        audio1.play();
        this.classList.add("pressed");
        drumButtons[1].classList.remove("pressed");
        drumButtons[2].classList.remove("pressed");
        drumButtons[3].classList.remove("pressed");
        drumButtons[4].classList.remove("pressed");
        drumButtons[5].classList.remove("pressed");
        drumButtons[6].classList.remove("pressed");
    }

    if (this.innerHTML === "a") {
        this.style.color = "white";
        var audio2 = new Audio("sounds/tom-2.mp3");
        audio2.play();
        this.classList.add("pressed");
        drumButtons[0].classList.remove("pressed");
        drumButtons[2].classList.remove("pressed");
        drumButtons[3].classList.remove("pressed");
        drumButtons[4].classList.remove("pressed");
        drumButtons[5].classList.remove("pressed");
        drumButtons[6].classList.remove("pressed");
    }

    if (this.innerHTML === "s") {
        this.style.color = "white";
        var audio3 = new Audio("sounds/tom-3.mp3");
        audio3.play();
        this.classList.add("pressed");
        drumButtons[0].classList.remove("pressed");
        drumButtons[1].classList.remove("pressed");
        drumButtons[3].classList.remove("pressed");
        drumButtons[4].classList.remove("pressed");
        drumButtons[5].classList.remove("pressed");
        drumButtons[6].classList.remove("pressed");
    }

    if (this.innerHTML === "d") {
        this.style.color = "white";
        var audio4 = new Audio("sounds/tom-4.mp3");
        audio4.play();
        this.classList.add("pressed");
        drumButtons[0].classList.remove("pressed");
        drumButtons[1].classList.remove("pressed");
        drumButtons[2].classList.remove("pressed");
        drumButtons[4].classList.remove("pressed");
        drumButtons[5].classList.remove("pressed");
        drumButtons[6].classList.remove("pressed");
    }
    
    if (this.innerHTML === "j") {
        this.style.color = "green";
        var audio5 = new Audio("sounds/snare.mp3");
        audio5.play();
        this.classList.add("pressed");
        drumButtons[0].classList.remove("pressed");
        drumButtons[1].classList.remove("pressed");
        drumButtons[2].classList.remove("pressed");
        drumButtons[3].classList.remove("pressed");
        drumButtons[5].classList.remove("pressed");
        drumButtons[6].classList.remove("pressed");
    }

    if (this.innerHTML === "k") {
        this.style.color = "green";
        var audio6 = new Audio("sounds/crash.mp3");
        audio6.play();
        this.classList.add("pressed");
        drumButtons[0].classList.remove("pressed");
        drumButtons[1].classList.remove("pressed");
        drumButtons[2].classList.remove("pressed");
        drumButtons[3].classList.remove("pressed");
        drumButtons[4].classList.remove("pressed");
        drumButtons[6].classList.remove("pressed");
    }

    if (this.innerHTML === "l") {
        this.style.color = "green";
        var audio7 = new Audio("sounds/kick-bass.mp3");
        audio7.play();
        this.classList.add("pressed");
        drumButtons[0].classList.remove("pressed");
        drumButtons[1].classList.remove("pressed");
        drumButtons[2].classList.remove("pressed");
        drumButtons[3].classList.remove("pressed");
        drumButtons[4].classList.remove("pressed");
        drumButtons[5].classList.remove("pressed");
    }
}

window.addEventListener("keydown", handleKeyboard);

function handleKeyboard(e){
    if (e.key === "w") {
        var audio1 = new Audio("sounds/tom-1.mp3");
        audio1.play();
        drumButtons[0].classList.add("pressed");
        setTimeout(function(){
            drumButtons[0].classList.remove("pressed")
        }, 200);
    }

    if (e.key === "a") {
        var audio2 = new Audio("sounds/tom-2.mp3");
        audio2.play();
        drumButtons[1].classList.add("pressed");
        setTimeout(function(){
            drumButtons[1].classList.remove("pressed")
        }, 200);
    }

    if (e.key === "s") {
        var audio3 = new Audio("sounds/tom-3.mp3");
        audio3.play();
        drumButtons[2].classList.add("pressed");
        setTimeout(function(){
            drumButtons[2].classList.remove("pressed")
        }, 200);
    }

    if (e.key === "d") {
        var audio4 = new Audio("sounds/tom-4.mp3");
        audio4.play();
        drumButtons[3].classList.add("pressed");
        setTimeout(function(){
            drumButtons[3].classList.remove("pressed")
        }, 200);
    }
    
    if (e.key === "j") {
        var audio5 = new Audio("sounds/snare.mp3");
        audio5.play();
        drumButtons[4].classList.add("pressed");
        setTimeout(function(){
            drumButtons[4].classList.remove("pressed")
        }, 200);
    }

    if (e.key === "k") {
        var audio6 = new Audio("sounds/crash.mp3");
        audio6.play();
        drumButtons[5].classList.add("pressed");
        setTimeout(function(){
            drumButtons[5].classList.remove("pressed")
        }, 200);
    }

    if (e.key === "l") {
        var audio7 = new Audio("sounds/kick-bass.mp3");
        audio7.play();
        drumButtons[6].classList.add("pressed");
        setTimeout(function(){
            drumButtons[6].classList.remove("pressed")
        }, 200);
    }

//     switch (e.key) {
//         case "w":
//             drumButtons[0].style.color = "white"
//             var audio1 = new Audio("sounds/tom-1.mp3");
//             audio1.play();
//             break;
//         case "a":
//             drumButtons[1].style.color = "white"
//             var audio2 = new Audio("sounds/tom-2.mp3");
//             audio2.play();
//             break;
//         case "s":
//             drumButtons[2].style.color = "white"
//             var audio3 = new Audio("sounds/tom-3.mp3");
//             audio3.play();
//             break;
//         case "d":
//             drumButtons[3].style.color = "white"
//             var audio4 = new Audio("sounds/tom-4.mp3");
//             audio4.play();
//             break;
//         case "j":
//             drumButtons[4].style.color = "green"
//             var audio5 = new Audio("sounds/snare.mp3");
//             audio5.play();
//             break;
//         case "k":
//             drumButtons[5].style.color = "green"
//             var audio6 = new Audio("sounds/crash.mp3");
//             audio6.play();
//             break;
//         case "l":
//             drumButtons[6].style.color = "green"
//             var audio7 = new Audio("sounds/kick-bass.mp3");
//             audio7.play();
//             break;
//         default:
//             alert("Click one of buttons below!")
//             break;
//     }
}
// _______________________________________________________________________________________________

//_______________________________________________________________________________________________
// function HouseKeeper(nome, cognome, età, skills){
//     this.nome = nome,
//     this.cognome = cognome,
//     this.età = età,
//     this.skills = skills
//     this.clean = function(){
//         alert(`Salve, sono ${this.nome} ${this.cognome} e pulisco tutto tranne le cappelle.`)
//     }
// }

// let Angelina = new HouseKeeper("Angelina", "Favolosa", 41, ["cucina, bagno, camere"]);

// Angelina.clean();