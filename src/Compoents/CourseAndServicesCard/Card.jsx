import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import "./Card.css"

function Cards(props) {

    
  return (
    <div>
    {props.buttonCount === "1" 

    ?

    <div>
        <Row xs={1} sm={1} md={2} className="g-4">
        {props.services.map((service, pos) => (
            <Col key={pos}>
            <Card className="shadow p-3 mb-5 bg-body-tertiary rounded" style={{width:"300px", height:"400px", marginLeft:"5%"}}>
                <Card.Img variant="top" src={service.image} style={{width:"100%",height:"150px"}} />
                <Card.Body>
                <Card.Title>{service.name}</Card.Title>
                <Card.Text>
                    {service.description}
                </Card.Text>
                </Card.Body>
                <Card.Footer className="text-muted"><Button variant="outline-warning">Book A Free Trial Class</Button></Card.Footer>
            </Card>
            </Col>
        ))}
        </Row>
    </div>
    :
    <div>
        <Row xs={1} sm={1} md={2} className="g-4">
        {props.data.map((course, pos) => (
            <Col key={pos}>
            <Card className="shadow p-3 mb-5 bg-body-tertiary rounded" style={{width:"300px", height:"520px", marginLeft:"5%"}}>
                <div className="ribbon ribbon-top-left"><span>{course.numberOfClasses}</span></div>
                <Card.Img variant="top" src={course.image} style={{width:"100%",height:"150px"}} />
                <Card.Body>
                <Card.Title>{course.name}</Card.Title>
                <h5>
                    {course.include}
                </h5>
                <Card.Text>
                    {course.description}
                </Card.Text>
                <p className="fs-4">
                    ₹ {course.price} /-
                </p>
                </Card.Body>
                
                <Card.Footer className="text-muted">
                    <div>
                        <Button variant="outline-warning">View Details</Button>
                    </div>
                    <div style={{marginTop:"4%"}}>
                        <Button variant="outline-warning">Book A Free Trial Class</Button>
                    </div>
                </Card.Footer>
            </Card>
            </Col>
        ))}
        </Row>
    </div>
    }
      
    </div>
  )
}

export default Cards
