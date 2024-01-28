const input = document.querySelector(".inputBox");
const task_list = document.querySelector(".task_lists");
const button = document.querySelector(".btn");
// create a addtask function
function addTask() {
	if (input.value == "") {
		alert("Please Add Your Task Pleasue..");
	} else {
		const listItem = document.createElement("li");
		listItem.innerHTML = input.value;
		task_list.appendChild(listItem);
		const span = document.createElement("span");
		span.innerHTML = "\u00d7";
		listItem.appendChild(span);
	}
	input.value = "";
	saveData();
}
button.addEventListener("click", addTask);
task_list.addEventListener("click", (e) => {
	if (e.target.tagName === "LI") {
		e.target.classList.toggle("checked");
		saveData();
	} else if (e.target.tagName === "SPAN") {
		e.target.parentElement.remove();
		saveData();
	}
});
// set data
const saveData = () => {
	localStorage.setItem("data", task_list.innerHTML);
};
// show data
const showData = () => {
	task_list.innerHTML = localStorage.getItem("data");
};
showData();
