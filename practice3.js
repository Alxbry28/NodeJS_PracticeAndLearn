const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const url = require('url');

//async DB
const sqlite = require('aa-sqlite');

//connect to DB
const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('./practice.sqlite', sqlite3.OPEN_READWRITE, (err) => {
    if (err) return console.error(err.message);
});

async function createPerson(person) {
    try {
        console.log(person);
        await sqlite.open('./practice.sqlite');

        let insertPerson = `INSERT INTO person(first_name, last_name) VALUES('${person.firstname}','${person.lastname}')`;
        await sqlite.run(insertPerson);

    } catch (error) {
        return console.log(error);
    }
    sqlite.close();

}

app.use(bodyParser.json());
app.post('/person/create', (req, res) => {
    try {
        // console.log(req.body);
        // const { firstname, lastname } = req.body;

        createPerson(req.body);

        return res.json({
            status: 200,
            success: true
        });
    } catch (error) {
        return res.json({
            status: 400,
            success: false
        });
    }
});

//Get
app.get('/person', (req, res) => {
    try {
        let queryPersonTable = "SELECT * FROM person";
        db.all(queryPersonTable, [], (err, results) => {
            if (err) return res.json({
                status: 400,
                success: false,
                error: err.message
            });

            if (res.length < 1) return res.json({
                status: 300,
                success: false,
                error: "No Match"
            });

            return res.json({
                status: 200,
                success: true,
                data: results
            });

        });
    } catch (error) {
        return res.json({
            status: 400,
            success: false
        });
    }
});

//Get
app.get('/person/param', (req, res) => {
    try {
        let sql = "SELECT * FROM person";
        const queryObj = url.parse(req.url, true).query;
        if(queryObj.field && queryObj.type) sql += ` WHERE ${queryObj.field} LIKE '%${queryObj.type}%'`;

        db.all(sql, [], (err, results) => {
            if (err) return res.json({
                status: 400,
                success: false,
                error: err.message
            });

            if (res.length < 1) return res.json({
                status: 300,
                success: false,
                error: "No Match"
            });

            return res.json({
                status: 200,
                success: true,
                data: results
            });

        });
    } catch (error) {
        return res.json({
            status: 400,
            success: false
        });
    }
});
app.listen(3000,()=>{
    console.log("Server running");
});
