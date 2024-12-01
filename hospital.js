let slides = document.querySelectorAll(".patientReview");
let cards = document.querySelectorAll(".card");
let closeBtn = document.getElementById("closeBtn");
let connectBtn = document.getElementById("connectBtn");

let count = 0;

slides.forEach(function(slide, index) {
    slide.style.left = `${index * 100}%`; // Fixed template literal
});

function myFun() {
    slides.forEach(function(curVal) {
        curVal.style.transform = `translateX(-${count * 100}%)`; // Fixed template literal
    });
}

setInterval(function() {
    count++;
    if (count === slides.length) {
        count = 0;
    }
    myFun();
}, 2000);

cards.forEach(function(card) {
    card.addEventListener("click", function() {
        console.log(card);
        document.querySelector(".detail").style.display = "block";
        document.querySelector(".content").innerHTML = `
        <img src="${card.firstElementChild.src}" alt="">
        <div class="contentText">
            <h1>Alexa Zoan</h1>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Commodi ex accusantium eius magnam, esse repellat veritatis, consectetur aut perspiciatis dolor labore sapiente.</p>
        </div>
        `;
        closeBtn.addEventListener("click", function() {
            document.querySelector(".detail").style.display = "none";
        });
    });
});

connectBtn.addEventListener("click", function() {
    let email = document.getElementById("email");
    let pass = document.getElementById("pass");

    if (email.value === "" && pass.value === "") {
        alert("Enter Details");
    } else {
        alert("You Logged IN");
    }
});
