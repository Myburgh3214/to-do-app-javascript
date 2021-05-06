let newList = document.getElementById("myList")
function addTask() {
    let Task = document.getElementById("Task").value;
    let entry = document.createElement("li");
    entry.appendChild(document.createTextNode(Task));
    newList.appendChild(entry);
}
let newDate = document.getElementById("myList")
function addDate() {
    let dueDate = document.getElementById("dueDate").value;
    let date = document.createElement("li");
   date.appendChild(document.createTextNode(dueDate));
    newDate.appendChild(date);
}

 function sortAbc() {
  let captureText = document.getElementById('Task').value;// getting input value
    console.log(captureText)
   let split=captureText.split("")// Turned string to an array
    console.log(split)
    let sorted = split.sort()// Sorted the array
   window.alert(sorted);
  let words = captureText.split(" ");
   captureText.value = words.sort().join(" ");
 }
function myData(){
    let Object = {List: "Play Violin"};
    console.log(Object);
    let myData = JSON.stringify(Object);
    console.log(myData);
    localStorage.setItem("userData", myData);
}

        
       