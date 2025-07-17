import {useContext, useState} from 'react';
import { WatchlistContext } from '../context/WatchlistContext';
import {Button, Card, Col, Container, Form, Image, Row} from 'react-bootstrap';
import SupermanImage from '../assets/superman.png';
import SmileImage from '../assets/smile.png';
import theScentImage from '../assets/the scent.png';
import LostCityImage from '../assets/Lostcity.png';
import ThelastOfUseImage from '../assets/The Last Of Us.jpg';
import TheFatasticImage from '../assets/The Fantastic Four.jpg';

const CardMovie = () => {
    const { addToWatchlist } = useContext(WatchlistContext);



    const movies = [
        { title: 'Superman', year:"2025", text:"Superman must reconcile his alien Kryptonian heritage with his human upbringing as reporter Clark Kent. As the embodiment of truth, justice and the human way he soon finds himself in a world that views these as old-fashioned" , image: SupermanImage },
        { title: 'Smile', year:"2022", text:"After witnessing a bizarre, traumatic incident involving a patient, a psychiatrist becomes increasingly convinced she is being threatened by an uncanny entity.", image: SmileImage },
        { title: 'The Scent', year:"2022", text:"Horor", image: theScentImage },
        { title: 'Lost City', year:"2022", text:"A reclusive romance novelist on a book tour with her cover model gets swept up in a kidnapping attempt that lands them both in a cutthroat jungle adventure.", image: LostCityImage },
        { title: 'The Last Of Us', year:"2025", text:"After a global pandemic destroys civilization, a hardened survivor takes charge of a 14-year-old girl who may be humanity's last hope.", image: ThelastOfUseImage },
        { title: 'The Fantastic Four', year:"2025", text:"Forced to balance their roles as heroes with the strength of their family bond, the Fantastic Four must defend Earth from a ravenous space", image: TheFatasticImage },
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
                                    {movie.text}
                                </Card.Text>
                                <Card.Text>{movie.year}</Card.Text>
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