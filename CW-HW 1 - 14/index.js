const hw1 = ()=>{
    const hw1task1 = () =>{
            //Task1
        let undefinedCheck;
        let nullCheck = null;
        let booleanCheck = true;
        let numberCheck = 1;
        let stringCheck = "Hello world";
        let objectCheck = {};
        let symbolCheck = Symbol('symbolCheck')
        let bigIntCheck = BigInt(5)
        console.log(typeof(undefinedCheck))
        console.log(typeof(nullCheck) + " " + typeof(null))
        console.log(typeof(booleanCheck))
        console.log(typeof(numberCheck))
        console.log(typeof(stringCheck))
        console.log(typeof(objectCheck))
        console.log(typeof(symbolCheck))
        console.log(typeof(bigIntCheck))
    }
    const hw1task2 = () =>{
             //Task2
        const message1 = prompt("Write your message");
        const message2 = prompt("Write your message");
        const message3 = prompt("Write your message");
        console.log(`${message1}
        ${message2}
        ${message3}`)
    }
    const hw1task3 = () =>{
             //Task3
        const number = prompt("Enter the number which consist 5 figures")
        let changedNumber = number.toString().split('').join(' ');
        console.log(changedNumber)
    }
}
  //Lesson4 CW
const cw4 = () =>{
    const cw4t1 = () =>{
        const yourAge = prompt("скільки тобі років?")
        const thisYear = prompt("Який зараз рік?")
        let result = thisYear-yourAge;
        alert(`Ви народились в ${result}`)
    }
    const cw4t2 = () =>{
        const number = prompt("Type any number")
        if(number > 0){
            console.log(1)
        }else if(number < 0){
            console.log(-1)
        }else{
            console.log(0)
        }
    }
    const cw4t3 = () =>{
       let result = a + b < 4 ? "Less" : "More";
    }

    const cw4t4 = () =>{
        const number = prompt("Enter the number")
        console.log(number)
        switch(+number){
            case 1:
            console.log('a')
            break;
            case 2:
            console.log('b')
            break;
            case 3:
            console.log('c')
            break;

            default:
                console.log('UA')
        }
     }
}
const hw4 = () =>{
    const task1 = () =>{
        const name = prompt("ім'я користувача")
        alert(`Hello, ${name}! How are you?`)
    }
    const task2 = () =>{
        const number = prompt("Any number which consist 3 figures")
        let changed = number.split('')
        let counter = 0;
        for(let i = 0; i < changed.length;i++){
            for(let j = i + 1; j < changed.length;j++){
                if(changed[i] === changed[j]){
                    counter++;
                }
            }
        }
        if(counter === 3){
            console.log("все цифры одинаковые")
        }else if(counter > 0){
            console.log("есть одинаковые цифры")
        }else{
            console.log("нету одинаковых цифр")
        }
        alert(changed.length)
    }
    const task3 = () =>{
        const ourYear = new Date().getFullYear()
        const birthData = prompt("What it your birthday data(year)?")
        const city = prompt("What is your city?")
        const sport = prompt("Your lovely sport")
        let birthInfo = ourYear - birthData;
        let cityInfo;
        let sportInfo;
        switch(city){
            case "Київ":
                cityInfo = "Ти живеш у столиці України"
                break;
            case "Вашингтон":
                cityInfo = "Ти живеш у столиці США"
                break;
            case "Лондон":
                cityInfo = "Ти живеш у столиці Англії"
                break;
            default:
                cityInfo = `ти живеш у місті ${city}`
        }
        switch(sport){
            case "Футбол":
                sportInfo = "Круто! Хочеш стати Лионель Месси?"
                break;
            case "Баскетбол":
                sportInfo = "Круто! Хочеш стати Стефен Карри?"
                break;
            case "Шахмати":
                sportInfo = "Круто! Хочеш стати Магнус Карлсен?"
                break;
            default:
                sportInfo = `${sport} Класний вид спорту`
        }
        switch(true){
            case birthData === null:
                birthInfo = "Шкода, що Ви не захотіли ввести свій рік народження";
            case city === null:
                cityInfo = "Шкода, що Ви не захотіли ввести своє місто";
            case sport === null:
                sportInfo = "Шкода, що Ви не захотіли ввести свій спорт"
            default:
                console.log("Not all info")
        }
        alert(`You are: ${birthInfo}
            ${cityInfo}
            ${sportInfo}
            `)
    }
    const task4 = () =>{
        let numOrStr = prompt('input number or string');
        console.log(numOrStr)
        
        switch(true){
            case numOrStr === null:
                console.log('ви скасували')
                break;
            case numOrStr.trim() === '':
                console.log('Empty String');
                break;
            case isNaN(+numOrStr):
                console.log(' number is Ba_NaN')
                break;
            default:
                console.log('OK!')

        }
    }
}
const hw5 = () =>{  
    const task1 = () =>{
        let result = '';
        for(let i = 20;i <=30;i = i + 0.5){
            if(i === 30){
                result +=`${i}`
            }else{
                result += `${i}, `
            }
        }
        console.log(result);
    }
    const task2 = () =>{
        let result = '';
        const convertUSDtoUAH = async () => {
            const response = await fetch('https://v6.exchangerate-api.com/v6/43c820cb13184bdaa89c836a/latest/USD')
            const data = await response.json()
            const exchangeToUAH = data.conversion_rates.UAH;


            for(let i = 10;i<= 100;i = i + 10){

                let UAH = exchangeToUAH * i;
                result += `${i}USD = ${UAH.toFixed(2)}UAH \n`;
            }

            console.log(result)
        }
        convertUSDtoUAH()
    }
    const task3 = () =>{
        const anyNumber = +prompt("Enter the number")
        let result = '';
        for(let i = 1;i <=100;i++){
            if(i*i > anyNumber) continue;
            result += `${i} in square = ${i*i} \n`
        }
        console.log(result)
    }
    const task4 = () =>{
        const anyNumber = +prompt("ENTER ANY NUMBER")
        if(anyNumber === 1 || anyNumber === 2){
            console.log("Простое")
        }else if(anyNumber < 1){
            console.log("Напиши только положительное число и нельзя вписывать 0")
        }else{
            let result = "Простое";
            for(let i = 2;i<anyNumber ; i++){
                if(anyNumber % i === 0){
                    result = "Не простое";
                    break;
                }else{
                    continue;
                }
            }
            if(result === 'Простое'){
                console.log(result)
            }else{
                console.log(result)
            }
        }
    }
}
const cw6 = () => {
    const task1 = (num1, num2) => {
        return num1 > num2 ? num1 : num2;
    }
    const task2 = (num1, n) => {
        let result = num1;
        for(let i = 1; i< n;i++){
            result *= n;
        }
        return result;
    }
}
const hw6 = () => {
    const task1 = (yourString, deleteLetters) =>{
        let changedString = yourString.split('')
        for(let i = 0;i<changedString.length;i++){
            for(let j= 0;j<deleteLetters.length;j++){
                if(changedString[i]===deleteLetters[j]){
                    changedString.splice(i,1);
                    i--;
                }
            }
        }
        let result = changedString.join('');
        return result;
    }
    //console.log(task1("Hello world", ["l","d"]))
    const task2 = (givenArray) =>{
        let counterNumber = 0;
        const filteredArray = [];
        for(let i = 0;i<givenArray.length;i++){
            if(typeof givenArray[i] === 'number'){
                filteredArray.push(givenArray[i])
            }
        }
        for(let i = 0;i<filteredArray.length;i++){
            counterNumber += filteredArray[i];
        }
        let result = counterNumber/filteredArray.length;
        return result;
    }
    //console.log(task2([1,true,"Hello",3,5,1,{name:"Vova"},12,"3",8]))
    const task3 = (yourArray, deleteElement) =>{
        let changedArrray = [];
        for(let i = 0;i<yourArray.length;i++){
            if(yourArray[i] === deleteElement){
                console.log("deleted element: " + deleteElement)
            }else{
                changedArrray.push(yourArray[i])
            }
        }
        let result = changedArrray;
        return result;
    }
    //console.log(task3([1,true,"Hello",3,5,1,{name:"Vova"},12,"3",8], true))
}
const cw7 = () => {
    const task1 = (array,number) => {
        for(let i = 0;i < array.length;i++){
            if(array[i]===number){
                return array;
            }
        }
        let resultArr = [];
        for(let i = 0;i < array.length; i++){
            resultArr.push(array[i])
        }
        resultArr.push(number)
        return resultArr
    }
    const task2 = (n) => {
        const randomNumber = (min, max) =>{
            return Math.floor(Math.random() * (max - min)) + min;
        }
        const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        let result = '';
        for(let i = 0;i < n;i++){
            result += characters[randomNumber(0, characters.length)]
        }
        return result;
    }
    const task3 = (array) => {
        let sum = 0;
        for(let i = 0;i < array.length;i++){
            sum += array[i];
        }
        return sum;
    }
    const task4 = (counter) => {
        return () =>{
            counter++;
            return counter;
        }
    }
    let counter = task4(4)
}
const hw7 = () => {
    const task1 = () =>{
        let counter = 0;
        return function(num){
            counter += num;
            return counter;
        }
    }
    // let count = task1()
    // console.log(count(1))
    // console.log(count(2))
    // console.log(count(5))
    const task2 = (a) =>{
        return function(b){
            return a*b;
        }
    }
    // console.log(task2(3)(7))
    const task3 = ()=>{
        const myFunc = () =>{
            let result = null;
            for(let i = 0;i<10;i++){
                let userInput = prompt("write number bigger than 100 or any text");
                if(parseInt(userInput) > 100 || isNaN(Number(userInput))){
                    return userInput
                }else if(parseInt(userInput) <= 100){
                    result = userInput
                }
            }
            return result;
        }
        console.log(myFunc());
    }
}
const cw8 = () =>{
    const task1 = () =>{
        let skill = {
            name: 'Dog',
            level: 8,
            showInfo: function(){
                return `${this.name} - ${this.level}`
            }
        }
        console.log(skill.showInfo())
    }
    const task2 = () =>{
        function Calc(number1,number2){
            this.number1 = number1;
            this.number2 = number2;
            this.getPlus = function(){
                return this.number1 + this.number2;
            }
            this.getMinus = function(){
                return this.number1 - this.number2;
            }
        }
    }
}
const hw8 = () =>{
    let ladder = {
        counter: 0,
        up: function(){
            this.counter += 1;
            return this 
        },
        down: function(){
            this.counter += -1;
            return this 
        },
        showStep: function(){
            console.log(this.counter)
        }
    }
    ladder.up().up().down().showStep()
}
const cw9 = () =>{
    function taskContruct(n = 6){
        this._number = n;
        this.checkNumber = function(number = this._number){
            if(number < 0){
                return false
            }
        }
        this.sumNumbers = function(number = this._number){
            if(!this.checkNumber()) {
                return "Error";
            }
            if(number === 1){
                return 1;
            }
            return number + this.sumNumbers(number - 1)
        }
        this.factorial = function(number = this._number){
            if(!this.checkNumber()) {
                return "Error";
            }
            if(number === 1){
                return 1
            }else{
                return number * this.factorial(n -1) 
            }
        }
        this.numberPow = function(number = this._number, m = this._number){
            if(number === 0){
                return 0;
            }else if(m === 0){
                return 1;
            }else if(m < 0){
                return "ERROR"
            }
            return number * this.numberPow(number, m -1);
        }
        this.fibonacci = function(number = this._number){
            if(!this.checkNumber()) {
                return "Error";
            }
            if(number <= 1){
                return number;
            }else{
                return this.fibonacci(number-1) + this.fibonacci(number-2);
            }
        }
    }
    const test1 = new taskContruct(-2);
    console.log(test1.factorial())
}
const hw9 = () =>{
    let company = {
        sales: [{name: 'John', salary: 1000}, {name: 'Alice', salary: 600}],
        development: {
            web: [{name: 'Peter', salary: 2000}, {name:'Alex', salary: 1800}],
            internals: [{name: 'Jack', salary: 1300}]
        }
    }
    function countTheSalary(anyCompany){
        this._company = anyCompany;
        this.getSumOfAllSalary = function(arg = this._company){
            let counter = 0;
            function calcSalary(arg){
                if(arg.length != undefined){
                    for(const element in arg){
                        counter += arg[element].salary
                    }
                }else{
                    for(const element in arg){
                        calcSalary(arg[element])
                    }
                }
            }
            calcSalary(arg)
            return counter
            // let counter = 0;
            // let arr = [];
            // let arr1 = [];
            // let arr2 = [];
            // for (const element in arg) {
            //     arr = []
            //     arr.push(arg[element])
            // }
            // console.log(arr)
            // for(const element in arr){
            //     for(const e in arr[element]){
            //         if(arr[element][e].salary){
            //             counter += arr[element][e].salary;
            //             continue;
            //         }else{
            //             arr1.push(arr[element][e])
            //         }
            //     }
            // }
            // console.log(arr1)
            // for(const element in arr1){
            //     for(const e in arr[element]){
            //         for(const e2 in arr[element][e]){
            //             if(arr[element][e][e2].salary){
            //                 counter += arr[element][e][e2].salary;
            //                 continue;
            //             }else{
            //                 arr2.push(arr[element][e][e2])
            //             }
            //         }
            //     }
            // }
            // console.log(arr1)
            // console.log(arr2)
            // console.log(counter)      
    }
    }
    let test = new countTheSalary(company)
    console.log(test.getSumOfAllSalary())
}
const cw10 = () =>{
    const task1 = () =>{
        const user = {
            name: "John",
            age: 30,
            email: "john@example.com",
            isAdmin: true,
            getInfo: function(){
                return `name: ${this.name}, age: ${this.age},email: ${this.email},admin: ${this.isAdmin}`
            }
        }
        console.log(user.getInfo())
    }
    const task2 = () =>{
        function sumInput(){
            let arr = []
            while(true){
                const number = prompt("Write a number: ")
                if(number === null){
                    break;
                }else if(!isNaN(number) && number != ""){
                    arr.push(+number)
                }else{
                    break;
                }
            }
            let result = arr.reduce(function(acc, value){return acc + value},0)
            return result;
        }
        let result = sumInput()
        console.log("Sum: " + result)
    }
}
const hw10 = () =>{
    const task1 = () =>{
        const person = {
            name: "Vova",
            age: 19,
            city: "Warsaw",
            showInfo: function(){
                console.log(this.name , this.age , this.city)
            }
        }
        person.showInfo()
    }
    const task2 = () =>{
        const arr = [1,2,34,4,,5,56,6,7]
        const arrFilter = arr.filter((arr)=> arr%2 === 0)
        console.log(arrFilter)
    }
    const task3 = () =>{
        const myContacts = {
            defaultContacts:[
                {id: 1, name: "Vova", phoneNumber: "+380123456781",email: "test@example.ex" },
                {id: 2, name: "Nikita", phoneNumber: "+380123456782",email: "test@example.ex" },
                {id: 3, name: "Vlad", phoneNumber: "+380123456783",email: "test@example.ex" }
            ],
            findContact: function(name){
                console.log(this.defaultContacts.find((element) => element.name === name))
            },
            createNewContact: function(name, phone, email){
                const value = this.defaultContacts.length + 1;
                this.defaultContacts.push({id: value, name: name, phoneNumber: phone, email: email})
            }
        }
        myContacts.createNewContact("Volodymyr", "+00000","dadawd")
        console.log(myContacts.defaultContacts)
        myContacts.findContact("Volodymyr")
    }
}
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
// divMain.textContent = "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Suscipit ab sunt molestiae minus neque doloremque dolores modi excepturi labore distinctio aperiam facere possimus aliquid et ipsa, similique sapiente cumque dignissimos."
// const createBtn = document.createElement("button")
// root.appendChild(divMain)
// divMain.appendChild(createBtn)
// createBtn.textContent = "Change the color"
// createBtn.addEventListener("click",function(){
//     divMain.classList.toggle("color")
// })



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

