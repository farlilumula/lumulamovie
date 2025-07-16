import Card from 'react-bootstrap/Card';
import "../style/header.css"
import SupermanImage from '../assets/superman.png';
import SmileImage from '../assets/smile.png';
import theScentImage from '../assets/the scent.png';
import LostCityImage from '../assets/Lostcity.png';
import ThelastOfUseImage from '../assets/The Last Of Us.jpg';
import TheFatasticImage from '../assets/The Fantastic Four.jpg';
import {Col, Container, Image, Row} from "react-bootstrap";


const cardMovie = () => {
    return (
        <div>
            <Container className="my-2 shadow">
                <Row>
                    <Col md={4} className="movieWriper">
                        <Card className="text-white text-center movieImage" >
                            <Image src={SupermanImage} alt="Superman image" />
                            <div className="bg-dark">
                                <Card.Title>Superman</Card.Title>
                                <Card.Text>
                                    This is a wider card with supporting text below as a natural lead-in
                                    to additional content. This content is a little bit longer.
                                </Card.Text>
                                <Card.Text>Last updated 3 mins ago</Card.Text>
                            </div>
                        </Card>
                    </Col>
                    <Col md={4} className="movieWriper">
                        <Card className="text-white text-center movieImage" >
                            <Image src={SmileImage} alt="smile image" />
                            <div className="bg-dark">
                                <Card.Title>Smile</Card.Title>
                                <Card.Text>
                                    This is a wider card with supporting text below as a natural lead-in
                                    to additional content. This content is a little bit longer.
                                </Card.Text>
                                <Card.Text>Last updated 3 mins ago</Card.Text>
                            </div>
                        </Card>
                    </Col>
                    <Col md={4} className="movieWriper">
                        <Card className="text-white text-center movieImage" >
                            <Image src={theScentImage} alt="the scent image" />
                            <div className="bg-dark">
                                <Card.Title>The Scent</Card.Title>
                                <Card.Text>
                                    This is a wider card with supporting text below as a natural lead-in
                                    to additional content. This content is a little bit longer.
                                </Card.Text>
                                <Card.Text>Last updated 3 mins ago</Card.Text>
                            </div>
                        </Card>
                    </Col>
                    <Col md={4} className="movieWriper">
                        <Card className="text-white text-center movieImage" >
                            <Image src={LostCityImage} alt="lost city image" />
                            <div className="bg-dark">
                                <Card.Title>Lost City</Card.Title>
                                <Card.Text>
                                    This is a wider card with supporting text below as a natural lead-in
                                    to additional content. This content is a little bit longer.
                                </Card.Text>
                                <Card.Text>Last updated 3 mins ago</Card.Text>
                            </div>
                        </Card>
                    </Col>
                    <Col md={4} className="movieWriper">
                        <Card className="text-white text-center movieImage" >
                            <Image src={ThelastOfUseImage} alt="the last of used image" />
                            <div className="bg-dark">
                                <Card.Title>The Last OF US</Card.Title>
                                <Card.Text>
                                    This is a wider card with supporting text below as a natural lead-in
                                    to additional content. This content is a little bit longer.
                                </Card.Text>
                                <Card.Text>Last updated 3 mins ago</Card.Text>
                            </div>
                        </Card>
                    </Col>
                    <Col md={4} className="movieWriper">
                        <Card className="text-white text-center movieImage" >
                            <Image src={TheFatasticImage} alt="The Fatastic Four Image" />
                            <div className="bg-dark">
                                <Card.Title>The Fantastic Four 2025</Card.Title>
                                <Card.Text>
                                    This is a wider card with supporting text below as a natural lead-in
                                    to additional content. This content is a little bit longer.
                                </Card.Text>
                                <Card.Text>Last updated 3 mins ago</Card.Text>
                            </div>
                        </Card>
                    </Col>
                </Row>
            </Container>

        </div>
    )
}

export default cardMovie;