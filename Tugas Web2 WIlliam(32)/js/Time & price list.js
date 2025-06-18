let Regular = document.querySelector('.Regular');
const totalTimeRegular = document.querySelector('.totalTimeRegular');

let Premium = document.querySelector('.Premium');
const totalTimePremium = document.querySelector('.totalTimePremium');

let VIP = document.querySelector('.VIP');
const totalTimeVIP = document.querySelector('.totalTimeVIP');

const Result = document.querySelector('#total');
console.log(Result)

const Launch = document.querySelector('input[type="button"]');
Launch.addEventListener('click', function () {
    if (Regular.checked === false && Premium.checked === false && VIP.checked === false) {
        alert('CHOOSE THE LIST FIRST MF!!!!!!');
    }
    let priceRegular = 3000; 
    if (Regular.checked === true) {
        priceRegular *= totalTimeRegular.value;
        Result.value = priceRegular;
    }

    let pricePremium = 12000;
    if (Premium.checked === true) {
        pricePremium *= totalTimePremium.value;
        Result.value = pricePremium;
    }

    let priceVIP = 25000; 
    if (VIP.checked === true) {
        priceVIP *= totalTimeVIP.value;
        Result.value = priceVIP;
    }

    if (Regular.checked === true && Premium.checked === true && VIP.checked === true) {
        Result.value = priceRegular + pricePremium + priceVIP;

    } else if (Regular.checked === true && Premium.checked === true) {
        Result.value = priceRegular + pricePremium;

    } else if (Regular.checked === true && VIP.checked === true) {
        Result.value = priceRegular + priceVIP;

    } else if (Premium.checked === true && VIP.checked === true) {
        Result.value = pricePremium + priceVIP;
    }

});