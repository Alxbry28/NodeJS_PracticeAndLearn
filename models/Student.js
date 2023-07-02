module.exports = (sequelize, DataTypes) => {
    const Student = sequelize.define("Student", {
        fullname: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notEmpty: true
            },
        },
        age: {
            type: DataTypes.NUMBER,
            allowNull: false,
            validate: {
                notEmpty: true
            },
        }
    });
};