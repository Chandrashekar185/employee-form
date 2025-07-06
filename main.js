let employees = [];
let idCounter = 1;

function addEmployee() {
  const name = document.getElementById('name').value.trim();
  const profession = document.getElementById('profession').value.trim();
  const age = document.getElementById('age').value.trim();
  const message = document.getElementById('message');

  if (!name || !profession || !age) {
    message.textContent = 'Error: All fields are required!';
    message.className = 'error';
    return;
  }

  const employee = {
    id: idCounter++,
    name,
    profession,
    age: Number(age)
  };

  employees.push(employee);
  message.textContent = 'Employee added successfully!';
  message.className = 'success';

  displayEmployees();
  document.getElementById('employeeForm').reset();
}

function deleteEmployee(id) {
  employees = employees.filter(emp => emp.id !== id);
  displayEmployees();
}

function displayEmployees() {
  const container = document.getElementById('employeeList');
  container.innerHTML = '';

  employees.forEach(emp => {
    const div = document.createElement('div');
    div.className = 'employee';
    div.innerHTML = `
      <p>${emp.id}. Name: ${emp.name}, Profession: ${emp.profession}, Age: ${emp.age}</p>
      <button onclick="deleteEmployee(${emp.id})">Delete User</button>
    `;
    container.appendChild(div);
  });
}
