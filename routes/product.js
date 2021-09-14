const express = require('express');
const { findById } = require('../model/products');
const Product = require('../model/products');
const router = express.Router();

router.get('/products/:product_id', async (req, res) =>  {
    try{
        const product =  await Product.findById(req.params.product_id);

     if(!product){
         
        return res.status(500).json({status : "failure", message : "product not found"});
     }

    return res.send(product);
    } catch(error) {
        return res.status(400).json({ success: false, error: err });
    }
    
})



router.post('/products', async (req, res) => {
// const name = await Product.findOne(req.body.name);

if(req.body.quantity < 0){
    return res.status(416).send({status : "failure", message : "Cannot set product with negative value"});
}

 const product = new Product({
    name: req.body.name,
    category_name: req.body.category_name,
    description: req.body.description,
    buy_price: req.body.buy_price,
    sell_price:  req.body.sell_price,
    quantity:  req.body.quantity

    });



    await product.save();

    if (!product) return res.status(500).send("The product cannot be created");

    res.send(product);
})


router.delete('/products/:product_id',  (req, res) => {
    
     Product.findByIdAndRemove(req.params.product_id)
     .then((product) => {
       
        if (product) {

          return res.status(200).json({ status: "success", message: "the product deleted" });
        
        } else {

          return res.status(404).json({ status: "failure", message: "product not found" });

        }
      })
      .catch((err) => {
       
        return res.status(400).json({ success: false, error: err });
      
    });

})


router.put('/products/:product_id', async (req, res) => {

    const id = Product.findById(req.params.product_id);

    if(!id){
        return res.status(400).send({status : "failure", message : "product not found"});
    }

 
     const product = await Product.findByIdAndUpdate(req.params.product_id, {

            name: req.body.name,
            category_name: req.body.category_name,
            description: req.body.description,
            buy_price: req.body.buy_price,
            sell_price:  req.body.sell_price,
            quantity:  req.body.quantity

        });

        if(!product){
            return res.status(400).send({status : "failure", message : "product not found"});
        }


      return  res.status(200).send({status : "success"});

})


module.exports = router;