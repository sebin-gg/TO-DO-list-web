const STORAGE_KEY = 'todo_app_tasks';

function loadTasks() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch {
    return [];
  }
}

function saveTasks(tasks) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(tasks));
  } catch {
    // ignore
  }
}

function renderTasks() {
  const tasklist = document.getElementById('tasklist');
  const emptyState = document.getElementById('emptyState');
  if (!tasklist) return;

  const tasks = loadTasks();
  tasklist.innerHTML = '';

  if (tasks.length === 0) {
    if (emptyState) emptyState.style.display = 'block';
    return;
  }

  if (emptyState) emptyState.style.display = 'none';

  tasks.forEach((task) => {
    const li = document.createElement('li');
    li.className = `task-item ${task.completed ? 'completed' : ''}`;
    li.id = task.id;

    li.innerHTML = `
      <div class="task-left">
        <div class="checkbox">${task.completed ? '✓' : ''}</div>
        <span class="task-text">${escapeHtml(task.text)}</span>
      </div>
      <button class="delete-btn" title="Delete task" onclick="event.stopPropagation(); deletetask('${task.id}')">🗑️</button>
    `;

    li.addEventListener('click', () => toggleComplete(task.id));
    tasklist.appendChild(li);
  });
}

function escapeHtml(str) {
  const div = document.createElement('div');
  div.textContent = str;
  return div.innerHTML;
}

function addtask() {
  const taskInput = document.getElementById('taskInput');
  if (!taskInput) return;
  const taskText = taskInput.value.trim();

  if (!taskText) return;

  const tasks = loadTasks();
  const newTask = {
    id: `task-${Date.now()}`,
    text: taskText,
    completed: false,
  };

  tasks.push(newTask);
  saveTasks(tasks);
  renderTasks();

  taskInput.value = '';
  taskInput.focus();
}

function deletetask(taskId) {
  let tasks = loadTasks();
  tasks = tasks.filter((t) => t.id !== taskId);
  saveTasks(tasks);
  renderTasks();
}

function toggleComplete(taskId) {
  const tasks = loadTasks();
  const target = tasks.find((t) => t.id === taskId);
  if (target) {
    target.completed = !target.completed;
    saveTasks(tasks);
    renderTasks();
  }
}

// Initial render on load
document.addEventListener('DOMContentLoaded', () => {
  renderTasks();
});