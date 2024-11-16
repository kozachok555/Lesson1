//<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<CW - 11>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>//

                //Task - 1//

// const ulClassFind = document.querySelector(".list")
// const secondLiFind = document.querySelectorAll("li")
// secondLiFind[1].textContent = "Any Text";
// const divFind = document.querySelector("div")
// divFind.style.color = 'black'

                //Task - 2//
    
// const inputText = document.querySelector("input")
// const btnFind = document.getElementById('btn')
// btnFind.addEventListener("click", function(){
//     console.log(inputText.value)
// })

                //Task - 3//


// const findBtn = document.getElementById("btn")
// const divBoxElements = document.getElementById("box")
// divBoxElements.style.display = "none"
// findBtn.addEventListener('click', function(){
//     if(divBoxElements.style.display === "none"){
//         divBoxElements.style.display = "block"
//         const createNewElement = document.createElement("li")
//         createNewElement.textContent = "Нове посилання"
//         divBoxElements.appendChild(createNewElement)
//     }else if(divBoxElements.style.display === "block"){
//         divBoxElements.style.display = "none"
//     }
// })

//<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<END-CW - 11>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>//

//<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<HW - 11>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>//
const root = document.body;
const divMain = document.createElement("div")
divMain.classList.add("main-box")
                                //Task - 1//
// for(let i = 1;i <= 10;i++){
//     for(let j = 1;j<=10;j++){
//         const square = document.createElement("div")
//         square.classList.add("square")
//         square.textContent = `${j}`
//         divMain.appendChild(square)
//         if(j != 1 && i != 1){
//              square.textContent = `${i * j}`
//         }else if(j === 1){
//             square.textContent = `${i}`
//         }
//     }
// }






                                //Task - 2//
divMain.textContent = "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Suscipit ab sunt molestiae minus neque doloremque dolores modi excepturi labore distinctio aperiam facere possimus aliquid et ipsa, similique sapiente cumque dignissimos."
const createBtn = document.createElement("button")
root.appendChild(divMain)
divMain.appendChild(createBtn)
createBtn.textContent = "Change the color"
createBtn.addEventListener("click",function(){
    divMain.classList.toggle("color")
})



                                //Task - 3//

// const arrayOfMessages = ["1.avif", "2.jpg", "3.avif", "4.avif", "5.jpeg", "6.jpeg", "7.webp", "8.jpeg"]
// const randomBtn = document.createElement("button")
// root.appendChild(randomBtn)
// randomBtn.textContent = "Random the image"
// let img = null;
// randomBtn.addEventListener("click",() =>{
//     if(img){
//         img.remove()
//     }
//     const number = Math.floor(Math.random() * arrayOfMessages.length+1)
//     img = document.createElement("img")
//     root.appendChild(img)
//     img.src = `./assets/${arrayOfMessages[number]}`
// })

//<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<END-HW - 11>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>//