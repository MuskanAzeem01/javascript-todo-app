let button = document.querySelector("#button");
let task = document.querySelector("#task");
let tasklist = document.querySelector("#taskList");
//local storage k element le liye
let tasks=JSON.parse(localStorage.getItem("task"))||[];
//print karwane k liye refresh k bad...
for(let t of tasks){
     
    //Checkbox
      let checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.classList.add("checkbox");
       
    //div
    let newdiv = document.createElement("div");
    newdiv.classList.add("task");
      
     //jagha jaha pr task likha hai
     //SPAN
    let text = document.createElement("span");
     text.innerText=t;
     text.classList.add("task-text");

      //edit button
     let edit=document.createElement("button");
    edit.innerText="Edit";
    edit.classList.add("edit");

     //delete button
    let dltbtn = document.createElement("button");
    dltbtn.innerText = "Delete Task";
    dltbtn.classList.add("delete-btn");
    
      //append all

    newdiv.appendChild(checkbox);
    newdiv.appendChild(text);
    newdiv.appendChild(edit);
    newdiv.appendChild(dltbtn);
    tasklist.appendChild(newdiv);
    
    //edit function

    let oldvalue;
    edit.addEventListener("click",()=>{
    
      oldvalue=text.innerText;
     text.contentEditable = true;
     text.focus();
    });
    text.addEventListener("keydown",(event)=>
    {
         if(event.key==="Enter")
         {
            event.preventDefault();
            text.contentEditable=false;

    let index=tasks.indexOf(oldvalue);
         if(index!==-1){
            tasks[index]=text.innerText;
            localStorage.setItem("task",JSON.stringify(tasks));
         }
          }

    });
        //delete function
        
     dltbtn.addEventListener("click", () => {
        let index=tasks.indexOf(text.innerText);
        if(index!==-1)
        {
             
            tasks.splice(index,1);
            localStorage.setItem("task",JSON.stringify(tasks));
        }
        newdiv.remove();
        
    });

    //checkbox

     checkbox.addEventListener("change", () => {

        if (checkbox.checked) {
            text.style.textDecoration = "line-through";
            text.style.color = "gray";
        } else {
            text.style.textDecoration = "none";
            text.style.color = "#333";
        }

    });

}


button.addEventListener("click", () => {
    addtask();
});
task.addEventListener("keydown",(event)=>{
      if(event.key==="Enter")
         {
           addtask();
         }
});
function addtask(){
    // Empty task add na ho
    if (task.value.trim() === "") {
        alert("Please enter a task.");
        return;
    }
    //editbutton

    let edit=document.createElement("button");
    edit.innerText="Edit";
    edit.classList.add("edit");

    // Task Row

    let newdiv = document.createElement("div");
    newdiv.classList.add("task");

    // Checkbox

    let checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.classList.add("checkbox");

    // Task Text

    let text = document.createElement("span");
     text.innerText = task.value;
     tasks.push(task.value);
     localStorage.setItem("task",JSON.stringify(tasks));
    text.classList.add("task-text");
      
     // Delete Button

    let dltbtn = document.createElement("button");
    dltbtn.innerText = "Delete Task";
    dltbtn.classList.add("delete-btn");

    // Append Elements

    newdiv.appendChild(checkbox);
    newdiv.appendChild(text);
    newdiv.appendChild(edit);
    newdiv.appendChild(dltbtn);
    tasklist.appendChild(newdiv);
    
    // Delete Task

    dltbtn.addEventListener("click", () => {
        let index=tasks.indexOf(text.innerText);
        if(index!==-1)
        {
            tasks.splice(index,1);
            localStorage.setItem("task",JSON.stringify(tasks));
        }
        newdiv.remove();
        });
   

         //edit

     let oldvalue;
    edit.addEventListener("click",()=>{
     oldvalue=text.innerText;
     text.contentEditable = true;
     text.focus();
     
    });

    //Event for Edit

    text.addEventListener("keydown",(event)=>
    {
         if(event.key==="Enter")
         {
            event.preventDefault();
            text.contentEditable=false;
         
         let index=tasks.indexOf(oldvalue);
         if(index!==-1)
            {
            tasks[index]=text.innerText;
            localStorage.setItem("task",JSON.stringify(tasks));
         }
        }

    });

    // Completed Task

    checkbox.addEventListener("change", () => {

        if (checkbox.checked) {
            text.style.textDecoration = "line-through";
            text.style.color = "gray";
        } else {
            text.style.textDecoration = "none";
            text.style.color = "#333";
        }

    });

    // Input Clear
    task.value = "";
}