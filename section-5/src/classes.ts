abstract class Department {
    //abstract classes can't be instantiated but has to be extended.
    static fiscalYear = 2021;
    //static used to for fields that are not instantiated
    //private name: string = 'default';
    //location: string;
    protected employees: string[] = []; 
    // can also make functions protected this allows other classes to access this property.
    discription: string ='';
    constructor(public name: string, protected readonly location: string) {
        // new way to initialize and construct. readonly only exists in typescript.  
        // this.name = n;
        // this.location = l;
        console.log(Department.fiscalYear); // can't use this.fiscalYear to call upon fiscalYear. 

    }
    static createEmployee (name: string){
        return {name: name}; //mapping name to name
        
    }
    abstract describe(this: Department): void;
    //static method used 
    //abstract discribe(this: Department): void;
        //this: Department allows outside variables to access this method. 
        //this.discription = 'My job is ' + this.name;
        //abstract tells all the inherated classes that each class using this method 
        //must have their own implementation. 
    
    addEmployee(employee: string){
        this.employees.push(employee);
        console.log(this.employees);
    }
}

class ITDepartment extends Department {
    //can only inherit from one department. 
    constructor(name: string , public admins: string[]) {
        super(name, 'basement floor'); 
        // super() calls to the Department constructor and sends in the two strings name and 'basement floor'.
        this.admins = admins;
    }
    describe() {
        console.log('Department - name ' + this.name);
    }
    printAdmins(){
        console.log(this.admins);
    }
}
class AccountingDepartment extends Department {
    private lastReport: string;
    private static instance: AccountingDepartment;

    get mostRecentReport(): any {
        return this.lastReport? this.lastReport : new Error('No report found.');
    }
    set mostRecentReport(value: string){
        if (!value){
            throw new Error('Please pass in valid value');
        }
        this.addReport(value);
    }
    
    private constructor(location: string, private reports: string[]){
        super('IT Accounting', location);
        this.lastReport = reports[0];
    } // by adding private this makes this class a singleton meaning 
    //only one instance of this class can be created. 
    static getInstance(){
        if(this.instance) 
          return this.instance
        this.instance = new AccountingDepartment('IT Accounting',[]);
        return this.instance;
      }
    addReport(text: string){
        this.reports.push(text);
        this.lastReport = text;
    }
    describe() {
        console.log('Department - name ' + this.name);
    }
      //adding private makes this class a singleton
  
    addEmployee(name:string){
        if (name == 'Moss'){
            console.log(this.employees);
            return;
        }
        this.employees.push(name);
        console.log(this.employees);

    }
    printReports(){
        console.log(this.reports);
    }
}


const employee1 = Department.createEmployee('Max');
console.log(employee1, Department.fiscalYear);
const ITGuys = new ITDepartment('IT', ['Roy', 'Moss', 'Jen', 'Richmond']);
console.log (ITGuys);
ITGuys.printAdmins();

const ITAccounts = AccountingDepartment.getInstance();
const accounting2 = AccountingDepartment.getInstance();
console.log(ITAccounts);
console.log(accounting2);
//ITAccounts.mostRecentReport = '';
ITAccounts.addEmployee('Moss');
ITAccounts.addEmployee('Max');
console.log(ITAccounts.mostRecentReport);
ITAccounts.mostRecentReport = 'this is a bad report';
ITAccounts.addReport('do not forget the tps reports');
console.log(ITAccounts.mostRecentReport);
ITAccounts.printReports();
const accounting = new ITDepartment('Accounting',['Tom', 'Ginger', 'Nut']);
console.log (accounting);
accounting.describe();
console.log (accounting);
const accountCopy = {name: 'Freelance', discribe : accounting.discription}; 
// accountCopy is able to access the discribe method as long as a name value is being passed in with it. 
// this avoids a compilation error. 
console.log(accountCopy);
accounting.addEmployee('Fank');
accounting.addEmployee('Monk');
accounting.addEmployee('Ginger');
ITAccounts.describe();
//accounting.employees[2] = 'Angie';// we want to  make sure we have only one approach to adding employees.Fix: private keyword. Vanilla javascript doesn't support private/public 
//console.log (accounting.employees);