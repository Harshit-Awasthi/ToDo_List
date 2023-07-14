let ulTasks = $('#ulTasks')
let btnAdd = $('#ulTasks')
let btnClear = $('#ulTasks')
let inpNewTask = $('#ulTasks')



btnAdd.click(()=>

{

    let listItem =$('<li> '.replace{
        'class':'list-group-item',
        text:inpNewTask.val()
    })
    ulTasks.append(listItem)

    inpNewTask.val('')

}

)
