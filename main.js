// header starts
function account(){
    let account = document.querySelector('.account');
    let sign = document.querySelector(".sign")
    let name = document.querySelector('.name')
    let password = document.querySelector('.password')
    let signIn = document.querySelector(".signIn")
    account.addEventListener("click", function(){
        sign.classList.toggle("height")
        name.classList.toggle("opacity")
        password.classList.toggle("opacity")
        signIn.classList.toggle("opacity")
    })
}
account()

function search(){
    let searchButton = document.querySelector(".search button")
    let search = document.querySelector(".search input")
    searchButton.addEventListener('click', function(){
        search.classList.toggle("active")
    })
}

search()