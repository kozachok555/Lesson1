class FormValidatorCW{
    constructor(form){
        this.form = form;
        this.init(this.form)
    }
    init(form) {
        this.validateCheck(form)
    }
    validateCheck(form){
        const nameReqiered = document.querySelector("#name-req")
        const emailReqiered = document.querySelector("#email-req")
        const minValues = document.querySelector("#min-req")
        form.addEventListener("submit",(e) =>{
            e.preventDefault()
            const formData = new FormData(e.target)
            const values = Object.fromEntries(formData.entries())
            let isFormValid = true;
            for(let [name,value] of Object.entries(values)){
                const thisElement = e.target.querySelector(`[name="${name}"]`)
                const validationAttributeValue = thisElement.getAttribute("validation")
                if(validationAttributeValue === "email"){
                    if(this.validateEmail(value)){
                        thisElement.style.borderColor = "green"
                        emailReqiered.style.color = "green"
                    }else{
                        thisElement.style.borderColor = "red"
                        emailReqiered.style.color = "red"
                        isFormValid = false;
                    }
                }
                if(validationAttributeValue === "message"){
                    if(this.validateFieldMin(value)){
                        thisElement.style.borderColor = "green"
                        minValues.style.color = "green"
                    }else{
                        thisElement.style.borderColor = "red"
                        minValues.style.color = "red"
                        isFormValid = false;
                    }
                }
                if(validationAttributeValue === "name"){
                    if(this.validateField(value)){
                        thisElement.style.borderColor = "green"
                        nameReqiered.style.color = "green"
                    }else{
                        thisElement.style.borderColor = "red"
                        nameReqiered.style.color = "red"
                        isFormValid = false;
                    }
                }
            }
            if(isFormValid){
                console.log(values)
            }

        })
    }
    validateEmail(arg) {
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailPattern.test(arg)
    }
    validateField(arg){
        return arg.trim() !== "";
    }
    validateFieldMin(arg){
       return arg.length >4;
    }
}
document.addEventListener("DOMContentLoaded",function(){
    const form = document.querySelector(".form")
    new FormValidatorCW(form);
})