  AOS.init({once:true});
const mediaicon=document.querySelector(".mediaicon")

const aside=document.querySelector(".aside")
const x=document.querySelector(".x")

mediaicon.addEventListener("click",()=>{
aside.style.cssText="display:block"
})

x.addEventListener("click",()=>{
aside.style.cssText="display:none"
})

const upbtn=document.querySelector(".upbtn")
upbtn.classList.add("hide")
window.addEventListener("scroll",()=>{
 if(window.scrollY>250){
upbtn.classList.add("show")
upbtn.classList.remove("hide")
 }
 else{
  upbtn.classList.add("hide")
  upbtn.classList.remove("show")
 }
})
upbtn/addEventListener("click",()=>{
  window.scroll(0,0)
})