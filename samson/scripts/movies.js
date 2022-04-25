// Implement debouncing for network request
// On clicking book now store the selected movie in localstorage as key "movie"
// so that you can retrive it on checkout.html page

let wallet = JSON.parse(localStorage.getItem("wallet"));

let id = document.getElementById("wallet");
id.innerText = wallet


async function search() {
    try {
        let q = document.getElementById("search").value;

        const res = await fetch(`https://www.omdbapi.com/?apikey=4949f690&s=${q}`);
        const data = await res.json();
        const movie = data.Search;
        console.log(movie);
        return movie;

    }
    catch (error) {
        console.log(error);
    }
}

let movies = document.getElementById("movies");

function append(data) {
    movies.innerHTML = null;
    data.forEach(function (element) {
        let div = document.createElement('div');

        let title = document.createElement('h5');
        title.innerText = element.Title;

        let image = document.createElement('img');
        image.src = element.Poster;

        let book = document.createElement('button');
        book.className = "book_now";
        book.innerText = "Book Now";
        book.addEventListener('click', function () {
            bookNow(element);
        })

        div.append(image, title, book);

        movies.append(div);
    })
}


function bookNow(element) {
    let arr = JSON.parse(localStorage.getItem('movie')) || [];

    arr.push(element)

    localStorage.setItem("movie", JSON.stringify(arr));

    window.location.href = "checkout.html"

}



async function main() {
    let movie = await search();

    if (movie == undefined) {
        return false;
    };
    append(movie);
}




let ids;

function debouncing(func, delay) {
    if (ids) {
        clearInterval(id)
    }
    ids = setTimeout(function () {
        func();
    }, delay);
}