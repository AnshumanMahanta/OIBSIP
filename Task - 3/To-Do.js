document.addEventListener('DOMContentLoaded', () => {
    const taskForm = document.getElementById('task-form');
    const taskInput = document.getElementById('task-input');
    const pendingTasksList = document.getElementById('pending-tasks');
    const completedTasksList = document.getElementById('completed-tasks');

    taskForm.addEventListener('submit', (e) => {
        e.preventDefault();
        addTask(taskInput.value);
        taskInput.value = '';
    });

    function addTask(task) {
        const taskItem = document.createElement('li');
        taskItem.innerHTML = `
            <span>${task}</span>
            <div>
                <button class="complete-btn">&check;</button>
                <button class="edit-btn">&#x1F589;</button>
                <button class="delete-btn">&#x1F5D1</button>
            </div>
        `;
        pendingTasksList.appendChild(taskItem);

        const completeBtn = taskItem.querySelector('.complete-btn');
        const editBtn = taskItem.querySelector('.edit-btn');
        const deleteBtn = taskItem.querySelector('.delete-btn');

        completeBtn.addEventListener('click', () => completeTask(taskItem));
        editBtn.addEventListener('click', () => editTask(taskItem));
        deleteBtn.addEventListener('click', () => deleteTask(taskItem));
    }

    function completeTask(taskItem) {
        taskItem.classList.toggle('completed');
        if (taskItem.classList.contains('completed')) {
            completedTasksList.appendChild(taskItem);
        } else {
            pendingTasksList.appendChild(taskItem);
        }
    }

    function editTask(taskItem) {
        const taskSpan = taskItem.querySelector('span');
        const newTask = prompt('Edit Task:', taskSpan.textContent);
        if (newTask) {
            taskSpan.textContent = newTask;
        }
    }

    function deleteTask(taskItem) {
        taskItem.remove();
    }
});
