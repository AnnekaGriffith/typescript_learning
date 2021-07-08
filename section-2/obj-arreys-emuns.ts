// const person : {
//     name: string;
//     age: number;
//     hobbies: any[];
//     role: [number, string]; needed for thr tuples type
// } 

enum Role {ADMIN =1, READ_ONLY, AUTHOR}; // by setting an initial value the following roles increment from the starting value

const person = {
    name : 'Anneka',
    age : 33,
    hobbies: ['drawing', 'painting', 'coding', 8],
    role: Role.ADMIN
};

//person.role.push('admin'); be aware this works no error will show up however.
// person.role[0] = 10;
// console.log(person.role);


for (const hobby of person.hobbies)
{
    console.log(hobby);
}

if (person.role === Role.ADMIN)
{
    console.log('is an Admin');
}
