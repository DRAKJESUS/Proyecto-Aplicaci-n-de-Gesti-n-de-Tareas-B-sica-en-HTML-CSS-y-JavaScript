function addTask() {
    const taskInput = document.getElementById('taskInput').value;

    if (taskInput === '') {
        // Mostrar alerta de error si el campo está vacío
        Swal.fire({
            icon: 'error',
            title: 'ops...',
            text: 'Por favor, escribe una tarea antes de agregarla.'
        });
        return;
    }

    // Crear un nuevo elemento de lista con la tarea
    const taskList = document.getElementById('taskList');
    const newTask = document.createElement('li');
    newTask.textContent = taskInput;
    taskList.appendChild(newTask);

    // Limpiar el campo de entrada
    document.getElementById('taskInput').value = '';

    // Mostrar alerta de éxito cuando se agrega la tarea
    Swal.fire({
        icon: 'success',
        title: 'Tarea agregada',
        text: '¡Tu tarea ha sido agregada con éxito!',
        timer: 1500,
        showConfirmButton: false
    });
}
