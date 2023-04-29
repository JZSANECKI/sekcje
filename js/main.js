
const mainSection = document.querySelector(".main-section")
const contentSection = document.querySelectorAll(".content-plane")
const photoSection = document.querySelectorAll(".photo")
const portfolioSection = document.querySelectorAll(".portfolio")
const header = document.querySelector(".header")
const headerAddons = document.querySelectorAll(".header-addon")
const rightBorder = document.querySelectorAll(".my-role")
const leftBorder = document.querySelectorAll(".my-goal")
const rightBorderP = document.querySelectorAll(".my-role p")
const leftBorderP = document.querySelectorAll(".my-goal p")
const contentUpContainer = document.querySelectorAll(".content-up-container")
const contentDownContainer = document.querySelectorAll(".content-down-container")

let c = 0 //content section counter
let m = 0 // mouse wheel blocker
// let n = 0

const pageWidth = window.innerWidth;
const pageHeight = window.innerHeight;
const letter = document.querySelectorAll(".shadow-text")
console.log(window.innerWidth)

const showCoords = (event) => {
  x = event.clientX;
  y = event.clientY;
  text = "X coords: " + x + ", Y coords: " + y;
  const letterAxis = letter.offsetLeft + (letter.offsetWidth / 2)
  
  if(window.innerWidth>768){ // dynamic shadow only on desktop

    letter.forEach( coord =>{
  const letterAxisX = coord.offsetLeft + (coord.offsetWidth / 2)
    const letterAxisY = coord.offsetTop + (coord.offsetHeight / 2)
let shadowLenghtX = ((Math.abs(letterAxisX - x)/100 * (letterAxisX - x)))
let shadowLenghtY = ((Math.abs(letterAxisY - y)/500 * (letterAxisY - y)))

let shadowLenghtZ = Math.sqrt((shadowLenghtX * shadowLenghtX) + (shadowLenghtY * shadowLenghtY))
coord.style.textShadow = shadowLenghtX + "px " + shadowLenghtY + "px " + (shadowLenghtZ/5 + 2) + "px rgba(0, 0, 0, 0.5)"
  
})
}}

const nextPage =() =>{
  console.log("obecny numer sekcji w tablicy to: " + c)
  let currentSection = contentSection[c]
  let currentPhoto = photoSection[c]
  let currentPortfolioSection = portfolioSection[c]
  let currentRightBorder = rightBorder[c]
  let currentLeftBorder = leftBorder[c]
  let currentRightBorderP = rightBorderP[c]
  let currentLeftBorderP = leftBorderP[c]
  let currentContentUpContainer = contentUpContainer[c]
  let currentContentDownContainer = contentDownContainer[c]

  if(c===0){
  header.classList.add("header-hide") 
  headerAddons.forEach (element => element.classList.add("hide") )

  
  }
  if(currentSection === undefined){
    console.log("nie ma następnej sekcji")
    return
  }  else{
    let backgroundColor = currentSection.getAttribute("color")
    let previousSection = contentSection[c - 1]
    let previousPhoto = photoSection[c - 1]
    let previousRightBorder = rightBorder[c-1]
    let previousLeftBorder = leftBorder[c-1]
    let previousRightBorderP = rightBorderP[c-1]
    let previousLeftBorderP = leftBorderP[c-1]
    let previousContentUpContainer = contentUpContainer[c-1]
    let previousContentDownContainer = contentDownContainer[c-1]
    currentPortfolioSection.style.visibility = "visible"
    
    if(c>0){
      previousSection.classList.add("content-inactive") 
      previousPhoto.classList.add("photo-hide") 
      previousRightBorder.classList.remove("border-active")
      previousLeftBorder.classList.remove("border-active")
      previousRightBorderP.classList.remove("appear")
      previousLeftBorderP.classList.remove("appear")
      previousContentUpContainer.classList.remove("content-container-active")
      previousContentDownContainer.classList.remove("content-container-active")
    }
    mainSection.style.backgroundColor = (backgroundColor)
    currentSection.classList.add("content-active") 
    currentPhoto.classList.remove("photo-hide") 
    currentRightBorder.classList.add("border-active")
    currentLeftBorder.classList.add("border-active")
    currentRightBorderP.classList.add("appear")
    currentLeftBorderP.classList.add("appear")
    currentContentUpContainer.classList.add("content-container-active")
    currentContentDownContainer.classList.add("content-container-active")
    c++;
    console.log("w gotowości jest: " + c)
}}

