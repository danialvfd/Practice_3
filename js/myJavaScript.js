// variable
var basePrice = 2500;

function calculatePrices(number) {
    let monthlyPriceElement = document.getElementById('monthlyPrice');
    
    if (monthlyPriceElement === null) {
        console.log("undefined");
    } else {
        monthlyPriceElement.innerText = number * 2 * basePrice;
    }

    let monthlyPaymentElement = document.getElementById('monthlyPayment');
    if (monthlyPaymentElement === null) {
        console.log("undefined");
    } else {
        monthlyPaymentElement.innerText = number * 2 * basePrice * 0.3;
    }

    let totalPaymentElement = document.getElementById('totalPayment');
    if (totalPaymentElement === null) {
        console.log("undefined");
    } else {
        totalPaymentElement.innerText = number * 2 * basePrice * 1.3;
    }
}

document.querySelectorAll('.my-button').forEach(button => {
    button.addEventListener('click', function() {
        document.querySelectorAll('.my-button').forEach(btn => btn.classList.remove('is-checked'));
        
        this.classList.add('is-checked');
    });
});