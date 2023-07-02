const sqlite3 = require('sqlite3').verbose();

let sql;

//connect to DB
const db = new sqlite3.Database('./practice.sqlite', sqlite3.OPEN_READWRITE, (err) => {
    if (err) return console.error(err.message);
});

//Create table
// let personTable = `CREATE TABLE person(id INTEGER PRIMARY KEY AUTOINCREMENT, first_name TEXT, last_name TEXT)`;
// db.run(personTable);
//Drop table
// let dropPersonTable = "DROP TABLE person";
// db.run(dropPersonTable);

//Insert data into table

// let insertPerson = "INSERT INTO person(first_name, last_name) VALUES(?,?)";
// db.run(insertPerson, ["Juan","Dela Cruz"], (err)=>{
//     if (err) return console.error(err.message);
// });

//Update data
// let updatePersonTable = "UPDATE person SET first_name = ? WHERE id = ?";
// db.run(updatePersonTable, ["Bryan",1], (err)=>{
//     if (err) return console.error(err.message);
// });

//Delete data
let deletePersonTable = "DELETE FROM person WHERE id = ?";
db.run(deletePersonTable, [1], (err)=>{
    if (err) return console.error(err.message);
});

//Query data
let queryPersonTable = "SELECT * FROM person";
db.all(queryPersonTable, [], (err, res) => {
    if (err) return console.error(err.message);
    res.forEach((row) => {
        console.log(row);
    });
});



