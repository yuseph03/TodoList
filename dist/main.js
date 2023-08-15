/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_UI__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/UI */ \"./src/modules/UI.js\");\n\n\ndocument.addEventListener('DOMContentLoaded', _modules_UI__WEBPACK_IMPORTED_MODULE_0__[\"default\"].loadHomePage);\n\n\n//# sourceURL=webpack://todolist/./src/index.js?");

/***/ }),

/***/ "./src/modules/Project.js":
/*!********************************!*\
  !*** ./src/modules/Project.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Project)\n/* harmony export */ });\nclass Project {\n  constructor(name) {\n    this.tasks = [];\n    this.name = name;\n  }\n\n  setName(name) {\n    this.name = name;\n  }\n\n  getName() {\n    return this.name;\n  }\n\n  setTasks(tasks) {\n    this.tasks = tasks;\n  }\n\n  getTasks() {\n    return this.tasks;\n  }\n\n  setTask(newTask) {\n    this.tasks.push(newTask);\n  }\n}\n\n\n//# sourceURL=webpack://todolist/./src/modules/Project.js?");

/***/ }),

/***/ "./src/modules/Storage.js":
/*!********************************!*\
  !*** ./src/modules/Storage.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Storage)\n/* harmony export */ });\n/* harmony import */ var _Project__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Project */ \"./src/modules/Project.js\");\n/* harmony import */ var _Task__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Task */ \"./src/modules/Task.js\");\n/* harmony import */ var _Todolist__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Todolist */ \"./src/modules/Todolist.js\");\n/* harmony import */ var _UI__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./UI */ \"./src/modules/UI.js\");\n\n\n\n\n\nconst NAMESPACE = 'TODO-07';\n\nclass Storage {\n  static getTodolist() {\n    const todoList = Object.assign(\n      new _Todolist__WEBPACK_IMPORTED_MODULE_2__[\"default\"](),\n      JSON.parse(localStorage.getItem(NAMESPACE)),\n    );\n\n    todoList.setProjects(todoList\n      .getProjects().map((project) => Object.assign(new _Project__WEBPACK_IMPORTED_MODULE_0__[\"default\"](), project)));\n\n    todoList.getProjects().forEach((project) => project.setTasks(\n      project.getTasks().map((task) => Object.assign(new _Task__WEBPACK_IMPORTED_MODULE_1__[\"default\"](), task)),\n    ));\n\n    return todoList;\n  }\n\n  static setTodolist(todolist) {\n    localStorage.setItem(NAMESPACE, JSON.stringify(todolist));\n  }\n\n  static addTask() {\n    const input = document.getElementById('input-add-task-popup').value;\n    const project = document.getElementById('project-name').textContent;\n    const taskPopup = document.getElementById('add-task-popup');\n    const todolist = Storage.getTodolist();\n\n    todolist.getProject(project).setTask(new _Task__WEBPACK_IMPORTED_MODULE_1__[\"default\"](input, 'No Date'));\n    Storage.setTodolist(todolist);\n    _UI__WEBPACK_IMPORTED_MODULE_3__[\"default\"].loadTask(input, 'No Date');\n    _UI__WEBPACK_IMPORTED_MODULE_3__[\"default\"].deactivatePopup(taskPopup);\n  }\n\n  static addProject() {\n    const input = document.getElementById('input-add-project-popup').value;\n    const projPopup = document.getElementById('add-project-popup');\n    const todolist = Storage.getTodolist();\n    todolist.setProject(input);\n    Storage.setTodolist(todolist);\n    _UI__WEBPACK_IMPORTED_MODULE_3__[\"default\"].loadProject(input);\n    _UI__WEBPACK_IMPORTED_MODULE_3__[\"default\"].loadProjectBtn(input)\n    _UI__WEBPACK_IMPORTED_MODULE_3__[\"default\"].deactivatePopup(projPopup);\n  }\n\n  static openProject(proj) {\n    const todolist = Storage.getTodolist();\n    _UI__WEBPACK_IMPORTED_MODULE_3__[\"default\"].loadProject(proj);\n    // todolist.getProject(proj)\n    // .getTasks.forEach((task) => UI.loadTask(task.name, task.date));\n  }\n}\n\n\n//# sourceURL=webpack://todolist/./src/modules/Storage.js?");

/***/ }),

/***/ "./src/modules/Task.js":
/*!*****************************!*\
  !*** ./src/modules/Task.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Task)\n/* harmony export */ });\nclass Task {\n  constructor(name, date) {\n    this.name = name;\n    this.date = date;\n  }\n\n  setName(name) {\n    this.name = name;\n  }\n\n  getName() {\n    return this.name;\n  }\n\n  setDate(date) {\n    this.date = date;\n  }\n\n  getDate() {\n    return this.date;\n  }\n}\n\n\n//# sourceURL=webpack://todolist/./src/modules/Task.js?");

/***/ }),

