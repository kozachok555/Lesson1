const sendForm = document.querySelector(".form")
const toDoList = document.querySelector(".js--todos-wrapper")
const findForm = document.querySelector(".form__input")
sendForm.addEventListener("submit",function(e){
    e.preventDefault()
    const formData = new FormData(e.target)
    const values = Object.fromEntries(formData.entries())
    const getUsersValue = JSON.parse(localStorage.getItem("users-value")) || []
    const newUsersValue = [...getUsersValue,values]
    localStorage.setItem("users-value",JSON.stringify(newUsersValue))

    showList()
})
function showList(){
    const getValues = JSON.parse(localStorage.getItem("users-value"))
    toDoList.innerHTML =``
    getValues.forEach((element,index) => {
        const createToDoItem = document.createElement("li")
        createToDoItem.classList.add("todo-item")
        createToDoItem.dataset.index = index

        const createCheck = document.createElement("input")
        createCheck.setAttribute("type","checkbox")
        createCheck.checked = element.checked

        const createText = document.createElement("span")
        createText.textContent = element.value
        createText.classList.add("todo-item__description")

        const createButtonDelete = document.createElement("todo-item__delete")
        createButtonDelete.textContent = "Видалити"
        createButtonDelete.classList.add("todo-item__delete")

        if(element.checked){
            createToDoItem.classList.add("todo-item--checked")
        }

        findForm.value = ""
        createToDoItem.appendChild(createCheck)
        createToDoItem.appendChild(createText)
        createToDoItem.appendChild(createButtonDelete)
        toDoList.appendChild(createToDoItem)

        createButtonDelete.addEventListener("click",function(){
            getValues.splice(index,1)
            localStorage.setItem("users-value",JSON.stringify(getValues))
            showList()
        })

        createCheck.addEventListener("change",function(){
            getValues[index].checked = this.checked
            localStorage.setItem("users-value", JSON.stringify(getValues))
            if(this.checked){
                createToDoItem.classList.add("todo-item--checked")
            }else{
                createToDoItem.classList.remove("todo-item--checked")
            }
        })
    })
}
showList()