const options = ["rock", "paper", "scissors"];

let computer = 0;
let you = 0;

let item = document.querySelectorAll(".items");

const container = document.querySelector(".container").innerHTML;

function game(element) {
    let rand = Math.floor(Math.random() * 3);
    let htmlelement = element.innerHTML;
    let a = document.querySelector("." + options[rand]).innerHTML;
    let b = document.createElement("div");
    b.setAttribute("class", "pc");
    document.body.querySelector(".container").prepend(b);
    b.innerHTML = a;
    let c = document.createElement("div");
    c.setAttribute("class", "me");
    document.querySelector(".container").append(c);
    c.innerHTML = htmlelement;
    document.querySelector(".rock").remove();
    document.querySelector(".paper").remove();
    document.querySelector(".scissors").remove();

    return rand;

}


function playRound(element) {
    let rand = game(element);
    const result = document.querySelector(".result");

    if (element.classList.contains("rock")) {
        if (options[rand] == "paper") {
            computer++;
            result.innerText = `You lost`;
        }
        else if (options[rand] == "scissors") {
            you++;
            result.innerText = `You won`;
        }
        else {
            result.innerText = `Draw`;

        }
    }

    else if (element.classList.contains("paper")) {
        if (options[rand] == "scissors") {
            computer++;
            result.innerText = `You lost`;
        }
        else if (options[rand] == "rock") {
            you++;
            result.innerText = `You won`;
        }
        else {
            result.innerText = `Draw`;

        }
    }

    else {
        if (options[rand] == "rock") {
            computer++;
            result.innerText = `You lost`;

        }
        else if (options[rand] == "paper") {
            you++;
            result.innerText = `You won`;
        }
        else {
            result.innerText = `Draw`;

        }
    }

    document.querySelector(".computer1").innerText = computer;
    document.querySelector(".you1").innerText = you;

    setTimeout(() => {
        document.querySelector(".container").innerHTML = container;

        item = document.querySelectorAll(".items");

        item.forEach(element => {
            element.addEventListener("click", () => {
                playRound(element);
            });
        });

        document.querySelector(".result").innerText = ``;

    }, 2000);

}

item.forEach(element => {
    element.addEventListener("click", () => {
        playRound(element);
    });
});
document.querySelector(".reset").addEventListener("click", () => {
    window.location.reload();
});