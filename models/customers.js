module.exports = function (sequelize, DataTypes) {
    var customers = sequelize.define("customers", {
        id:{
            type: DataTypes.INTEGER,
            primaryKey:true
        },
        customerName:{
            type: DataTypes.STRING,
            len: [2,50],
            isNull: false,
        },
        phoneNumber:{
            type: DataTypes.INTEGER,
            isNumeric: true,
            len: [10],
        },
        reviews:{
            type: DataTypes.STRING,
            len: [1,2000],
            isNull: false,
        },
        thumbUpDown:{
            type: DataTypes.BOOLEAN,
        },
    });
    return customers;
};