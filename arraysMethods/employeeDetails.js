const employees = [
    { id: 1, name: 'John Doe', age: 30, department: 'IT', salary: 50000 },
    {id: 1, name: 'Alice Smith', age: 28, department: 'HR', salary: 45000},
    {id: 3, name: 'Bob Hohnson', age: 35, department: 'Finance', salary: 60000}
]

//mostrar todos los empleados
function displayEmployees() {
    const totalEmployees = employees
        .map(employee => `<p>${employee.id}: ${employee.name} - ${employee.department} - ${employee.salary}</p>`)
        .join('') //concatena todos los detalles de empleados (el array resultante)
    document.getElementById('employeesDetails').innerHTML=totalEmployees;

}

//calculateTotalSalaries()
function calculateTotalSalaries(){
    const totalSalaries = employees.reduce((acc, employee) => acc + employees.salary, 0); //El método reduce itera a través de cada empleado y acumula sus salarios para calcular el total. El valor inicial del acumulador (acc) es 0.
    alert(`Total Salaries: ${totalSalaries}`);
}

//mostrar detalles de los empleados
function displayHREmployees(){
    const hrEmployees = employees.filter(employee => employee.department === 'HR')
    const hrEmployeesDisplay= hrEmployees.map((employee, index) => `<p>${employee.id}: ${employee.name}: ${employee.name} - ${employee.department} - ${employee.salary}</p>`).join('');
    document.getElementById('employeesDetails').innerHTML = hrEmployeesDisplay;
}

// mostrar detalles de empleados segun id
function findEmployeeById(employeeId) {
    const foundEmployee = employees.find(employee => employee.id === employeeId);
    if (foundEmployee) {
    document.getElementById('employeesDetails').innerHTML =`<p>${foundEmployee.id}: ${foundEmployee.name}: ${foundEmployee.name} - ${foundEmployee.department} - ${foundEmployee.salary}</p>`;
    }
    else{
      document.getElementById('employeesDetails').innerHTML = 'no se ha encontrado ningún empleado con este ID';
     }
 }

