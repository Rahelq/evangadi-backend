const mysql2 = require("mysql2");

const dbConnection = mysql2.createPool({
	port:process.env.PORT,
	user: process.env.USER,
	database: process.env.DATABASE,
	host: process.env.HOST,
	password: process.env.PASSWORD,
	connectionLimit: 10
});


// console.log("Connecting to database with the following settings:");
// console.log({
//   user: process.env.USER,
//   database: process.env.DATABASE,
//   host: process.env.HOST,
//   password: process.env.PASSWORD,
// });

 

// dbconnection.execute("select 'test'", (err, result) => {
//   if (err) {
//     console.log(err.massege);
//   } else {
//     console.log(result);
//   }
// });
module.exports = dbConnection.promise();
