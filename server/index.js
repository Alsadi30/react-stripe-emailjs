require('dotenv').config()
const cors = require('cors')
const express = require('express')
const {SECRET_KEY} = process.env
const stripe = require('stripe')(SECRET_KEY)
const { v4: uuidv4 } = require('uuid');

const app = express()
const port = process.env.PORT || 8080;

app.use(express.json())
app.use(cors())

app.post('/payment',(req,res)=>{
    const {product,token} = req.body
    console.log("PRODUCT",product)
    console.log('PRICE' ,product.price)

    const idempontencyKey = uuidv4()

    return stripe.customers.create({
        email:token.email,
        source:token.id
    }).then(customer => {
        stripe.charges.create({
            
            amount:product.price * 100,
            currency:'usd',
            customer: customer.id,
            receipt_email:token.email,
            description:`Purchase  of ${product.name}`,
            shipping:{
                name:token.card.name,
                address:{
                    country:token.card.address_country
                }
            }
        },{idempontencyKey})
    })
    .then(result => res.status(200).json(result))
    .catch(err => console.log(err))

})





app.listen(port,()=>{
    console.log(`app is listen on ${port}`)
})