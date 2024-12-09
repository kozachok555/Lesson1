class Student{
    constructor(name,surName,birthYear){
        this.name = name;
        this.surName = surName;
        this.birthYear = birthYear;
        this.marks = [];
        this.presentList = new Array(25)
        this.currentLesson = 0;
    }
    getAge(){
        const currentYear = new Date().getFullYear()
        return currentYear - this.birthYear
    }
    getAverageMark(){
        let counter = 0;
        for (const element of this.marks) {
            counter += element;
        }
        return counter/this.marks.length
    }
    addMark(mark){
        this.marks.push(mark)
        return this
    }
    present(){
        if(this.currentLesson < 25){
            this.presentList[this.currentLesson] = true
            this.currentLesson++
        }else{
            console.log("Error : dont have place")
        }
        return this;
    }
    absent(){
        if(this.currentLesson < 25){
            this.presentList[this.currentLesson] = false
            this.currentLesson++
        }else{
            console.log("Error : dont have place")
        }
        return this;
    }
    summary(){
        let presentCounter = 0;
        for (const element of this.presentList) {
            if(element === true){
                presentCounter++;
            }
        }
        const averageMark = this.getAverageMark()
        const averageAbsent = presentCounter/this.currentLesson;
        if(averageMark > 90 && averageAbsent > 0.9){
            return `Молодець ${this.name} ${this.surName}`
        }else if(averageMark < 90 && averageAbsent < 0.9){
            return `Редиска ${this.name} ${this.surName}`
        }else{
            return `Добре, але можна краще ${this.name} ${this.surName}`
        }
    }
}
const user1 = new Student("Vova","Kozachenko",2005)
.present().present().present().present().present().present().present().present().present().present()
.addMark(100).addMark(80).addMark(90).addMark(100).addMark(80).addMark(90).addMark(100).addMark(80).addMark(90).addMark(95)
console.log(user1.getAge())
console.log(user1.getAverageMark())
const user2 = new Student("Nikita","Ganchev",2004)
.absent().absent().absent().absent().absent()
.present().present().present().present().present()
.addMark(100).addMark(100).addMark(100).addMark(100).addMark(100).addMark(100).addMark(100).addMark(100).addMark(100).addMark(100)
console.log(user2.getAge())
console.log(user2.getAverageMark())
const user3 = new Student("Evgenij","Panamarev",2006)
.present().present().present().present()
.absent().absent().absent().absent().absent().absent()
.addMark(70).addMark(80).addMark(80).addMark(80).addMark(80).addMark(80).addMark(80).addMark(80).addMark(80).addMark(80)
console.log(user3.getAge())
console.log(user3.getAverageMark())
console.log(user1.summary())
console.log(user2.summary())
console.log(user3.summary())
