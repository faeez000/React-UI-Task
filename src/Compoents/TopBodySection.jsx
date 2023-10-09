import { useState } from 'react';
import  {Link} from 'react-router-dom'
import Carousel from 'react-bootstrap/Carousel';
import ToggleButton from 'react-bootstrap/ToggleButton';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';


function TopBodySection() {
    const [radioValue, setRadioValue] = useState('1');


    const buttonFirstRow = [
        { name: 'Class 1', value: '1' },
        { name: 'Class 2', value: '2' },
        { name: 'Class 3', value: '3' },
        { name: 'Class 4', value: '4' },
        { name: 'Class 5', value: '5' },
        { name: 'Class 6', value: '6' },
      ];
      const imageurl = "https://media.istockphoto.com/id/1215724660/vector/cloud-and-sky-background-in-flat-style-cartoon-blue-cloudy-panorama-cloudscape-decorative.jpg?s=612x612&w=0&k=20&c=NL3UiUiHL4pMnVsLvj2lr3AfZCJPeq_hzWkyNKzYrAw="
  return (
    <div style={{backgroundImage:`url(${imageurl})`, backgroundSize: "100%", }}>
    <Container >
      <Row xs={1} sm={1} md={1} lg={2}>
        <Col>
        <div>
            <h2 className='fs-3'style={{textAlign:"center"}}>Online Education Courses</h2>
            <p className='fs-4 ' style={{textAlign:"center"}}>''For Everyone''</p>
            <div>
                <Card className='shadow p-3 mb-5 bg-body-tertiary rounded' border="light" style={{ width: '100%' }}>
                    <Card.Header><h3>Book your free class now</h3></Card.Header>
                    <Card.Body>
                    <Card.Title>
                        <Row>
                            <Col>   
                                For Kids
                            </Col>
                            <Col>
                             <Form.Check type="switch"/>
                            </Col>
                            <Col>
                                 For Adults (+18)
                            </Col>
                                 
                        </Row>
                        </Card.Title>
                        <Card.Text>
                            Select your child's grade/class in school
                        </Card.Text>
                            <Row xs={2} sm={2} md={6} lg={6}>
                                
                                    {buttonFirstRow.map((button, idx) => (
                                    <Col key={idx}>
                                    <ToggleButton
                                        style={{marginTop:"2%"}}
                                        id={`radio-${idx}`}
                                        type="radio"
                                        variant="outline-warning"
                                        name="radio"
                                        value={button.value}
                                        checked={radioValue === button.value}
                                        onChange={(e) => setRadioValue(e.currentTarget.value)}
                                    >
                                        {button.name}
                                    </ToggleButton>
                                    </Col>
                                    ))}
                                
                            </Row>
                        <div style={{marginTop:"5%"}}>
                        <Link className="btn btn-primary" to='/registration' target='_blank' variant="primary" size="lg">
                            Schedule a Free Class
                        </Link>     
                        </div>
                    </Card.Body>
                </Card>
            </div>
        </div>
        </Col>
        <Col>
            <div style={{marginLeft:"",marginTop:"5%"}} >
                <img 
                className='shadow p-3 mb-5 bg-body-tertiary rounded'
                style={{ width: '20rem', height:"24rem" }}
                src="https://images.unsplash.com/photo-1514466256797-efd55fa1bf4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTI0fHxjaGlsZHJlbiUyMGxlYXJuaW5nfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60"
                alt='childImage'
                />
            </div>
        </Col>
      </Row>
    </Container>
    <Container>
      <Row xs={1} md={1} lg={2}>
        <Col>
            <div>
            <Carousel fade>
                <Carousel.Item>
                    <img src="https://t3.ftcdn.net/jpg/05/04/08/80/360_F_504088006_Ke0ThZ1E7C55OuEowDUjdQ25uPIPMuNj.jpg" alt="First slide" />
                </Carousel.Item>
                <Carousel.Item>
                <img src="https://media.istockphoto.com/id/1359234676/photo/one-caucasian-boy-lying-on-the-floor-at-home-in-day-reading-a-book-front-view-copy-space-real.webp?b=1&s=170667a&w=0&k=20&c=wVaLTeBzsLZLGwvX8A93zSlaAcWJwb3oraHi4Bq0S9I=" alt="Second slide" />
                        </Carousel.Item>
                <Carousel.Item>
                <img src="https://t3.ftcdn.net/jpg/03/09/14/04/360_F_309140415_Yd9Oauk5MM1GPf43KxsfaKpqwiMwzKmN.jpg" alt="Third slide" />
                    
                </Carousel.Item>
            </Carousel>                                
            </div>
        </Col>
        <Col>
            <div style={{marginTop:"3%"}}>
            <Tabs
                defaultActiveKey="Overview"
                id="uncontrolled-tab-example"
                className="mb-3"
                >
                <Tab eventKey="Overview" title="Overview">
                <p className='fs-5'>
                  “THE MEMORY POWER” is an EdTech startup company that equips students with the skillset and mindset required to be the future of the companies worldwide. We connect a deep understanding of education with the power of the “21st CENTURY LIFE SKILLS” to make your child ready to face this competitive and challenging world.
                </p>  
                <p className='fs-5'>
                The universe is a subject created in the minds of humans addressed by the facts and theories since centuries. 
                To think about it in detail requires the strength of knowledge and experience which are used to lead an intellectual life.
                </p>
                </Tab>
                <Tab eventKey="Our Vision" title="Our Vision">
                    <p className='fs-5'>               
                         To help your child enhance the understanding of life based on the core concept of the most powerful tool in the world - “THE MEMORY POWER”.
                    </p>
                    <p className='fs-5'>
                        “Memory Power” is an art of practicing the life skills that will provide your children with the important tools for the development of brain, such as deep thinking, making new friends, 
                        decision making and taking actions in situations where their parents or teachers are not around to help.
                    </p>
                </Tab>
            </Tabs>
            </div>
        </Col>
      </Row>
    </Container>
    </div>
  )
}

export default TopBodySection