/***/ "./src/modules/Todolist.js":
/*!*********************************!*\
  !*** ./src/modules/Todolist.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Todolist)\n/* harmony export */ });\n/* harmony import */ var _Project__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Project */ \"./src/modules/Project.js\");\n\n\nclass Todolist {\n  constructor() {\n    this.projects = [];\n    this.projects.push(new _Project__WEBPACK_IMPORTED_MODULE_0__[\"default\"]('Inbox'));\n    this.projects.push(new _Project__WEBPACK_IMPORTED_MODULE_0__[\"default\"]('Today'));\n    this.projects.push(new _Project__WEBPACK_IMPORTED_MODULE_0__[\"default\"]('Week'));\n  }\n\n  setProjects(projects) {\n    this.projects = projects;\n  }\n\n  getProjects() {\n    return this.projects;\n  }\n\n  getProject(proj) {\n    return this.projects.find((project) => project.name === `${proj}`);\n  }\n\n  setProject(proj) {\n    return this.projects.push(new _Project__WEBPACK_IMPORTED_MODULE_0__[\"default\"](`${proj}`));\n  }\n\n  clear() {\n    this.projects = [];\n  }\n}\n\n\n//# sourceURL=webpack://todolist/./src/modules/Todolist.js?");

/***/ }),

/***/ "./src/modules/UI.js":
/*!***************************!*\
  !*** ./src/modules/UI.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ UI)\n/* harmony export */ });\n/* harmony import */ var _Project__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Project */ \"./src/modules/Project.js\");\n/* harmony import */ var _Storage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Storage */ \"./src/modules/Storage.js\");\n/* harmony import */ var _Todolist__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Todolist */ \"./src/modules/Todolist.js\");\n\n\n\n\nclass UI {\n  static loadHomePage() {\n    UI.loadProject('Inbox');\n    UI.initBtns();\n  }\n\n  static loadProject(projectName) {\n    const projectPreview = document.querySelector('.project-preview');\n\n    projectPreview.innerHTML = `\n        <h1 id=\"project-name\">${projectName}</h1>\n        <div class=\"tasks-list\" id=\"tasks-list\"></div>\n        <button class=\"button-add-task\" id=\"button-add-task\">\n          <i class=\"fas fa-plus\"></i>\n          Add Task\n        </button>\n        <div class=\"add-task-popup\" id=\"add-task-popup\">\n          <input\n            class=\"input-add-task-popup\"\n            id=\"input-add-task-popup\"\n            type=\"text\"\n          />\n          <div class=\"add-task-popup-buttons\">\n            <button class=\"button-add-task-popup\" id=\"button-add-task-popup\">\n              Add\n            </button>\n            <button\n              class=\"button-cancel-task-popup\"\n              id=\"button-cancel-task-popup\"\n            >\n              Cancel\n            </button>\n          </div>\n        </div>`;\n  }\n  \n  static loadProjectBtn(projectName) {\n    const projList = document.getElementById('projects-list')\n\n    projList.innerHTML += `\n    <button class=\"button-project\" data-project-button>\n        <div class=\"left-project-panel\">\n          <i class=\"fas fa-tasks\"></i>\n          <span>${projectName}</span>\n        </div>\n        <div class=\"right-project-panel\">\n          <i class=\"fas fa-times\"></i>\n        </div>\n      </button>`;\n\n      UI.initProjectBtns()\n  }\n\n  static loadTask(task, date) {\n    const tasksList = document.getElementById('tasks-list')\n    tasksList.innerHTML += `\n        <button class=\"button-task\" data-task-button>\n          <div class=\"left-task-panel\">\n            <i class=\"far fa-circle\"></i>\n            <p class=\"task-content\">${task}</p>\n            <input type=\"text\" class=\"input-task-name\" data-input-task-name>\n          </div>\n          <div class=\"right-task-panel\">\n            <p class=\"due-date\" id=\"due-date\">${date}</p>\n            <input type=\"date\" class=\"input-due-date\" data-input-due-date>\n            <i class=\"fas fa-times\"></i>\n          </div>\n        </button>`;\n  }\n\n  // EVENT LISTENERS\n\n  static initBtns() {\n    const addTaskBtn = document.getElementById('button-add-task');\n    const taskCancel = document.getElementById('button-cancel-task-popup');\n    const taskPopup = document.getElementById('add-task-popup');\n    const taskConfirm = document.getElementById('button-add-task-popup');\n\n    const addProjBtn = document.getElementById('button-add-project');\n    const projCancel = document.getElementById('button-cancel-project-popup');\n    const projPopup = document.getElementById('add-project-popup');\n    const projConfirm = document.getElementById('button-add-project-popup');\n\n    addTaskBtn.addEventListener('click', () => UI.activatePopup(taskPopup));\n    taskCancel.addEventListener('click', () => UI.deactivatePopup(taskPopup));\n    taskConfirm.addEventListener('click', () => _Storage__WEBPACK_IMPORTED_MODULE_1__[\"default\"].addTask());\n\n    addProjBtn.addEventListener('click', () => UI.activatePopup(projPopup));\n    projCancel.addEventListener('click', () => UI.deactivatePopup(projPopup));\n    projConfirm.addEventListener('click', () => _Storage__WEBPACK_IMPORTED_MODULE_1__[\"default\"].addProject());\n  }\n\n  static initProjectBtns() {\n    const projBtnArray = Array.from(document.querySelectorAll('.left-project-panel'));\n    projBtnArray.forEach((element) => element.addEventListener('click', \n    () => _Storage__WEBPACK_IMPORTED_MODULE_1__[\"default\"].openProject(element.querySelector('span').textContent)));\n  }\n\n  static activatePopup(popup) {\n    popup.classList.add('active');\n  }\n\n  static deactivatePopup(popup) {\n    popup.classList.remove('active');\n  }\n}\n\n\n//# sourceURL=webpack://todolist/./src/modules/UI.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;