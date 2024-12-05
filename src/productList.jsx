

import Container from 'react-bootstrap/Container';
import 'bootstrap/dist/css/bootstrap.min.css';
import Carousel from 'react-bootstrap/Carousel';
import Carthird from './images/car3.jpeg';
import Carsec from './images/car 2.jpeg'
import Carfir from './images/car1.jpeg'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useState} from 'react';
import { useEffect} from 'react';
import axios from 'axios'
import Product from './product'




function ProductList() {

  const[products,setProducts] = useState([])


  useEffect(()=>{
      axios.get('https://fakestoreapi.com/products')
      .then(res=>{
          setProducts(res.data)
      })
  },[])

  return (
    <>
       
    <Carousel>
      <Carousel.Item>
         <img src={Carthird} alt="First slide" className="d-block w-100" style={{ height: "400px", objectFit: 'fill' }}/>
      </Carousel.Item>
      <Carousel.Item>
      <img src={ Carsec} alt="First slide" className="d-block w-100" style={{ height: "400px", objectFit: 'fill' }}/>
      </Carousel.Item>
      <Carousel.Item>
      <img src={  Carfir} alt="First slide" className="d-block w-100" style={{ height: "400px", objectFit:'fill'}}/>
      </Carousel.Item>
    </Carousel>

      <Container className="mt-4">
                    <Row>
                        {products.map((product, index) => (
                            <Col xs={12} sm={6} md={4} lg={3} key={index}>
                                <Product productData = {product}/>
                            </Col>
                        ))}
                    </Row>
                </Container>
    </>
  )
}

export default ProductList
