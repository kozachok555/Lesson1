class Calculator{
    add(number1,number2){return number1 + number2;}
    substract(number1,number2){return number1 - number2}
    multiply(number1,number2){return number1 * number2} 
    devide(number1,number2){return number1/number2}
}
class Coach{
    #name; #speciality; #rating;
    constructor(name,speciality,rating){
        this.#name = name;
        this.#speciality = speciality;
        this.#rating = rating;
    }
    displayInfo(){
        console.log(`Coach: ${this.#name}, Specialization: ${this.#speciality}, Rating: ${this.#rating}`)
    }
}
class BankAccount{
    #balance
    constructor(money){
        this.#balance = money;
    }
    deposit(money){
        this.#balance += money;
    }
    withdraw(money){
        this.#balance -=money;
    }
    getBalance(){
        return this.#balance;
    }
}
const calc = new Calculator()
c1 = new Coach("Vadim","swimming",10)
c2 = new Coach("Anton","running",8)
const user = new BankAccount(5000)
user.deposit(500)
console.log(user.getBalance())
console.log(calc.add(6,2))
console.log(calc.substract(6,2))
console.log(calc.multiply(6,2))
console.log(calc.devide(6,2))

c1.displayInfo()
c2.displayInfo()
