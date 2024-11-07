
function addTask() {
    const taskInput = document.getElementById('todo-input');
    const collegeInput = document.getElementById('college-input');
    const semesterDropdown = document.getElementById('semester-dropdown');

    console.log(taskInput , " = taskinput" , collegeInput , " = collegeinput " , semesterDropdown , " = sem")
    
    const name = taskInput.value.trim();
    const collegeName = collegeInput.value.trim();
    const semester = semesterDropdown.value;

    // Validate inputs
    if (name === '') {
        alert('Please enter a name');
        return;
    }
    if (collegeName === '') {
        alert('Please enter your college name');
        return;
    }
    if (semester === '') {
        alert('Please select your semester');
        return;
    }

    const todoList = document.getElementById('todo-list');

    // Create table row
    const row = document.createElement('tr');

    // Add name, college, and semester cells
    const nameCell = document.createElement('td');
    nameCell.textContent = name;
    row.appendChild(nameCell);

    const collegeCell = document.createElement('td');
    collegeCell.textContent = collegeName;
    row.appendChild(collegeCell);

    const semesterCell = document.createElement('td');
    semesterCell.textContent = `Semester ${semester}`;
    row.appendChild(semesterCell);

    // Delete button cell
    const actionCell = document.createElement('td');
    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.className = 'delete-btn';
    deleteButton.onclick = () => row.remove();

    actionCell.appendChild(deleteButton);
    row.appendChild(actionCell);

    todoList.appendChild(row);

    // Clear inputs
    taskInput.value = '';
    collegeInput.value = '';
    semesterDropdown.value = '';
}
document.getElementById('add-btn').addEventListener('click', addTask);

document.getElementById('todo-input').addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        addTask();
    }
});
