const task_input = document.getElementById("input");
const task_container = document.getElementById("task-area");

function addTask(){
    // alert ('hello')
    if(task_input.value == ""){

        alert ("You forgot to add the Task");
    }
     else {
        let li_item = document.createElement('li');
        li_item.innerHTML = task_input.value;
        task_container.appendChild(li_item);
        // console.log()
        li_item.classList.add('task_list')
        let span = document.createElement('span')
        span.classList.add('cross');
        span.innerHTML = "x"
        li_item.appendChild(span)
     }
     clear_present();
     dataSaving()
}

function clear_present (){
    
    task_input.value = ""; 
    console.log ('hello')
}

task_container.addEventListener("click", function(e){
    if (e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        dataSaving()
    }
})


function dataSaving() {
    localStorage.setItem("data", task_container.innerHTML);
}

function ShowData(){
    task_container.innerHTML = localStorage.getItem("data");
}

ShowData();