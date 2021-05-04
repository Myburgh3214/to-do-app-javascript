let newList = document.getElementById("myList")
function addTask() {
    let Task = document.getElementById("Task").value;
    let entry = document.createElement("li");
    entry.appendChild(document.createTextNode(Task));
    newList.appendChild(entry);
}



        
       