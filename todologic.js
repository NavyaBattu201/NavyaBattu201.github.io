function newElement(){
    var taskinput=document.getElementById("taskinput");
    var tasklist=document.getElementById("tasklist");
    if(taskinput.value==""){
        alert("Please enter task");
        return
    }
var newtask=document.createElement("li");
var tasktext =document.createTextNode(taskinput.value);
newtask.appendChild(tasktext);
tasklist.appendChild(newtask);
}