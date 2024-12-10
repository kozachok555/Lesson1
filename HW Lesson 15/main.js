const sendForm = document.querySelector(".form")
const toDoList = document.querySelector(".js--todos-wrapper")
const findForm = document.querySelector(".form__input")
const LOCAL_STORAGE_USERS_VALUE = "users-value"

sendForm.addEventListener("submit",function(e){
    e.preventDefault()
    const formData = new FormData(e.target)
    const values = Object.fromEntries(formData.entries())
    const listOfValues = getFromLocalStorage() || []
    const newListOfValues = [...listOfValues,values]
    saveToLocalStorage(newListOfValues)

    showList()
})

function showList(){
    const listOfValues = getFromLocalStorage()
    toDoList.innerHTML =``

    listOfValues.forEach((element,index) => {
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
            listOfValues.splice(index,1)
            saveToLocalStorage(listOfValues)
            showList()
        })

        createCheck.addEventListener("change",function(){
            listOfValues[index].checked = this.checked
            saveToLocalStorage(listOfValues)
            if(this.checked){
                createToDoItem.classList.add("todo-item--checked")
            }else{
                createToDoItem.classList.remove("todo-item--checked")
            }
        })
    })
}
function saveToLocalStorage(arg){
    localStorage.setItem(LOCAL_STORAGE_USERS_VALUE, JSON.stringify(arg))
}
function getFromLocalStorage(){
    return JSON.parse(localStorage.getItem(LOCAL_STORAGE_USERS_VALUE))
}

showList()