//<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<HW - 12>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>//
                                //Task - 1//
// const writeRef = document.createElement("button");
// const openRef = document.createElement("button");
// let getRef = '';
// writeRef.textContent = "Input your site"
// openRef.textContent = "Open"
// writeRef.addEventListener("click",function(){
//     getRef = prompt("Write your site")
// })
// openRef.addEventListener("click", function(){
//     if(getRef === ''){
//         alert("input your site")
//     }else{
//         window.open(getRef)
//     }
// })

// divMain.appendChild(writeRef)
// divMain.appendChild(openRef)
                                //Task - 2//

// const boxParent = document.createElement("div")
// boxParent.classList.add("box-parent")
// const btn1 = document.createElement("button")
// const btn2 = document.createElement("button")
// const btn3 = document.createElement("button")
// btn1.textContent = "Button - 1"
// btn2.textContent = "Button - 2"
// btn3.textContent = "Button - 3"
// boxParent.addEventListener("click", function(event){
//     alert(event.target.textContent)
// })



// boxParent.appendChild(btn1)
// boxParent.appendChild(btn2)
// boxParent.appendChild(btn3)
// divMain.appendChild(boxParent)

                                //Task - 3//
// const divToDoListElements = document.createElement("div")
// const divToDoListButtons = document.createElement("div")
// divToDoListElements.classList.add("to-do-list-box_elem")
// divToDoListButtons.classList.add("to-do-list-box_btn")
// const input = document.createElement("input")
// const addElem = document.createElement("button")
// addElem.textContent = "Add Note"
// addElem.addEventListener("click",function(){
//     const newNote = document.createElement("p")
//     newNote.textContent = `${input.value}`
//     const btn = document.createElement("button")
//     btn.textContent = `Delete`
//     btn.addEventListener("click",function(event){
//         event.target.parentElement.remove()
//     })
//     newNote.appendChild(btn)
//     divToDoListElements.appendChild(newNote)
// })

