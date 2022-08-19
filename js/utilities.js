function getTextElementValueById(elementId){
    const phoneTotalElement = document.getElementById(elementId);
    const CurrentPhoneTotalString = phoneTotalElement.innerText;
    const CurrentPhoneTotal = parseInt(CurrentPhoneTotalString);
    return CurrentPhoneTotal;
}

function setTextElemenetValueById(elementId,value){
    const subTotaElement = document.getElementById(elementId);
    subTotaElement.innerText = value;
}

function calculateSubTotal(){
    // calculate total
    const currentPhoneTotal = getTextElementValueById('phone-total');
    const currentCaseTotal = getTextElementValueById('case-total');

    const currentSubTotal = currentPhoneTotal + currentCaseTotal;
    setTextElemenetValueById('sub-total', currentSubTotal);

    // calculate tax
    const taxAmountString = (currentSubTotal * 0.1).toFixed(2);
    const taxAmount = parseInt(taxAmountString);
    setTextElemenetValueById('tax-amount',taxAmount);

    const finalAMount = currentSubTotal + taxAmount;
    setTextElemenetValueById('final-total', finalAMount);
}
