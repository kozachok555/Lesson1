const root = document.body
const div = document.createElement("div")
div.classList.add("main")

const clearCacheButton = document.createElement("button")
clearCacheButton.textContent = "clear"

const createDivNameTable = document.createElement("div")
createDivNameTable.classList.add("table-names")

const createModalWindowBackground = document.createElement("div")
createModalWindowBackground.classList.add("modal-window-back")
createModalWindowBackground.classList.add("display-none")

const createModalWindowBackgroundEdit = document.createElement("div")
createModalWindowBackgroundEdit.classList.add("modal-window-back")
createModalWindowBackgroundEdit.classList.add("display-none")

const createFormSendEdit = document.createElement("form")
createFormSendEdit.classList.add("form")

const userNameEdit = document.createElement("input")
userNameEdit.classList.add("name-input")
userNameEdit.setAttribute("placeholder","User")
userNameEdit.setAttribute("name","userName")

const userPhoneEdit = document.createElement("input")
userPhoneEdit.classList.add("phone-input")
userPhoneEdit.setAttribute("placeholder","Phone")
userPhoneEdit.setAttribute("name","userPhone")

const userAgeEdit = document.createElement("input")
userAgeEdit.classList.add("age-input")
userAgeEdit.setAttribute("placeholder","Age")
userAgeEdit.setAttribute("name","userAge")

const createFormSubmitButtonEdit = document.createElement("button")
createFormSubmitButtonEdit.setAttribute("type","submit")
createFormSubmitButtonEdit.textContent = "OK"

const closeModalButtonEdit = document.createElement("button")
closeModalButtonEdit.classList.add("close-modal-button")
closeModalButtonEdit.textContent = "x"

const createFormSend = document.createElement("form")
createFormSend.classList.add("form")

const userName = document.createElement("input")
userName.classList.add("name-input")
userName.setAttribute("placeholder","User")
userName.setAttribute("name","userName")

const userPhone = document.createElement("input")
userPhone.classList.add("phone-input")
userPhone.setAttribute("placeholder","Phone")
userPhone.setAttribute("name","userPhone")

const userAge = document.createElement("input")
userAge.classList.add("age-input")
userAge.setAttribute("placeholder","Age")
userAge.setAttribute("name","userAge")

const createFormSubmitButton = document.createElement("button")
createFormSubmitButton.setAttribute("type","submit")
createFormSubmitButton.textContent = "OK"

const closeModalButton = document.createElement("button")
closeModalButton.classList.add("close-modal-button")
closeModalButton.textContent = "x"

const createIdName = document.createElement("div")
createIdName.classList.add("table")
createIdName.textContent = "id"

const creatName = document.createElement("div")
creatName.classList.add("table")
creatName.textContent = "Name"

const createPhoneName = document.createElement("div")
createPhoneName.classList.add("table")
createPhoneName.textContent = "Phone"

const createAgeName = document.createElement("div")
createAgeName.classList.add("table")
createAgeName.textContent = "Age"

const createActionName = document.createElement("div")
createActionName.classList.add("table-long")
createActionName.textContent = "Action"

const divAddUser = document.createElement("div")
divAddUser.classList.add("div-add-user")

