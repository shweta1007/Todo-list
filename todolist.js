function addTask() {
    let input = document.getElementById("taskInput");
    let taskText = input.value.trim();
    if (taskText === "") return;

    let ul = document.getElementById("taskList");

    let li = document.createElement("li");
    li.innerHTML = `<span>${taskText}</span> <span class="delete">❌</span>`;
    li.querySelector("span").addEventListener("click", () => li.classList.toggle("completed"));
    li.querySelector(".delete").addEventListener("click", () => li.remove());

    ul.appendChild(li);
    input.value = "";
}
