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

// მეორე სექცია სლაიდერი
let articles = [
    {
        title: "Camping in Western Australia",
        text: "A vibrant red, dusty highway stretches out before us into what seems like infinity, at the far reach of our sights it distorts and shimmers from the afternoon heat, fading into the blue of the horizon.",
        img: 'images/1.png'
    },
    {
        title: "Camping in Western Canada",
        text: "A vibrant red, dusty highway stretches out before us into what seems like infinity, at the far reach of our sights it distorts and shimmers from the afternoon heat, fading into the blue of the horizon.",
        img: "images/2.jpg"
    },
    {
        title: "Camping in Western Italy",
        text: "A vibrant red, dusty highway stretches out before us into what seems like infinity, at the far reach of our sights it distorts and shimmers from the afternoon heat, fading into the blue of the horizon.",
        img: "images/3.jpg"
    }
]
let currentSlideIndex = 0;
createBullets()
setActiveBullets()
next()

function next(){
    let nextSlideIndex = currentSlideIndex + 1;
    if(nextSlideIndex > articles.length - 1){
        nextSlideIndex = 0;
    }
    setActiveSlide(nextSlideIndex)
}
function createBullets(){
    let bullets = document.querySelector('.bullets')
    

    for(let i = 0; i < articles.length; i++){
       let bullet = document.createElement('div');
       bullets.appendChild(bullet)
       bullet.className = "bullet"
    }
    setActiveBullets()
}
function setActiveBullets(){
    let buttons = document.querySelectorAll('.bullets .bullet');
    for(let i = 0; i < buttons.length; i++){
        buttons[i].classList.remove('active');
        buttons[i].addEventListener('click', function(){
            setActiveSlide(i);
        });
       
    }
    buttons[currentSlideIndex].classList.add('active');
}
function setActiveSlide(newIndex){
    currentSlideIndex = newIndex;
    let title = document.querySelector('.info h4');
    title.innerHTML = articles[currentSlideIndex].title;
    let images = document.querySelector('.photo img');
    images.src = articles[currentSlideIndex].img;
    let text = document.querySelector('.info p');
    text.innerHTML = articles[currentSlideIndex].text;

    setActiveBullets();
}
function prev(){
    nextSlideIndex = currentSlideIndex - 1;
    if(nextSlideIndex < 0){
        nextSlideIndex = articles.length - 1;
    }
    setActiveSlide(nextSlideIndex)
}

let rightArrow = document.querySelector('.right-arrow');
let leftArrow = document.querySelector('.left-arrow')
rightArrow.addEventListener('click', function(){
    next()
})
leftArrow.addEventListener('click', function(){
    prev()
})

// მესამე სექცია
let cardsInfo = [
    {
        image: "images/first.png",
        title: "ULTIMATE GUIDE TO LA SKATEPARKS"
        
    },
    {
        image: "images/second.png",
        title: "SKIITOURING",
        subTitle: "Sofia Sjöberg"
    },
    {
        image: "images/third.png",
        title: "ARCTIC SURFING",
        subTitle: "Jacob Wester"
    },
    {
        image: "images/fourth.png",
        title: "SAN DIEGO SURF SPOTS",
        subTitle: "Justin Barr"
    }
]
let cards = document.querySelector('.cards')
for(let i = 0; i< cardsInfo.length; i++){
    let card = document.createElement('div');
    card.classList.add('card');
    card.classList.add(`card${i}`);
    cards.appendChild(card)

    let img  = document.createElement('img');
    img.src = cardsInfo[i].image;
    card.appendChild(img);

    let title = document.createElement('h5');
    title.innerHTML = cardsInfo[i].title;
    card.appendChild(title);

    let subTitle = document.createElement("h6");
    subTitle.innerHTML = cardsInfo[i].subTitle;
    subTitle.classList.add('subTitle')
    card.appendChild(subTitle)
}
let gif = document.querySelector('.gif');
let card0 = document.querySelector('.card0');
let card1 = document.querySelector('.card1');
let card2 = document.querySelector('.card2');
let card3 = document.querySelector('.card3');
window.addEventListener('scroll', function(){
    let scrollTop = document.querySelector('html').scrollTop;
    if(scrollTop > 1100){
        setTimeout(function(){
            
            setInterval(()=>{
                gif.style.display = "none";             
                card0.style.opacity = "1";
                setInterval(()=>{
                    card1.style.opacity = "1"
                    setInterval(()=>{
                        card2.style.opacity = "1"   
                        setInterval(()=>{
                            card3.style.opacity = "1"  
                        },1000)   
                    }, 1000)
                }, 1000)
                
            },1000)
            
        }, 500)
        
    }

})