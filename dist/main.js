"use strict";

$(document).ready(function () {
  var LOCAL_STORAGE_USERS_VALUE = "users-value";
  function saveToLocalStorage(data) {
    localStorage.setItem(LOCAL_STORAGE_USERS_VALUE, JSON.stringify(data));
  }
  function getFromLocalStorage() {
    return JSON.parse(localStorage.getItem(LOCAL_STORAGE_USERS_VALUE)) || [];
  }
  function showList() {
    var listOfValues = getFromLocalStorage();
    var $toDoList = $(".js--todos-wrapper");
    $toDoList.empty();
    listOfValues.forEach(function (element, index) {
      var $todoItem = $("<li class=\"list-group-item d-flex justify-content-between align-items-center todo-item\" data-index=\"".concat(index, "\">\n                    <div>\n                        <h1>").concat(element.title, "</h1>\n                        <h2>").concat(element.description, "</h2>\n                    </div>\n                    <div>\n                        <input type=\"checkbox\" class=\"form-check-input todo-item__checkbox\" ").concat(element.checked ? "checked" : "", ">\n                        <button class=\"btn btn-danger btn-sm todo-item__delete ms-2\">\u0412\u0438\u0434\u0430\u043B\u0438\u0442\u0438</button>\n                    </div>\n                </li>"));
      if (element.checked) {
        $todoItem.addClass("todo-item--checked");
      }
      $todoItem.find(".todo-item__delete").on("click", function () {
        listOfValues.splice(index, 1);
        saveToLocalStorage(listOfValues);
        showList();
      });
      $todoItem.find(".todo-item__checkbox").on("change", function () {
        listOfValues[index].checked = this.checked;
        saveToLocalStorage(listOfValues);
        $todoItem.toggleClass("todo-item--checked", this.checked);
      });
      $todoItem.on("click", function (e) {
        if (!$(e.target).is(".todo-item__checkbox, .todo-item__delete")) {
          $("#exampleModalLabel").text(element.title);
          $(".modal-body").text(element.description);
          $("#exampleModal").modal("show");
        }
      });
      $toDoList.append($todoItem);
    });
  }
  $(".js--form").on("submit", function (e) {
    e.preventDefault();
    var title = $(".js--form__title").val().trim();
    var description = $(".js--form__description").val().trim();
    if (title && description) {
      var listOfValues = getFromLocalStorage();
      listOfValues.push({
        title: title,
        description: description,
        checked: false
      });
      saveToLocalStorage(listOfValues);
      showList();
      $(this).trigger("reset");
    }
  });
  showList();
});