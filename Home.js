document.addEventListener('DOMContentLoaded', () => {
  const navHome = document.getElementById('navHome');
  const navContact = document.getElementById('navContact');
  const menuBtn = document.getElementById('menuBtn');
  const closeBtn = document.getElementById('closeBtn');
  const sidebar = document.getElementById('sidebar');
  const taskManagementLink = document.getElementById('taskManagementLink');
  const taskManagementSection = document.getElementById('TaskManagement');
  const addTaskBtn = document.getElementById('add-task-btn');
  const newTaskInput = document.getElementById('new-task');
  const taskList = document.getElementById('task-list');

  // Close sidebar when clicking anywhere on the page
  document.addEventListener('click', (e) => {
      if (!sidebar.contains(e.target) && e.target !== menuBtn) {
          sidebar.classList.remove('show-sidebar');
      }
  });

  navHome.addEventListener('click', () => {
      window.scrollTo({
          top: document.getElementById('Home').offsetTop,
          behavior: 'smooth'
      });
      sidebar.classList.remove('show-sidebar');
  });

  navContact.addEventListener('click', () => {
      alert('Home section to Contact!');
      // Add navigation code here if needed
      sidebar.classList.remove('show-sidebar');
  });

  menuBtn.addEventListener('click', () => {
      sidebar.classList.add('show-sidebar');
  });

  closeBtn.addEventListener('click', () => {
      sidebar.classList.remove('show-sidebar');
  });

  taskManagementLink.addEventListener('click', (e) => {
      e.preventDefault();
      taskManagementSection.style.display = 'block'; // Show the section
      taskManagementSection.scrollIntoView({ behavior: 'smooth' });
      sidebar.classList.remove('show-sidebar');
  });

  // Add task functionality
  addTaskBtn.addEventListener('click', () => {
      const taskText = newTaskInput.value.trim();
      if (taskText !== '') {
          addTask(taskText);
          newTaskInput.value = ''; // Clear input after adding task
      }
  });

  // Function to add task to the list
  function addTask(taskText) {
      const li = document.createElement('li');
      li.className = 'todo-item';
      li.innerHTML = `
          ${taskText}
          <button class="delete-task">Delete</button>
          <button class="done-task">Done</button>
      `;
      taskList.appendChild(li);
  }

  // Event delegation for deleting and marking tasks as done
  taskList.addEventListener('click', (e) => {
      if (e.target.classList.contains('delete-task')) {
          e.target.parentElement.remove();
      } else if (e.target.classList.contains('done-task')) {
          e.target.parentElement.classList.toggle('done');
      }
  });
});


//log-out
document.getElementById('logOut').addEventListener('click', function() {
    // Perform logout actions here, like clearing session storage or cookies
    // For example, to clear session storage:
    sessionStorage.clear();
    
    // Redirect to index.html
    window.location.href = 'index.html';
});