// divMain.appendChild(divToDoListElements)
// divMain.appendChild(divToDoListButtons)
// divToDoListButtons.appendChild(input)
// divToDoListButtons.appendChild(addElem)
//<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<END-HW - 12>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>//

//<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<CW - 13>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>//

                //Task - 1//
// const form = document.getElementById("form-login")
// form.addEventListener("submit",e =>{
//     e.preventDefault()
//     const formData = new FormData(e.target)
//     const values = Object.fromEntries(formData)
//     console.log(values)
// })


                //Task - 2//
// const input = document.getElementById("size-btn")
// const image = document.getElementById("img")
// image.width = 300;
// input.addEventListener("input",e =>{
//     e.preventDefault()
//     image.width = 300 * e.target.value;
// })  


                //Task - 3//

// const pattern = /\b\d+\.\d+\b/g;
// const str = '0 1 12.345 789.0';
// let res = str.match(pattern)
// console.log(res)
                //Task - 3//
// const str = '<h1>Привіт!</h1>'
// const pattern = '/<\/?[a-zA-Z][a-zA-Z0-9]*>/'
// let res = str.match(str)
// console.log(res)
                //Task - 4//
// const taskMainDiv4 = document.createElement("div")
// taskMainDiv4.classList.add("input-pass-check") 

