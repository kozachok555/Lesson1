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
    task3()
}
hw7()
