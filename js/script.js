function getInputValueTask(){
            // Selecting the input element and get its value 
           let listVal = document.getElementById("Task").value;
            let listValDate = document.getElementById("dueDate").value;
            // Displaying the value
           console.log(listVal, listValDate);   


let obj = document.getElementById("Task").value;

let myData = JSON.stringify(obj);
localStorage.setItem("userData", myData);

myText = localStorage.getItem("userData");
newObj = JSON.parse(myText);
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

 function sortAbc() {
    // Declaring Variables
            var geek_list, i, run, li, stop;
  
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
  var words = text.replace(/[\r\n]+/g, ' ').split(' ')
  var lineLength = 0
  var output = ''
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

var chkbox ="ckb" + j;

var my_span ="my_span" + j;

var msg = chkbox + "  " + my_span;

if(document.getElementById(chkbox).checked){ 

document.getElementById(my_span).style.textDecoration='line-through';

}
else{
document.getElementById(my_span).style.textDecoration='none';
}
}
