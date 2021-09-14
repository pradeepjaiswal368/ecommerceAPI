const mongoose = require("mongoose");

mongoose.connect('mongodb://localhost/ecom_db', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Database connection is ready");
  })
  .catch((err) => {
    console.log(err);
  });