// const input = document.createElement("input")
// input.setAttribute("type","password")
// input.classList.add("input-pass")

// const dangerList = document.createElement("ul")
// dangerList.classList.add("pass-ul")  

// const bigLetter = document.createElement("li")
// bigLetter.classList.add("one-big-letter")
// bigLetter.textContent = "Одна велика буква"

// const oneNum = document.createElement("li")
// oneNum.classList.add("one-number")
// oneNum.textContent = "Одна цифра"

// const oneFig = document.createElement("li")
// oneFig.classList.add("one-figure")
// oneFig.textContent = "Один знак пунктуація"

// const minEightSymb = document.createElement("li")
// minEightSymb.classList.add("min-eight-sym")
// minEightSymb.textContent = "Мінімум 8 символів"


// input.addEventListener("input",(e)=>{
//     const userPassword = e.target.value;
//     if(/[A-Z]/.test(userPassword)){
//         bigLetter.style.color = "green";
//     }else{
//         bigLetter.style.color = "red";
//     }
//     if(/[0-9]/.test(userPassword)){
//         oneNum.style.color = "green";
//     }else{
//         oneNum.style.color = "red";
//     }
//     if(/[.,:;!?(){}\[\]<>@#$%^&*_\-+=~`|\\]/.test(userPassword)){
//         oneFig.style.color = "green";
//     }else{
//         oneFig.style.color = "red";
//     }
//     if(userPassword.length > 8){
//         minEightSymb.textContent = "8 символів"
//         minEightSymb.style.color = "green"
//     }else{
//         minEightSymb.textContent = "Мінімум 8 символів"
//         minEightSymb.style.color = "red"
//     }
// })