const prevPage = () =>{
  c-- 
console.log("teraz c to: " + c)
let previousSection = contentSection[c-1]
let previousPhoto = photoSection[c-1]
let previousRightBorder = rightBorder[c-1]
let previousLeftBorder = leftBorder[c-1]
let previousRightBorderP = rightBorderP[c-1]
let previousLeftBorderP = leftBorderP[c-1]
let previousContentUpContainer = contentUpContainer[c-1]
let previousContentDownContainer = contentDownContainer[c-1]

if(c===0){

  mainSection.style.backgroundColor = ("white") 
  header.classList.remove("header-hide")  
  headerAddons.forEach (element => element.classList.remove("hide") )
  console.log("powinien pojawić się header")
}

if(c<0){
  console.log("c mniejsze od 0")
  c=0
  console.log("ustawiam c na: " + c)
  mainSection.style.backgroundColor = ("white")
  return}else{
    if(c>0){

      previousRightBorder.classList.add("border-active")
      previousLeftBorder.classList.add("border-active")
      previousRightBorderP.classList.add("appear")
      previousLeftBorderP.classList.add("appear")
      previousContentUpContainer.classList.add("content-container-active")
      previousContentDownContainer.classList.add("content-container-active")

    previousSection.classList.remove("content-inactive")
    previousPhoto.classList.remove("photo-hide") 


if(c>=1){

  let backgroundColor = previousSection.getAttribute("color")
  console.log(backgroundColor)
  mainSection.style.backgroundColor = (backgroundColor)
}

  }
  let currentSection = contentSection[c]
  let currentPhoto = photoSection[c]
  let currentPortfolioSection = portfolioSection[c]
  let currentRightBorder = rightBorder[c]
  let currentLeftBorder = leftBorder[c]
  let currentRightBorderP = rightBorderP[c]
  let currentLeftBorderP = leftBorderP[c]
  let currentContentUpContainer = contentUpContainer[c]
  let currentContentDownContainer = contentDownContainer[c]
  currentRightBorder.classList.remove("border-active")
  currentLeftBorder.classList.remove("border-active")
  currentRightBorderP.classList.remove("appear")
  currentLeftBorderP.classList.remove("appear")
  currentContentUpContainer.classList.remove("content-container-active")
  currentContentDownContainer.classList.remove("content-container-active")
  currentSection.classList.remove("content-active")
  currentPhoto.classList.add("photo-hide")  

  currentPortfolioSection.style.visibility = "hidden" 
}}

onwheel = (event) => { // animacje powinny trwać 2 sekundy, wtedy powinno być gites
if(m === 0) { 
m = 1
let scrollMoveY = event.deltaY
if(scrollMoveY<0){prevPage()}
if(scrollMoveY>0){nextPage()}
setTimeout(() => {m = 0;}, 1500);
}
};

// SWIPE

let touchstartY = 0
let touchendY = 0
    
function checkDirection() {
  let swipeLenght = touchstartY - touchendY
  console.log(swipeLenght) 
  if (swipeLenght > 70) {nextPage()}
  if (swipeLenght < -70) {prevPage()}
}

document.addEventListener('touchstart', e => {
  touchstartY = e.changedTouches[0].screenY
})

document.addEventListener('touchend', e => {
  touchendY = e.changedTouches[0].screenY
  checkDirection()
})

// SWIPE


