const path = require('path');
const Sequelize = require('sequelize');

const dbPath = path.join(__dirname, 'practice.sqlite');
const sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: dbPath
});

module.exports = sequelize;
