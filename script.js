//add task
function getTask(){
    var task =document.getElementById('task-input').value;
    console.log(task);

    if(task.trim()===''){
        alert("Don't enter the empty task")
        return
    }
    

    var taskitem =document.createElement('li');
    
    taskitem.innerHTML=task
    taskitem.className='bg-gray-200 rounded-xl px-2 w-full p-2 shadow-lg flex flex-row justify-between items-center'

   
    
    // taskitem.className='rounded-lg border border-gray-200 bg-white p-6 shadow-md'

    
    var deleteButton = document.createElement('button')
    deleteButton.textContent='Delete'
   
    

    deleteButton.className='bg-red-500 text-white px-2 py-1 rounded-full'
   
  
    document.getElementById('task-lists').appendChild(taskitem);
    var taskcount= document.getElementById('task-lists').childElementCount
    deleteButton.addEventListener('click',()=>{taskitem.remove()
        var taskcount= document.getElementById('task-lists').childElementCount
        totalcount.textContent=taskcount
    })
    taskitem.appendChild(deleteButton)
   totalcount.textContent=taskcount
//    task-input = ' '
document.getElementById('task-input').value=''



}
removeTask=()=>{
    
    if(document.getElementById('task-lists').innerHTML==''){
        alert('No Task ,Enter any task')
    }
    else{
    var dele=document.getElementById('task-lists').innerHTML=''
    }
    totalcount.textContent=0
}
