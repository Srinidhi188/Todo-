// Select elements
const taskInput = document.getElementById('task-input');
const addBtn = document.getElementById('add-btn');
const taskList = document.getElementById('task-list');

// Add task when button is clicked
addBtn.addEventListener('click', () => {
    const taskText = taskInput.value;
    
    if (taskText === '') return; // Prevent empty tasks
    
    const taskItem = document.createElement('li');
    taskItem.textContent = taskText;

    // Delete task when clicked
    taskItem.addEventListener('click', () => {
        taskItem.remove();
    });

    taskList.appendChild(taskItem); // Add task to the list
    taskInput.value = ''; // Clear the input
});