const addUserButton = document.createElement("button")
addUserButton.classList.add("button-add-user")
addUserButton.textContent = "Add User"
function renderTableNames(){
    const createDivNameTable = document.querySelector(".table-names");
    createDivNameTable.innerHTML = "";

    const createIdName = document.createElement("div")
    createIdName.classList.add("table")
    createIdName.textContent = "id"


    const creatName = document.createElement("div")
    creatName.classList.add("table")
    creatName.textContent = "Name"

    const createPhoneName = document.createElement("div")
    createPhoneName.classList.add("table")
    createPhoneName.textContent = "Phone"

    const createAgeName = document.createElement("div")
    createAgeName.classList.add("table")
    createAgeName.textContent = "Age"

    const createActionName = document.createElement("div")
    createActionName.classList.add("table-long")
    createActionName.textContent = "Action"
    createDivNameTable.appendChild(createIdName)
    createDivNameTable.appendChild(creatName)
    createDivNameTable.appendChild(createPhoneName)
    createDivNameTable.appendChild(createAgeName)
    createDivNameTable.appendChild(createActionName)
}
function showStorage(){
    renderTableNames()

    const getUsers = JSON.parse(localStorage.getItem("users")) || []
    getUsers.forEach((element, index) => {
        const createId = document.createElement("div")
        createId.classList.add("table")
        createId.textContent = `${index+1}`

        const createName = document.createElement("div")
        createName.classList.add("table")
        createName.textContent = `${element.userName}`

        const createPhone = document.createElement("div")
        createPhone.classList.add("table")
        createPhone.textContent = `${element.userPhone}`

        const createAge = document.createElement("div")
        createAge.classList.add("table")
        createAge.textContent = `${element.userAge}`

        const createAction = document.createElement("div")
        createAction.classList.add("table-long")

        const createViewButton = document.createElement("button")
        createViewButton.textContent = "View"
        createViewButton.classList.add("active-button")

        const createEditButton = document.createElement("button")
        createEditButton.textContent = "Edit"
        createEditButton.classList.add("active-button")

        const createDeleteButton = document.createElement("button")
        createDeleteButton.textContent = "Delete"
        createDeleteButton.classList.add("active-button")

        createDeleteButton.addEventListener("click",function(){
            getUsers.splice(index, 1);
            localStorage.setItem("users", JSON.stringify(getUsers));
            showStorage();
        })

        createViewButton.addEventListener("click",function(){
            const createDivShow = document.createElement("div")
            createDivShow.textContent = `{
            "id": ${index+1}
            "name": ${element.userName}
            "phone": ${element.userPhone}
            "age": ${element.userAge}
            }`
            root.appendChild(createDivShow)
        })

        createEditButton.addEventListener("click",function(e){
            e.preventDefault()
            createModalWindowBackgroundEdit.classList.remove("display-none")
            userNameEdit.value = element.userName
            userPhoneEdit.value = element.userPhone
            userAgeEdit.value = element.userAge
            createFormSendEdit.dataset.index = index;
        })
        createFormSendEdit.addEventListener("submit",function(e){
            e.preventDefault()
            const index = createFormSendEdit.dataset.index;
            getUsers[index] = {
                userName: userNameEdit.value,
                userPhone: userPhoneEdit.value,
                userAge: userAgeEdit.value
            }
            localStorage.setItem("users",JSON.stringify(getUsers))
            createModalWindowBackgroundEdit.classList.add("display-none")
                
            showStorage()
        })

        createAction.appendChild(createViewButton)
        createAction.appendChild(createEditButton)
        createAction.appendChild(createDeleteButton)
        createDivNameTable.appendChild(createId)
        createDivNameTable.appendChild(createName)
        createDivNameTable.appendChild(createPhone)
        createDivNameTable.appendChild(createAge)
        createDivNameTable.appendChild(createAction)
    })
}

closeModalButton.addEventListener("click",function(e){
    createModalWindowBackground.classList.add("display-none")
    e.preventDefault()
})
createFormSend.addEventListener("submit",function(e){
    e.preventDefault()
    const formData = new FormData(e.target)
    const values = Object.fromEntries(formData.entries())
    const getUsers = JSON.parse(localStorage.getItem("users")) || []
    const newUsers = [...getUsers,values]
    localStorage.setItem("users",JSON.stringify(newUsers))
    userName.value = ''
    userPhone.value = ''
    userAge.value = ''
    createModalWindowBackground.classList.add("display-none")
    showStorage()
})
addUserButton.addEventListener("click",function(){
    createModalWindowBackground.classList.remove("display-none")
})
clearCacheButton.addEventListener("click",function(){
    renderTableNames()
    localStorage.removeItem("users")
})

createFormSend.appendChild(userName)
createFormSend.appendChild(userPhone)
createFormSend.appendChild(userAge)
createFormSend.appendChild(createFormSubmitButton)
createFormSend.appendChild(closeModalButton)
createFormSendEdit.appendChild(userNameEdit)
createFormSendEdit.appendChild(userPhoneEdit)
createFormSendEdit.appendChild(userAgeEdit)
createFormSendEdit.appendChild(createFormSubmitButtonEdit)
createFormSendEdit.appendChild(closeModalButtonEdit)
createModalWindowBackground.appendChild(createFormSend)
createModalWindowBackgroundEdit.appendChild(createFormSendEdit)
createDivNameTable.appendChild(createIdName)
createDivNameTable.appendChild(creatName)
createDivNameTable.appendChild(createPhoneName)
createDivNameTable.appendChild(createAgeName)
createDivNameTable.appendChild(createActionName)
divAddUser.appendChild(addUserButton)
div.appendChild(createDivNameTable)
root.appendChild(divAddUser)
root.appendChild(createModalWindowBackground)
root.appendChild(createModalWindowBackgroundEdit)
root.appendChild(clearCacheButton)
root.appendChild(div)
showStorage()