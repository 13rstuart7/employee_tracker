INSERT INTO department (department_name)
VALUES ("HR"),
       ("engineer");

INSERT INTO role (title, department_id, salary)
VALUES ("HR Person", 1, 5000.00),
       ("Front End Developer", 2, 5000.00);
       
INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("John", "Doe", 1, null),
       ("Jane", "Doe", 2, null);

