
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './Product.css';
import { Link } from "react-router-dom";

function Product(props) {
  return (
    <>
    <div className='cardtop'>
       <Card className="cardbox" style={{width:'100%', height:'400px'}}>
      <Card.Img variant="top" src={props.productData.image} style={{width:'100%', height:'200px'}} />
      <Card.Body>
      <Link to={`/product-details/${props.productData.id}`}>
        <Card.Title className='card-title'>{props.productData.title}</Card.Title>
        </Link>
        <Card.Text className='card-price'>
        ${props.productData.price}
        </Card.Text>
        <div className='button'>
        <Button variant="warning">Add to cart</Button>
        </div>
      </Card.Body>
    </Card> 
    </div>
    </>
  )
}

export default Product

