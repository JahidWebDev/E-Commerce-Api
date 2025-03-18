const mongoose = require('mongoose');


function dbconnection() {
 mongoose.connect(`${process.env.DB_URL}`)
.then(() => console.log('Database Connected!'))
}


module.exports = dbconnection;