// dangerList.appendChild(bigLetter)
// dangerList.appendChild(oneNum)
// dangerList.appendChild(oneFig)
// dangerList.appendChild(minEightSymb)
// taskMainDiv4.appendChild(input)
// taskMainDiv4.appendChild(dangerList)
// divMain.appendChild(taskMainDiv4)
//<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<END-CW - 13>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>//
//<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<HW - 13>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>//
// const formBox = document.querySelector(".form-box")

// const form = document.createElement("form")
// form.classList.add("form-send")
// form.setAttribute("action","#")

// const userName = document.createElement("input")
// userName.classList.add("name-input")
// userName.setAttribute("type","text")
// userName.setAttribute("placeholder","Name")
// userName.setAttribute("id","userName")
// userName.setAttribute("name","userName")

// const checkName = document.createElement("p")
// checkName.classList.add("correct-name")
// checkName.textContent = "Треба вести своє імʼя"

// const message = document.createElement("textarea")
// message.classList.add("textarea-input")
// message.setAttribute("placeholder","Message")
// message.setAttribute("id","message")
// message.setAttribute("name","message")

// const checkMessage = document.createElement("p")
// checkMessage.classList.add("correct-message")
// checkMessage.textContent = "Мінімум 5 символів"

// const textAnswer = document.createElement("p")
// textAnswer.classList.add("text-answer")
// textAnswer.textContent = "HOW TO ANSWER YOU?"

