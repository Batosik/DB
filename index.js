import _ from 'lodash'

const EmployeeDB = {
  employees: [],
  add(name, position, department) {
    const employee = { name, position, department };
    this.employees.push(employee);
  },
  show() {
    console.log(this.employees);
  },
  modify() {
    _.forEach(this.employees, (employee) => {
      const { name, department } = employee;
      employee.name = _.capitalize(name);
      employee.department = department.toLowerCase();
    });
  },

  remove(name) {
    this.employees = this.employees.filter((employee) => 
    {if (employee.name === name) { return false; } return true; });
  },
  update(name, position, department) {
    const index = _.indexOf(this.employees, this.employees.find((employee) => 
    employee.name === name));
    if (index > 0) {
      this.employees[index].position = position;
      this.employees[index].department = department;
    } else {
      this.add(name, position, department);
    }
  },
  clone() {
    return Object.assign([], this.employees);
  },
  merge(obj) {
    _.merge(this.employees, obj);
  },
  departments() {
    const departments = this.employees.map((employee) => employee.department);
    console.log(_.uniq(departments));
  },
  difference(anotherDB) {
    // не понял смысла этого задания (возможно нужно сделать простую функцию)
    if (this.employees.length !== anotherDB.length) {
      console.log(false);
      return false;
    }
    const compare1 = {};
    const compare2 = {};
    this.employees.map((employee) => compare1[employee.name] = employee.department);
    anotherDB.map((employee) => compare2[employee.name] = employee.department);
    console.log(_.isEqual(compare1, compare2));
  },
};

EmployeeDB.add('Bob', 'hr-bp', 'hr')
EmployeeDB.add('Bill', 'Accountant', 'financial')
EmployeeDB.show()

EmployeeDB.add('JaNE', 'executive', 'HEAD')

EmployeeDB.remove('Bill')
EmployeeDB.show()

EmployeeDB.modify()
EmployeeDB.show()

const  newDB=   [{ name: 'Rob', position: 'hr-bp', department: 'hr' },
{ name: 'Jane', position: 'executive', department: 'head' },
{ name: 'Bill', position: 'accountant', department: 'financial' },
{ name: 'Kamilla', position: 'accountant', department: 'financial' }
]

EmployeeDB.merge(newDB)
EmployeeDB.show()

EmployeeDB.departments()

EmployeeDB.update('Bill', 'chief accountant', 'financial')
EmployeeDB.show()
EmployeeDB.update('Cris', 'Creative Director', 'advertising')
EmployeeDB.show()

const  anotherDB=   [
  { name: 'Rob', position: 'hr-bp', department: 'hr' },
  { name: 'Jane', position: 'executive', department: 'head' },
  {
    name: 'Bill',
    position: 'chief accountant',
    department: 'financial'
  },
  { name: 'Kamilla', position: 'accountant', department: 'financial' },
  {
    name: 'Cris',
    position: 'Creative Director',
    department: 'advertising'
  }
]


EmployeeDB.difference(anotherDB)
EmployeeDB.show()







