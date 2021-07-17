"use strict";
class Department {
    constructor(name, location) {
        this.name = name;
        this.location = location;
        this.employees = [];
        this.discription = '';
        console.log(Department.fiscalYear);
    }
    static createEmployee(name) {
        return { name: name };
    }
    addEmployee(employee) {
        this.employees.push(employee);
        console.log(this.employees);
    }
}
Department.fiscalYear = 2021;
class ITDepartment extends Department {
    constructor(name, admins) {
        super(name, 'basement floor');
        this.admins = admins;
        this.admins = admins;
    }
    describe() {
        console.log('Department - name ' + this.name);
    }
    printAdmins() {
        console.log(this.admins);
    }
}
class AccountingDepartment extends Department {
    constructor(location, reports) {
        super('IT Accounting', location);
        this.reports = reports;
        this.lastReport = reports[0];
    }
    get mostRecentReport() {
        return this.lastReport ? this.lastReport : new Error('No report found.');
    }
    set mostRecentReport(value) {
        if (!value) {
            throw new Error('Please pass in valid value');
        }
        this.addReport(value);
    }
    static getInstance() {
        if (this.instance)
            return this.instance;
        this.instance = new AccountingDepartment('IT Accounting', []);
        return this.instance;
    }
    addReport(text) {
        this.reports.push(text);
        this.lastReport = text;
    }
    describe() {
        console.log('Department - name ' + this.name);
    }
    addEmployee(name) {
        if (name == 'Moss') {
            console.log(this.employees);
            return;
        }
        this.employees.push(name);
        console.log(this.employees);
    }
    printReports() {
        console.log(this.reports);
    }
}
const employee1 = Department.createEmployee('Max');
console.log(employee1, Department.fiscalYear);
const ITGuys = new ITDepartment('IT', ['Roy', 'Moss', 'Jen', 'Richmond']);
console.log(ITGuys);
ITGuys.printAdmins();
const ITAccounts = AccountingDepartment.getInstance();
const accounting2 = AccountingDepartment.getInstance();
console.log(ITAccounts);
console.log(accounting2);
ITAccounts.addEmployee('Moss');
ITAccounts.addEmployee('Max');
console.log(ITAccounts.mostRecentReport);
ITAccounts.mostRecentReport = 'this is a bad report';
ITAccounts.addReport('do not forget the tps reports');
console.log(ITAccounts.mostRecentReport);
ITAccounts.printReports();
const accounting = new ITDepartment('Accounting', ['Tom', 'Ginger', 'Nut']);
console.log(accounting);
accounting.describe();
console.log(accounting);
const accountCopy = { name: 'Freelance', discribe: accounting.discription };
console.log(accountCopy);
accounting.addEmployee('Fank');
accounting.addEmployee('Monk');
accounting.addEmployee('Ginger');
ITAccounts.describe();
//# sourceMappingURL=classes.js.map