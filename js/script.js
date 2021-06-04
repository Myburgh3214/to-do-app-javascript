function getInputValueTask(){
            // Selecting the input element and get its value 
           let listVal = document.getElementById("Task").value;
            // Displaying the value
           console.log(listVal);   

let obj = document.getElementById("Task").value;

let myData = JSON.stringify(obj);
localStorage.setItem("userData", myData);

myText = localStorage.getItem("userData");
newObj = JSON.parse(myText);
let getItem = localStorage.getItem("userData");
console.log(getItem);
}
let newList = document.getElementById("my_span1")
function addTask() {
    let Task = document.getElementById("Task").value;
    let entry = document.createElement("li");
    entry.appendChild(document.createTextNode(Task));
    newList.appendChild(entry);
}
let newDate = document.getElementById("my_span1")
function addDate() {
    let dueDate = document.getElementById("dueDate").value;
    let date = document.createElement("li");
   date.appendChild(document.createTextNode(dueDate));
    newDate.appendChild(date);
}
let getItem = localStorage.getItem("userData");
my_span1.appendChild(document.createTextNode(getItem));

 function sortAbc() {
    // Declaring Variables
            let geek_list, i, run, li, stop;
  
            // Taking content of list as input
            geek_list = document.getElementById("my_span1");
  
            run = true;
  
            while (run) {
                run = false;
                li = geek_list.getElementsByTagName("LI");
  
                // Loop traversing through all the list items
                for (i = 0; i < (li.length - 1); i++) {
                    stop = false;
                    if (li[i].innerHTML.toLowerCase() > 
                        li[i + 1].innerHTML.toLowerCase()) {
                        stop = true;
                        break;
}
}
  
                /* If the current item is smaller than 
                   the next item then adding it after 
                   it using insertBefore() method */
                if (stop) {
                    li[i].parentNode.insertBefore(
                            li[i + 1], li[i]);
  
                    run = true;
}
}
}

const formatTextWrap = (text, maxLineLength) => {
  let words = text.replace(/[\r\n]+/g, ' ').split(' ')
  let lineLength = 0
  let output = ''
  for (var word of words) {
    if (lineLength + word.length >= maxLineLength) {
      output += `\n${word} `
      lineLength = word.length + 1
    } else {
      output += `${word} `
      lineLength += word.length + 1
    }
  }
  return output
}
function my_fun(j){

let chkbox ="ckb" + j;

let my_span ="my_span" + j;

let msg = chkbox + "  " + my_span;

if(document.getElementById(chkbox).checked){ 

document.getElementById(my_span).style.textDecoration='line-through';

}
else{
document.getElementById(my_span).style.textDecoration='none';
}
}
///Tasks are saving, but not dueDate