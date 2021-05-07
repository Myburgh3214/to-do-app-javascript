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
            geek_list = document.getElementById("myList");
  
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
 
function myData(){
    let Object = {List: "Play Violin"};
    console.log(Object);
    let myData = JSON.stringify(Object);
    console.log(myData);
    localStorage.setItem("userData", myData);
}
function my_fun(j){

var chkbox ="ckb" + j;

var my_span ="my_span" + j;

var msg = chkbox + "  " + my_span;

if(document.getElementById(chkbox).checked){ 

document.getElementById(my_span).style.textDecoration='line-through';

}else{

document.getElementById(my_span).style.textDecoration='none';

}

}