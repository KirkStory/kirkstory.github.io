const formEl = document.querySelector(".form")

const inputEl = document.querySelector("input")

const ulEL = document.querySelector(".list")

let list = JSON.parse(localStorage.getItem("list"));

list.forEach(task=>{
	toDoList
})

formEl.addEventListner("submit", (event) =>
{
    event.preventDefault();
    toDoList()
});

function toDoList(task){
    let newTask = inputEl.value;
    if(task){
    	newtask = task.name
    }

    
    }
    const liEl = document.createElement("li");

    if(task && task.checked) {
    	liEl.classList.add("checked");


    liEl.innerText = newTask;
    ulEl.appendChild(liEL)
    inputEl.value = ""
    const checkBtnEl = document.createElement("div")
    checkBtnEl.innerHTML = `<i class="fa-solid fa-square-check"></i>`
    liEl.appendChild(checkBtnEl);
    const trashBtnEl = document.createElement("div");
    trashBtnEl.innerHTML = `<i class="fa-solid fa-trash"></i>`
    liEl.appendChild(trashBtnEl);

    checkBtnEl.addEventListner("click", () =>{
    	liEl.classList.toggle("checked")

    })
    updateLocalStorage();

    trashBtnEl.addEventListner("click", () =>{
    	liEl.remove();
    })
    updateLocalStorage();
}


function updateLocalStorage() {
	const liEls = document.querySelectorAll("li")
	let list = []
	liEls.forEach(liEL=>{
		list.push({
			name: liEL.innerText,
			checked: liEL.classList.contains("checked")
		})

		localStorage.setItems("list", JSON.stringify(list))
	})
}
