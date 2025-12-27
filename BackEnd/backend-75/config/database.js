
const mongoose = require("mongoose"); // mongoose instant
require("dotenv").config();           //ise line se apki .env file ka data process ke ander chala jayega
 
const dbconnect =  () => {             // db se connect ka function 
    mongoose.connect (process.env.DATABASE_URL, {
        useNewUrlParser : true,
        useUnifiedTopology : true,

    })
    .then( ()=> console.log("db connect ho gya hai------------------")) 
    .catch( (error) => {console.log("error aa gya"), process.exit(1)

     }
        );
}

module.exports = dbconnect; // export the module