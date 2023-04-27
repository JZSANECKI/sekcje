const mainSection = document.querySelector(".main-section")
const contentSection = document.querySelectorAll(".content")
const photoSection = document.querySelectorAll(".photo")
let c = 0 //content section counter
let m = 0 // mouse wheel blocker
// let n = 0



const nextPage =() =>{
  console.log("obecny numer sekcji w tablicy to: " + c)
  let currentSection = contentSection[c]
  let currentPhoto = photoSection[c]
  let backgroundColor = currentSection.getAttribute("color")
  console.log(backgroundColor)
  
  if(currentSection === undefined){
    console.log("nie ma następnej sekcji")
    return
  }  else{
    
    let previousSection = contentSection[c - 1]
    let previousPhoto = photoSection[c - 1]
    
    if(c>0){
      previousSection.classList.add("content-inactive") 
      previousPhoto.classList.add("photo-hide") 
    }
    mainSection.style.backgroundColor = (backgroundColor)
    currentSection.classList.add("content-active") 
    currentPhoto.classList.remove("photo-hide") 
    c++;
    console.log("w gotowości jest: "+c)
}}

const prevPage = () =>{
  c-- 
console.log("teraz c to: " + c)
let previousSection = contentSection[c-1]
let previousPhoto = photoSection[c-1]
let backgroundColor = previousSection.getAttribute("color")
if(c<0){
  console.log("c mniejsze od 0")
  c=0
  console.log("ustawiam c na: " + c)
  mainSection.style.backgroundColor = ("white")
  return}else{
  if(c>0){
    previousSection.classList.remove("content-inactive")
    previousPhoto.classList.remove("photo-hide") 
  }
  let currentSection = contentSection[c]
  let currentPhoto = photoSection[c]
  currentSection.classList.remove("content-active")
  currentPhoto.classList.add("photo-hide")   
  mainSection.style.backgroundColor = (backgroundColor)
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


