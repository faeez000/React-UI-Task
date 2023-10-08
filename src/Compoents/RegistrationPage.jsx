import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const RegistrationPage = () => {
  return (
    <div className='background-3' style={{ backgroundImage: "linear-gradient(#8b9da9, #fff6e4)", boxShadow: "inset 0 0 100px hsla(0,0%,0%,.3)"}}>
      <div style={{textAlign:"center"}}>
      <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="holder.js/100px180" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>


      </div>
    </div>
  )
}

export default RegistrationPage
