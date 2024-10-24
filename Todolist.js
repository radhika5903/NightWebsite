const addbutton = document.getElementById('add');
const deletebutton = document.getElementById('delete')
const root = document.getElementById('root')
const taskname = document.getElementById('name')
const taskdesc = document.getElementById('description')

function createnote(name, desc){
    if(name!="" && desc!="")
    {
        const newnote = document.createElement('div')
        newnote.innerText = Name of task + ${name} \n Description of task + ${des} ;
        newnote.classList.add = "note"
        root.appendChild(newnote)
        console.log(newnote)
        console.log('child appended')
    }
    else{
        console.log('The fields are empty fill them first')
    }
}

addbutton.addEventListener('click',()=>{
    createnote(taskname.value,taskdesc.value);
    taskname.value = "";
    taskdesc.value = "";
})

deletebutton.addEventListener('click',()=>{
    let notes = document.getElementsByClassName('note');
    notes = Array.from(notes);
    // console.log(notes,typeof(notes))
    notes.forEach(element=>{
        element.parentNode.removeChild(element);
    })
})



