// Store the wallet amount to your local storage with key "amount"
function addToWallet() {
    let amount = Number(document.getElementById("amount").value) + (Number(JSON.parse(localStorage.getItem("wallet"))) || [])
    amount = +amount;

    localStorage.setItem("wallet", JSON.stringify(amount));
    window.location.reload();

}

let wallet = JSON.parse(localStorage.getItem("wallet"));

let id = document.getElementById("wallet");
id.innerText = wallet   