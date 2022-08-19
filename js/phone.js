function updatePhoneNumber(isIncrease){
    const phoneNumberField = document.getElementById('phone-number-field');
    const phoneNumberString = phoneNumberField.value;
    const previousPhoneNumber = parseInt(phoneNumberString);

    let newPhoneNumber;
    if(isIncrease===true){
        newPhoneNumber = previousPhoneNumber + 1;
    }
    else{
        newPhoneNumber = previousPhoneNumber - 1;
    }

    phoneNumberField.value = newPhoneNumber;

    return newPhoneNumber ;
}

function updatePhoneTotalPrice(newPhoneNumber){

    const phoneTotalPrice = newPhoneNumber * 1219 ;
    const phoneTotalElement = document.getElementById('phone-total');
    phoneTotalElement.innerText = phoneTotalPrice;
}



document.getElementById('btn-phone-plus').addEventListener('click',function(){

    const newPhoneNumber = updatePhoneNumber(true);

    updatePhoneTotalPrice(newPhoneNumber);

    // const phoneTotalPrice = newPhoneNumber * 1219 ;
    // const phoneTotalElement = document.getElementById('phone-total');
    // phoneTotalElement.innerText = phoneTotalPrice;

    // const phoneNumberField = document.getElementById('phone-number-field');
    // const phoneNumberString = phoneNumberField.value;
    // const previousCaseNumber = parseInt(phoneNumberString);

    // const newPhoneNumber = previousCaseNumber + 1;
    // phoneNumberField.value = newPhoneNumber;

    // calculate total

    calculateSubTotal();

    // const currentPhoneTotal = getTextElementValueById('phone-total');
    // const currentCaseTotal = getTextElementValueById('case-total');

    // const currentSubTotal = currentPhoneTotal + currentCaseTotal;
    // const subTotaElement = document.getElementById('sub-total');
    // subTotaElement.innerText = currentSubTotal;

})

document.getElementById('btn-phone-mines').addEventListener('click',function(){

    const newPhoneNumber = updatePhoneNumber(false);

    updatePhoneTotalPrice(newPhoneNumber);
    calculateSubTotal();
})