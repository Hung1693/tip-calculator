function getEle(id){
    return document.getElementById(id);
}

//calculate function
function calculateTip() {
    //set variables and values
    var totalAmount = getEle('billamt').value;
    var quality = getEle('serviceQual').value;
    var people = getEle('peopleamt').value;
    

    //alert when no total amount input
    if (totalAmount == '') {
        alert('Please put in your total amount!');
        return;
    }

    //if number of people = empty and <=1 => people =1 to avoid infinite
    if (people == '' || people <= 0) {
        people = 1;
    }

    //solution
    var tip = totalAmount * quality / people;
     //rounded to 2nd decimals
    tip = tip.toFixed(2);

    
    
    getEle('tip').innerHTML = tip;
  

    //display method after hit button
 
    getEle('totalTip').style.display = "block";
}

//display = "none" before hit button
document.getElementById('totalTip').style.display = "none";

// after hit button, call calculate function
getEle('calculate').onclick = function () { calculateTip() };