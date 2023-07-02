const sqlite = require('aa-sqlite');

async function test() {
    try {
        await sqlite.open('./practice.sqlite');
    } catch (error) {
        return console.log(error);
    }

    try {

        // sqlite.run("CREATE TABLE test(test)");
        // const person = {
        //     firstName: "Patrick",
        //     lastName: "Bateman",
        // };
        // let insertPerson = `INSERT INTO person(first_name, last_name) VALUES('${person.firstName}','${person.lastName}')`;
        // await sqlite.run(insertPerson);

        const selectPerson = "SELECT * FROM person";
        const personsData = await sqlite.all(selectPerson);
        console.log(personsData);

        const onePerson = await sqlite.get(selectPerson + " where id = ?", [5])
        console.log(onePerson);
    } catch (error) {
        return console.log(error);
    }
    sqlite.close();
}
test();
console.log("test");