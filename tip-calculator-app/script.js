const reset = document.querySelector('.reset-button');
const tipPercentage = document.querySelector('.tip-percentage');

let tipPerPerson = 0; 


const addTip = (num) => {
    tipPerPerson = num;
    calc();
}

const customTip = () => {
    let tipAmount = Number(document.querySelectorAll('.tip-percentage')[5].value) / 100;
    let billAmount = Number(document.querySelector('.bill-amount').value);
    let peopleNumber = Number(document.querySelector('.people-number').value);
    let totalTipPerPerson = (billAmount * tipAmount) / peopleNumber;
    let totalPerPerson = (billAmount / peopleNumber) + totalTipPerPerson;
    document.querySelector('.tip-person').innerHTML = '$' + totalTipPerPerson.toFixed(2);
    document.querySelector('.total-person').innerHTML = '$' + totalPerPerson.toFixed(2);
    
}

const calc = () => {
    let billAmount = Number(document.querySelector('.bill-amount').value);
    let peopleNumber = Number(document.querySelector('.people-number').value);
    let percentageAdd = tipPerPerson * billAmount;
    let totalTipPerPerson = percentageAdd / peopleNumber;
    let totalPerPerson = (billAmount / peopleNumber) + totalTipPerPerson;
    document.querySelector('.tip-person').innerHTML = '$' + totalTipPerPerson.toFixed(2);
    document.querySelector('.total-person').innerHTML = '$' + totalPerPerson.toFixed(2);

}

reset.onclick = function(){
    document.querySelector('.tip-person').innerHTML = '$0.00';
    document.querySelector('.total-person').innerHTML = '$0.00';
    document.querySelector('.people-number').value = 2;
    document.querySelector('.bill-amount').value = 10;
    document.querySelectorAll('.tip-percentage')[5].value = '';

};

