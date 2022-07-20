// ჰედერი
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
//მეოთხე სექცია
let climbingBox = [
    {
        image: 'images/WKND.png',
        title: "Climbing New Zealand",
        text: "Let us help you make your New Zealand climbing vacation a memory you will cherish forever! Come join us for a guided rock climbing adventure in the mountains that trained Sir Edmund Hilary."
    }
]
let climbingTitle = document.querySelector('.white h4');
climbingTitle.innerText = climbingBox[0].title;
let climbingText = document.querySelector(".white p");
climbingText.innerText = climbingBox[0].text;
let climbingImg = document.querySelector('.climbing img');
climbingImg.src = climbingBox[0].image;



// მეხუთე სექცია
let countryCards = [
    {
        image: 'images/mountain.png',
        title: 'WHISTLER MOUNTAIN BIKING',
        text: 'CYCLING',
        id: 0
    },
    {
        image: 'images/image1.png',
        title: 'SURF CAMP IN COSTA RICA',
        text: "Surfing",
        id: 1
    },
    {
        image: 'images/image2.png',
        title: 'SKI TOURING MONT BLANC',
        text: 'SKIING',
        id: 2
    },
    {
        image: 'images/image3.png',
        title: 'RIVERSIDE CAMPING',
        text: 'CAMPING',
        id: 3
    }
]
let countryCard = document.querySelector('.country-cards');
let nextAdventureBackground = document.querySelector('.climbing img');
let whiteTitle = document.querySelector('.white h4');

for(let i = 0; i < countryCards.length; i++){
    let allCards = document.createElement('div');
    allCards.classList.add('single-card');
    countryCard.appendChild(allCards);

    let countryCardsImg = document.createElement('img');
    countryCardsImg.src = countryCards[i].image;
    allCards.appendChild(countryCardsImg);

    let countryCardsTitle = document.createElement('h5');
    countryCardsTitle.innerHTML = countryCards[i].title;
    allCards.appendChild(countryCardsTitle)

    let countryCardsText = document.createElement("p");
    countryCardsText.innerHTML = countryCards[i].text;
    allCards.appendChild(countryCardsText)
    
    allCards.addEventListener('click', function(){
        climbingImg.src = countryCards[i].image;
        climbingTitle.innerText = countryCards[i].title;
        climbingText.innerText = countryCards[i].text;
    })

}
let countryCardsImgAll = document.querySelectorAll('.single-card img'); 
let countryCardsTitleAll = document.querySelectorAll('.single-card h5');
let allCardsAll = document.querySelectorAll('.single-card');

// მეექვსე სექცია 

let email = document.querySelector('.email');
let button = document.querySelector('.button');
let form = document.querySelector('.form')
let arr = [];
let goodResult = document.querySelector('.green')
let badResult = document.querySelector('.red')
button.addEventListener('click', function(e){
    e.preventDefault()
    arr.push(email.value)
    if(email.value.length > 6 && arr[0].includes("@")){
        email.classList.toggle('none')
        goodResult.classList.toggle("block")
    }else{
        email.classList.toggle('none')
        badResult.classList.toggle('block')
    }
})

