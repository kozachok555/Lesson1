$(document).ready(function() {
    const LOCAL_STORAGE_USERS_VALUE = "users-value";

    function saveToLocalStorage(data) {
        localStorage.setItem(LOCAL_STORAGE_USERS_VALUE, JSON.stringify(data));
    }

    function getFromLocalStorage() {
        return JSON.parse(localStorage.getItem(LOCAL_STORAGE_USERS_VALUE)) || [];
    }

    function showList() {
        const listOfValues = getFromLocalStorage();
        const $toDoList = $(".js--todos-wrapper");
        $toDoList.empty();

        listOfValues.forEach((element, index) => {
            const $todoItem = $(
                `<li class="list-group-item d-flex justify-content-between align-items-center todo-item" data-index="${index}">
                    <div>
                        <h1>${element.title}</h1>
                        <h2>${element.description}</h2>
                    </div>
                    <div>
                        <input type="checkbox" class="form-check-input todo-item__checkbox" ${element.checked ? "checked" : ""}>
                        <button class="btn btn-danger btn-sm todo-item__delete ms-2">Видалити</button>
                    </div>
                </li>`
            );

            if (element.checked) {
                $todoItem.addClass("todo-item--checked");
            }

            $todoItem.find(".todo-item__delete").on("click", function() {
                listOfValues.splice(index, 1);
                saveToLocalStorage(listOfValues);
                showList();
            });

            $todoItem.find(".todo-item__checkbox").on("change", function() {
                listOfValues[index].checked = this.checked;
                saveToLocalStorage(listOfValues);
                $todoItem.toggleClass("todo-item--checked", this.checked);
            });

            $todoItem.on("click", function(e) {
                if (!$(e.target).is(".todo-item__checkbox, .todo-item__delete")) {
                    $("#exampleModalLabel").text(element.title);
                    $(".modal-body").text(element.description);
                    $("#exampleModal").modal("show");
                }
            });

            $toDoList.append($todoItem);
        });
    }

    $(".js--form").on("submit", function(e) {
        e.preventDefault();
        const title = $(".js--form__title").val().trim();
        const description = $(".js--form__description").val().trim();

        if (title && description) {
            const listOfValues = getFromLocalStorage();
            listOfValues.push({ title, description, checked: false });
            saveToLocalStorage(listOfValues);
            showList();
            $(this).trigger("reset");
        }
    });

    showList();
});
