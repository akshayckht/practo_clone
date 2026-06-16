
//scroll Cards
function scrollCards(direction) {
    const cardContainer = document.getElementById("cardContainer");
    const card = cardContainer.querySelector(".card");
    const gap = 16;
    const scrollAmount = card.offsetWidth + gap;

    cardContainer.scrollBy({
        left: direction * scrollAmount,
        behavior: "smooth",
    });
}


//Phone Number Validation
function validateNumber () {

    let number = document.getElementById("form-num").value;

    console.log(isOnlyDigits);
    if(number.length < 10 || number.length > 10) {
        alert("Enter valid number");
        // return true;
    }else {
       if(isOnlyDigits(number)) {
           alert("Message has Send");
       }else {
           alert("Enter valid number");
       }
    }
}

function isOnlyDigits(number) {
    return /^\d+$/.test(number);
}