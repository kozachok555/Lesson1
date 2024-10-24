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
    task3()
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
 hw4()