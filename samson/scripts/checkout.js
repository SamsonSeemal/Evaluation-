// Each ticket will cost 100 Rupees
// If wallet amount is insufficient show alert "Insufficient Balance!";
// Else show "Booking successfull!" and adjust the wallet amount in real time

let wallet = JSON.parse(localStorage.getItem("wallet"));

let id = document.getElementById("wallet");
id.innerText = wallet


let dataArr = JSON.parse(localStorage.getItem('movie'));
// console.log(dataArr);

let movies = document.querySelector("#movies");


function append(data) {
    movies.innerHTML = null;
    data.forEach(function (element) {
        let div = document.createElement('div');

        let title = document.createElement('h5');
        title.innerText = element.Title;

        let image = document.createElement('img');
        image.src = element.Poster;


        div.append(image, title);

        movies.append(div);
        // console.log(movies);
    })
}

append(dataArr)




function confirm() {
    let seats = document.getElementById("number_of_seats").value;
    let wallet = JSON.parse(localStorage.getItem("wallet"));
    wallet = +wallet
    if ((seats * 100) < wallet) {
        alert("Booking successfull!");

        // let reduce = wallet - (no * 100);
        // id.innerText = JSON.parse(localStorage.getItem("wallet"))
        // localStorage.setItem("wallet", JSON.stringify(reduce));
        // // id.innerText = wallet

        let reduce = wallet - (seats * 100);

        localStorage.setItem("wallet", JSON.stringify(reduce));
        id.innerText = JSON.parse(localStorage.getItem("wallet"));
        console.log("wallet")

    }
    else {
        alert("Insufficient Balance!");
    }
}