// const phone = document.createElement("input")
// phone.classList.add("phnum-input")
// phone.setAttribute("type","text")
// phone.setAttribute("placeholder","Phone number")
// phone.setAttribute("id","phone")
// phone.setAttribute("name","phone")

// const phoneCheck = document.createElement("p")
// phoneCheck.classList.add("correct-phnumber")
// phoneCheck.textContent = "З початком +380"

// const email = document.createElement("input")
// email.classList.add("email-input")
// email.setAttribute("type","email")
// email.setAttribute("placeholder","Email")
// email.setAttribute("id","email")
// email.setAttribute("name","email")

// const emailCheck = document.createElement("p")
// emailCheck.classList.add("correct-email")
// emailCheck.textContent = `Містить "@", "."`

// const submitButton = document.createElement("button")
// submitButton.classList.add("smb-btn")
// submitButton.setAttribute("type","submit")

// const btnText = document.createElement("p")
// btnText.classList.add("smb-btn__text")
// btnText.textContent = "Send message"


// userName.addEventListener("focus",()=>{
//     checkName.style.color = "red";
// })
// message.addEventListener("focus",()=>{
//     checkMessage.style.color = "red";
// })
// phone.addEventListener("focus",()=>{
//     phoneCheck.style.color = "red";
// })
// email.addEventListener("focus",()=>{
//     emailCheck.style.color = "red";
// })
// userName.addEventListener("input",(e)=>{
//     if(!/\d/.test(e.target.value)){
//         checkName.style.color = "green";
//     }else{
//         checkName.style.color = "red";
//     }
// })
// message.addEventListener("input",(e)=>{
//     if(e.target.value.length > 4){
//         checkMessage.style.color = "green";
//     }else{
//         checkMessage.style.color = "red";
//     }
// })
// phone.addEventListener("input",(e)=>{
//     if(/^\+380\d{9}$/.test(e.target.value)){
//         phoneCheck.style.color = "green"
//     }else{
//         phoneCheck.style.color = "red"
//     }
// })
// email.addEventListener("input",(e)=>{
//     if(/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e.target.value)){
//         emailCheck.style.color = "green"
//     }else{
//         emailCheck.style.color = "red"
//     }
// })
// form.addEventListener("submit",(e)=>{
//     if(emailCheck.style.color ==="green" && phoneCheck.style.color === "green" && checkName.style.color === "green" && checkMessage.style.color === "green"){
//         const formData = new FormData(e.target)
//         const values = Object.fromEntries(formData.entries())
//         console.log(values)
//     }else{
//         alert("Проверь все поля")
//     }
//     e.preventDefault()
// })






// form.appendChild(userName)
// form.appendChild(checkName)
// form.appendChild(message)
// form.appendChild(checkMessage)
// form.appendChild(textAnswer)
// form.appendChild(phone)
// form.appendChild(phoneCheck)
// form.appendChild(email)
// form.appendChild(emailCheck)
// form.appendChild(submitButton)
// submitButton.appendChild(btnText)
// formBox.appendChild(form)
//<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<END-HW - 13>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>//