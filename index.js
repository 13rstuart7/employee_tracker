const mysql = require('mysql2');

const inquirer = require("inquirer")



// Connect to database
const db = mysql.createConnection(
  {
    host: 'localhost',
    // MySQL username,
    user: 'root',
    // TODO: Add MySQL password here
    password: '$ergeReik13',
    database: 'employees_db'
  },
  console.log(`Connected to the movies_db database.`)
);
menu()
function menu(){
    inquirer.prompt([
        {
            message:"what would you like to do?",
            type: "list",
            name:"menu",
            choices:["getallemployees","getallroles","getalldepartments","addemployee","addrole","adddepartment","updateemployeerole"]
        }
    ])
    .then(answer=>{
        if(answer.menu=="getallemployees"){
            getAllEmployees()
        }
        if(answer.menu=="getallroles"){
            getAllRoles()
        }
        if(answer.menu=="getalldepartments"){
            getAllDepartments()
        }
        if(answer.menu=="addemployee"){
            addEmployee()
        }
        if(answer.menu=="addrole"){
            addRole()
        }
        if(answer.menu=="adddepartment"){
            addDepartment()
        }
        if(answer.menu=="updateemployeerole"){
            updateEmployeeRole()
        }
    })
}
function getAllDepartments(){
db.query("select * from department",(err,res)=>{
    if(err){throw err}
    console.table(res)
    menu()
})
}

function getAllRoles(){
    db.query("select * from role",(err,res)=>{
        if(err){throw err}
        console.table(res)
        menu()
    })
}

function getAllEmployees(){
    db.query("select * from employee",(err,res)=>{
        if(err){throw err}
        console.table(res)
        menu()
    })
}

function addEmployee(){
    inquirer.prompt([
        {
            message:"Enter employee first name",
            name:"firstname",
        },
        {
            message:"Enter employee last name",
            name:"lastname",
        },
        {
            message:"Enter employee role id",
            name:"roleid",
        },
        {
            message:"Enter manager id",
            name:"managerid",
        },
    ])
    .then(answers => {
        db.query(`insert into employee(first_name, last_name, role_id, manager_id) values("${answers.firstname}", ${answers.lastname}, ${answers.roleid}, ${answers.managerid})`, (err, res)=>{
            if (err) {throw err}
            console.table(res)
            menu()
        })
    })
}

function addRole(){
    inquirer.prompt([
        {
            message:"Enter title",
            name:"title",
        },
        {
            message:"Enter role id",
            name:"departmentid",
        },
        {
            message:"Enter salary",
            name:"salary",
        },
    ])
    .then(answers => {
        db.query(`insert into role(title, department_id, salary) values("${answers.title}", ${answers.departmentid}, ${answers.salary})`, (err, res)=>{
            if (err) {throw err}
            console.table(res)
            menu()
        })
    })
}

function addDepartment(){
    inquirer.prompt([
        {
            message:"Enter department name",
            name:"departmentname",
        }
    ])
    .then(answers => {
        db.query(`insert into department(department_name) values("${answers.departmentname}")`, (err, res)=>{
            if (err) {throw err}
            console.table(res)
            menu()
        })
    })
}

function updateEmployeeRole(){

}



