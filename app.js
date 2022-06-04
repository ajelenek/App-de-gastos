let payName = [];
let payAmount = [];

let total = 0;

function getValueName(){
    let name = document.getElementById("name").value;
    payName.push(name);
    return name;
}

function getValuePayment(){
    let amount = parseInt(document.getElementById("amount").value);
    payAmount.push(amount);
    total += amount;
    return amount;
}

const container = document.getElementById("list");

function addPay(){
    const item = document.createElement("li");
    item.className += "list-group-item";
    const valueName = getValueName();
    const valuePayment = getValuePayment();
    item.innerText = valueName+": $"+valuePayment;
    container.append(item);
    updateTotal();
    updatePayEach();
}

function updateTotal(){
    const pay = document.getElementById("pay");
    pay.textContent = "Total: " + total;
}


 function updatePayEach(){
    const payEach = document.getElementById("payEach");
    payEach.textContent = "A cada uno le toca aportar: $" + (total/payAmount.length);
}
