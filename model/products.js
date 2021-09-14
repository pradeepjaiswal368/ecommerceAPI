const mongoose = require('mongoose');

const productSchema = mongoose.Schema({
    name : {type: String, required : true},
    category_name : {type : String , required : true},
    description : {type : String},
    buy_price : {type: Number, required: true},
    sell_price : {type: Number, require: true},
    quantity : {type: Number, required: true}
})

const Product = mongoose.model('Product', productSchema);

module.exports = Product;