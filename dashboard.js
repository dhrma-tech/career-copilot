const user = JSON.parse(localStorage.getItem('user'));

// If no user is logged in, redirect to the login page
if (!user) {
  window.location.href = 'index.html';
}

document.getElementById('welcome').innerText = `Welcome, ${user.name}!`;

showTab('courses'); // default tab

function showTab(tab) {
  const content = document.getElementById('content');
  content.innerHTML = '';

  if (tab === 'courses') {
    const courses = ['Python Basics', 'ML with Scikit-learn', 'Deep Learning with TensorFlow', 'Data Visualization'];
    courses.forEach(c => {
      const div = document.createElement('div');
      div.textContent = c;
      div.style.padding = '0.5rem';
      div.style.borderBottom = '1px solid #ddd';
      content.appendChild(div);
    });
  }

  if (tab === 'roadmap') {
    const roadmap = ['Python', 'Statistics & Math', 'ML Basics', 'Deep Learning', 'Projects & Deployment', 'Advanced AI Topics'];
    roadmap.forEach((step, index) => {
      const div = document.createElement('div');
      div.textContent = `${index + 1}. ${step}`;
      div.style.padding = '0.5rem';
      content.appendChild(div);
    });
  }

  if (tab === 'tasks') {
    let tasks = JSON.parse(localStorage.getItem('tasks') || '[]');

    const input = document.createElement('input');
    input.placeholder = 'New Task';
    input.style.marginRight = '0.5rem';

    const btn = document.createElement('button');
    btn.textContent = 'Add Task';
    btn.onclick = () => {
      if (input.value.trim() !== '') {
        tasks.push(input.value);
        localStorage.setItem('tasks', JSON.stringify(tasks));
        showTab('tasks'); // refresh
      }
    };

    content.appendChild(input);
    content.appendChild(btn);

    tasks.forEach(t => {
      const div = document.createElement('div');
      div.textContent = t;
      div.style.padding = '0.3rem';
      div.style.borderBottom = '1px solid #eee';
      content.appendChild(div);
    });
  }
}

