// ==========Start of Timer =============

let hours = document.getElementById('hours')
let minutes = document.getElementById('minutes')
let seconds = document.getElementById('seconds')
let am_or_pm = document.getElementById('aop')
// 
let hours_time = new Date().getHours()
function updateHour() {
    

    if(hours_time >= 0 && hours_time <= 9){
        hours.textContent = '0' + hours_time
    }
    else{
        hours.textContent = hours_time
    }


    // setTimeout(updateHour, 600000);
}

updateHour();

function updateMinute() {
    let minutes_time = new Date().getMinutes() 

    if(minutes_time === 0) {
        updateMinute()
    }

    if(minutes_time >= 0 && minutes_time <= 9){
        minutes.textContent = '0' + minutes_time
    }
    else{
        minutes.textContent = minutes_time;
    }


    // setTimeout(updateMinute, 60000);
}

updateMinute();

function updateSeconds() {
    let secondsTime = new Date().getSeconds(); 

    if(secondsTime === 0) {
        updateMinute()
    }

    if(secondsTime >= 0 && secondsTime <= 9){
        seconds.textContent = '0' + secondsTime;
    }
    else{
        seconds.textContent = secondsTime;
    }


    setTimeout(updateSeconds, 1000);
}


updateSeconds(); // Start the countdown immediately


if(hours_time >= 0 && hours_time <= 12) {
    am_or_pm.textContent = 'AM'
}else{
    am_or_pm.textContent = 'PM'
}

// ==========End of Timer =============


const AddtaskButton = document.querySelector('.Addtask_btn');
const AddTaskPop = document.querySelector('.add_task_pop')
const close_pop = document.querySelector('.close_pop')


AddtaskButton.addEventListener('click', function() {
    AddTaskPop.classList.add('add_task_pop_active')
})

close_pop.addEventListener('click', function() {
    removeAddTaskPop()
})

function removeAddTaskPop() {
    AddTaskPop.classList.remove('add_task_pop_active')
}


// ================ start creating the list added ==================


const addTask = document.getElementById('addTask');

let TaskTitle = document.getElementById('taskTitleValue')
let TaskDescription = document.getElementById('taskdescriptionValue')
let TaskDate = document.getElementById('date_comp')

addTask.addEventListener('click', function(evt) {
    evt.preventDefault()

    if(TaskTitle.value === '' || TaskDescription.value === '' || TaskDate.value === '') {
        alert('All Inputs are Required', 'red')
    }
    else{
        alert('Task Added Successful', 'green')

        let listAdded = document.querySelector('.tr_j');
        removeAddTaskPop()

        let addedList = addingTask(TaskTitle, TaskDescription, TaskDate);

        // listAdded.appendChild(addedList)

    }

    console.log(TaskDescription.value);
    console.log(TaskDate.value);



})






counter = 0;

function addingTask(TaskTitle, TaskDescription, TaskDate) {

    counter++

    let listAdded = document.querySelector('.tr_j');

    const tr = document.createElement('tr')
    listAdded.appendChild(tr)

    const firstTd = document.createElement('td');
    firstTd.style.width = '50px';
    firstTd.style.padding = '10px';
    firstTd.style.fontFamily = 'Arial, Helvetica, sans-serif';
    firstTd.textContent = counter;
    tr.appendChild(firstTd)

    const secondTd = document.createElement('td');
    secondTd.innerText = TaskTitle.value;
    tr.appendChild(secondTd)

    const thirdTd = document.createElement('td');
    thirdTd.innerHTML = TaskDescription.value;
    tr.appendChild(thirdTd)

    const forthTd = document.createElement('td');
    forthTd.style.fontSize = '1.2rem'
    forthTd.style.width = '120px'
    tr.appendChild(forthTd)

    const forthdDiv = document.createElement('div');
    forthdDiv.classList = 'status_tog';
    forthTd.appendChild(forthdDiv)

    const input = document.createElement('input')
    input.type = 'checkbox'
    input.id = 'status_check'
    input.hidden = true
    forthdDiv.appendChild(input)

    const label = document.createElement('label')
    label.className = 'status_toggle'
    label.setAttribute('for', 'status_check');
    forthdDiv.appendChild(label)


    const fiftTd = document.createElement('td');
    fiftTd.style.fontSize = '1rem'
    fiftTd.style.width = '80px';
    fiftTd.textContent = TaskDate.value;
    tr.appendChild(fiftTd)

    const sixtTd = document.createElement('td');
    sixtTd.style.fontSize = '1.2rem'
    sixtTd.style.width = '50px';
    tr.appendChild(sixtTd)

    const sixtTdDiv = document.createElement('div')
    sixtTdDiv.className = 'edit'
    sixtTd.appendChild(sixtTdDiv)

    const sixtTdDivBut = document.createElement('button')
    sixtTdDivBut.id = 'edit_btn'

    sixtTdDiv.appendChild(sixtTdDivBut)

    const sixtTdDivButIc = document.createElement('i')
    sixtTdDivButIc.classList = 'bi bi-pencil'
    sixtTdDivBut.appendChild(sixtTdDivButIc)

    const seventhTd = document.createElement('td');
    seventhTd.style.fontSize = '1.2rem'
    seventhTd.style.width = '50px';
    tr.appendChild(seventhTd)

    const seventhTdDiv = document.createElement('div')
    seventhTdDiv.className = 'delete'
    seventhTd.appendChild(seventhTdDiv)

    const seventhTdDivBut = document.createElement('button')
    seventhTdDivBut.id = 'delete_btn'
    seventhTdDivBut.addEventListener('click', function() {
        alert('Task Deleted', 'red')
        tr.remove()
    })
    seventhTdDiv.appendChild(seventhTdDivBut)

    const seventhTdDivButIc = document.createElement('i')
    seventhTdDivButIc.classList = 'bi bi-trash'
    seventhTdDivBut.appendChild(seventhTdDivButIc)

}




function alert(text, background) {
    Toastify({
        text: text,
        duration: 3000,
        destination: "https://github.com/apvarun/toastify-js",
        newWindow: true,
        close: false,
        gravity: "top", // `top` or `bottom`
        position: "center", // `left`, `center` or `right`
        stopOnFocus: true,
        backgroundColor: background,// Prevents dismissing of toast on hover
    }).showToast();
}


// =============== serch through your to do's ====================

document.getElementById('search').addEventListener('input', function() {
    const searchTodo = this.value.toLowerCase(); // Get the current value of the input field
    const tasks = document.querySelectorAll('tbody .tr_j + tr'); // Select all task rows

    tasks.forEach(function(task) {
        const taskTitle = task.querySelector('#taskTitleValue')?.textContent.toLowerCase(); // Adjust selector to match your HTML structure
        const taskDescription = task.querySelector('#taskdescriptionValue')?.textContent.toLowerCase(); // Adjust selector to match your HTML structure
        
        if (taskTitle?.includes(searchTodo) || taskDescription?.includes(searchTodo)) {
            task.style.display = ''; // Show the task row
        } else {
            task.style.display = 'none'; // Hide the task row
        }
    });

    console.log(searchTodo); // This will log the current search input value
});


let my_names = {
    Fname: 'Gorden',
    age: 20
}

let my_namesjs = JSON.stringify(my_names)

localStorage.getItem('mynames', my_namesjs)

let my_namesunjs = JSON.parse(localStorage.getItem('mynames'))

console.log(my_namesunjs);