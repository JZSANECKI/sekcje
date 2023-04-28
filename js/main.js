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
let c = 0 //content section counter
let m = 0 // mouse wheel blocker
// let n = 0

const pageWidth = window.innerWidth;
const pageHeight = window.innerHeight;
const letter = document.querySelectorAll(".shadow-text")



let showCoords = (event) => {
    x = event.clientX;
    y = event.clientY;
    text = "X coords: " + x + ", Y coords: " + y;
    const letterAxis = letter.offsetLeft + (letter.offsetWidth / 2)




letter.forEach( coord =>{
  const letterAxisX = coord.offsetLeft + (coord.offsetWidth / 2)
    const letterAxisY = coord.offsetTop + (coord.offsetHeight / 2)
let shadowLenghtX = ((Math.abs(letterAxisX - x)/100 * (letterAxisX - x)))
let shadowLenghtY = ((Math.abs(letterAxisY - y)/500 * (letterAxisY - y)))

  

let shadowLenghtZ = Math.sqrt((shadowLenghtX * shadowLenghtX) + (shadowLenghtY * shadowLenghtY))
coord.style.textShadow = shadowLenghtX + "px " + shadowLenghtY + "px " + (shadowLenghtZ/5 + 2) + "px rgba(0, 0, 0, 0.5)"
  
})
}

const nextPage =() =>{
  console.log("obecny numer sekcji w tablicy to: " + c)
  let currentSection = contentSection[c]
  let currentPhoto = photoSection[c]
  let currentPortfolioSection = portfolioSection[c]
  let currentRightBorder = rightBorder[c]
  let currentLeftBorder = leftBorder[c]
  let currentRightBorderP = rightBorderP[c]
  let currentLeftBorderP = leftBorderP[c]

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
    currentPortfolioSection.style.visibility = "visible"
    
    if(c>0){
      previousSection.classList.add("content-inactive") 
      previousPhoto.classList.add("photo-hide") 
      previousRightBorder.classList.remove("border-active")
      previousLeftBorder.classList.remove("border-active")
      previousRightBorderP.classList.remove("appear")
      previousLeftBorderP.classList.remove("appear")
    }
    mainSection.style.backgroundColor = (backgroundColor)
    currentSection.classList.add("content-active") 
    currentPhoto.classList.remove("photo-hide") 
    currentRightBorder.classList.add("border-active")
    currentLeftBorder.classList.add("border-active")
    currentRightBorderP.classList.add("appear")
    currentLeftBorderP.classList.add("appear")
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


    previousSection.classList.remove("content-inactive")
    previousPhoto.classList.remove("photo-hide") 


if(c>1){

  let backgroundColor = previousSection.getAttribute("color")
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
  currentRightBorder.classList.remove("border-active")
  currentLeftBorder.classList.remove("border-active")
  currentRightBorderP.classList.remove("appear")
  currentLeftBorderP.classList.remove("appear")
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
setTimeout(() => {m = 0;}, 2000);
}
};




