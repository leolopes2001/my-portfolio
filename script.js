const mysvg1 = document.getElementById("mysvg1")
const mysvg2 = document.getElementById("mysvg2")
const mysvg3 = document.getElementById("mysvg3")

const img1 = document.getElementById("logo1")
const img2 = document.getElementById("logo2")
const img3 = document.getElementById("logo3")
const img4 = document.getElementById("logo4")
const img5 = document.getElementById("logo5")
const img6 = document.getElementById("logo6")

const my_p = document.querySelector(".sec5-content").childNodes[3]






img1.addEventListener("mouseenter", () => {
     const child = img1.childNodes[1]
     child.setAttribute("fill", "orange")
     console.log(img1)
     img1.style.border = "1px solid orange"
     img1.style.animation = "all 0.9s"
     img1.style.transition = "all 0.9s"
     my_p.innerHTML = "Estrutura de layouts,principais tags,<br> HTML Semântico,<br> criação de tabelas e formulários"

})
img1.addEventListener("mouseleave", () => {
    const child = img1.childNodes[1]
    child.setAttribute("fill", "red")
    img1.style.border = "none";
    img1.style.animation = "all 0.9s"
    img1.style.transition = "all 0.9s"
    my_p.innerHTML =  "* passe o cursor sobre os ícones para saber mais *"
})

/*2*/
img2.addEventListener("mouseenter", () => {
    const child = img2.childNodes[1]
    child.setAttribute("fill", "blue")
    img2.style.border = "1px solid blue";
    img2.style.animation = "all 0.9s";
    img2.style.transition = "all 0.9s";
    my_p.innerHTML =  "Estilização de layouts,<br>reutilização de classes,<br>box model,<br>CSS Grid,<br>Flex Box e pseudo-classes"
})

img2.addEventListener("mouseleave", () => {
   const child = img2.childNodes[1]
   child.setAttribute("fill", "red")
   img2.style.border = "none";
   img2.style.animation = "all 0.9s"
   img2.style.transition = "all 0.9s"
   my_p.innerHTML =  "* passe o cursor sobre os ícones para saber mais *"
})
/*3*/
img3.addEventListener("mouseenter", () => {
    const child = img3.childNodes[1]
    child.setAttribute("fill", "yellow")
    img3.style.border = "1px solid yellow";
    img3.style.animation = "all 0.9s";
    img3.style.transition = "all 0.9s";
    my_p.innerHTML =  "Menipulaçao DOM,<br> consumo de API <br>, tipos de dados, <br>métodos, <br funções e ventos>"
})

img3.addEventListener("mouseleave", () => {
   const child = img3.childNodes[1]
   child.setAttribute("fill", "red")
   img3.style.border = "none";
   img3.style.animation = "all 0.9s"
   img3.style.transition = "all 0.9s"
   my_p.innerHTML =  "* passe o cursor sobre os ícones para saber mais *"
})

/*4*/
img4.addEventListener("mouseenter", () => {
    const child = img4.childNodes[1]
    child.setAttribute("fill", "aqua")
    img4.style.border = "1px solid aqua";
    img4.style.animation = "all 0.9s";
    img4.style.transition = "all 0.9s";
    my_p.innerHTML =  ""
})

img4.addEventListener("mouseleave", () => {
   const child = img4.childNodes[1]
   child.setAttribute("fill", "red")
   img4.style.border = "none";
   img4.style.animation = "all 0.9s"
   img4.style.transition = "all 0.9s"
   my_p.innerHTML =  "* passe o cursor sobre os ícones para saber mais *"
})

/*5*/
img5.addEventListener("mouseenter", () => {
    const child = img5.childNodes[1]
    child.setAttribute("fill", "rgb(144, 33, 255)")
    img5.style.border = "1px solid rgb(144, 33, 255)";
    img5.style.animation = "all 0.9s";
    img5.style.transition = "all 0.9s";
    my_p.innerHTML =  ""
})

img5.addEventListener("mouseleave", () => {
   const child = img5.childNodes[1]
   child.setAttribute("fill", "red")
   img5.style.border = "none";
   img5.style.animation = "all 0.9s"
   img5.style.transition = "all 0.9s"
   my_p.innerHTML =  ""
})


/*6*/ 
img6.addEventListener("mouseenter", () => {
    const child = img6.childNodes[1]
    child.setAttribute("fill", "blue")
    img6.style.border = "1px solid blue";
    img6.style.animation = "all 0.9s";
    img6.style.transition = "all 0.9s";
    my_p.innerHTML =  " "
})

img6.addEventListener("mouseleave", () => {
   const child = img6.childNodes[1]
   child.setAttribute("fill", "red")
   img6.style.border = "none";
   img6.style.animation = "all 0.9s"
   img6.style.transition = "all 0.9s"
   my_p.innerHTML =  " "
})



mysvg1.style.marginRight = "0.4rem"
mysvg2.style.marginRight = "0.2rem"
mysvg1.addEventListener("mouseenter", () => {
    mysvg1.setAttribute("fill", "blue")
    mysvg1.style.transition = "all 0.5s"
    
})
mysvg1.addEventListener("mouseleave", () => {
    mysvg1.setAttribute("fill", "red")
})

mysvg2.addEventListener("mouseenter", () => {
    mysvg2.setAttribute("fill", "rgb(153, 0, 255)")
    mysvg2.style.transition = "all 0.5s"
})
mysvg2.addEventListener("mouseleave", () => {
    mysvg2.setAttribute("fill", "red")
})

mysvg3.addEventListener("mouseenter", () => {
    mysvg3.setAttribute("fill", "rgb(77, 255, 0)")
    mysvg3.style.transition = "all 0.5s"
})
mysvg3.addEventListener("mouseleave", () => {
    mysvg3.setAttribute("fill", "red")
})



