
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import  { useState, useEffect } from 'react';


function ProductDetails() {
  const [productData ,setProductData] = useState({})
  let { id } = useParams();
  useEffect(()=>{
      axios.get('https://fakestoreapi.com/products/'+id)
      .then(res=>{
          setProductData(res.data)
      }
    )},[])

  return (
    <>
    <div className='productstyle'>
    
      <Card.Img variant="top" src={productData.image} style={{width:'300px', height:'200px'}} />
      
      <Card  className="cardbox1" style={{width:'40%', height:'400px'}}>
      <Card.Body>
        <Card.Title className='card-titles'>{productData.title}</Card.Title>
        <Card.Text className='description'>
        {productData.description}
        </Card.Text>
        <Card.Text className='card-prices'>${productData.price} </Card.Text>
        <div className='button'>
        <Button variant="primary">Buy Now</Button>
        <Button variant="warning">Add to cart</Button>
        </div>
      </Card.Body>
    </Card> 
    </div>
    </>
  )
}

export default ProductDetails
