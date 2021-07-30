import React,{useState} from 'react';
import StripeCheckout from 'react-stripe-checkout'
import Mail from './mail';
import axios from 'axios'

function App() {

const [product,setProduct] = useState({
  name:"React",
  price:10,
  productBy:'facebook'
})

const makePayment = token => {
  const body ={
    token,
    product
  }
  const headers = {
    "Content-Type":"application/json"
  }
  return fetch("http://localhost:8080/payment", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(body)
  })
  
              .then(res=>console.log(res))
              .catch(e=>console.log(e))
}

console.log(process.env.REACT_APP_KEY)
  return (
    <div className="app">
     <Mail/>
     <StripeCheckout 
      stripeKey={process.env.REACT_APP_KEY}
      token={makePayment}
      name='Buy React'
      amount={product.price * 100}
      
      >
        <button>Buy React with just {product.price} $ </button>
      </StripeCheckout>
    </div>
  );
}

export default App;
