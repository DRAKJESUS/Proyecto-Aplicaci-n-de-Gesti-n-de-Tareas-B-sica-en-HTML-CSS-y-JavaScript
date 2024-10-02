// Obtener elementos de la interfaz
const taskInput = document.getElementById('taskInput');
const taskList = document.getElementById('taskList');

// Cargar tareas guardadas al inicio
document.addEventListener('DOMContentLoaded', loadTasks);

function addTask() {
    const taskText = taskInput.value.trim();
    
    if (taskText === '') {
        alert('Por favor, escribe una tarea');
        return;
    }

    const task = {
        id: Date.now(),
        text: taskText,
        completed: false
    };

    saveTask(task);
    renderTask(task);

    taskInput.value = '';
}

// Guardar tarea en localStorage
function saveTask(task) {
    const tasks = getTasks();
    tasks.push(task);
    localStorage.setItem('tasks', JSON.stringify(tasks));
}

// Obtener tareas de localStorage
function getTasks() {
    return JSON.parse(localStorage.getItem('tasks')) || [];
}

// Renderizar todas las tareas guardadas
function loadTasks() {
    const tasks = getTasks();
    tasks.forEach(task => renderTask(task));
}

// Renderizar una tarea en la lista
function renderTask(task) {
    const li = document.createElement('li');
    li.className = 'task';
    li.dataset.id = task.id;

    const taskText = document.createElement('span');
    taskText.textContent = task.text;
    taskText.className = task.completed ? 'completed' : '';
    taskText.onclick = () => toggleComplete(task.id);

    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'Eliminar';
    deleteBtn.className = 'delete-btn';
    deleteBtn.onclick = () => deleteTask(task.id);

    li.appendChild(taskText);
    li.appendChild(deleteBtn);
    taskList.appendChild(li);
}

// Marcar una tarea como completada
function toggleComplete(taskId) {
    const tasks = getTasks();
    const task = tasks.find(t => t.id === taskId);
    task.completed = !task.completed;
    localStorage.setItem('tasks', JSON.stringify(tasks));
    updateUI();
}

// Eliminar una tarea
function deleteTask(taskId) {
    let tasks = getTasks();
    tasks = tasks.filter(task => task.id !== taskId);
    localStorage.setItem('tasks', JSON.stringify(tasks));
    updateUI();
}

// Actualizar la interfaz después de cambios
function updateUI() {
    taskList.innerHTML = '';
    loadTasks();
}
