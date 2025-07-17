import { useContext } from 'react';
import { WatchlistContext } from '../context/WatchlistContext';
import { Button, Card, Col, Container, Image, Row } from 'react-bootstrap';
import SupermanImage from '../assets/superman.png';
import SmileImage from '../assets/smile.png';
import theScentImage from '../assets/the scent.png';
import LostCityImage from '../assets/Lostcity.png';
import ThelastOfUseImage from '../assets/The Last Of Us.jpg';
import TheFatasticImage from '../assets/The Fantastic Four.jpg';

const CardMovie = () => {
    const { addToWatchlist } = useContext(WatchlistContext);

    const movies = [
        { title: 'Superman', image: SupermanImage },
        { title: 'Smile', image: SmileImage },
        { title: 'The Scent', image: theScentImage },
        { title: 'Lost City', image: LostCityImage },
        { title: 'The Last Of Us', image: ThelastOfUseImage },
        { title: 'The Fantastic Four', image: TheFatasticImage },
    ];

    return (
        <Container className="my-2 shadow">
            <Row>
                {movies.map((movie, index) => (
                    <Col md={4} className="movieWriper" key={index}>
                        <Card className="text-white text-center movieImage">
                            <Image src={movie.image} alt={`${movie.title} image`} />
                            <div className="bg-dark p-2">
                                <Card.Title>{movie.title}</Card.Title>
                                <Card.Text>
                                    This is a wider card with supporting text below.
                                </Card.Text>
                                <Card.Text>Last updated 3 mins ago</Card.Text>
                                <Button onClick={() => addToWatchlist(movie)}>Watchlist</Button>
                            </div>
                        </Card>
                    </Col>
                ))}
            </Row>
        </Container>
    );
};

export default CardMovie;