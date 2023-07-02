const path = require('path');
const { Sequelize, Op, Model, DataTypes } = require('sequelize');

// Option 2: Passing parameters separately (sqlite)
const dbPath = path.join(__dirname, 'practice.sqlite');
const sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: dbPath
});

async function testConnection() {
    try {
        await sequelize.authenticate();
        console.log('Connection has been established successfully.');
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
}

testConnection();

class User extends Model {}
User.init({
  username: DataTypes.STRING,
  birthday: DataTypes.DATE
}, { sequelize, modelName: 'user' });

(async () => {
  await sequelize.sync();
  const jane = await User.create({
    username: 'janedoe',
    birthday: new Date(1980, 6, 20)
  });
  console.log(jane.toJSON());
})();