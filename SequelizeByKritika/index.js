const sequelize = require("./util/database");

const Customer = require("./models/customer");
const Order = require("./models/order");

Customer.findAll().then((result) => {
    console.log("All Customers " , result);
});
// Customer.hasMany(Order);
// let customerId = null;
// sequelize
//   .sync({ force: true })
//   .then((result) => {
//     return Customer.create({ name: "Chandler Bing", email: "cb@gmail.com" });
//     // console.log(result);
//   })
//   .then((customer) => {
//     customerId = customer.id;
//     console.log("First Customer Created: ", customer);
//     // return Order.create({ total: 45 });
//     return customer.createOrder({ total: 45 });
//   })
//   .then((order) => {
//     console.log("Order is : ", order);
//     return Order.findAll({
//         where: {
//             CustomerId:{
//                 [sequelize.Op.eq] : customerId
//             }
//         }

//     });
//   })
//   .then((orders) => {
//     console.log("All the Orders are : ", orders);
//   })
//   .catch((err) => {
//     console.log(err);
//   });
